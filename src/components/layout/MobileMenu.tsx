'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

interface NavLink {
    name: string
    href: string
}

interface MobileMenuProps {
    navLinks: NavLink[]
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center size-10 rounded-full hover:bg-black/5"
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background-light border-b border-[#f4f2f0] shadow-lg flex flex-col p-4 gap-4 z-50"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                className="text-text-main text-base font-medium hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0"
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://t.me/coffeerunparty"
                            className="w-full mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary shadow-sm hover:bg-[#d67e25] transition-colors flex"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="truncate text-white font-black tracking-wide">
                                Хочу на пробежку
                            </span>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
