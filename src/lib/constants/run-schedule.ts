// Run Schedule Business Rule
// Вторник — Регулярная пробежка
// Суббота — КофеРан вечеринка

export const RUN_TYPES = {
  TUESDAY_RUN: {
    id: 'tuesday_run',
    label: 'Регулярная пробежка',
    shortLabel: 'Пробежка',
    dayOfWeek: 2, // Tuesday
    dayName: 'Вторник',
    emoji: '🏃',
    description: 'Традиционная вторничная пробежка для всех уровней',
    color: 'orange',
    bgClass: 'bg-orange-500',
    textClass: 'text-orange-600',
  },
  SATURDAY_PARTY: {
    id: 'saturday_party',
    label: 'КофеРан вечеринка',
    shortLabel: 'КофеРан',
    dayOfWeek: 6, // Saturday
    dayName: 'Суббота',
    emoji: '☕',
    description: 'Субботняя пробежка с кофе, музыкой и атмосферой',
    color: 'amber',
    bgClass: 'bg-amber-500',
    textClass: 'text-amber-600',
  },
} as const

export type RunTypeKey = keyof typeof RUN_TYPES
export type RunTypeId = typeof RUN_TYPES[RunTypeKey]['id']

export function getRunTypeById(id: RunTypeId) {
  return Object.values(RUN_TYPES).find((type) => type.id === id)
}

export function getRunTypeByDayOfWeek(dayOfWeek: number) {
  return Object.values(RUN_TYPES).find((type) => type.dayOfWeek === dayOfWeek)
}
