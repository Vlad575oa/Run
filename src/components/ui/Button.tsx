import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
    children: ReactNode
    href?: string
    variant?: ButtonVariant
    size?: ButtonSize
    className?: string
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit'
    external?: boolean
}

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl active:shadow-md',
    secondary: 'bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50',
    outline: 'bg-transparent text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
}

const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    type = 'button',
    external = false,
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    className={combinedStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            )
        }
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedStyles}
        >
            {children}
        </button>
    )
}
