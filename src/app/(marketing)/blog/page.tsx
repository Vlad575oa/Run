import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/seo'
import { mockArticles } from '@/data/mockArticles'
import { BlurFade } from '@/components/ui/BlurFade'

export const metadata: Metadata = generatePageMetadata({
    title: 'Блог',
    description: 'Новости, статьи и полезные материалы от КофеРан вечеринка. Советы для бегунов, истории сообщества и анонсы.',
    path: '/blog',
})

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#FDFBF7] to-white">
            {/* Hero Section */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                            Советы, лайфхаки и истории для бегунов любого уровня.
                            От первых шагов до марафона — и всё это с зарядом кофеина.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="w-full pb-24">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockArticles.map((article, index) => (
                            <BlurFade key={article.id} delay={0.1 + index * 0.05}>
                                <Link
                                    href={`/blog/${article.slug}`}
                                    className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={article.coverImage}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block bg-white/95 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-6">
                                        <h2 className="text-xl font-bold text-text-main leading-snug mb-3 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                                            <span>Читать далее</span>
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
