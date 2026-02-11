import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
}

export function Card({
    children,
    className = '',
    hover = false,
    padding = 'md',
}: CardProps) {
    const baseStyles = 'bg-white rounded-2xl shadow-sm border border-gray-100'
    const hoverStyles = hover ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1' : ''

    return (
        <div className={`${baseStyles} ${hoverStyles} ${paddings[padding]} ${className}`}>
            {children}
        </div>
    )
}

// Card Header
interface CardHeaderProps {
    children: ReactNode
    className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
    return (
        <div className={`mb-4 ${className}`}>
            {children}
        </div>
    )
}

// Card Content
interface CardContentProps {
    children: ReactNode
    className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

// Card Footer
interface CardFooterProps {
    children: ReactNode
    className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
    return (
        <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>
            {children}
        </div>
    )
}
