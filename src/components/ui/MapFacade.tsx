"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MapFacadeProps {
    src: string;
    title: string;
    className?: string;
    imageSrc?: string;
}

export const MapFacade: React.FC<MapFacadeProps> = ({ src, title, className, imageSrc }) => {
    const [shouldLoad, setShouldLoad] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (imageSrc) return; // No need for observer if we have an image

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Preload when map is close to viewport
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [imageSrc]);

    return (
        <div
            ref={containerRef}
            className={cn("w-full h-full bg-gray-100 flex items-center justify-center relative", className)}
        >
            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                    loading="lazy"
                />
            ) : (
                shouldLoad ? (
                    <iframe
                        src={src}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="w-full h-full pointer-events-none"
                        title={title}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <span className="text-gray-400 font-medium text-sm">Загрузка карты...</span>
                    </div>
                )
            )}
        </div>
    );
};
