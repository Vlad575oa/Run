import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { fetchRaceResults, calculateResultsStats } from '@/lib/results'
import { ResultsContainer } from '@/components/features/results/ResultsContainer'
import { TextReveal } from '@/components/ui/TextReveal'
import { BlurFade } from '@/components/ui/BlurFade'

export const metadata: Metadata = generatePageMetadata({
    title: 'Результаты забегов',
    description: 'Результаты забегов КофеРан вечеринка. Празднуйте свои достижения вместе с сообществом.',
    path: '/results',
})

export default async function ResultsPage() {
    const results = await fetchRaceResults()
    const stats = calculateResultsStats(results)

    return (
        <div className="flex flex-1 flex-col items-center bg-background-light text-[#171511] w-full">
            <div className="layout-content-container flex flex-col max-w-[1440px] w-full flex-1 px-4 md:px-10 py-8">
                {/* Page Heading Section */}
                <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <TextReveal
                            text="Результаты забегов"
                            className="text-[#171511] text-4xl font-black leading-tight tracking-tight items-start md:items-start justify-start md:justify-start"
                        />
                        <p className="text-[#877664] text-lg font-normal">Празднуйте свои достижения вместе с сообществом</p>
                    </div>
                    <Link href="/community-ratings" className="flex items-center gap-2 rounded-full h-12 px-6 bg-[#f4f2f0] text-[#171511] text-sm font-bold hover:bg-[#e5e1dc] transition-colors">
                        <span className="material-symbols-outlined text-xl">trophy</span>
                        <span className="truncate">Рейтинг сообщества</span>
                    </Link>
                </div>

                {/* Dashboard Stats */}
                <BlurFade delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full">
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#e5e1dc] shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-[#877664] text-sm font-medium">Финишеров на этой неделе</p>
                            <span className="material-symbols-outlined text-primary opacity-60">groups</span>
                        </div>
                        <p className="text-[#171511] text-3xl font-black tabular-nums tracking-tight">
                            {stats.totalFinishers.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-1 text-[#07880e] text-sm font-bold">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            <span>+{stats.weeklyFinishers}%</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#e5e1dc] shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-[#877664] text-sm font-medium">Общая дистанция км</p>
                            <span className="material-symbols-outlined text-primary opacity-60">route</span>
                        </div>
                        <p className="text-[#171511] text-3xl font-black tabular-nums tracking-tight">
                            {stats.totalDistance.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-1 text-[#07880e] text-sm font-bold">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            <span>+{stats.weeklyDistance}%</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#e5e1dc] shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-[#877664] text-sm font-medium">Новых личных рекордов</p>
                            <span className="material-symbols-outlined text-primary opacity-60">workspace_premium</span>
                        </div>
                        <p className="text-[#171511] text-3xl font-black tabular-nums tracking-tight">
                            {stats.totalPBs.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-1 text-[#07880e] text-sm font-bold">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            <span>+{stats.weeklyPBs}%</span>
                        </div>
                    </div>
                </BlurFade>

                {/* Results Feature Container */}
                <BlurFade delay={0.4} className="w-full">
                    <ResultsContainer initialResults={results} />
                </BlurFade>
            </div>
        </div >
    )
}
