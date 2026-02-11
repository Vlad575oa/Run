'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { m } from 'motion/react'

export const Header: React.FC = () => {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    const navLinks = [
        { name: 'Главная', href: '/' },
        { name: 'Медиа', href: '/media' },
        // { name: 'Пробежки', href: '/runs' },
        { name: 'Результаты', href: '/results' },
        { name: 'Блог', href: '/blog' },
        { name: 'Города', href: '/cities' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Магазин', href: '/shop' },
        { name: 'Контакты', href: '/contacts' },
    ]

    return (
        <div className="w-full border-b border-[#f4f2f0] bg-background-light/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
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

                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                                    {isActive && (
                                        <m.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                            initial={false}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex items-center gap-4">


                        <m.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative group"
                        >
                            <Link
                                href="https://t.me/coffeerunparty"
                                className="hidden sm:flex relative min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary shadow-sm hover:shadow-orange-500/40 hover:shadow-lg transition-all duration-300 border border-white/10"
                            >
                                {/* Shimmer Effect */}
                                <m.div
                                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-150%] group-hover:duration-700"
                                    animate={{
                                        translateX: ["150%", "-150%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 1
                                    }}
                                />
                                <span className="relative z-10 truncate text-white font-black tracking-wide">
                                    Хочу на пробежку
                                </span>
                            </Link>
                        </m.div>

                        <button
                            onClick={toggleMenu}
                            className="lg:hidden flex items-center justify-center size-10 rounded-full hover:bg-black/5"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-background-light border-b border-[#f4f2f0] shadow-lg flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            className="text-text-main text-base font-medium hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0"
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://t.me/coffeerunparty"
                        className="w-full mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary shadow-sm hover:bg-[#d67e25] transition-colors flex"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span className="truncate text-white font-black tracking-wide">
                            Хочу на пробежку
                        </span>
                    </Link>
                </div>
            )}
        </div>
    )
}
