'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { m, AnimatePresence } from 'motion/react'
import { Result } from '@/entities'

interface ResultsContainerProps {
    initialResults: Result[]
}

export function ResultsContainer({ initialResults }: ResultsContainerProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [distanceFilter, setDistanceFilter] = useState<string>('all')
    const [cityFilter, setCityFilter] = useState<string>('all')
    const [showOnlyPB, setShowOnlyPB] = useState(false)
    const [visibleCount, setVisibleCount] = useState(10)

    // Extract unique distances and cities for filters
    const distances = useMemo(() => {
        const set = new Set(initialResults.map(r => r.distance))
        return Array.from(set).sort()
    }, [initialResults])

    const cities = useMemo(() => {
        const set = new Set(initialResults.map(r => r.city || 'Симферополь'))
        return Array.from(set).sort()
    }, [initialResults])

    const filteredResults = useMemo(() => {
        return initialResults.filter(result => {
            const searchLower = searchQuery.toLowerCase()
            const matchesSearch =
                result.name.toLowerCase().includes(searchLower) ||
                result.event.toLowerCase().includes(searchLower) ||
                result.distance.toLowerCase().includes(searchLower) ||
                result.city?.toLowerCase().includes(searchLower)

            const matchesDistance = distanceFilter === 'all' || result.distance === distanceFilter
            const matchesCity = cityFilter === 'all' || (result.city || 'Симферополь') === cityFilter
            const matchesPB = !showOnlyPB || result.is_pb

            return matchesSearch && matchesDistance && matchesCity && matchesPB
        })
    }, [initialResults, searchQuery, distanceFilter, cityFilter, showOnlyPB])

    const isFiltered = searchQuery !== '' || distanceFilter !== 'all' || cityFilter !== 'all' || showOnlyPB

    const resetFilters = () => {
        setSearchQuery('')
        setDistanceFilter('all')
        setCityFilter('all')
        setShowOnlyPB(false)
        setVisibleCount(10)
    }

    const paginatedResults = filteredResults.slice(0, visibleCount)

    return (
        <div className="flex flex-col w-full">
            {/* Search & Filter Controls */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-[#e5e1dc]">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                        <label className="flex flex-col h-12 w-full">
                            <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-[#e5e1dc] bg-[#f4f2f0]">
                                <div className="text-[#877664] flex items-center justify-center pl-4 rounded-l-full">
                                    <span className="material-symbols-outlined">person_search</span>
                                </div>
                                <input
                                    className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-none focus:ring-0 text-[#171511] px-4 text-sm sm:text-base placeholder:text-[#877664]"
                                    placeholder="Поиск атлета или события"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <select
                            className="flex h-12 shrink-0 items-center justify-center rounded-full bg-[#f4f2f0] px-4 text-sm font-medium text-[#171511] border-none focus:ring-primary/20 cursor-pointer appearance-none"
                            value={distanceFilter}
                            onChange={(e) => setDistanceFilter(e.target.value)}
                        >
                            <option value="all">Дистанция: Все</option>
                            {distances.map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>

                        <select
                            className="flex h-12 shrink-0 items-center justify-center rounded-full bg-[#f4f2f0] px-4 text-sm font-medium text-[#171511] border-none focus:ring-primary/20 cursor-pointer appearance-none"
                            value={cityFilter}
                            onChange={(e) => setCityFilter(e.target.value)}
                        >
                            <option value="all">Город: Все</option>
                            {cities.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>

                        <button
                            onClick={() => setShowOnlyPB(!showOnlyPB)}
                            className={`flex h-12 items-center justify-center gap-x-2 rounded-full px-5 border transition-all ${showOnlyPB
                                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                                : 'bg-primary/10 text-primary border-primary/30 hover:bg-primary/20'
                                }`}
                        >
                            <span className="material-symbols-outlined text-lg">star</span>
                            <p className="text-sm font-bold">Личные рекорды</p>
                        </button>

                        {isFiltered && (
                            <button
                                onClick={resetFilters}
                                className="flex h-12 items-center justify-center gap-x-2 rounded-full px-5 bg-[#f4f2f0] text-[#877664] hover:text-[#171511] hover:bg-[#e5e1dc] transition-all"
                                title="Сбросить фильтры"
                            >
                                <span className="material-symbols-outlined text-lg">filter_alt_off</span>
                                <span className="text-sm font-bold">Сбросить</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto bg-white rounded-2xl border border-[#e5e1dc] shadow-sm">
                <table className="w-full border-collapse text-left min-w-[800px]">
                    <thead>
                        <tr className="border-b border-[#f4f2f0] text-[#877664] uppercase text-[10px] sm:text-xs font-bold tracking-widest">
                            <th className="px-6 py-5">Имя</th>
                            <th className="px-6 py-5 text-center">Дистанция</th>
                            <th className="px-6 py-5">Время</th>
                            <th className="px-6 py-5">Темп</th>
                            <th className="px-6 py-5">Дата</th>
                            <th className="px-6 py-5">Событие</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f4f2f0]">
                        <AnimatePresence mode="popLayout">
                            {paginatedResults.map((result) => (
                                <m.tr
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    key={result.id}
                                    className={`hover:bg-primary/5 transition-colors group ${result.is_pb ? 'bg-primary/[0.02]' : ''
                                        }`}
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-full bg-cover bg-center shrink-0 border-2 border-transparent group-hover:border-primary/20 transition-colors"
                                                style={{ backgroundImage: `url("${result.avatar}")` }}
                                            />
                                            <div>
                                                <p className="font-bold text-[#171511] leading-tight">{result.name}</p>
                                                {result.is_pb && (
                                                    <span className="inline-flex items-center gap-1 text-[9px] font-black bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase mt-1">Личный рекорд</span>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-3 py-1 rounded-full bg-[#f4f2f0] text-[12px] font-bold text-[#877664]">
                                            {result.distance}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className={`font-black text-lg tracking-tight ${result.is_pb ? 'text-primary' : 'text-[#171511]'}`}>
                                            {result.time}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-xs text-[#877664]">
                                        {result.pace} <span className="font-normal opacity-60">мин/км</span>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-medium text-[#877664]">
                                        {result.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-bold text-[#171511] group-hover:text-primary transition-colors cursor-default">
                                            {result.event}
                                        </p>
                                        <p className="text-[10px] text-[#877664] font-medium opacity-60">{result.city || 'Симферополь'}</p>
                                    </td>
                                </m.tr>
                            ))}
                        </AnimatePresence>
                        {filteredResults.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-20 text-center">
                                    <div className="flex flex-col items-center gap-3 opacity-40">
                                        <span className="material-symbols-outlined text-6xl">search_off</span>
                                        <p className="text-lg font-bold">Ничего не найдено</p>
                                        <p className="text-sm">Попробуйте изменить параметры поиска или фильтры</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination / CTA */}
            {visibleCount < filteredResults.length && (
                <div className="mt-8 flex flex-col items-center gap-4">
                    <button
                        onClick={() => setVisibleCount(prev => prev + 10)}
                        className="flex items-center justify-center gap-2 rounded-full h-12 px-10 bg-white border border-[#e5e1dc] text-[#171511] font-bold hover:bg-[#f4f2f0] hover:border-primary/20 transition-all shadow-sm active:scale-95"
                    >
                        Показать больше результатов
                    </button>
                    <p className="text-[#877664] text-xs font-medium">
                        Показано {Math.min(visibleCount, filteredResults.length)} из {filteredResults.length} результатов
                    </p>
                </div>
            )}
        </div>
    )
}
