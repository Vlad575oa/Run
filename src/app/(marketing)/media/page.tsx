import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { MediaSection } from '@/components/sections/MediaSection'

export const metadata: Metadata = generatePageMetadata({
    title: 'Медиа — КофеРан вечеринка',
    description: 'Фото и видео с наших пробежек. Смотрите, как весело и дружно мы бегаем!',
    path: '/media',
})

export default function MediaPage() {
    return (
        <div className="flex flex-col items-center bg-background-light font-display text-text-main w-full min-h-screen">
            <MediaSection />
        </div>
    )
}
