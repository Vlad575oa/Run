import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Заказ оформлен',
    description: 'Ваш заказ успешно оформлен. Мы свяжемся с вами для подтверждения.',
    path: '/payment/success',
})

export default function PaymentSuccessPage() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center min-h-[70vh] bg-background-light px-4">
            <div className="max-w-md text-center">
                <div className="size-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
                </div>
                <h1 className="text-3xl font-bold text-[#171511] mb-4">Заказ оформлен!</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Спасибо за покупку! Мы свяжемся с вами в ближайшее время для подтверждения заказа.
                </p>
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all"
                >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Вернуться в магазин
                </Link>
            </div>
        </main>
    )
}
