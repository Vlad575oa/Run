import { ReactNode } from 'react'

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'tuesday' | 'saturday'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
    children: ReactNode
    variant?: BadgeVariant
    size?: BadgeSize
    className?: string
}

const variants: Record<BadgeVariant, string> = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-orange-100 text-orange-700',
    secondary: 'bg-amber-100 text-amber-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    tuesday: 'bg-orange-100 text-orange-700', // Вторник — пробежка
    saturday: 'bg-amber-100 text-amber-700',  // Суббота — КофеРан вечеринка
}

const sizes: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
}

export function Badge({
    children,
    variant = 'default',
    size = 'md',
    className = '',
}: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </span>
    )
}
