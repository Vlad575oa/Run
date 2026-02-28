interface OrderNotification {
    orderNumber: string
    customerName: string
    phone: string
    email: string
    deliveryType: 'PICKUP' | 'DELIVERY'
    address?: string | null
    comment?: string | null
    totalAmount: number // в копейках
    items: {
        name: string
        size: string
        quantity: number
        price: number
    }[]
}

function formatOrder(order: OrderNotification): string {
    const delivery = order.deliveryType === 'PICKUP'
        ? '🏃 Самовывоз на пробежке'
        : `📦 Доставка: ${order.address || 'не указан'}`

    const items = order.items
        .map(i => `  • ${i.name} (${i.size}) × ${i.quantity} — ${(i.price * i.quantity / 100).toLocaleString('ru-RU')} ₽`)
        .join('\n')

    return [
        `🛒 Новый заказ #${order.orderNumber}`,
        ``,
        `👤 ${order.customerName}`,
        `📱 ${order.phone}`,
        `📧 ${order.email}`,
        ``,
        `📋 Товары:`,
        items,
        ``,
        `💰 Итого: ${(order.totalAmount / 100).toLocaleString('ru-RU')} ₽`,
        `${delivery}`,
        order.comment ? `💬 Комментарий: ${order.comment}` : '',
    ].filter(Boolean).join('\n')
}

export async function sendTelegramNotification(order: OrderNotification): Promise<boolean> {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
        console.warn('[Telegram] Bot token or chat ID not configured, skipping notification')
        return false
    }

    try {
        const text = formatOrder(order)
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'HTML',
            }),
        })

        if (!res.ok) {
            const error = await res.text()
            console.error('[Telegram] Failed to send:', error)
            return false
        }

        console.log('[Telegram] Notification sent for order', order.orderNumber)
        return true
    } catch (error) {
        console.error('[Telegram] Error:', error)
        return false
    }
}

export async function sendEmailNotification(order: OrderNotification): Promise<boolean> {
    const email = process.env.NOTIFICATION_EMAIL
    if (!email) {
        console.warn('[Email] Notification email not configured, skipping')
        return false
    }

    try {
        // Используем динамический импорт nodemailer чтобы не ломать клиентский бандл
        const nodemailer = await import('nodemailer')

        // --- НАСТРОЙКА ДЛЯ MAIL.RU (ПРОДАКШН) ---
        /*
        const transporter = nodemailer.createTransport({
          host: 'smtp.mail.ru',
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: 'vlad575@mail.ru',
            pass: 'ВАШ_ПАРОЛЬ_ПРИЛОЖЕНИЯ', // Пароль приложения, а не от почты!
          },
        })
        */

        // --- ТЕСТОВЫЙ АККАУНТ (ETHEREAL) ---
        // Бесплатный сервис для тестирования (Ethereal)
        // В продакшене заменить на реальный SMTP (Beget, Mail.ru, etc.)
        const testAccount = await nodemailer.createTestAccount()

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        })
        // ----------------------------------

        const text = formatOrder(order)

        const info = await transporter.sendMail({
            from: `"КофеРан Магазин" <shop@run82.ru>`,
            to: email,
            subject: `🛒 Новый заказ #${order.orderNumber}`,
            text,
        })

        const previewUrl = nodemailer.getTestMessageUrl(info)
        console.log('[Email] Preview URL:', previewUrl)
        console.log('[Email] Notification sent for order', order.orderNumber)
        return true
    } catch (error) {
        console.error('[Email] Error:', error)
        return false
    }
}

export async function notifyNewOrder(order: OrderNotification): Promise<void> {
    await Promise.allSettled([
        sendTelegramNotification(order),
        sendEmailNotification(order),
    ])
}
