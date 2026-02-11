import { Button } from '@/components/ui'

import { SITE_CONFIG } from '@/lib/constants'

interface CTABannerProps {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
}

export function CTABanner({
    title = 'Готовы шнуровать кроссовки?',
    subtitle = 'Присоединяйтесь к чату нашего сообщества, чтобы получать анонсы и фото с пробежек первыми.',
    ctaText = 'Хочу на пробежку',
    ctaLink = SITE_CONFIG.telegram.mainGroup,
}: CTABannerProps) {
    return (
        <section className="relative w-full overflow-hidden bg-[#0F1117]">
            <div className="flex items-center justify-center w-full flex-col px-4 py-20 md:py-32">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400 text-3xl md:text-5xl lg:text-6xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight max-w-4xl">
                    {title}
                </h2>
                <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-400 text-center mb-8 md:mb-10">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
                    <Button
                        href={ctaLink}
                        size="lg"
                        className="cursor-pointer bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 w-full sm:w-auto"
                        external
                    >
                        {ctaText}
                    </Button>
                    <Button
                        href={SITE_CONFIG.telegram.mainGroup}
                        variant="secondary"
                        size="lg"
                        className="cursor-pointer bg-[#1F2937] hover:bg-[#374151] text-white font-bold px-8 py-6 rounded-full text-lg border border-white/10 w-full sm:w-auto"
                        external
                    >
                        Чат в Telegram
                    </Button>
                </div>
            </div>
        </section>
    )
}
