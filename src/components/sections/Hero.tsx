import Image from 'next/image'
import { Button, Container } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'

interface HeroProps {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
    backgroundImage?: string
}

export function Hero({
    title = 'КофеРан вечеринка — беговое сообщество для всех',
    subtitle = 'Самый дружелюбный беговой клуб. Никакого превосходства и понтов, только классное настроение и вкусный кофе.',
    ctaText = 'Хочу на пробежку',
    ctaLink = SITE_CONFIG.telegram.mainGroup,
    backgroundImage,
}: HeroProps) {
    return (
        <section className="relative bg-gradient-to-b from-orange-50 to-white py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <Container className="relative">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href={ctaLink} size="lg" external>
                            {ctaText}
                        </Button>
                        <Button href="/runs" variant="outline" size="lg">
                            Узнать больше
                        </Button>
                    </div>
                </div>

                {/* Hero image for desktop */}
                {backgroundImage && (
                    <div className="mt-12 md:mt-16 relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={backgroundImage}
                            alt="КофеРан вечеринка"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
            </Container>
        </section>
    )
}
