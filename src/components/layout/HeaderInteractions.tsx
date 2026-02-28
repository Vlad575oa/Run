'use client'

import { motion } from 'motion/react'

export const NavUnderline = () => {
    return (
        <motion.div
            layoutId="nav-underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            initial={false}
        />
    )
}

export const ShimmerButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <motion.div
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
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex relative min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary shadow-sm hover:shadow-orange-500/40 hover:shadow-lg transition-all duration-300 border border-white/10"
            >
                <motion.div
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
                    {children}
                </span>
            </a>
        </motion.div>
    )
}
