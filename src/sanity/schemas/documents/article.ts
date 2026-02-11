import { defineField, defineType } from 'sanity'

export const article = defineType({
    name: 'article',
    title: 'Blog Article',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
        defineField({
            name: 'content',
            title: 'Main Content',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
        }),
        defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', initialValue: () => new Date().toISOString() }),
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'seo',
        }),
    ],
})
