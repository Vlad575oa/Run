import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/seo'

import { SITE_CONFIG } from '@/lib/constants'
import { BlurFade } from '@/components/ui/BlurFade'
import { TextReveal } from '@/components/ui/TextReveal'

export const metadata: Metadata = generatePageMetadata({
    title: 'Наши города',
    description: 'Выберите город, чтобы увидеть расписание пробежек и мероприятий. КофеРан вечеринка в Симферополе и Ялте.',
    path: '/cities',
})

export default function CitiesPage() {
    return (
        <div className="flex flex-1 flex-col items-center bg-background-light text-[#171511] transition-colors duration-300 w-full">
            <div className="layout-content-container flex flex-col max-w-[1440px] w-full flex-1 px-4 md:px-10 py-8">
                {/* Hero Section */}
                <div className="@container w-full mb-8">
                    <div className="@[480px]:p-0">
                        <div
                            className="flex min-h-[250px] md:min-h-[300px] flex-col gap-6 bg-gray-900 rounded-xl items-center justify-center p-6 text-center shadow-xl overflow-hidden relative"
                        >
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHCAXJ7NRVXR5CFIUnT07u_ISAbmvRzSMDBfrG8An9U16cUeOoIQpS6dpzYB9-YaemvYqUzFLLKRexaceaoiQrT_On1tLi1AnTfRd4xXIIbjZCmNIqrlbydX-uaQNtIO0uAvWUFF4BnVMOznKXdOP5Cfr-6RAcZ0fiHg72gogcyNOUL2enj0hW-TDUHIu-J_J2T-AjOI3T6XF2wqiak1DGgUxx2KO-wp_uRzye7m9329BG_OoQysvOCBBDHz_bnlxKUPT2qWrY7h40"
                                alt="Наши города"
                                fill
                                className="object-cover opacity-60"
                                priority
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-black/40" />

                            <div className="flex flex-col gap-3 max-w-[600px] z-10">
                                <TextReveal
                                    text="Начни свое утро с нами"
                                    className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] justify-center"
                                />
                                <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed">
                                    Найди свое беговое сообщество в своем городе и присоединяйся к нашей большой и теплой кофейной семье.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-end gap-3 p-4 mb-4">
                    <div className="flex min-w-72 flex-col gap-2">
                        <h2 className="text-[#171511] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Наши города</h2>
                        <p className="text-[#877664] text-base font-normal">Выберите город, чтобы увидеть расписание пробежек и мероприятий.</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined">location_on</span>
                        <span>2 активных города</span>
                    </div>
                </div>

                {/* City Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {/* City Card: Simferopol */}
                    <BlurFade delay={0.2}>
                        <a
                            href={SITE_CONFIG.socials.simferopol.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col gap-4 pb-6 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5e1dc] cursor-pointer"
                        >
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPXy-m77N0i8GKvByTKFTUFgfKd9OjKqlf9Mfx9XHPYa8xcrxA4OkeURlAzCFYUgCpXVi-QQeCuvdwlRlCsg8DtBKzCWM4Ydbd_8dbkee_a6JtcEh8DSNgRTovHqJuWxB6uPNPgyur8x19YgX7OsYSCFmqMZozvIVFzwwHJkDZ4i2JLdeXJYjzQrvJM881_Ym9HY2tqH7ZjjE2ygTJY7VcAd_CdpNYjqArqXi3fiyhuCLlX6aQThqJ8KlBwm7DGltGwJda8VfyzZqC")`
                                    }}
                                >
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPXy-m77N0i8GKvByTKFTUFgfKd9OjKqlf9Mfx9XHPYa8xcrxA4OkeURlAzCFYUgCpXVi-QQeCuvdwlRlCsg8DtBKzCWM4Ydbd_8dbkee_a6JtcEh8DSNgRTovHqJuWxB6uPNPgyur8x19YgX7OsYSCFmqMZozvIVFzwwHJkDZ4i2JLdeXJYjzQrvJM881_Ym9HY2tqH7ZjjE2ygTJY7VcAd_CdpNYjqArqXi3fiyhuCLlX6aQThqJ8KlBwm7DGltGwJda8VfyzZqC"
                                        alt="Симферополь"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Популярно</div>
                            </div>
                            <div className="px-5 flex flex-col flex-1">
                                <h3 className="text-[#171511] text-xl font-bold mb-2">Симферополь</h3>
                                <p className="text-[#877664] text-sm font-normal leading-relaxed mb-4 flex-1">
                                    Столица бега и кофе. Утренние маршруты по тенистым паркам и уютные финиши в лучших кофейнях центра.
                                </p>

                            </div>
                        </a>
                    </BlurFade>

                    {/* City Card: Yalta */}
                    <BlurFade delay={0.3}>
                        <a
                            href={SITE_CONFIG.socials.yalta.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col gap-4 pb-6 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5e1dc] cursor-pointer"
                        >
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5b9iatLtR6zYfN7lUjxZVIQcfKuFE_y330svSzsB-fiCWt8_FQtbJ03k0RyilmgZcNEn8-EnusqBPjEaX-5ACLIaMMdka6lCjjP7GZsIKrWQbTvAvdtuIjqaN8t_bxoULZewfEoScsKvz-r1febmozyUJbsAkE0sMSrXBJ3QpHg7ShnarWeYSeIt5JHg_pA1qvVRPpXhNVc7fIIB7yfcYlwtG7Dnq5Rn_hZdEzDEI_NBKiadcKfjd7qCIRoVIjaaQlYtVpCg9huWa")`
                                    }}
                                >
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5b9iatLtR6zYfN7lUjxZVIQcfKuFE_y330svSzsB-fiCWt8_FQtbJ03k0RyilmgZcNEn8-EnusqBPjEaX-5ACLIaMMdka6lCjjP7GZsIKrWQbTvAvdtuIjqaN8t_bxoULZewfEoScsKvz-r1febmozyUJbsAkE0sMSrXBJ3QpHg7ShnarWeYSeIt5JHg_pA1qvVRPpXhNVc7fIIB7yfcYlwtG7Dnq5Rn_hZdEzDEI_NBKiadcKfjd7qCIRoVIjaaQlYtVpCg9huWa"
                                        alt="Ялта"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                            <div className="px-5 flex flex-col flex-1">
                                <h3 className="text-[#171511] text-xl font-bold mb-2">Ялта</h3>
                                <p className="text-[#877664] text-sm font-normal leading-relaxed mb-4 flex-1">
                                    Бег с вдохновляющим видом на море. Горный воздух и бодрящий эспрессо после пробежки по набережной.
                                </p>

                            </div>
                        </a>
                    </BlurFade>

                    {/* City Card: Future */}
                    <BlurFade delay={0.4}>
                        <div className="group flex flex-col gap-4 pb-6 bg-[#f4f2f0] rounded-xl overflow-hidden border-2 border-dashed border-[#e5e1dc] opacity-80 hover:opacity-100 transition-opacity">
                            <div className="relative w-full aspect-[16/10] flex items-center justify-center bg-primary/10 overflow-hidden">
                                <Image
                                    src="/images/globe-static.png"
                                    alt="World Map"
                                    fill
                                    className="object-cover opacity-50"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="px-5 flex flex-col flex-1 text-center">
                                <h3 className="text-[#171511] text-xl font-bold mb-2">Скоро новые города</h3>
                                <p className="text-[#877664] text-sm font-normal leading-relaxed mb-4 flex-1">
                                    Мы постоянно растем! Напишите нам, если хотите открыть филиал КофеРан вечеринка в своем городе.
                                </p>
                                <Link
                                    href="/contacts"
                                    className="flex w-full cursor-pointer items-center justify-center rounded-full h-11 px-4 bg-[#877664]/20 text-[#171511] text-sm font-bold hover:bg-[#877664]/30 transition-colors"
                                >
                                    <span>Связаться с нами</span>
                                </Link>
                            </div>
                        </div>
                    </BlurFade>
                </div>

                {/* Action Panel / CTA */}
                <div className="p-4 mt-8 w-full">
                    <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8 md:flex-row md:items-center">
                        <div className="flex flex-col gap-2">
                            <p className="text-[#171511] text-xl font-bold leading-tight">Не нашли свой город в списке?</p>
                            <p className="text-[#877664] text-base font-normal max-w-[600px]">
                                Станьте амбассадором КофеРан вечеринка и организуйте уютные утренние пробежки в своем регионе. Мы поможем с айдентикой и сообществом!
                            </p>
                        </div>
                        <Link
                            href="/contacts"
                            className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary text-white text-base font-bold transition-all hover:scale-105 shadow-md"
                        >
                            <span className="truncate">Стать организатором</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
