"use client";

import { m, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    blur?: string;
}

export const BlurFade = ({
    children,
    className,
    delay = 0,
    duration = 0.4,
    yOffset = 10,
    blur = "8px"
}: BlurFadeProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const variants: Variants = {
        hidden: {
            y: yOffset,
            opacity: 0,
            filter: `blur(${blur})`
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay,
                duration,
                ease: "easeOut"
            }
        }
    };

    return (
        <m.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </m.div>
    );
};
