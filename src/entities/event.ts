import type { RunTypeId } from '@/lib/constants'
import type { City, Partner, CTAButton, PortableTextBlock, SEOFields } from './city'

// Event entity
export interface Event {
    _id: string
    _updatedAt: string
    title: string
    slug: string
    eventType: RunTypeId
    date: string // ISO date string
    startTime: string // HH:MM format
    meetingTime?: string
    city: {
        name: string
        slug: string
        location: {
            name: string
            address: string
            geopoint: {
                lat: number
                lng: number
            }
        }
        telegramLink: string
    }
    distances?: string[]
    pace?: string
    description?: PortableTextBlock[]
    image?: {
        url: string
        metadata?: {
            lqip?: string
        }
    }
    partners?: Partner[]
    features?: string[]
    ctaButton?: CTAButton
    seo?: SEOFields
}

// Event list item (for index pages)
export interface EventListItem {
    _id: string
    title: string
    slug: string
    eventType: RunTypeId
    date: string
    startTime: string
    city: {
        name: string
        slug: string
    }
    image?: {
        url: string
    }
}

// Event card props
export interface EventCardProps {
    event: EventListItem
    showCity?: boolean
}
