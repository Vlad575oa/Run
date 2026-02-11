import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { fetchRaceResults, calculateCommunityRatings } from '@/lib/results'
import { RatingsContainer } from '@/components/features/results/RatingsContainer'

export const metadata: Metadata = generatePageMetadata({
    title: 'Рейтинги Сообщества',
    description: 'Наши герои и личные достижения сезона. Дружеская атмосфера важнее секунд!',
    path: '/community-ratings',
})

export default async function CommunityRatingsPage() {
    const results = await fetchRaceResults()
    const athletes = calculateCommunityRatings(results)

    return (
        <div className="flex flex-1 flex-col items-center bg-[#f9fbf9] text-[#111813] transition-colors duration-300 w-full">
            <div className="flex flex-col max-w-[1100px] w-full flex-1 px-4 md:px-10 lg:px-0 py-10">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-end gap-6 p-4 mb-6">
                    <div className="flex min-w-72 flex-col gap-3">
                        <h1 className="text-[#111813] text-4xl font-black leading-tight tracking-[-0.033em]">Рейтинги Сообщества</h1>
                        <p className="text-[#61896f] text-base font-normal leading-normal max-w-lg">
                            Наши герои и личные достижения. Дружеская атмосфера важнее секунд! Обновляется автоматически на основе результатов забегов.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/results" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e8f5ed] text-[#111813] text-sm font-bold leading-normal tracking-[0.015em] border border-[#dbe6df] hover:bg-[#dbe6df] transition-colors">
                            <span className="material-symbols-outlined text-lg mr-2">list_alt</span>
                            <span className="truncate">Все результаты</span>
                        </Link>
                    </div>
                </div>

                {/* Ratings Container */}
                <RatingsContainer initialAthletes={athletes} />

                {/* Inspirational CTA */}
                <div className="bg-[#13ec5b]/10 rounded-2xl p-8 border-2 border-dashed border-[#13ec5b]/30 text-center">
                    <h3 className="text-xl font-black mb-2">Важен каждый шаг! ☕</h3>
                    <p className="text-[#61896f] mb-6 max-w-lg mx-auto">
                        Наше сообщество — это не только секунды, но и удовольствие от бега и чашки кофе после финиша.
                        Обновите свое время или добавьте свой первый забег!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://t.me/coffeerunparty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#13ec5b] text-[#111813] font-black px-8 py-3 rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            <span>Я пробежал(а) быстрее!</span>
                            <span className="material-symbols-outlined">send</span>
                        </a>
                        <Link href="/contacts" className="bg-white text-[#111813] border border-[#dbe6df] font-bold px-8 py-3 rounded-lg hover:bg-[#e8f5ed] transition-colors">
                            Правила рейтинга
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
