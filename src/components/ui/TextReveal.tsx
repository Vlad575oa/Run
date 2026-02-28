"use client";

import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export const TextReveal = ({
    text,
    className,
    delay = 0,
    duration = 0.5
}: TextRevealProps) => {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: duration
            },
        },
    };

    return (
        <motion.h1
            className={cn("flex flex-wrap overflow-hidden", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="mr-[0.2em] last:mr-0 inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
};
