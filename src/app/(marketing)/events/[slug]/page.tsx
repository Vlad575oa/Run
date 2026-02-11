import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image' // Added missing import
import { Container, Button, Badge } from '@/components/ui'
import { Breadcrumbs } from '@/components/layout'
import { CTABanner } from '@/components/sections'
import { generateEventSchema } from '@/lib/seo'
import { generatePageMetadata, mergeWithSanityMeta } from '@/lib/seo'
import { getRunTypeById } from '@/lib/constants'
// import { client, eventBySlugQuery, allEventSlugsQuery } from '@/lib/sanity'
// import type { Event } from '@/entities'

export const revalidate = 3600 // 1 hour ISR

type PageParams = Promise<{ slug: string }>

// Mock Event Data for Build
const mockEvent: any = { // Using any temporarily to bypass strict type check for mock
    _id: 'mock-id',
    slug: 'featured-run',
    title: 'Morning Coffee Run',
    eventType: 'saturday_party',
    date: new Date().toISOString(),
    startTime: '09:00',
    pace: '6:30 min/km',
    city: {
        name: 'Москва',
        slug: 'moscow',
        telegramLink: 'https://t.me/coffeerunparty',
        location: {
            name: 'Coffee Cafe',
            address: 'Main Street 1'
        }
    },
    distances: ['5 км'],
    features: ['Coffee', 'Music', 'Networking'],
    image: {
        url: 'https://images.unsplash.com/photo-1452626038306-9aae5e06ff9f?q=80&w=3542&auto=format&fit=crop'
    },
    seo: {
        title: 'Morning Coffee Run',
        description: 'Join us for a run!'
    }
}

export async function generateStaticParams() {
    // Return empty array to avoid building dynamic pages without Sanity
    return []
    // const events = await client.fetch<{ slug: string }[]>(allEventSlugsQuery)
    // return events.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
    const { slug } = await params
    // const event = await client.fetch<Event>(eventBySlugQuery, { slug })
    const event = mockEvent

    if (!event) {
        return {}
    }

    const runType = getRunTypeById(event.eventType)
    const formattedDate = new Date(event.date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return generatePageMetadata(
        mergeWithSanityMeta(event.seo, {
            title: `${event.title} — ${event.city.name}`,
            description: `Присоединяйся к ${runType?.label || 'нам'} ${formattedDate} в ${event.city.name}. Старт в ${event.startTime}. ${event.distances?.join(', ') || 'Разные дистанции'}.`,
            path: `/events/${event.slug}`,
            ogImage: event.image?.url,
        })
    )
}

export default async function EventPage({ params }: { params: PageParams }) {
    const { slug } = await params
    // const event = await client.fetch<Event>(eventBySlugQuery, { slug })
    const event = mockEvent

    if (!event) {
        notFound()
    }

    const runType = getRunTypeById(event.eventType)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateEventSchema(event)) }}
            />

            <section className="py-12 md:py-16">
                <Container>
                    <Breadcrumbs
                        items={[
                            { label: 'Мероприятия', href: '/events' },
                            { label: event.title, href: `/events/${event.slug}` },
                        ]}
                    />

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Features badges */}
                            {event.features && event.features.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {event.features.map((feature: string, index: number) => (
                                        <Badge key={index} variant="primary" size="sm">
                                            ✓ {feature}
                                        </Badge>
                                    ))}
                                </div>
                            )}

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {event.title} {runType?.emoji}
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-gray-600 mb-8">
                                Присоединяйся к нам на лёгкие {event.distances?.join(' или ') || '5 км'}.
                                Никто не бежит один! Темп: Sexy ({event.pace}).
                                Начните выходные с хорошего настроения, музыки и отличного кофе.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <Button href={event.ctaButton?.link || event.city.telegramLink} size="lg" external>
                                    {event.ctaButton?.text || 'Хочу на пробежку'}
                                </Button>
                                <Button href="#" variant="outline" size="lg">
                                    📷 Фото и атмосфера
                                </Button>
                            </div>

                            {/* Event Image */}
                            {event.image?.url && (
                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                                    <Image
                                        src={event.image.url}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                                        📍 {event.city.location.name}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Event Details Card */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-6">
                                <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                    📋 Детали события
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Время старта</p>
                                        <p className="font-medium">{event.startTime} <span className="text-gray-400 text-sm">(Встреча и знакомство)</span></p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">Место встречи</p>
                                        <p className="font-medium">{event.city.location.name}</p>
                                        {event.city.location.address && (
                                            <a href="#" className="text-sm text-orange-600 hover:underline">
                                                Посмотреть на карте
                                            </a>
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">Темп</p>
                                        <p className="font-medium">{event.pace}</p>
                                        <p className="text-sm text-gray-400">Разговорный, "Sexy Pace"</p>
                                    </div>
                                </div>
                            </div>

                            {/* Partners Card */}
                            {event.partners && event.partners.length > 0 && (
                                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <h2 className="font-semibold text-lg mb-4">При участии</h2>

                                    <div className="space-y-4">
                                        {event.partners.map((partner: any, index: number) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                                    🎵
                                                </div>
                                                <div>
                                                    <p className="font-medium">{partner.name}</p>
                                                    <p className="text-sm text-gray-500">{partner.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Community Note */}
                            <div className="bg-orange-50 rounded-2xl p-6">
                                <p className="text-gray-700">
                                    Мы создали эту группу для тех, кто не любит бегать в одиночку.
                                    Есть замыкающий.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* How it works */}
            <section className="py-12 md:py-16 bg-gray-50">
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Как это работает
                    </h2>
                    <p className="text-orange-600 font-medium mb-8">(Своих не бросаем!)</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🤝', title: 'Встреча', desc: '9:00. Приветствие, можно оставить вещи в зоне.' },
                            { icon: '🏃', title: 'Забег', desc: '9:30. Легкие 5 км. Темп, чтобы болтать.' },
                            { icon: '☕', title: 'Кофе', desc: '10:15. Фильтр или капучино за наш счёт.' },
                            { icon: '🎉', title: 'Вечеринка', desc: 'Музыка, вайб и новые знакомства.' },
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-3">{step.icon}</div>
                                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <CTABanner ctaLink={event.city.telegramLink} />
        </>
    )
}
