'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { faqData } from '@/lib/constants/faq'
import { BlurFade } from '@/components/ui/BlurFade'

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="flex justify-center py-16 px-4 bg-white w-full">
            <div className="flex flex-col max-w-[800px] flex-1 w-full gap-10">


                <div className="flex flex-col gap-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index
                        return (
                            <BlurFade
                                key={index}
                                delay={0.1 + index * 0.05}
                                className={cn(
                                    "border rounded-xl transition-all duration-300 overflow-hidden bg-white",
                                    isOpen ? "border-primary shadow-md" : "border-[#e5e1dc] hover:border-text-muted/50"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
                                >
                                    <span className={cn(
                                        "text-lg font-bold pr-4 transition-colors",
                                        isOpen ? "text-primary" : "text-text-main"
                                    )}>
                                        {item.question}
                                    </span>
                                    <div className={cn(
                                        "flex items-center justify-center w-8 h-8 rounded-full transition-colors flex-shrink-0",
                                        isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                                    )}>
                                        <span className={cn(
                                            "material-symbols-outlined transition-transform duration-300",
                                            isOpen ? "rotate-45" : "rotate-0"
                                        )}>
                                            add
                                        </span>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-5 pb-6 text-text-muted text-base leading-relaxed whitespace-pre-line border-t border-gray-100 pt-4">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </BlurFade>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
