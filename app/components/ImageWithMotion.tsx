'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface ImageWithMotionProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ImageWithMotion({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
}: ImageWithMotionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = prefersReducedMotion
    ? ''
    : isVisible
      ? 'animate-fadeInSlideUp'
      : 'opacity-0';

  return (
    <div ref={ref} className={`${animationClass} transition-all duration-700`}>
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.5) 0%, transparent 10%, transparent 90%, rgba(255,255,255,0.5) 100%)',
            maskImage:
              'radial-gradient(ellipse at center, transparent 0%, black 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, transparent 0%, black 100%)',
          }}
        />
      </div>
    </div>
  );
}
