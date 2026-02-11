'use client'

import React, { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'motion/react'
import Link from 'next/link'

export const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAccepted = localStorage.getItem('cookieConsent')
        if (!hasAccepted) {
            // Delay showing the banner slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true')
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <m.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 flex justify-center pointer-events-none"
                >
                    <div className="pointer-events-auto max-w-4xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-primary/10 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-text-main text-sm font-medium leading-relaxed">
                                Мы используем cookie, чтобы вам было удобнее пользоваться сайтом.
                                Оставаясь с нами, вы соглашаетесь на их использование согласно нашей{' '}
                                <Link href="/privacy" className="text-primary hover:underline underline-offset-4">Политике</Link>.
                            </p>
                        </div>
                        <button
                            onClick={handleAccept}
                            className="bg-primary hover:bg-[#d67e25] text-white font-bold py-2.5 px-6 rounded-full transition-colors shadow-lg shadow-primary/20 shrink-0 text-sm active:scale-95 transform duration-100"
                        >
                            Принять
                        </button>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    )
}
