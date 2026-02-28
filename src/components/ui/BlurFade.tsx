"use client";

import { motion, Variants } from "motion/react";
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
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
