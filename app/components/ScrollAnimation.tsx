'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    variant?: 'fadeIn' | 'slideUp' | 'scaleIn' | 'slideRight' | 'slideLeft';
    delay?: number;
    duration?: number;
    viewport?: { once?: boolean; amount?: number };
}

export default function ScrollAnimation({
    children,
    className = '',
    variant = 'slideUp',
    delay = 0,
    duration = 0.6,
    viewport = { once: false, amount: 0.2 },
}: ScrollAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        slideUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
        },
        slideRight: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        },
        slideLeft: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
    };

    const selectedVariant = variants[variant];

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration, delay, ease: 'easeOut' }}
            variants={selectedVariant}
            className={className}
        >
            {children}
        </motion.div>
    );
}
