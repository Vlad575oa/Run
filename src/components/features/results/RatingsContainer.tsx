'use client'

import React, { useState, useMemo } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { RatingAthlete } from '@/entities'

interface RatingsContainerProps {
    initialAthletes: RatingAthlete[]
}

export function RatingsContainer({ initialAthletes }: RatingsContainerProps) {
    const [activeDistance, setActiveDistance] = useState('5 км')
    const [activeAgeCategory, setActiveAgeCategory] = useState('all')

    // Find all unique distances from athletes' best times
    const distances = useMemo(() => {
        const set = new Set<string>()
        initialAthletes.forEach(a => Object.keys(a.bestTimes).forEach(d => set.add(d)))

        const commonOrder = ['5 км', '10 км', '21 км', '21.1 км', '42 км', '42.2 км']
        return Array.from(set).sort((a, b) => {
            const idxA = commonOrder.indexOf(a)
            const idxB = commonOrder.indexOf(b)
            if (idxA !== -1 && idxB !== -1) return idxA - idxB
            return a.localeCompare(b)
        })
    }, [initialAthletes])

    // Set default distance if 5 км doesn't exist
    React.useEffect(() => {
        if (distances.length > 0 && !distances.includes(activeDistance)) {
            setActiveDistance(distances[0])
        }
    }, [distances, activeDistance])

    const filteredAthletes = useMemo(() => {
        return initialAthletes
            .filter(a => a.bestTimes[activeDistance])
            .filter(a => activeAgeCategory === 'all' || a.ageCategory === activeAgeCategory)
            .sort((a, b) => {
                const timeA = a.bestTimes[activeDistance]
                const timeB = b.bestTimes[activeDistance]
                return timeA.localeCompare(timeB)
            })
    }, [initialAthletes, activeDistance, activeAgeCategory])

    const top3 = filteredAthletes.slice(0, 3)

    return (
        <div className="flex flex-col w-full">
            {/* Tabs & Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-[#dbe6df] overflow-hidden mb-8">
                <div className="pb-3 px-4 pt-4">
                    <div className="flex border-b border-[#dbe6df] gap-8 overflow-x-auto scrollbar-hide">
                        {distances.map(distance => (
                            <button
                                key={distance}
                                onClick={() => setActiveDistance(distance)}
                                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 px-2 transition-all ${activeDistance === distance
                                    ? 'border-[#13ec5b] text-[#111813]'
                                    : 'border-transparent text-[#61896f] hover:text-[#111813]'
                                    }`}
                            >
                                <p className="text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap">{distance}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex gap-3 p-4 flex-wrap">
                    <button
                        onClick={() => setActiveAgeCategory('all')}
                        className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-3 transition-colors ${activeAgeCategory === 'all'
                            ? 'bg-[#13ec5b]/20 border border-[#13ec5b]/30 text-[#111813]'
                            : 'bg-[#fdfaf2] border border-[#dbe6df] text-[#61896f] hover:bg-[#e8f5ed]'
                            }`}
                    >
                        <p className="text-sm font-semibold">Все возрасты</p>
                    </button>
                    {['18-29', '30-39', '40+'].map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveAgeCategory(category)}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-3 transition-colors ${activeAgeCategory === category
                                ? 'bg-[#13ec5b]/20 border border-[#13ec5b]/30 text-[#111813]'
                                : 'bg-[#fdfaf2] border border-[#dbe6df] text-[#61896f] hover:bg-[#e8f5ed]'
                                }`}
                        >
                            <p className="text-sm font-medium">{category}</p>
                        </button>
                    ))}
                    <div className="ml-auto flex items-center gap-2 text-[#61896f] text-sm">
                        <span className="material-symbols-outlined text-lg">event</span>
                        <span>Сезон: Весна/Лето 2024</span>
                    </div>
                </div>
            </div>

            {/* Podium */}
            {top3.length > 0 ? (
                <>
                    <h2 className="text-[#111813] text-[24px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-center md:text-left">Тройка лидеров ({activeDistance})</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-2 relative items-end">
                        {/* Rank 2 */}
                        <div className="order-2 md:order-1 flex flex-col items-center bg-white p-6 rounded-2xl border-b-4 border-[#c0c0c0] shadow-sm relative overflow-hidden group min-h-[220px] justify-center">
                            {top3[1] ? (
                                <>
                                    <div className="absolute top-2 right-2 text-[#c0c0c0] font-black text-4xl opacity-20">#2</div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mb-4 border-4 border-[#c0c0c0]/30" style={{ backgroundImage: `url("${top3[1].avatar}")` }} />
                                    <h3 className="text-lg font-bold text-[#111813] text-center">{top3[1].name}</h3>
                                    <p className="text-[#61896f] text-sm mb-4">Категория {top3[1].ageCategory}</p>
                                    <div className="bg-[#e8f5ed] px-4 py-2 rounded-full flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#13ec5b] text-lg">timer</span>
                                        <span className="font-bold text-[#111813]">{top3[1].bestTimes[activeDistance]}</span>
                                    </div>
                                </>
                            ) : (
                                <div className="text-[#61896f] text-sm italic opacity-50">Место свободно</div>
                            )}
                        </div>
                        {/* Rank 1 */}
                        <div className="order-1 md:order-2 flex flex-col items-center bg-white p-8 rounded-2xl border-b-4 border-[#13ec5b] shadow-lg relative overflow-hidden scale-105 group z-10 min-h-[260px] justify-center">
                            <div className="absolute top-2 right-2 text-[#13ec5b] font-black text-5xl opacity-20">#1</div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#13ec5b]"></div>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-28 mb-4 border-4 border-[#13ec5b]" style={{ backgroundImage: `url("${top3[0].avatar}")` }} />
                            <h3 className="text-xl font-black text-[#111813] text-center">{top3[0].name}</h3>
                            <p className="text-[#61896f] text-sm mb-4">Категория {top3[0].ageCategory}</p>
                            <div className="bg-[#13ec5b] px-6 py-3 rounded-full flex items-center gap-2 shadow-md">
                                <span className="material-symbols-outlined text-[#111813] text-xl font-bold">timer</span>
                                <span className="font-black text-[#111813] text-lg">{top3[0].bestTimes[activeDistance]}</span>
                            </div>
                        </div>
                        {/* Rank 3 */}
                        <div className="order-3 md:order-3 flex flex-col items-center bg-white p-6 rounded-2xl border-b-4 border-[#cd7f32] shadow-sm relative overflow-hidden group min-h-[220px] justify-center">
                            {top3[2] ? (
                                <>
                                    <div className="absolute top-2 right-2 text-[#cd7f32] font-black text-4xl opacity-20">#3</div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mb-4 border-4 border-[#cd7f32]/30" style={{ backgroundImage: `url("${top3[2].avatar}")` }} />
                                    <h3 className="text-lg font-bold text-[#111813] text-center">{top3[2].name}</h3>
                                    <p className="text-[#61896f] text-sm mb-4">Категория {top3[2].ageCategory}</p>
                                    <div className="bg-[#e8f5ed] px-4 py-2 rounded-full flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#13ec5b] text-lg">timer</span>
                                        <span className="font-bold text-[#111813]">{top3[2].bestTimes[activeDistance]}</span>
                                    </div>
                                </>
                            ) : (
                                <div className="text-[#61896f] text-sm italic opacity-50">Место свободно</div>
                            )}
                        </div>
                    </div>
                </>
            ) : null}

            {/* List Table */}
            <div className="bg-white rounded-xl shadow-sm border border-[#dbe6df] overflow-hidden mb-12">
                <div className="px-6 py-4 border-b border-[#dbe6df] flex justify-between items-center">
                    <h3 className="font-bold text-[#111813]">Все участники</h3>
                    <div className="text-sm text-[#61896f]">Показано {filteredAthletes.length}</div>
                </div>
                <div className="flex flex-col overflow-x-auto">
                    <div className="flex items-center px-6 py-3 bg-[#f0f4f2] text-[#61896f] text-xs font-bold uppercase tracking-wider min-w-[600px]">
                        <div className="w-12 text-center shrink-0">№</div>
                        <div className="flex-1 ml-4 min-w-[200px]">Атлет</div>
                        <div className="w-32 text-center shrink-0 hidden sm:block">Категория</div>
                        <div className="w-32 text-right shrink-0">Лучшее время</div>
                    </div>
                    <div className="divide-y divide-[#f0f4f2] min-w-[600px]">
                        <AnimatePresence mode="popLayout">
                            {filteredAthletes.map((athlete, index) => (
                                <m.div
                                    key={athlete.name}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center px-6 py-4 hover:bg-[#e8f5ed] transition-colors group"
                                >
                                    <div className={`w-12 text-center font-bold shrink-0 ${index < 3 ? 'text-[#13ec5b]' : 'text-[#61896f]'}`}>{index + 1}</div>
                                    <div className="flex-1 ml-4 flex items-center gap-3 min-w-[200px]">
                                        <div className="w-10 h-10 rounded-full bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${athlete.avatar}")` }} />
                                        <div>
                                            <div className="font-bold text-[#111813] leading-tight">{athlete.name}</div>
                                            <div className="text-[10px] text-[#61896f] font-medium uppercase tracking-wider">Забегов: {athlete.resultsCount}</div>
                                        </div>
                                    </div>
                                    <div className="w-32 text-center text-sm text-[#61896f] shrink-0 hidden sm:block font-medium">{athlete.ageCategory}</div>
                                    <div className="w-32 text-right font-black text-[#111813] shrink-0 tabular-nums">{athlete.bestTimes[activeDistance]}</div>
                                </m.div>
                            ))}
                        </AnimatePresence>
                        {filteredAthletes.length === 0 && (
                            <div className="py-20 text-center opacity-40">
                                <span className="material-symbols-outlined text-6xl">search_off</span>
                                <p className="text-lg font-bold">Нет результатов для этой категории</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
