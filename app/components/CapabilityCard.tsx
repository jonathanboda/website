'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ImageWithMotion from './ImageWithMotion';

interface CapabilityCardProps {
  icon?: string;
  title: string;
  description: string;
  image?: string;
  variant?: 'default' | 'arch' | 'leaf-left' | 'leaf-right' | 'squircle' | 'blob';
  frame?: 'none' | 'gold' | 'glass' | 'offset';
  onDiscoverMore?: () => void;
}

export default function CapabilityCard({
  icon,
  title,
  description,
  image,
  variant = 'default',
  frame = 'none',
  onDiscoverMore,
}: CapabilityCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col items-center gap-0 p-0 rounded-3xl transition-all duration-500 overflow-hidden ${isVisible ? 'animate-fallFromTop' : 'opacity-0'
        }`}
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      {/* Image Section - Top */}
      {image && (
        <div className="w-full relative h-64 flex-shrink-0">
          <ImageWithMotion
            src={image}
            alt={title}
            variant={variant}
            frame={frame}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content Section - Bottom */}
      <div className="w-full relative z-20 flex flex-col p-8">
        {/* Title Background Effect */}
        <div className="absolute -top-10 -left-10 w-64 h-64 opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/facility/Strategic Planning INTERIOR.jpg" // Generic background for texture
            alt="texture"
            fill
            className="object-cover grayscale"
          />
        </div>

        {icon && !image && (
          <div className="w-16 h-16 mb-6">
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl shadow-lg shadow-orange-500/30 flex items-center justify-center">
              {/* Icon placeholder if needed */}
            </div>
          </div>
        )}

        <div className="relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors font-serif tracking-wide relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500" />
          </h3>

          {/* Subtle large text background behind title */}
          <span className="absolute -top-6 -left-4 text-5xl font-serif font-bold text-gray-100 opacity-50 select-none -z-10 pointer-events-none whitespace-nowrap">
            {title.split(' ')[0]}
          </span>
        </div>

        <p className="text-gray-600 text-base leading-relaxed font-light tracking-wide mt-4">
          {description}
        </p>

        <div className="mt-6">
          <button
            onClick={onDiscoverMore}
            className="text-orange-500 font-semibold uppercase tracking-widest text-xs hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all flex items-center gap-2 group-hover:gap-4"
          >
            Discover More <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
