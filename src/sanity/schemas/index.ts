import { article } from './documents/article'
import { city } from './documents/city'
import { event } from './documents/event'
import { siteSettings } from './documents/siteSettings'
import { location } from './objects/location'
import { runSchedule } from './objects/runSchedule'
import { seo } from './objects/seo'

export const schemaTypes = [
    // Documents
    article,
    city,
    event,
    siteSettings,

    // Objects
    seo,
    location,
    runSchedule,
]
