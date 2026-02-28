import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Ошибка оплаты',
    description: 'К сожалению, оплата не прошла. Попробуйте ещё раз.',
    path: '/payment/fail',
})

export default function PaymentFailPage() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center min-h-[70vh] bg-background-light px-4">
            <div className="max-w-md text-center">
                <div className="size-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-5xl text-red-500">error</span>
                </div>
                <h1 className="text-3xl font-bold text-[#171511] mb-4">Оплата не прошла</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    К сожалению, произошла ошибка при оплате. Попробуйте ещё раз или свяжитесь с нами.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/shop"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all"
                    >
                        Попробовать снова
                    </Link>
                    <a
                        href="https://t.me/coffeerunparty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-[#171511] rounded-full font-bold hover:bg-gray-200 transition-all"
                    >
                        Написать в Telegram
                    </a>
                </div>
            </div>
        </main>
    )
}
