import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
}

type Direction = NonNullable<ScrollRevealProps['direction']>;
type Offset = { x?: number; y?: number };

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    className = ''
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directionOffset: Record<Direction, Offset> = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 }
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...offset
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : offset.x ?? 0,
                y: isInView ? 0 : offset.y ?? 0
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 