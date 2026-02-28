import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { notifyNewOrder } from '@/lib/notifications'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const { customerName, phone, email, deliveryType, address, comment, items } = body

        // Валидация
        if (!customerName || !phone || !email || !items?.length) {
            return NextResponse.json(
                { error: 'Заполните все обязательные поля' },
                { status: 400 }
            )
        }

        if (deliveryType === 'DELIVERY' && !address) {
            return NextResponse.json(
                { error: 'Укажите адрес доставки' },
                { status: 400 }
            )
        }

        // Генерируем номер заказа
        const orderNumber = `CRP-${Date.now().toString(36).toUpperCase()}`

        // Считаем общую сумму
        const totalAmount = items.reduce(
            (sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity,
            0
        )

        // Создаём заказ в БД
        const order = await prisma.order.create({
            data: {
                orderNumber,
                customerName,
                phone,
                email,
                deliveryType,
                address: address || null,
                comment: comment || null,
                totalAmount,
                items: {
                    create: items.map((item: { productId: number; size: string; quantity: number; price: number }) => ({
                        productId: item.productId,
                        size: item.size,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
            },
            include: {
                items: {
                    include: { product: true },
                },
            },
        })

        // Отправляем уведомления (не блокируем ответ)
        notifyNewOrder({
            orderNumber: order.orderNumber,
            customerName: order.customerName,
            phone: order.phone,
            email: order.email,
            deliveryType: order.deliveryType,
            address: order.address,
            comment: order.comment,
            totalAmount: order.totalAmount,
            items: order.items.map((i: { product: { name: string }; size: string; quantity: number; price: number }) => ({
                name: i.product.name,
                size: i.size,
                quantity: i.quantity,
                price: i.price,
            })),
        }).catch(console.error)

        // TODO: Когда будет Робокасса — генерировать ссылку на оплату
        // Пока возвращаем success сразу
        return NextResponse.json({
            success: true,
            orderNumber: order.orderNumber,
            orderId: order.id,
            // paymentUrl: robokassaUrl, // будет позже
        })
    } catch (error) {
        console.error('[Orders API] Error:', error)
        return NextResponse.json(
            { error: 'Ошибка при создании заказа' },
            { status: 500 }
        )
    }
}
