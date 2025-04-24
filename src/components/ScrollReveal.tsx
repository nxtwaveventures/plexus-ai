"use client";

import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
    children: ReactNode;
    width?: "full" | "auto";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
    className?: string;
}

export default function ScrollReveal({
    children,
    width = "full",
    delay = 0,
    direction = "up",
    duration = 0.5,
    once = true,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
    const controls = useAnimation();

    const getDirection = () => {
        switch (direction) {
            case "up":
                return { y: 30 };
            case "down":
                return { y: -30 };
            case "left":
                return { x: 30 };
            case "right":
                return { x: -30 };
            case "none":
                return {};
            default:
                return { y: 30 };
        }
    };

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                ...getDirection(),
                transition: {
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1],
                },
            });
        }
    }, [isInView, controls, delay, duration, direction]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...getDirection() }}
            animate={controls}
            className={`${width === "full" ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
} 