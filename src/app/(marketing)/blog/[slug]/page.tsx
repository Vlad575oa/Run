import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { mockArticles } from '@/data/mockArticles'
import { generatePageMetadata } from '@/lib/seo'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return mockArticles.map((article) => ({
        slug: article.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = mockArticles.find((a) => a.slug === slug)

    if (!article) {
        return { title: 'Статья не найдена' }
    }

    return generatePageMetadata({
        title: article.title,
        description: article.excerpt,
        path: `/blog/${article.slug}`,
        ogImage: article.coverImage,
        type: 'article',
        publishedTime: article.publishedAt,
    })
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params
    const article = mockArticles.find((a) => a.slug === slug)

    if (!article) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Header */}
            <header className="w-full bg-gradient-to-b from-[#FDFBF7] to-white pt-8 pb-12 md:pt-12 md:pb-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:-translate-x-1 transition-transform"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Назад в блог</span>
                    </Link>

                    {/* Article Meta */}
                    <div className="flex flex-col gap-4">

                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-text-main leading-tight">
                            {article.title}
                        </h1>
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl">
                            {article.excerpt}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-sm">
                                CRP
                            </div>
                            <div className="flex flex-col">
                                <span className="text-text-main font-bold text-sm">КофеРан вечеринка</span>
                                <time className="text-text-muted text-xs uppercase tracking-wider">
                                    {new Date(article.publishedAt).toLocaleDateString('ru-RU', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <section className="w-full -mt-4 mb-12">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="relative w-full aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={article.coverImage}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="w-full pb-20">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
                        {article.content.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-text-main text-lg md:text-xl leading-relaxed mb-6"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#FDFBF7] to-[#FFF8F0] border border-[#F3EFE5]">
                        <h3 className="text-2xl md:text-3xl font-black text-text-main mb-4">
                            Понравилась статья?
                        </h3>
                        <p className="text-text-muted text-lg mb-6">
                            Присоединяйтесь к нашему каналу в Telegram, где мы делимся анонсами пробежек и полезными материалами для бегунов.
                        </p>
                        <Link
                            href="https://t.me/coffeerunparty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                        >
                            <span>Вступить в чат</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                            </svg>
                        </Link>
                    </div>

                    {/* More Articles */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-black text-text-main mb-6">Читайте также</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {mockArticles
                                .filter((a) => a.slug !== article.slug)
                                .slice(0, 2)
                                .map((relatedArticle) => (
                                    <Link
                                        key={relatedArticle.id}
                                        href={`/blog/${relatedArticle.slug}`}
                                        className="group flex gap-4 p-4 rounded-2xl bg-[#FDFBF7] hover:bg-[#FFF8F0] transition-colors"
                                    >
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={relatedArticle.coverImage}
                                                alt={relatedArticle.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col">

                                            <h4 className="text-text-main font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                {relatedArticle.title}
                                            </h4>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}
