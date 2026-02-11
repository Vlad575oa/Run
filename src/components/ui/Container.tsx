import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
    size?: 'default' | 'narrow' | 'wide'
}

const sizes = {
    default: 'max-w-[1440px]',
    narrow: 'max-w-5xl',
    wide: 'max-w-[1600px]',
}

export function Container({
    children,
    className = '',
    size = 'default',
}: ContainerProps) {
    return (
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
            {children}
        </div>
    )
}
