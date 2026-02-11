import type { RunTypeId } from '@/lib/constants'

// Base SEO type for all documents
export interface SEOFields {
    metaTitle?: string
    metaDescription?: string
    ogImage?: {
        url: string
        alt?: string
    }
    noIndex?: boolean
}

// Geopoint for locations
export interface Geopoint {
    lat: number
    lng: number
}

// Location object
export interface Location {
    name: string
    address: string
    geopoint: Geopoint
    mapLink?: string
}

// Run schedule for a city
export interface RunScheduleItem {
    isActive: boolean
    time: string
    meetingTime: string
    description?: string
}

export interface RunSchedule {
    tuesdayRun: RunScheduleItem
    saturdayParty: RunScheduleItem
}

// Partner for events
export interface Partner {
    name: string
    logo?: {
        url: string
    }
    role: string
}

// CTA button
export interface CTAButton {
    text: string
    link: string
}

// Sanity image type
export interface SanityImage {
    asset: {
        _ref: string
        url?: string
    }
    hotspot?: {
        x: number
        y: number
    }
    alt?: string
}

// Portable text block
export interface PortableTextBlock {
    _type: 'block'
    _key: string
    style?: string
    children: Array<{
        _type: 'span'
        _key: string
        text: string
        marks?: string[]
    }>
}

// City entity
export interface City {
    _id: string
    _updatedAt: string
    name: string
    slug: string
    description?: PortableTextBlock[]
    heroImage?: {
        url: string
        metadata?: {
            lqip?: string
        }
    }
    gallery?: Array<{
        url: string
    }>
    location: Location
    runSchedule: RunSchedule
    localSeoText?: PortableTextBlock[]
    telegramLink: string
    seo?: SEOFields
    isActive: boolean
}

// City list item (for index pages)
export interface CityListItem {
    _id: string
    name: string
    slug: string
    heroImage?: {
        url: string
    }
}
