import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Бег в Крыму: марафоны и забеги 2026',
    description: 'Календарь событий КофеРан вечеринка: еженедельные пробежки, марафоны Крыма, фестивали и забеги 2026 Крым. Присоединяйся к нам!',
    path: '/events',
    noIndex: true,
})

export default function EventsPage() {
    return (
        <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1440px] flex-1 px-4 md:px-10">
                {/* Hero Section */}
                <div className="@container">
                    <div className="flex flex-col gap-6 py-6 md:py-10 @[864px]:flex-row items-center">
                        <div className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-xl shadow-xl"
                            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCwNzxPWJBrjECqcSLopStuzR5Asdm60bcNniGQ_5xyhjyyM3oCy4DJXhbxaaxSSmW2hZ45_JjQdWSSxLgJHXNdzruaDYD6HjLZZY029GSaaNL1rIT8sfy0RPYr-zOmY3KdVzioqQhLqn2hgamUt2CZsMfOavyq7p4SBFfmPrkchlwJUKeuetMo7vegiw08vP4qMXpNKepCEzxAVaKw5cOpHlYjWyTz58u0Dq4An8BTiRkqexB8jtO96yTC_j2jPFNAPILRWAyVhhc")` }}>
                        </div>
                        <div className="flex flex-col gap-6 w-full @[864px]:justify-center @[864px]:w-1/2">
                            <div className="flex flex-col gap-3 text-left">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">Ближайшие события</span>
                                <h1 className="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                                    Яркие события и праздники бега
                                </h1>
                                <h2 className="text-[#897661] text-base md:text-lg font-normal leading-relaxed">
                                    Присоединяйтесь к самому энергичному беговому сообществу. Каждую субботу мы создаем праздник: бег, музыка и лучший кофе в городе.
                                </h2>
                            </div>
                            <Link href="https://t.me/coffeerunparty" className="flex w-full sm:w-fit min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 @[480px]:h-14 px-8 bg-primary text-white text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                                <span className="truncate">Хочу на пробежку</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Filter / Sub-Nav */}
                <div className="flex gap-3 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                    <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">Все события</button>
                    <button className="bg-white border border-primary/20 px-6 py-2 rounded-full text-sm font-medium hover:border-primary transition-colors whitespace-nowrap">Saturday Coffee Run</button>
                    <button className="bg-white border border-primary/20 px-6 py-2 rounded-full text-sm font-medium hover:border-primary transition-colors whitespace-nowrap">Марафоны</button>
                    <button className="bg-white border border-primary/20 px-6 py-2 rounded-full text-sm font-medium hover:border-primary transition-colors whitespace-nowrap">Вечеринки</button>
                </div>

                {/* Main Event Feature */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-text-main text-xl md:text-2xl font-bold leading-tight tracking-tight">Главное событие недели</h2>
                        <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline whitespace-nowrap" href="#">
                            Смотреть все <span className="hidden sm:inline"><span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </a>
                    </div>
                    <div className="@container">
                        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-center shadow-2xl bg-white border border-primary/5 overflow-hidden group">
                            <div className="w-full @xl:w-1/2 bg-center bg-no-repeat aspect-video bg-cover overflow-hidden"
                                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpijMVr3F9sWZU4pYpWeF59wSLT7kcDL27Jk5MMrJC8PWYoEHMTM_kBuLlyA9TL39vZ7_cSQz9rXBYr0H8Cxm48zIBDJm2dXC7o9c1afM1RqpWM2CoejbXyTu0FLpviFwijEMYOZm_H5eL4Y9Q7ux28WXKP4mm4twIo5NUc_edz2muEULlPz3T4e2CX7f252vtsbH-xZqPZlCxNpZyJMc1EOJG_io0bxSpjjDcoIZpHyHiE8WF_K-uRBfKTgWYWYpJIG4wMBhbPq2o")` }}>
                                <div className="w-full h-full bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                            </div>
                            <div className="flex w-full grow flex-col items-stretch justify-center gap-4 py-6 px-4 md:py-8 @xl:px-10">
                                <div className="flex items-center gap-2">
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">Еженедельно</span>
                                    <span className="text-[#897661] text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">timer</span> 9:00 AM</span>
                                </div>
                                <h3 className="text-text-main text-2xl md:text-3xl font-bold leading-tight tracking-tight">Saturday КофеРан вечеринка</h3>
                                <div className="flex flex-col gap-3 md:gap-4">
                                    <div className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                                        <p className="text-[#897661] text-sm md:text-base font-normal">Парк Горького, Главный вход • Москва</p>
                                    </div>
                                    <p className="text-[#897661] text-sm md:text-base font-normal leading-relaxed">
                                        Уникальный микс бега под DJ-сеты и аромат свежесваренного кофе. Идеальный способ начать выходные правильно.
                                    </p>
                                    <div className="flex items-center gap-4 mt-2">
                                        <div className="flex -space-x-3">
                                            <div className="size-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">🏃‍♂️</div>
                                            <div className="size-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">🏃‍♀️</div>
                                            <div className="size-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">☕</div>
                                            <div className="size-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">+500</div>
                                        </div>
                                        <span className="text-xs text-[#897661] font-medium">уже бегут с нами в Крыму</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                        <button className="flex w-full sm:flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold hover:shadow-lg transition-all">
                                            Участвовать
                                        </button>
                                        <button className="flex w-full sm:w-auto h-12 aspect-square items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors">
                                            <span className="material-symbols-outlined">share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Future Events Grid */}
                <div className="mt-12 mb-10">
                    <div className="flex flex-col gap-2 mb-6">
                        <h2 className="text-text-main text-xl md:text-[22px] font-bold leading-tight tracking-tight">Забеги и марафоны Крыма 2026</h2>
                        <p className="text-[#897661] text-sm">Главные старты сезона, в которых мы участвуем всей командой</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Event Card 1 */}
                        <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-primary/5 group">
                            <div className="relative h-48 w-full">
                                <div className="absolute top-4 left-4 z-10 bg-white rounded-lg p-2 text-center shadow-md min-w-[50px]">
                                    <p className="text-primary font-bold text-lg leading-none">12</p>
                                    <p className="text-[10px] uppercase font-bold text-[#897661]">АПР</p>
                                </div>
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url("/images/Hero_1.webp")` }}></div>
                            </div>
                            <div className="p-5 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-primary tracking-wider uppercase">Марафон</span>
                                    <span className="text-xs font-medium text-[#897661]">42.2 км / 21.1 км</span>
                                </div>
                                <h4 className="text-lg font-bold">Ялтинский марафон 2026</h4>
                                <p className="text-sm text-[#897661] line-clamp-2">Легендарный забег по Южному берегу Крыма. Перепады высот, морской бриз и невероятная поддержка.</p>
                                <button className="mt-4 w-full h-10 rounded-full border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">Подробнее</button>
                            </div>
                        </div>
                        {/* Event Card 2 */}
                        <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-primary/5 group">
                            <div className="relative h-48 w-full">
                                <div className="absolute top-4 left-4 z-10 bg-white rounded-lg p-2 text-center shadow-md min-w-[50px]">
                                    <p className="text-primary font-bold text-lg leading-none">24</p>
                                    <p className="text-[10px] uppercase font-bold text-[#897661]">МАЙ</p>
                                </div>
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url("/images/Hero_2.webp")` }}></div>
                            </div>
                            <div className="p-5 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-primary tracking-wider uppercase">Трейл</span>
                                    <span className="text-xs font-medium text-[#897661]">15 км / 30 км</span>
                                </div>
                                <h4 className="text-lg font-bold">Crimea Trail Run 2026</h4>
                                <p className="text-sm text-[#897661] line-clamp-2">Забег по пересеченной местности в окрестностях Симферополя. Испытай себя на прочность.</p>
                                <button className="mt-4 w-full h-10 rounded-full border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">Подробнее</button>
                            </div>
                        </div>
                        {/* Event Card 3 */}
                        <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-primary/5 group">
                            <div className="relative h-48 w-full">
                                <div className="absolute top-4 left-4 z-10 bg-white rounded-lg p-2 text-center shadow-md min-w-[50px]">
                                    <p className="text-primary font-bold text-lg leading-none">05</p>
                                    <p className="text-[10px] uppercase font-bold text-[#897661]">СЕН</p>
                                </div>
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url("/images/Hero_3.webp")` }}></div>
                            </div>
                            <div className="p-5 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-primary tracking-wider uppercase">Полумарафон</span>
                                    <span className="text-xs font-medium text-[#897661]">21.1 км</span>
                                </div>
                                <h4 className="text-lg font-bold">Симферопольский полумарафон</h4>
                                <p className="text-sm text-[#897661] line-clamp-2">Забег по центральным улицам столицы Крыма. Быстрая трасса и отличная возможность обновить личник.</p>
                                <button className="mt-4 w-full h-10 rounded-full border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter / CTA */}
                <div className="my-10">
                    <div className="bg-primary/10 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20">
                        <div className="flex flex-col gap-3 text-center md:text-left">
                            <h2 className="text-2xl font-bold">Будь в курсе всех вечеринок</h2>
                            <p className="text-[#897661] max-w-md text-sm md:text-base">Подпишись на нашу рассылку, чтобы первым узнавать о новых маршрутах, диджеях и секретных локациях КофеРан вечеринка.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                            <input className="w-full sm:min-w-[280px] h-12 rounded-full px-6 border-none ring-1 ring-primary/20 focus:ring-primary outline-none text-sm bg-white" placeholder="Ваш email" type="email" />
                            <button className="w-full sm:w-auto h-12 px-8 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-md">Подписаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
