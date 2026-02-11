"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface VideoIconProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    maxLoops?: number;
}

export const VideoIcon = ({
    className,
    maxLoops = 10,
    ...props
}: VideoIconProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loops, setLoops] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnded = () => {
            setLoops((prev) => {
                const newCount = prev + 1;
                if (newCount < maxLoops) {
                    video.play().catch(() => { });
                }
                return newCount;
            });
        };

        video.addEventListener("ended", handleEnded);
        return () => video.removeEventListener("ended", handleEnded);
    }, [maxLoops]);

    return (
        <video
            ref={videoRef}
            className={cn("object-cover w-full h-full", className)}
            autoPlay
            muted
            playsInline
            {...props}
        />
    );
};
