import { defineField, defineType } from 'sanity'

export const location = defineType({
    name: 'location',
    title: 'Location',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Place Name',
            type: 'string',
            placeholder: 'e.g., Central Park Entrance',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
            placeholder: 'e.g., Pushkin St, 1',
        }),
        defineField({
            name: 'geopoint',
            title: 'Geographic Coordinates',
            type: 'geopoint',
        }),
        defineField({
            name: 'mapLink',
            title: 'Map URL (Yandex/Google)',
            type: 'url',
        }),
    ],
})
