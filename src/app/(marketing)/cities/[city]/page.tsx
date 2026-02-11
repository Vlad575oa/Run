import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Container, Button, Badge } from '@/components/ui'
import { TextReveal } from '@/components/ui/TextReveal'
import { Breadcrumbs } from '@/components/layout'
import { CTABanner } from '@/components/sections'
import { generateLocalBusinessSchema } from '@/lib/seo'
import { generatePageMetadata, mergeWithSanityMeta } from '@/lib/seo'
import { RUN_TYPES } from '@/lib/constants'
import { client, cityBySlugQuery, allCitySlugsQuery, isConfigured } from '@/lib/sanity'
import type { City } from '@/entities'

export const revalidate = 3600 // 1 hour ISR

const mockCitiesData: Record<string, City> = {
    simferopol: {
        _id: '1',
        _updatedAt: new Date().toISOString(),
        name: 'Симферополь',
        slug: 'simferopol',
        description: undefined,
        heroImage: undefined,
        gallery: undefined,
        location: {
            name: 'Три грации',
            address: 'Парк им. Гагарина',
            geopoint: { lat: 44.963093, lng: 34.098795 },
            mapLink: 'https://yandex.ru/maps/-/CDVmZV', // Keeping the old link for now unless I find a better one
        },
        runSchedule: {
            tuesdayRun: {
                isActive: true,
                time: '07:00',
                meetingTime: '06:45',
                description: 'Традиционная утренняя пробежка',
            },
            saturdayParty: {
                isActive: true,
                time: '09:00',
                meetingTime: '08:45',
                description: 'КофеРан вечеринка с кофе и музыкой',
            },
        },
        localSeoText: undefined,
        telegramLink: 'https://t.me/coffeerunparty_simf',
        seo: undefined,
        isActive: true,
    },
}

type PageParams = Promise<{ city: string }>

export async function generateStaticParams() {
    if (!isConfigured) return Object.keys(mockCitiesData).map(slug => ({ city: slug }))
    const cities = await client.fetch<{ slug: string }[]>(allCitySlugsQuery)
    return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
    const { city: citySlug } = await params
    const city = isConfigured
        ? await client.fetch<City>(cityBySlugQuery, { slug: citySlug })
        : mockCitiesData[citySlug]

    if (!city) {
        return {}
    }

    const title = citySlug === 'simferopol'
        ? `Бег в Симферополе: тренировки в парке Гагарина | КофеРан вечеринка`
        : citySlug === 'yalta'
            ? `Бег в Ялте: пробежки по набережной | Беговой клуб Yalta`
            : `КофеРан вечеринка ${city.name}`

    const description = citySlug === 'simferopol'
        ? `Присоединяйся к школе бега для взрослых в Симферополе. Тренировки в парке Гагарина, техника бега с нуля, профессиональный тренер. Стань частью КофеРан вечеринка!`
        : citySlug === 'yalta'
            ? `Лучший беговой клуб в Ялте. Пробежки по набережной, марафоны Крыма и забеги 2026. Начни бегать в Ялте вместе с КофеРан вечеринка.`
            : `Присоединяйся к беговому сообществу КофеРан вечеринка в ${city.name}. Пробежки по вторникам и субботам. Кофе, атмосфера, новые знакомства.`

    return generatePageMetadata(
        mergeWithSanityMeta(city.seo, {
            title,
            description,
            path: `/cities/${city.slug}`,
            ogImage: city.heroImage?.url,
        })
    )
}

export default async function CityPage({ params }: { params: PageParams }) {
    const { city: citySlug } = await params
    const city = isConfigured
        ? await client.fetch<City>(cityBySlugQuery, { slug: citySlug })
        : mockCitiesData[citySlug]

    if (!city) {
        notFound()
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(city)) }}
            />

            {/* Hero */}
            <section className="relative bg-gradient-to-b from-orange-50 to-white py-12 md:py-16">
                <Container>
                    <Breadcrumbs
                        items={[
                            { label: 'Города', href: '/cities' },
                            { label: city.name, href: `/cities/${city.slug}` },
                        ]}
                    />

                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="primary">Сообщество</Badge>
                    </div>

                    <TextReveal
                        text={`КофеРан вечеринка: ${city.name}`}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                    />
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                        Самый дружелюбный беговой клуб в Крыму. Никакого превосходства и понтов,
                        только классное настроение и отличный кофе на финише.
                    </p>

                    <Button href={city.telegramLink} size="lg" external>
                        Вступить в чат 📍
                    </Button>
                </Container>
            </section>

            {/* Schedule */}
            <section className="py-12 md:py-16">
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        Расписание недели
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                        {/* Tuesday Run */}
                        {city.runSchedule.tuesdayRun.isActive && (
                            <div className="p-6 bg-white rounded-2xl border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{RUN_TYPES.TUESDAY_RUN.emoji}</span>
                                    <div>
                                        <p className="text-sm font-medium text-orange-600 uppercase">
                                            {RUN_TYPES.TUESDAY_RUN.dayName}
                                        </p>
                                        <h3 className="font-semibold text-lg">
                                            {RUN_TYPES.TUESDAY_RUN.label}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">⏰</span>
                                        <div>
                                            <p className="text-gray-500">Время старта</p>
                                            <p className="font-medium">{city.runSchedule.tuesdayRun.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">📍</span>
                                        <div>
                                            <p className="text-gray-500">Место встречи</p>
                                            <p className="font-medium">{city.location.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Saturday Party */}
                        {city.runSchedule.saturdayParty.isActive && (
                            <div className="p-6 bg-white rounded-2xl border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{RUN_TYPES.SATURDAY_PARTY.emoji}</span>
                                    <div>
                                        <p className="text-sm font-medium text-amber-600 uppercase">
                                            {RUN_TYPES.SATURDAY_PARTY.dayName}
                                        </p>
                                        <h3 className="font-semibold text-lg">
                                            {RUN_TYPES.SATURDAY_PARTY.label}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">⏰</span>
                                        <div>
                                            <p className="text-gray-500">Время старта</p>
                                            <p className="font-medium">{city.runSchedule.saturdayParty.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">📍</span>
                                        <div>
                                            <p className="text-gray-500">Место встречи</p>
                                            <p className="font-medium">{city.location.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* Local SEO Content Section */}
            <section className="py-12 md:py-16 bg-white">
                <Container>
                    {citySlug === 'simferopol' ? (
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-gray-900 leading-tight">
                                    Школа бега для взрослых в Симферополе
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Ищете, <strong>как начать бегать с нуля</strong>? Наше сообщество в Симферополе — это больше, чем просто клуб. Мы помогаем освоить <strong>технику бега</strong> и сделать тренировки регулярными.
                                    </p>
                                    <p>
                                        Наши основные локации: <strong>Гагаринский парк (парк Гагарина)</strong> и район «Три Грации». Здесь проходят лучшие тренировки по <strong>легкой атлетике в Симферополе</strong> для любителей любого уровня.
                                    </p>
                                    <p>
                                        Если вам нужен <strong>тренер по бегу в Симферополе</strong>, наши опытные кураторы всегда подскажут, как избежать травм и получать удовольствие от каждого километра.
                                    </p>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/Hero_2.webp"
                                    alt="Бег в парке Гагарина Симферополь"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ) : citySlug === 'yalta' ? (
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/Hero_1.webp"
                                    alt="Бег Ялта набережная"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-gray-900 leading-tight">
                                    Беговой клуб Ялта: Бег по набережной и не только
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        <strong>Бег в Ялте</strong> — это уникальная возможность тренироваться с видом на море. Наш <strong>беговой клуб в Ялте</strong> собирает единомышленников для пробежек по знаменитой набережной.
                                    </p>
                                    <p>
                                        Мы активно готовимся к крупным событиям: <strong>марафоны Крыма</strong> и <strong>забеги 2026 в Крыму</strong> — отличный повод начать подготовку уже сегодня.
                                    </p>
                                    <p>
                                        <strong>Бег в Крыму</strong> становится всё популярнее, и КофеРан вечеринка Yalta — центр этой активности на Южном берегу. Присоединяйтесь к нам на субботние кофе-раны!
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-16 bg-gray-50">
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        Первый раз? Не беспокойтесь.
                    </h2>

                    <div className="space-y-4 max-w-2xl">
                        {[
                            {
                                q: 'Я совсем неподготовлен?',
                                a: 'Мы создали эту группу для тех, кто не любит бегать в одиночку. Если у вас есть кроссовки, значит вы в деле!',
                            },
                            {
                                q: 'Куда идти вещи?',
                                a: 'Мы обычно оставляем вещи у организатора или в машине. Контактный телефон есть в Telegram.',
                            },
                            {
                                q: 'Нужно ли регистрироваться?',
                                a: 'Нет, просто приходите к месту сбора за 15 минут до старта.',
                            },
                        ].map((faq, index) => (
                            <details
                                key={index}
                                className="p-4 bg-white rounded-xl border border-gray-100 group"
                            >
                                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                                    {faq.q}
                                    <span className="text-gray-400 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <p className="mt-3 text-gray-600">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </Container>
            </section>

            <CTABanner
                ctaLink={city.telegramLink}
                title={`Готовы бегать в ${city.name}?`}
            />
        </>
    )
}
