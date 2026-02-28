import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MobileMenu } from './MobileMenu'
import { NavUnderline, ShimmerButton } from './HeaderInteractions'
import { headers } from 'next/headers'

export const Header: React.FC = async () => {
    const headersList = await headers()
    const pathname = headersList.get('x-pathname') || '/'

    const navLinks = [
        { name: 'Главная', href: '/' },
        { name: 'Медиа', href: '/media' },
        { name: 'Результаты', href: '/results' },
        { name: 'Блог', href: '/blog' },
        { name: 'Города', href: '/cities' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Магазин', href: '/shop' },
        { name: 'Контакты', href: '/contacts' },
    ]

    return (
        <header className="w-full border-b border-[#f4f2f0] bg-background-light/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
            {/* Business info bar */}
            <div className="w-full bg-[#f4f2f0]/60 border-b border-[#e5e1dc]/50">
                <div className="flex justify-center w-full">
                    <div className="flex w-full max-w-[1440px] items-center justify-between px-6 py-1.5 lg:px-10 text-[10px] sm:text-xs text-text-muted gap-2 flex-wrap">
                        <span>© 2026, Самозанятый Олейник Владислав Александрович</span>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <span>ИНН: 771402421981</span>
                            <a href="mailto:vlad575@mail.ru" className="hover:text-primary transition-colors">vlad575@mail.ru</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex w-full max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-10 h-10 overflow-hidden rounded-full">
                                <Image
                                    src="/logo.svg"
                                    alt="Логотип КофеРан"
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="40px"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-text-main text-lg font-bold leading-none tracking-tight">
                                    КофеРан
                                </h2>
                                <span className="text-text-muted text-[10px] font-medium leading-tight">
                                    беговой клуб в Симферополе
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors relative py-1 px-1 ${isActive ? 'text-primary' : 'text-text-main hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && <NavUnderline />}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-4">
                        <ShimmerButton href="https://t.me/coffeerunparty">
                            Хочу на пробежку
                        </ShimmerButton>

                        <MobileMenu navLinks={navLinks} />
                    </div>
                </div>
            </div>
        </header>
    )
}
