import { defineField, defineType } from 'sanity'

export const event = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Event Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'eventType',
            title: 'Event Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Tuesday — Regular Run', value: 'tuesday_run' },
                    { title: 'Saturday — КофеРан вечеринка', value: 'saturday_party' },
                    { title: 'Special Event', value: 'special' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({ name: 'date', title: 'Date', type: 'date', validation: (Rule) => Rule.required() }),
        defineField({ name: 'startTime', title: 'Start Time', type: 'string', placeholder: '09:00' }),
        defineField({ name: 'meetingTime', title: 'Meeting Time', type: 'string', placeholder: '08:45' }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'reference',
            to: [{ type: 'city' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'distances',
            title: 'Distances',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({ name: 'pace', title: 'Pace Description', type: 'string', placeholder: '6:30 - 7:30 min/km' }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({ name: 'image', title: 'Event Image', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'partners',
            title: 'Partners',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Name' },
                        { name: 'logo', type: 'image', title: 'Logo' },
                        { name: 'role', type: 'string', title: 'Role' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'features',
            title: 'Highlights/Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'seo',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            city: 'city.name',
            date: 'date',
        },
        prepare({ title, city, date }) {
            return {
                title,
                subtitle: `${city || 'No City'} — ${date || 'No Date'}`,
            }
        },
    },
})
