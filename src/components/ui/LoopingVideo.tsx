"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LoopingVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    maxLoops?: number;
}

export const LoopingVideo = ({
    className,
    maxLoops = 5,
    poster,
    ...props
}: LoopingVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loops, setLoops] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Lazy loading via IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // When in view, start playing if not finished
                        if (videoRef.current && !isFinished) {
                            videoRef.current.play().catch(() => { });
                        }
                    } else {
                        // When out of view, pause
                        if (videoRef.current) {
                            videoRef.current.pause();
                        }
                    }
                });
            },
            { threshold: 0.1 } // Start when 10% visible
        );

        observer.observe(video);

        const handleEnded = () => {
            setLoops((prev) => {
                const newCount = prev + 1;
                if (newCount < maxLoops) {
                    video.play().catch(() => { });
                } else {
                    setIsFinished(true);
                }
                return newCount;
            });
        };

        // Reset loops if src changes
        if (loops > 0 && video.currentTime === 0) {
            setLoops(0);
            setIsFinished(false);
        }

        video.addEventListener("ended", handleEnded);
        return () => {
            video.removeEventListener("ended", handleEnded);
            observer.disconnect();
        };
    }, [maxLoops, isFinished, loops]);

    const handleReplay = () => {
        setLoops(0);
        setIsFinished(false);
        // Small timeout to allow render to switch back to video before playing
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => { });
            }
        }, 0);
    };

    if (isFinished && poster) {
        return (
            <div
                className={cn("relative w-full h-full cursor-pointer group", className)}
                onClick={handleReplay}
                title="Play video"
            >
                <Image
                    src={poster}
                    alt="Video poster"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                        <span className="text-2xl pl-1">▶</span>
                    </div>
                </div>
            </div>
        )
    }

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={cn("relative w-full h-full", className)}>
            <video
                ref={videoRef}
                className="object-cover w-full h-full"
                preload="none"
                muted
                playsInline
                poster={poster}
                onPlaying={() => setIsPlaying(true)}
                {...props}
            />
            {!isPlaying && poster && (
                <div className="absolute inset-0 pointer-events-none">
                    <Image
                        src={poster}
                        alt="Video poster"
                        fill
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    );
};
