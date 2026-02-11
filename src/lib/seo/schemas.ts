import { SITE_CONFIG } from '@/lib/constants'
import type { Event, City } from '@/entities'

// Organization Schema (site-wide)
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'SportsClub',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.organization.name,
        legalName: SITE_CONFIG.organization.legalName,
        url: SITE_CONFIG.url,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url}${SITE_CONFIG.organization.logo}`,
        },
        image: [
            `${SITE_CONFIG.url}${SITE_CONFIG.organization.logo}`,
            `${SITE_CONFIG.url}/images/hero_poster.webp`
        ],
        foundingDate: SITE_CONFIG.organization.foundingDate,
        sameAs: [
            SITE_CONFIG.telegram.mainGroup,
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: SITE_CONFIG.email,
            contactType: 'customer service',
        },
        location: {
            '@type': 'Place',
            name: 'Крым',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Simferopol',
                addressRegion: 'Crimea',
                addressCountry: 'RU'
            }
        }
    }
}

// Event Schema
export function generateEventSchema(event: Event) {
    const endTime = addHoursToTime(event.startTime, 3)

    return {
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        '@id': `${SITE_CONFIG.url}/events/${event.slug}#event`,
        name: event.title,
        description: event.description
            ? portableTextToPlain(event.description)
            : undefined,
        startDate: `${event.date}T${event.startTime}:00`,
        endDate: `${event.date}T${endTime}:00`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
            '@type': 'Place',
            name: event.city.location.name,
            address: {
                '@type': 'PostalAddress',
                addressLocality: event.city.name,
                streetAddress: event.city.location.address,
                addressCountry: 'RU',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: event.city.location.geopoint.lat,
                longitude: event.city.location.geopoint.lng,
            },
        },
        image: event.image?.url,
        organizer: {
            '@type': 'Organization',
            '@id': `${SITE_CONFIG.url}/#organization`,
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'RUB',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.url}/events/${event.slug}`,
            validFrom: new Date().toISOString(),
        },
    }
}

// LocalBusiness Schema (for city pages)
export function generateLocalBusinessSchema(city: City) {
    const tuesdayHours = city.runSchedule.tuesdayRun.isActive
        ? {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'https://schema.org/Tuesday',
            opens: city.runSchedule.tuesdayRun.time,
            closes: addHoursToTime(city.runSchedule.tuesdayRun.time, 2),
        }
        : null

    const saturdayHours = city.runSchedule.saturdayParty.isActive
        ? {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'https://schema.org/Saturday',
            opens: city.runSchedule.saturdayParty.time,
            closes: addHoursToTime(city.runSchedule.saturdayParty.time, 3),
        }
        : null

    return {
        '@context': 'https://schema.org',
        '@type': 'SportsClub',
        '@id': `${SITE_CONFIG.url}/cities/${city.slug}#localbusiness`,
        name: `${SITE_CONFIG.name} ${city.name}`,
        description: `Беговое сообщество ${SITE_CONFIG.name} в городе ${city.name}. Пробежки по вторникам и субботам.`,
        url: `${SITE_CONFIG.url}/cities/${city.slug}`,
        image: city.heroImage?.url,
        address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            streetAddress: city.location.address,
            addressCountry: 'RU',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: city.location.geopoint.lat,
            longitude: city.location.geopoint.lng,
        },
        openingHoursSpecification: [tuesdayHours, saturdayHours].filter(Boolean),
        areaServed: [
            {
                '@type': 'City',
                name: city.name,
            },
            {
                '@type': 'AdministrativeArea',
                name: 'Crimea',
            }
        ],
        sameAs: [city.telegramLink],
        parentOrganization: {
            '@id': `${SITE_CONFIG.url}/#organization`,
        },
    }
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(
    items: Array<{ name: string; url: string }>
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_CONFIG.url}${item.url}`,
        })),
    }
}

// FAQ Schema
export function generateFAQSchema(items: { question: string; answer: string }[]) {
    if (!Array.isArray(items)) {
        console.error('generateFAQSchema: items is not an array', items)
        return null
    }
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    }
}

// Helper: Add hours to time string
function addHoursToTime(time: string, hours: number): string {
    const [h, m] = time.split(':').map(Number)
    const newHour = (h + hours) % 24
    return `${String(newHour).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

// Helper: Convert portable text to plain text
function portableTextToPlain(blocks: unknown[]): string {
    if (!Array.isArray(blocks)) return ''

    return blocks
        .filter((block: any) => block._type === 'block')
        .map((block: any) =>
            block.children
                .map((child: any) => child.text)
                .join('')
        )
        .join('\n\n')
}
