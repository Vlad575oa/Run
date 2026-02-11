import { defineField, defineType } from 'sanity'

export const seo = defineType({
    name: 'seo',
    title: 'SEO & Social',
    type: 'object',
    fields: [
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            description: '50-60 symbols recommended. Appears in search results and browser tab.',
            validation: (Rule) => Rule.max(70).warning('Title is getting long'),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: '150-160 symbols recommended. Brief summary of the page.',
            validation: (Rule) => Rule.max(200).warning('Description is getting long'),
        }),
        defineField({
            name: 'ogImage',
            title: 'OpenGraph Image',
            type: 'image',
            description: '1200x630px recommended. Shown when sharing on social media.',
            options: { hotspot: true },
        }),
        defineField({
            name: 'noIndex',
            title: 'Hide from Search Engines',
            type: 'boolean',
            initialValue: false,
            description: 'If true, this page will not be indexed by Google/Yandex.',
        }),
    ],
})
