import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '@/entities'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const isConfigured = Boolean(projectId && projectId !== 'placeholder')

export const client = createClient({
    projectId: isConfigured ? projectId : 'placeholder-id',
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage | string) {
    if (typeof source === 'string') {
        return source
    }
    return builder.image(source)
}

// Preview client (for draft mode)
export const previewClient = createClient({
    projectId: isConfigured ? projectId : 'placeholder',
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
})

export function getClient(preview = false) {
    return preview ? previewClient : client
}
