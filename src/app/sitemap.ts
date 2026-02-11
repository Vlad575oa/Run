import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { client, isConfigured } from '@/lib/sanity'
import { mockArticles } from '@/data/mockArticles'
import { groq } from 'next-sanity'

// Cache sitemap for 24 hours
export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = SITE_CONFIG.url

    let cities: any[] = []
    let events: any[] = []
    let articles: any[] = []

    if (isConfigured) {
        try {
            // Fetch dynamic data from Sanity
            const query = groq`{
                "cities": *[_type == "city" && isActive == true] {
                    "slug": slug.current,
                    _updatedAt
                },
                "events": *[_type == "event"] {
                    "slug": slug.current,
                    _updatedAt
                },
                "articles": *[_type == "article"] {
                    "slug": slug.current,
                    _updatedAt
                }
            }`

            const data = await client.fetch(query, {}, {
                next: { revalidate: 86400 }
            })
            cities = data.cities
            events = data.events
            articles = data.articles
        } catch (error) {
            console.error('Sitemap: Failed to fetch from Sanity, falling back to mocks', error)
        }
    }

    // Fallback if Sanity is not configured or fetch returned nothing
    if (cities.length === 0) {
        cities = [
            { slug: 'simferopol', _updatedAt: new Date().toISOString() },
            { slug: 'yalta', _updatedAt: new Date().toISOString() },
        ]
    }

    if (articles.length === 0) {
        articles = mockArticles.map(a => ({
            slug: a.slug,
            _updatedAt: new Date(a.publishedAt).toISOString()
        }))
    }

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/runs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/results`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/shop`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/calendar`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cities`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contacts`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]

    const cityPages: MetadataRoute.Sitemap = cities.map((city: any) => ({
        url: `${baseUrl}/cities/${city.slug}`,
        lastModified: new Date(city._updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const eventPages: MetadataRoute.Sitemap = events.map((event: any) => ({
        url: `${baseUrl}/events/${event.slug}`,
        lastModified: new Date(event._updatedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
    }))

    const articlePages: MetadataRoute.Sitemap = articles.map((article: any) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(article._updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    return [...staticPages, ...cityPages, ...eventPages, ...articlePages]
}
