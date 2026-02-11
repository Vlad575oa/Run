import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { FAQ } from '@/components/sections/FAQ'
import { faqData } from '@/lib/constants/faq'
import { generateFAQSchema } from '@/lib/seo/schemas'
import { Container } from '@/components/ui'
import { TextReveal } from '@/components/ui/TextReveal'

export const metadata: Metadata = generatePageMetadata({
    title: 'Частые вопросы (FAQ)',
    description: 'Ответы на популярные вопросы о беговом сообществе КофеРан вечеринка. Как проходят пробежки, сборы, темп и многое другое.',
    path: '/faq',
})

export default function FAQPage() {
    return (
        <div className="flex flex-col items-center bg-background-light font-display text-text-main w-full min-h-screen pt-12 pb-10">
            <Container>
                <div className="flex flex-col gap-4 text-center mb-8">
                    <TextReveal
                        text="Вопросы и ответы"
                        className="text-4xl md:text-5xl font-black tracking-tight text-text-main justify-center"
                        delay={0.1}
                    />
                    <TextReveal
                        text="Собрали всё самое важное для новичков и регулярных участников."
                        className="text-lg text-text-muted max-w-2xl mx-auto justify-center"
                        delay={0.3}
                    />
                </div>
            </Container>

            <FAQ />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(faqData)),
                }}
            />
        </div>
    )
}
