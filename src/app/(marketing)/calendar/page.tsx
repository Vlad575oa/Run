import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Календарь забегов',
    description: 'Присоединяйтесь к нам каждый вторник на легкую пробежку и каждую субботу на наш знаменитый КофеРан вечеринка.',
    path: '/calendar',
})

interface CalendarEvent {
    id: string
    dayOfWeek: string
    day: string
    month: string
    city: string
    type: 'tuesday' | 'saturday'
    title: string
    time: string
    location: string
    distances: string[]
    description: string
}

const mockEvents: CalendarEvent[] = [
    {
        id: '1',
        dayOfWeek: 'Вторник',
        day: '3',
        month: 'Фев',
        city: 'Симферополь',
        type: 'tuesday',
        title: 'Регулярная пробежка',
        time: '18:30',
        location: 'Гагаринский парк',
        distances: ['5км', '10км'],
        description: '"Легкая пробежка для всех"',
    },
    {
        id: '2',
        dayOfWeek: 'Суббота',
        day: '7',
        month: 'Фев',
        city: 'Ялта',
        type: 'saturday',
        title: 'КофеРан вечеринка',
        time: '08:00',
        location: 'Набережная',
        distances: ['5км'],
        description: '"Можно первый раз"',
    },
    {
        id: '3',
        dayOfWeek: 'Вторник',
        day: '10',
        month: 'Фев',
        city: 'Ялта',
        type: 'tuesday',
        title: 'Регулярная пробежка',
        time: '18:30',
        location: 'Массандровский парк',
        distances: ['5км', '10км'],
        description: '"Комфортный темп"',
    },
    {
        id: '4',
        dayOfWeek: 'Суббота',
        day: '14',
        month: 'Фев',
        city: 'Симферополь',
        type: 'saturday',
        title: 'КофеРан вечеринка',
        time: '08:00',
        location: 'Ботанический сад',
        distances: ['5км', '10км'],
        description: '"Потом кофе и общение"',
    },
    {
        id: '5',
        dayOfWeek: 'Вторник',
        day: '17',
        month: 'Фев',
        city: 'Симферополь',
        type: 'tuesday',
        title: 'Регулярная пробежка',
        time: '18:30',
        location: 'Парк Салгирка',
        distances: ['5км'],
        description: '"Легкая пробежка для всех"',
    },
    {
        id: '6',
        dayOfWeek: 'Суббота',
        day: '21',
        month: 'Фев',
        city: 'Ялта',
        type: 'saturday',
        title: 'КофеРан вечеринка',
        time: '08:00',
        location: 'Ливадийский дворец',
        distances: ['5км', '10км'],
        description: '"Можно первый раз"',
    },
    {
        id: '7',
        dayOfWeek: 'Вторник',
        day: '24',
        month: 'Фев',
        city: 'Ялта',
        type: 'tuesday',
        title: 'Регулярная пробежка',
        time: '18:30',
        location: 'Городская набережная',
        distances: ['5км'],
        description: '"Комфортный темп"',
    },
    {
        id: '8',
        dayOfWeek: 'Суббота',
        day: '28',
        month: 'Фев',
        city: 'Симферополь',
        type: 'saturday',
        title: 'КофеРан вечеринка',
        time: '08:00',
        location: 'Кофейня "The Coffee Factory"',
        distances: ['5км', '10км'],
        description: '"Потом кофе и общение"',
    },
]

export default function CalendarPage() {
    return (
        <div className="flex-1 flex justify-center py-8 px-4 md:px-10 lg:px-20">
            <div className="flex flex-col max-w-[1400px] w-full gap-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                Расписание: Февраль 2026
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-[#171511]">
                            Календарь забегов
                        </h1>
                        <p className="text-[#877664] text-lg font-normal max-w-xl">
                            Присоединяйтесь к нам каждый вторник на легкую пробежку и каждую субботу на наш знаменитый КофеРан вечеринка.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 items-center">
                        {/* City Filter */}
                        <div className="relative group z-10">
                            <button className="flex h-12 items-center justify-between gap-x-4 rounded-full bg-white border border-gray-200 pl-5 pr-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary transition-all">
                                <div className="flex flex-col items-start gap-0.5">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Город</span>
                                    <span className="text-sm font-bold text-[#171511]">Все города</span>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">expand_more</span>
                            </button>
                            <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-20 overflow-hidden">
                                <div className="p-1">
                                    <a className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg text-primary" href="#">Все города</a>
                                    <a className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg" href="#">Симферополь</a>
                                    <a className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg" href="#">Ялта</a>
                                </div>
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div className="relative group z-10">
                            <button className="flex h-12 items-center justify-between gap-x-4 rounded-full bg-white border border-gray-200 pl-5 pr-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary transition-all">
                                <div className="flex flex-col items-start gap-0.5">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Тип забега</span>
                                    <span className="text-sm font-bold text-[#171511]">Все события</span>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">expand_more</span>
                            </button>
                            <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-20 overflow-hidden">
                                <div className="p-1">
                                    <a className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg text-primary" href="#">Все события</a>
                                    <a className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg" href="#">Вторник</a>
                                    <a className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg" href="#">КофеРан вечеринка</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mockEvents.map((event) => (
                        <article
                            key={event.id}
                            className={`group relative flex flex-col justify-between h-full bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300 ${event.type === 'tuesday' ? 'hover:border-teal-500/30' : 'hover:border-primary/30'
                                }`}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${event.type === 'tuesday' ? 'text-teal-600' : 'text-primary'
                                            }`}>
                                            {event.dayOfWeek}
                                        </p>
                                        <h3 className="text-2xl font-black text-[#171511] flex items-baseline gap-1">
                                            {event.day} <span className="text-lg font-bold text-gray-400">{event.month}</span>
                                        </h3>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-600 border border-gray-200">
                                        {event.city}
                                    </span>
                                </div>

                                <div className="mb-5">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ring-1 ring-inset ${event.type === 'tuesday'
                                        ? 'bg-teal-50 text-teal-700 ring-teal-600/20'
                                        : 'bg-orange-50 text-primary-dark ring-primary/20'
                                        }`}>
                                        <span className="material-symbols-outlined !text-[16px]">
                                            {event.type === 'tuesday' ? 'directions_run' : 'local_cafe'}
                                        </span>
                                        {event.title}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-5">
                                    <div className="flex items-center gap-3 text-sm text-[#171511]">
                                        <div className="size-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                            <span className="material-symbols-outlined !text-[18px]">schedule</span>
                                        </div>
                                        <span className="font-bold">{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#171511]">
                                        <div className="size-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                            <span className="material-symbols-outlined !text-[18px]">location_on</span>
                                        </div>
                                        <span className="font-medium truncate">{event.location}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 mb-5">
                                    {event.distances.map((dist, idx) => (
                                        <span key={idx} className="px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-[11px] font-bold text-gray-500">
                                            {dist}
                                        </span>
                                    ))}
                                </div>

                                <p className={`text-sm font-medium italic mb-6 ${event.type === 'tuesday' ? 'text-teal-600/80' : 'text-primary/80'
                                    }`}>
                                    {event.description}
                                </p>
                            </div>

                            <button className={`w-full flex items-center justify-center gap-2 text-white rounded-full py-3 px-4 text-sm font-bold transition-colors shadow-sm hover:shadow-md ${event.type === 'tuesday' ? 'bg-teal-accent hover:bg-teal-dark' : 'bg-primary hover:bg-primary-dark'
                                }`}>
                                <span>Хочу на пробежку</span>
                                <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
