import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import type { SEOFields } from '@/entities'

interface GenerateMetadataOptions {
    title?: string
    description?: string
    path: string
    ogImage?: string
    noIndex?: boolean
    type?: 'website' | 'article'
    publishedTime?: string
    modifiedTime?: string
}

export function generatePageMetadata({
    title,
    description,
    path,
    ogImage,
    noIndex = false,
    type = 'website',
    publishedTime,
    modifiedTime,
}: GenerateMetadataOptions): Metadata {
    const fullTitle = title
        ? `${title} — ${SITE_CONFIG.name}`
        : SITE_CONFIG.name

    const fullDescription = description || SITE_CONFIG.description
    const canonicalUrl = `${SITE_CONFIG.url}${path}`
    const ogImageUrl = ogImage || `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`

    return {
        title: fullTitle,
        description: fullDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        robots: noIndex ? { index: false, follow: false } : undefined,
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url: canonicalUrl,
            siteName: SITE_CONFIG.name,
            locale: SITE_CONFIG.locale,
            type,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title || SITE_CONFIG.name,
                },
            ],
            ...(type === 'article' && publishedTime && {
                publishedTime,
                modifiedTime,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: fullDescription,
            images: [ogImageUrl],
        },
    }
}

// Helper to merge Sanity SEO fields with defaults
export function mergeWithSanityMeta(
    sanityMeta: SEOFields | undefined,
    defaults: GenerateMetadataOptions
): GenerateMetadataOptions {
    return {
        ...defaults,
        title: sanityMeta?.metaTitle || defaults.title,
        description: sanityMeta?.metaDescription || defaults.description,
        ogImage: sanityMeta?.ogImage?.url || defaults.ogImage,
        noIndex: sanityMeta?.noIndex || defaults.noIndex,
    }
}
