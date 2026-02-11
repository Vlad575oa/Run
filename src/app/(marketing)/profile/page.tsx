import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Профиль участника: Алексей Иванов',
    description: 'Прогресс, достижения и история забегов.',
    path: '/profile',
})

export default function ProfilePage() {
    return (
        <div className="flex flex-1 flex-col items-center bg-[#f6f8f8] text-[#111817] transition-colors duration-300 w-full font-display">
            <div className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-8">
                {/* Profile Header Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#13ecc8]/5 mb-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                        <div className="relative">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-[#13ecc8]/20" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpezJKSWmbtPSvWg6YptstJFCyTKyUwofrzO4lCNUoenSKSprZJZL_awjp1sr_Y3F0_lCxjCiej-Qc3hkXIalf23zwLNhENpWwFMkM2lnatQLpJgc5IMtrh4Ss_4_QoeZhuKWApRdzHPOiKnwsh5vxOfsGVUwKlN_Xqobm_Bm9J6qPzPJqMgupqm6q9UhJU2jtNg1sLJU3lAmeSgEcmuI5RzaqRYLh-ZSgbvYDSe0zjTVGcM78gTCdR1Q-EWdblouYodw3LtmlHKg5")` }} />
                            <div className="absolute bottom-0 right-0 bg-[#13ecc8] p-1.5 rounded-full ring-4 ring-white">
                                <span className="material-symbols-outlined text-white text-xs">verified</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center flex-1">
                            <h1 className="text-[#111817] text-3xl font-bold leading-tight">Алексей Иванов</h1>
                            <p className="text-[#618983] text-base mt-2 max-w-lg">Фанат кофе и утренних пробежек. Всегда в погоне за новым личным рекордом и лучшим эспрессо в городе. ☕️🏃‍♂️</p>
                            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f6f8f8] rounded-full text-xs font-medium text-[#618983]">
                                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                                    В клубе с мая 2023
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f6f8f8] rounded-full text-xs font-medium text-[#618983]">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    Санкт-Петербург
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 min-w-[200px]">
                            <button className="flex items-center justify-center gap-2 rounded-full h-11 px-6 bg-[#13ecc8] text-[#10221f] font-bold text-sm transition-transform hover:scale-105">
                                <span className="material-symbols-outlined text-lg">edit</span>
                                Редактировать
                            </button>
                            <div className="flex justify-center gap-2">
                                <div className="p-2 bg-[#13ecc8]/10 rounded-full text-[#13ecc8]" title="Первый забег">
                                    <span className="material-symbols-outlined">workspace_premium</span>
                                </div>
                                <div className="p-2 bg-[#13ecc8]/10 rounded-full text-[#13ecc8]" title="Личный рекорд">
                                    <span className="material-symbols-outlined">trending_up</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Stats & Progress */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Personal Bests Dashboard */}
                        <section>
                            <h3 className="text-[#111817] text-[22px] font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#13ecc8]">emoji_events</span>
                                Личные рекорды
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-xl border border-[#13ecc8]/10 shadow-sm flex items-center gap-4 group hover:border-[#13ecc8] transition-colors">
                                    <div className="size-12 rounded-full bg-[#13ecc8]/20 flex items-center justify-center text-[#13ecc8] group-hover:bg-[#13ecc8] group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">timer</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-[#111817]">22:45</h4>
                                        <p className="text-sm text-[#618983]">Лучшее время 5 км</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#13ecc8]/10 shadow-sm flex items-center gap-4 group hover:border-[#13ecc8] transition-colors">
                                    <div className="size-12 rounded-full bg-[#13ecc8]/20 flex items-center justify-center text-[#13ecc8] group-hover:bg-[#13ecc8] group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">pace</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-[#111817]">48:12</h4>
                                        <p className="text-sm text-[#618983]">Лучшее время 10 км</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Progress Chart */}
                        <section className="bg-white p-6 rounded-xl border border-[#13ecc8]/10 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-[#111817] text-[22px] font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#13ecc8]">show_chart</span>
                                    Прогресс
                                </h3>
                                <select className="bg-[#f6f8f8] border-none rounded-full text-xs font-semibold px-4 py-1.5 focus:ring-1 focus:ring-[#13ecc8]">
                                    <option>Последние 6 месяцев</option>
                                    <option>За все время</option>
                                </select>
                            </div>
                            <div className="relative h-64 w-full rounded-lg border-b-2 border-l-2 border-[#13ecc8]/10 flex items-end px-4 gap-2"
                                style={{ background: 'linear-gradient(180deg, rgba(19, 236, 200, 0.2) 0%, rgba(19, 236, 200, 0) 100%)' }}>
                                {/* Mockup Line Chart Representation */}
                                <div className="flex-1 flex flex-col items-center justify-end group">
                                    <div className="w-full bg-[#13ecc8]/20 rounded-t-sm h-1/4 group-hover:bg-[#13ecc8] transition-all"></div>
                                    <span className="text-[10px] text-[#618983] mt-2">Янв</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-end group">
                                    <div className="w-full bg-[#13ecc8]/30 rounded-t-sm h-2/5 group-hover:bg-[#13ecc8] transition-all"></div>
                                    <span className="text-[10px] text-[#618983] mt-2">Фев</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-end group">
                                    <div className="w-full bg-[#13ecc8]/40 rounded-t-sm h-1/2 group-hover:bg-[#13ecc8] transition-all"></div>
                                    <span className="text-[10px] text-[#618983] mt-2">Мар</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-end group">
                                    <div className="w-full bg-[#13ecc8]/60 rounded-t-sm h-3/5 group-hover:bg-[#13ecc8] transition-all"></div>
                                    <span className="text-[10px] text-[#618983] mt-2">Апр</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-end group">
                                    <div className="w-full bg-[#13ecc8]/80 rounded-t-sm h-4/5 group-hover:bg-[#13ecc8] transition-all"></div>
                                    <span className="text-[10px] text-[#618983] mt-2">Май</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-end group">
                                    <div className="w-full bg-[#13ecc8] rounded-t-sm h-full group-hover:scale-y-105 transition-all"></div>
                                    <span className="text-[10px] text-[#618983] mt-2">Июн</span>
                                </div>
                                {/* Absolute Line Overlay (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none px-4 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path className="opacity-40" d="M 0 80 Q 20 70, 40 60 T 80 20 T 100 0" fill="none" stroke="#13ecc8" strokeWidth="2"></path>
                                </svg>
                            </div>
                        </section>
                        {/* Past Results Grid */}
                        <section>
                            <h3 className="text-[#111817] text-[22px] font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#13ecc8]">history</span>
                                История забегов
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left bg-white rounded-xl overflow-hidden shadow-sm border border-[#13ecc8]/5">
                                    <thead className="bg-[#f0f4f4] text-[#618983] text-xs uppercase font-bold tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">Дата</th>
                                            <th className="px-6 py-4">Забег</th>
                                            <th className="px-6 py-4">Дистанция</th>
                                            <th className="px-6 py-4">Время</th>
                                            <th className="px-6 py-4">Статус</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#f0f4f4] text-sm">
                                        <tr className="hover:bg-[#f6f8f8] transition-colors">
                                            <td className="px-6 py-4 font-medium">12 Июня</td>
                                            <td className="px-6 py-4">Summer Coffee Run</td>
                                            <td className="px-6 py-4 text-[#13ecc8] font-bold">5 км</td>
                                            <td className="px-6 py-4">22:45</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#13ecc8]/20 text-[#13ecc8]">
                                                    Личный рекорд
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#f6f8f8] transition-colors">
                                            <td className="px-6 py-4 font-medium">28 Мая</td>
                                            <td className="px-6 py-4">Morning Espresso Dash</td>
                                            <td className="px-6 py-4 text-[#13ecc8] font-bold">10 км</td>
                                            <td className="px-6 py-4">48:12</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500">
                                                    Завершено
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#f6f8f8] transition-colors">
                                            <td className="px-6 py-4 font-medium">15 Мая</td>
                                            <td className="px-6 py-4">Park Loop Challenge</td>
                                            <td className="px-6 py-4 text-[#13ecc8] font-bold">5 км</td>
                                            <td className="px-6 py-4">24:10</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500">
                                                    Завершено
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                    {/* Right Column: Badges & Community */}
                    <div className="space-y-8">
                        {/* Achievement Badges */}
                        <section className="bg-white p-6 rounded-xl border border-[#13ecc8]/10 shadow-sm">
                            <h3 className="text-[#111817] text-lg font-bold mb-6 flex items-center justify-between">
                                <span>Достижения</span>
                                <span className="text-xs text-[#13ecc8] cursor-pointer hover:underline">Все</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center p-4 bg-[#f6f8f8] rounded-lg text-center gap-2">
                                    <div className="size-16 rounded-full bg-[#13ecc8]/10 border-2 border-[#13ecc8] flex items-center justify-center text-[#13ecc8]">
                                        <span className="material-symbols-outlined text-3xl">directions_run</span>
                                    </div>
                                    <span className="text-xs font-bold">Первый забег</span>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-[#f6f8f8] rounded-lg text-center gap-2">
                                    <div className="size-16 rounded-full bg-[#13ecc8]/10 border-2 border-[#13ecc8] flex items-center justify-center text-[#13ecc8]">
                                        <span className="material-symbols-outlined text-3xl">star</span>
                                    </div>
                                    <span className="text-xs font-bold">Личный рекорд</span>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-[#f6f8f8] rounded-lg text-center gap-2 grayscale opacity-50">
                                    <div className="size-16 rounded-full bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-400">
                                        <span className="material-symbols-outlined text-3xl">coffee_maker</span>
                                    </div>
                                    <span className="text-xs font-bold">Кофе-мастер</span>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-[#f6f8f8] rounded-lg text-center gap-2 grayscale opacity-50">
                                    <div className="size-16 rounded-full bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-400">
                                        <span className="material-symbols-outlined text-3xl">groups</span>
                                    </div>
                                    <span className="text-xs font-bold">Лидер команды</span>
                                </div>
                            </div>
                        </section>
                        {/* Next Run Card */}
                        <section className="bg-[#13ecc8] p-6 rounded-xl text-[#10221f] relative overflow-hidden group">
                            <div className="absolute -right-8 -bottom-8 opacity-20 transition-transform group-hover:scale-110">
                                <span className="material-symbols-outlined text-[120px]">calendar_month</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Следующий старт</h3>
                            <p className="text-sm font-medium mb-4">Cappuccino Morning Run</p>
                            <div className="flex items-center gap-2 text-xs font-bold bg-[#10221f]/10 p-2 rounded-lg inline-block">
                                <span className="material-symbols-outlined text-sm">event</span>
                                24 Июня, 08:30
                            </div>
                            <button className="mt-6 w-full py-2 bg-[#10221f] text-white rounded-full text-sm font-bold hover:bg-opacity-90 transition-all">
                                Детали забега
                            </button>
                        </section>
                        {/* Quick Stats */}
                        <section className="bg-white p-6 rounded-xl border border-[#13ecc8]/10 shadow-sm">
                            <h3 className="text-[#111817] text-lg font-bold mb-4">Статистика сезона</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-[#618983]">Всего пробежал:</span>
                                    <span className="font-bold">124 км</span>
                                </div>
                                <div className="w-full bg-[#f0f4f4] h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#13ecc8] h-full w-[65%]"></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-[#618983]">Чашек кофе выпито:</span>
                                    <span className="font-bold">48</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-[#618983]">Место в рейтинге:</span>
                                    <span className="font-bold text-[#13ecc8]">#14</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
