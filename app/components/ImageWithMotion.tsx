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
  variant?: 'default' | 'arch' | 'leaf-left' | 'leaf-right' | 'squircle' | 'blob';
  frame?: 'none' | 'gold' | 'glass' | 'offset';
}

export default function ImageWithMotion({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  variant = 'default',
  frame = 'none',
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const centerX = ref.current ? ref.current.offsetWidth / 2 : 0;
  const centerY = ref.current ? ref.current.offsetHeight / 2 : 0;
  const rotateX = mousePosition.y ? (mousePosition.y - centerY) / 25 : 0;
  const rotateY = mousePosition.x ? (centerX - mousePosition.x) / 25 : 0;

  const animationClass = prefersReducedMotion
    ? ''
    : isVisible
      ? 'animate-fallFromTop'
      : '';

  const getShapeClass = () => {
    switch (variant) {
      case 'arch': return 'shape-arch';
      case 'leaf-left': return 'shape-leaf-left';
      case 'leaf-right': return 'shape-leaf-right';
      case 'squircle': return 'shape-squircle';
      case 'blob': return 'shape-blob';
      default: return 'rounded-2xl';
    }
  };

  const getFrameClass = () => {
    switch (frame) {
      case 'gold': return 'card-frame-gold';
      case 'glass': return 'card-frame-glass';
      case 'offset': return 'card-frame-offset';
      default: return '';
    }
  };

  const shapeClass = getShapeClass();
  const frameClass = getFrameClass();

  return (
    <div
      ref={ref}
      className={`${animationClass} transition-all duration-700 perspective-1000 ${frameClass} ${shapeClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: mousePosition.x && !prefersReducedMotion
          ? `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
          : undefined,
        transition: mousePosition.x ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        opacity: isVisible ? undefined : 0,
      }}
    >
      <div className={`relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${isVisible ? 'animate-floatGently' : ''} ${shapeClass} ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`w-full h-auto object-cover transform hover:scale-110 transition-transform duration-700 ${shapeClass}`}
          style={{
            border: 'none',
          }}
        />
        {/* Premium gradient overlay */}
        <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 ${shapeClass}`} />

        {/* Shine Effect */}
        <div className={`absolute inset-0 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-500 z-10 ${shapeClass}`}>
          <div className="absolute inset-0 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </div>
      </div>
    </div>
  );
}
