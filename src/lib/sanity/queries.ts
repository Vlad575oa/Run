import { groq } from 'next-sanity'

// ============================================
// CITY QUERIES
// ============================================

export const allCitiesQuery = groq`
  *[_type == "city" && isActive == true] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    heroImage { 
      "url": asset->url 
    }
  }
`

export const cityBySlugQuery = groq`
  *[_type == "city" && slug.current == $slug && isActive == true][0] {
    _id,
    _updatedAt,
    name,
    "slug": slug.current,
    description,
    heroImage { 
      "url": asset->url,
      "metadata": asset->metadata { lqip }
    },
    gallery[] { 
      "url": asset->url 
    },
    location {
      name,
      address,
      geopoint,
      mapLink
    },
    runSchedule {
      tuesdayRun { isActive, time, meetingTime, description },
      saturdayParty { isActive, time, meetingTime, description }
    },
    localSeoText,
    telegramLink,
    seo {
      metaTitle,
      metaDescription,
      ogImage { "url": asset->url }
    }
  }
`

export const allCitySlugsQuery = groq`
  *[_type == "city" && isActive == true] {
    "slug": slug.current
  }
`

// ============================================
// EVENT QUERIES
// ============================================

export const allEventsQuery = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    eventType,
    date,
    startTime,
    city-> { 
      name, 
      "slug": slug.current 
    },
    image { "url": asset->url }
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= $today] | order(date asc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    eventType,
    date,
    startTime,
    city-> { 
      name, 
      "slug": slug.current 
    },
    image { "url": asset->url }
  }
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    eventType,
    date,
    startTime,
    meetingTime,
    city-> {
      name,
      "slug": slug.current,
      location {
        name,
        address,
        geopoint
      },
      telegramLink
    },
    distances,
    pace,
    description,
    image { 
      "url": asset->url,
      "metadata": asset->metadata { lqip }
    },
    partners[] { 
      name, 
      logo { "url": asset->url }, 
      role 
    },
    features,
    ctaButton { text, link },
    seo {
      metaTitle,
      metaDescription,
      ogImage { "url": asset->url }
    }
  }
`

export const eventsByCityQuery = groq`
  *[_type == "event" && city->slug.current == $citySlug && date >= $today] | order(date asc) {
    _id,
    title,
    "slug": slug.current,
    eventType,
    date,
    startTime
  }
`

export const allEventSlugsQuery = groq`
  *[_type == "event"] {
    "slug": slug.current
  }
`

// ============================================
// ARTICLE QUERIES
// ============================================

export const allArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage { "url": asset->url },
    publishedAt,
    category-> { title, "slug": slug.current }
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    _createdAt,
    title,
    "slug": slug.current,
    excerpt,
    content,
    coverImage { 
      "url": asset->url,
      alt,
      "metadata": asset->metadata { lqip }
    },
    author-> {
      name,
      avatar { "url": asset->url }
    },
    category-> { 
      title, 
      "slug": slug.current 
    },
    tags,
    publishedAt,
    seo {
      metaTitle,
      metaDescription,
      ogImage { "url": asset->url }
    }
  }
`

export const allArticleSlugsQuery = groq`
  *[_type == "article"] {
    "slug": slug.current
  }
`

// ============================================
// SITE SETTINGS
// ============================================

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    logo { "url": asset->url },
    mainNavigation[] {
      label,
      link
    },
    footerLinks[] {
      label,
      link
    },
    socialLinks {
      telegram
    },
    defaultSeo {
      metaTitle,
      metaDescription,
      ogImage { "url": asset->url }
    }
  }
`
