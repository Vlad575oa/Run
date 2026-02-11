import { defineField, defineType } from 'sanity'

export const city = defineType({
    name: 'city',
    title: 'City',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'City Name', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Community Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'gallery',
            title: 'City Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'location',
            title: 'Start Point',
            type: 'location',
        }),
        defineField({
            name: 'runSchedule',
            title: 'Weekly Schedule',
            type: 'runSchedule',
        }),
        defineField({
            name: 'localSeoText',
            title: 'Local SEO Content (Bottom of page)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'telegramLink',
            title: 'Telegram Group URL',
            type: 'url',
        }),
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'seo',
        }),
        defineField({
            name: 'isActive',
            title: 'City is Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
})
