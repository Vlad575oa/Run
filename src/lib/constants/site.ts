export const SITE_CONFIG = {
    name: 'КофеРан вечеринка',
    shortName: 'CRP',
    description: 'Пробежки и кофе с атмосферой.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://run82.ru',
    locale: 'ru_RU',
    language: 'ru',

    // Social
    socials: {
        simferopol: {
            telegram: 'https://t.me/coffeerunparty',
            vk: 'https://vk.ru/coffeerunparty',
        },
        yalta: {
            telegram: 'https://t.me/coffeerunyalta',
        },
    },
    telegram: {
        mainGroup: 'https://t.me/coffeerunparty',
        channel: 'https://t.me/coffeerunparty_news',
    },

    // Brand
    colors: {
        primary: '#F97316', // orange-500
        secondary: '#F59E0B', // amber-500
        background: '#FFFFFF',
        text: '#1F2937', // gray-800
    },

    // Contact
    email: 'hello@run82.ru',

    // SEO defaults
    defaultOgImage: '/images/og-default.jpg',

    // Organization schema
    organization: {
        name: 'КофеРан вечеринка',
        legalName: 'КофеРан вечеринка',
        foundingDate: '2024',
        logo: '/logo.svg',
    },
} as const

export type SiteConfig = typeof SITE_CONFIG
