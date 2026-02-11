import type { PortableTextBlock, SEOFields } from './city'

// Article/Blog entity
export interface Article {
    _id: string
    _updatedAt: string
    _createdAt: string
    title: string
    slug: string
    excerpt?: string
    content: PortableTextBlock[]
    coverImage?: {
        url: string
        alt?: string
        metadata?: {
            lqip?: string
        }
    }
    author?: {
        name: string
        avatar?: {
            url: string
        }
    }
    category?: {
        title: string
        slug: string
    }
    tags?: string[]
    publishedAt: string
    seo?: SEOFields
}

// Article list item
export interface ArticleListItem {
    _id: string
    title: string
    slug: string
    excerpt?: string
    coverImage?: {
        url: string
    }
    publishedAt: string
    category?: {
        title: string
        slug: string
    }
}
