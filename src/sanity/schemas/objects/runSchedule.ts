import { defineField, defineType } from 'sanity'

const scheduleItem = {
    type: 'object',
    fields: [
        defineField({ name: 'isActive', title: 'Active', type: 'boolean', initialValue: true }),
        defineField({ name: 'time', title: 'Start Time', type: 'string', placeholder: '09:00' }),
        defineField({ name: 'meetingTime', title: 'Meeting Time', type: 'string', placeholder: '08:45' }),
        defineField({ name: 'description', title: 'Brief Description', type: 'text', rows: 2 }),
    ],
}

export const runSchedule = defineType({
    name: 'runSchedule',
    title: 'Run Schedule',
    type: 'object',
    fields: [
        defineField({
            name: 'tuesdayRun',
            title: 'Tuesday — Regular Run',
            ...scheduleItem,
        }),
        defineField({
            name: 'saturdayParty',
            title: 'Saturday — КофеРан вечеринка',
            ...scheduleItem,
        }),
    ],
})
