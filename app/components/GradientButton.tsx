'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface GradientButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'outline';
}

export default function GradientButton({
    children,
    onClick,
    href,
    className = '',
    type = 'button',
    variant = 'primary',
}: GradientButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed";

    const primaryStyles = "text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-[length:200%_auto] animate-gradient-x shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-orange-500/30";

    // Note: For outline, we use a different approach in CSS or a wrapper, but here's a clean implementation
    // Since we want the specific linear gradient animation requested, we'll use the classes defined in globals.css
    // or inline styles if needed. But let's stick to the classes we just added/modified in globals.css for consistency.

    const variantClass = variant === 'primary' ? 'btn-luxury' : 'btn-outline';

    if (href) {
        return (
            <Link href={href} className={`${variantClass} ${className}`}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${variantClass} ${className}`}
        >
            {children}
        </button>
    );
}
