"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LoopingVideo } from "@/components/ui/LoopingVideo";
import { BlurFade } from "@/components/ui/BlurFade";

interface MediaItem {
    type: "video" | "image";
    src: string;
    poster?: string;
    title?: string;
    description?: string;
    className?: string;
    alt?: string;
}

const ITEMS: MediaItem[] = [
    // Hero Video (Vertical) - Large feature
    {
        type: "video",
        src: "/5.mp4",
        poster: "/images/hero_poster.webp",
        title: "Атмосфера наших пробежек",
        description: "Больше чем просто бег. Это встречи друзей.",
        className: "md:col-span-2 md:row-span-2", // Vertical feature
    },
    // Photo 1
    {
        type: "video",
        src: "/2.mp4",
        poster: "/images/tuesday_poster.webp",
        title: "Cуббота 9:00",
        description: "",
        className: "md:col-span-1 md:row-span-1",
    },
    // Video 2 - Square/Small
    {
        type: "video",
        src: "/4.mp4",
        poster: "/images/tuesday_poster.webp",
        title: "Вторник 19:00",
        description: "",
        className: "md:col-span-1 md:row-span-1",
    },
    // Photo 2 - Wide
    {
        type: "video",
        src: "/3.mp4",
        poster: "/images/tuesday_poster.webp",
        title: "Четверг 19:00",
        description: "",
        className: "md:col-span-1 md:row-span-1",
    },
    // Video 3 - Vertical/Tall
    {
        type: "video",
        src: "/4.mp4",
        poster: "/images/saturday_poster.webp",
        title: "Классно",
        description: "Утро в парке.",
        className: "md:col-span-1 md:row-span-2",
    },
    // Photo 3
    {
        type: "video",
        src: "/4.mp4",
        poster: "/images/saturday_poster.webp",
        title: "Весело",
        description: "Утро в парке.",
        className: "md:col-span-1 md:row-span-2",
    },
    // Photo 4
    {
        type: "video",
        src: "/2.mp4",
        poster: "/images/saturday_poster.webp",
        title: "Позитив",
        className: "md:col-span-1 md:row-span-1",
    },
    // Photo 5
    {
        type: "video",
        src: "/4.mp4",
        poster: "/images/saturday_poster.webp",
        title: "Настроение",
        className: "md:col-span-1 md:row-span-1",
    },
    // Photo 6
    {
        type: "video",
        src: "/3.mp4",
        poster: "/images/saturday_poster.webp",
        title: "Добро",
        className: "md:col-span-1 md:row-span-1",
    },
    // Video 4 - Footer Fill
    {
        type: "video",
        src: "/2.mp4",
        poster: "/images/tuesday_poster.webp",
        title: "вайб",
        className: "md:col-span-1 md:row-span-1",
    },
    // Video 5 - Footer Fill
    {
        type: "video",
        src: "/5.mp4",
        poster: "/images/saturday_poster.webp",
        title: "энергия",
        className: "md:col-span-1 md:row-span-1",
    },

];

export function MediaSection() {
    return (
        <section className="py-10 md:py-16 bg-white w-full flex justify-center">
            <Container className="w-full">
                <div className="flex flex-col gap-12">

                    <BlurFade delay={0.2} className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[280px] gap-4">
                        {ITEMS.map((item, index) => (
                            <div
                                key={index}
                                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 w-full min-h-[200px] ${item.className}`}
                            >
                                {item.type === "video" ? (
                                    <>
                                        <div className="absolute inset-0 bg-gray-100">
                                            <LoopingVideo
                                                src={item.src}
                                                poster={item.poster}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            {item.title && <h3 className="text-white font-bold text-lg md:text-xl">{item.title}</h3>}
                                            {item.description && <p className="text-white/80 text-sm md:text-base">{item.description}</p>}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Image
                                            src={item.src}
                                            alt={item.alt || ""}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    </>
                                )}
                            </div>
                        ))}
                    </BlurFade>
                </div>
            </Container>
        </section>
    );
}
