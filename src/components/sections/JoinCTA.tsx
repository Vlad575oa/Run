"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { m, useInView } from "motion/react";
import { useRef } from "react";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then((mod) => mod.SparklesCore), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-transparent" />,
});

export const JoinCTA: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "200px" });

    return (
        <section className="w-full max-w-[1440px] mx-auto my-8 bg-gradient-to-br from-[#e65c00] to-[#f9d423] relative rounded-[4rem] overflow-hidden min-h-[400px] flex flex-col justify-between">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm opacity-50" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 opacity-50" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm opacity-50" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 opacity-50" />

            {/* Sparkles Animation - Loading only when visible */}
            <div ref={ref} className="absolute inset-0 z-0">
                {isInView && (
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1.2}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                        speed={2}
                    />
                )}
            </div>

            {/* Content Overlay */}
            <div className="w-full max-w-[95%] mx-auto text-center relative z-20 pointer-events-none px-4 flex flex-col h-full flex-grow pt-10 pb-20 justify-between">
                <h2 className="text-[5vw] leading-none font-black text-white tracking-tight pointer-events-auto whitespace-nowrap">
                    Готовы шнуровать кроссовки?
                </h2>

                <div className="mt-auto">
                    <p className="text-white text-2xl max-w-2xl mx-auto mb-10 pointer-events-auto">
                        Присоединяйтесь к чату нашего сообщества, чтобы получать анонсы и
                        фото с пробежек первыми.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full pointer-events-auto">
                        <m.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full md:w-auto"
                        >
                            <Link
                                href="https://t.me/coffeerunparty"
                                target="_blank"
                                className="inline-flex items-center justify-center h-14 w-full md:w-auto px-8 rounded-full bg-transparent border-2 border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                Хочу на пробежку
                            </Link>
                        </m.div>

                        <m.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="w-full md:w-auto"
                        >
                            <a
                                href="https://www.google.com/search?q=%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9+%D0%BA%D0%BB%D1%83%D0%B1+%D1%81%D0%B8%D0%BC%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C&sca_esv=0a01eab1e95e1a32&ei=KQ17abWKMe21wPAP9ejGoQ0&oq=%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9+%D0%BA%D0%BB%D1%83%D0%B1+%D1%81%D0%B8%D0%BC%D1%84&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIiDQsdC10LPQvtCy0L7QuSDQutC70YPQsSDRgdC40LzRhCoCCAAyBhAAGBYYHjIFECEYoAFI3i1Q2hJYpShwA3gAkAEAmAGJAaABzg2qAQQxMS42uAEByAEA-AEBmAIUoAKJDqgCAcICAhApwgIFEAAYgATCAgUQLhiABMICChAAGIAEGEMYigXCAgsQLhiABBjRAxjHAcICChAuGIAEGEMYigWYAwbxBUubAEyWRbUAkgcEOS4xMaAHnXKyBwQ2LjExuAeBDsIHBjIuOC4xMMgHNYAIAA&sclient=mobile-gws-wiz-serp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-14 w-full md:w-auto px-8 rounded-full bg-transparent border-2 border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                Беговые клубы
                            </a>
                        </m.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
