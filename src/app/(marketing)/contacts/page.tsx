import Link from 'next/link'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { VideoIcon } from '@/components/ui/VideoIcon'
import { TextReveal } from '@/components/ui/TextReveal'

export const metadata: Metadata = generatePageMetadata({
    title: 'Контакты',
    description: 'Свяжитесь с КофеРан вечеринка: социальные сети, форма обратной связи и ответы на частые вопросы.',
    path: '/contacts',
})

export default function ContactsPage() {
    return (
        <div className="flex-1 flex justify-center py-8 px-4 md:px-6 lg:px-10">
            <div className="flex flex-col max-w-[1440px] w-full gap-8">
                {/* Hero Section */}
                <div className="@container">
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-center">
                        <div className="flex flex-col gap-6 flex-1 w-full lg:py-4 text-center lg:text-left">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <TextReveal
                                        text="Связаться с нами"
                                        className="text-text-main text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]"
                                    />
                                    <TextReveal
                                        text="и друзьями ☕️👋"
                                        className="text-text-main text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]"
                                        delay={0.3}
                                    />
                                </div>
                                <h2 className="text-text-muted text-base sm:text-lg font-normal leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                                    У нас самое дружелюбное беговое комьюнити. Ищете компанию для пробежки, хотите стать партнером или просто поболтать? Мы всегда на связи!
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link href="https://t.me/coffeerunparty" className="group relative flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center">
                        <div className="size-16 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <VideoIcon src="/Logo_1.mp4" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-[#2AABEE] transition-colors">Симферополь</h3>
                            <p className="text-text-muted text-sm">Telegram канал</p>
                        </div>
                        <span className="absolute top-4 right-4 bg-primary text-text-main text-xs font-bold px-2 py-1 rounded-full">Priority</span>
                    </Link>

                    <Link href="https://t.me/elizavetaa0911" className="group flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center">
                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-primary text-[32px]">person_add</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Регистрация</h3>
                            <p className="text-text-muted text-sm">Симферополь: @elizavetaa0911</p>
                        </div>
                    </Link>

                    <Link href="https://t.me/coffeerunyalta" className="group flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-[#2AABEE]/20 hover:shadow-lg transition-all duration-300 text-center">
                        <div className="size-16 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <VideoIcon src="/Logo_2.mp4" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-[#2AABEE] transition-colors">Ялта</h3>
                            <p className="text-text-muted text-sm">@coffeerunyalta</p>
                        </div>
                    </Link>

                    <Link href="https://t.me/VictoriaPuhova" className="group flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center">
                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-primary text-[32px]">person_add</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Регистрация</h3>
                            <p className="text-text-muted text-sm">Ялта: @VictoriaPuhova</p>
                        </div>
                    </Link>
                </div>

                {/* Second Social Grid Row (VK) */}
                <div className="flex justify-center">
                    <Link href="https://vk.ru/coffeerunparty" className="group max-w-sm w-full flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-blue-600/20 hover:shadow-lg transition-all duration-300 text-center">
                        <div className="size-16 rounded-full bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-blue-600 text-[32px]">group</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">Симферополь</h3>
                            <p className="text-text-muted text-sm">ВКонтакте</p>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
    )
}
