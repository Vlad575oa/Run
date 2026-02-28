import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/seo'
import { MapFacade } from '@/components/ui/MapFacade'
import { SITE_CONFIG } from '@/lib/constants'

import { JoinCTA } from '@/components/sections/JoinCTA'
import { BlurFade } from '@/components/ui/BlurFade'

export const metadata: Metadata = generatePageMetadata({
    title: 'КофеРан — беговое сообщество',
    description: 'Самый дружелюбный беговой клуб. Никаких требований к темпу, только хорошее настроение и вкусный кофе.',
    path: '/',
})

export default function HomePage() {
    return (
        <div className="flex flex-col items-center bg-background-light font-display text-text-main w-full">
            {/* Hero Section */}
            <div className="flex justify-center py-5 lg:py-10 px-4 w-full">
                <div className="flex flex-col max-w-[1440px] flex-1 w-full">
                    <div className="@container">
                        <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row-reverse items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/Hero_1.webp"
                                        alt="Happy runners group"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        priority
                                        fetchPriority="high"
                                        quality={75}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10">
                                <div className="flex flex-col gap-4 text-left">
                                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-sand-beige px-3 py-1 text-xs font-bold uppercase tracking-wide text-text-muted">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        Дружелюбно и социально
                                    </div>
                                    <h1 className="text-text-main text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                                        КофеРан — беговое сообщество для всех
                                    </h1>
                                    <p className="text-text-muted text-lg font-normal leading-relaxed">
                                        Самый дружелюбный беговой клуб. Никаких требований к темпу,
                                        только хорошее настроение и вкусный кофе.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={SITE_CONFIG.telegram.mainGroup}
                                        target="_blank"
                                        className="flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-text-main text-base font-bold shadow-md hover:bg-[#d67e25] transition-colors"
                                    >
                                        <span className="truncate">Хочу на пробежку</span>
                                    </Link>
                                    <Link
                                        href="/cities"
                                        className="flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-[#e5e1dc] text-text-main text-base font-bold hover:bg-sand-beige transition-colors"
                                    >
                                        <span className="truncate">Города</span>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="flex -space-x-3">
                                        <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                            <Image src="/images/avatar_1.webp" alt="Runner" fill className="object-cover" sizes="40px" loading="lazy" />
                                        </div>
                                        <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                            <Image src="/images/avatar_2.webp" alt="Runner" fill className="object-cover" sizes="40px" loading="lazy" />
                                        </div>
                                        <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                            <Image src="/images/avatar_3.webp" alt="Runner" fill className="object-cover" sizes="40px" loading="lazy" />
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-text-muted">
                                        С нами уже 500+ бегунов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Run Formats */}
            <div className="flex justify-center py-10 px-4 bg-sand-beige/30 w-full">
                <div className="flex flex-col max-w-[1440px] flex-1 w-full gap-8">
                    <BlurFade delay={0.2} className="flex flex-col items-center text-center gap-3">
                        <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight">
                            Выбери свой формат
                        </h2>
                        <p className="text-text-muted text-base max-w-lg">
                            Хотите регулярности или просто пообщаться? У нас есть пробежка для вас.
                        </p>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Tuesday */}
                        <BlurFade delay={0.3} className="group relative overflow-hidden rounded-xl bg-white p-1 transition-all hover:shadow-xl border border-teal-100 hover:border-teal-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="relative flex flex-col h-full rounded-lg overflow-hidden">
                                <div className="relative h-96 w-full">
                                    <Image
                                        src="/images/Hero_2.webp"
                                        alt="Regular run"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={75}
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wide shadow-sm z-10">
                                        Вторник • 19:00
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 px-5 pt-2 pb-4">
                                    <h3 className="text-2xl font-bold text-text-main group-hover:text-teal-600 transition-colors">
                                        Регулярная пробежка
                                    </h3>
                                    <p className="text-text-muted text-base">
                                        Поддерживайте регулярность тренировок. Спокойные 5 км в
                                        разговорном темпе.
                                    </p>
                                </div>

                            </div>
                        </BlurFade>

                        {/* Saturday */}
                        <BlurFade delay={0.4} className="group relative overflow-hidden rounded-xl bg-white p-1 transition-all hover:shadow-xl border border-orange-100 hover:border-primary">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="relative flex flex-col h-full rounded-lg overflow-hidden">
                                <div className="relative h-96 w-full">
                                    <Image
                                        src="/images/Hero_3.webp"
                                        alt="КофеРан"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={75}
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-text-main px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm z-10">
                                        Суббота • 9:00
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 px-5 pt-2 pb-4">
                                    <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                                        КофеРан вечеринка
                                    </h3>
                                    <p className="text-text-muted text-base">
                                        Главное событие. Социальная пробежка 5-10 км, а затем
                                        завтрак в местном кафе. Только оранжевая энергия.
                                    </p>
                                </div>

                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="flex justify-center py-16 px-4 w-full">
                <BlurFade delay={0.2} className="flex flex-col max-w-[1440px] flex-1 w-full gap-12">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h2 className="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-tight">
                            Почему бегать с нами классно?
                        </h2>
                        <p className="text-text-main text-lg font-normal leading-relaxed">
                            Не нужно быть атлетом. Мы бегаем ради удовольствия, а не рекордов. Наше
                            сообщество построено на поддержке.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-1 flex-row items-start gap-4 rounded-lg border border-[#e5e1dc] bg-white p-6 hover:border-primary/50 transition-colors shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sand-beige flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-2xl">pace</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-text-main text-xl font-bold leading-tight">
                                    Бежим в комфортном темпе
                                </h3>
                                <p className="text-text-muted text-base leading-relaxed">
                                    У нас правило: «никто не бежит в одиночку». Наши замыкающие следят
                                    за тем, чтобы все финишировали вместе.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-row items-start gap-4 rounded-lg border border-[#e5e1dc] bg-white p-6 hover:border-primary/50 transition-colors shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sand-beige flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-2xl">group_add</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-text-main text-xl font-bold leading-tight">
                                    Новичок?
                                </h3>
                                <p className="text-text-muted text-base leading-relaxed">
                                    Мы сразу познакомим вас с командой. Убедимся, что уже через 5 минут
                                    вам будет с кем пообщаться.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-row items-start gap-4 rounded-lg border border-[#e5e1dc] bg-white p-6 hover:border-primary/50 transition-colors shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sand-beige flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-2xl">local_cafe</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-text-main text-xl font-bold leading-tight">
                                    После бега — кофе и общение
                                </h3>
                                <p className="text-text-muted text-base leading-relaxed">
                                    Это тоже отлично! Социальная часть так же важна, как и километры.
                                    Приходите на пробежку, оставайтесь на капучино.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-row items-start gap-4 rounded-lg border border-[#e5e1dc] bg-white p-6 hover:border-primary/50 transition-colors shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sand-beige flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-2xl">confirmation_number</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-text-main text-xl font-bold leading-tight">
                                    Условия участия
                                </h3>
                                <p className="text-text-muted text-base leading-relaxed">
                                    По будням бег бесплатно. В субботу вступительный взнос 300-500 рублей.
                                    В стоимость включен напиток (кофе/чай) и участие в лекции.
                                </p>
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>

            {/* Our Cities */}
            <div className="flex justify-center py-10 px-4 mb-10 w-full">
                <BlurFade delay={0.2} className="flex flex-col max-w-[1440px] flex-1 w-full gap-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight">
                            Наши города
                        </h2>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Simferopol Map */}
                        <a
                            href="https://yandex.ru/maps/?ll=34.098795%2C44.963093&z=17&pt=34.098795,44.963093,pm2rdm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden rounded-xl h-80 group cursor-pointer block border-2 border-primary/30 hover:border-primary transition-colors"
                        >
                            <MapFacade
                                src="https://yandex.ru/map-widget/v1/?ll=34.098795%2C44.963093&z=17&pt=34.098795%2C44.963093%2Cpm2rdm"
                                title="Карта Симферополь"
                                className="pointer-events-none"
                                imageSrc="/images/maps/simferopol.png"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/90 transition-colors pointer-events-none" />
                            <div className="absolute bottom-6 left-6 flex flex-col gap-1 text-white pointer-events-none">
                                <h3 className="text-3xl font-black tracking-tight uppercase">Симферополь</h3>
                                <p className="text-white/90 text-sm font-bold">
                                    Три грации • Парк Гагарина • каждый вторник и субботу
                                </p>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1.5 text-xs font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                                Открыть на карте →
                            </div>
                        </a>

                        {/* Yalta Map */}
                        <a
                            href="https://yandex.ru/maps/?ll=34.1663%2C44.4952&z=15&pt=34.1663,44.4952,pm2rdm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden rounded-xl h-80 group cursor-pointer block border-2 border-teal-300/30 hover:border-teal-400 transition-colors"
                        >
                            <MapFacade
                                src="https://yandex.ru/map-widget/v1/?ll=34.1663%2C44.4952&z=14&pt=34.1663%2C44.4952%2Cpm2rdm"
                                title="Карта Ялта"
                                className="pointer-events-none"
                                imageSrc="/images/maps/yalta.png"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/90 transition-colors pointer-events-none" />
                            <div className="absolute bottom-6 left-6 flex flex-col gap-1 text-white pointer-events-none">
                                <h3 className="text-3xl font-black tracking-tight uppercase">Ялта</h3>
                                <p className="text-white/90 text-sm font-bold">
                                    Набережная • Суббота
                                </p>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1.5 text-xs font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                                Открыть на карте →
                            </div>
                        </a>
                    </div>
                </BlurFade>
            </div>



            {/* Join CTA */}
            <JoinCTA />


        </div>
    )
}

