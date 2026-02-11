import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Site Title', type: 'string' }),
        defineField({ name: 'description', title: 'Site Description', type: 'text', rows: 3 }),
        defineField({ name: 'logo', title: 'Logo', type: 'image' }),
        defineField({
            name: 'footerText',
            title: 'Footer Copyright Text',
            type: 'string',
        }),
    ],
})
