'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FacilityCard {
  id: string;
  src: string;
  alt: string;
  label: string;
  layer: 'foreground' | 'midground' | 'background';
  initialX: number;
  initialY: number;
}

const facilityCards: FacilityCard[] = [
  {
    id: 'img-01',
    src: '/images/process/biesse_RoverCutGo_SF_D5.webp',
    alt: 'Modular kitchen layout — Advanced CNC cutting machine in action',
    label: 'Advanced CNC Cutting',
    layer: 'foreground',
    initialX: -10,
    initialY: 20,
  },
  {
    id: 'img-02',
    src: '/images/process/RoverEdgeGoSS_C_D5_i5.webp',
    alt: 'Modular kitchen layout — Precision edge banding equipment',
    label: 'Precision Edge Banding',
    layer: 'midground',
    initialX: 25,
    initialY: -10,
  },
  {
    id: 'img-03',
    src: '/images/process/RoverMultiUpMCS_D5_i5.webp',
    alt: 'Modular kitchen layout — 5-axis machining center',
    label: '5-Axis Machining',
    layer: 'background',
    initialX: 60,
    initialY: 30,
  },
  {
    id: 'img-04',
    src: '/images/process/plywood lamination.png',
    alt: 'Modular kitchen layout — Plywood lamination pressing machine',
    label: 'Plywood Lamination',
    layer: 'foreground',
    initialX: 75,
    initialY: -5,
  },
];

// Parallax speed multipliers
const layerSpeeds = {
  foreground: 1.5,    // Fastest
  midground: 1.0,     // Medium
  background: 0.5,    // Slowest
};

// Z-index for layering
const layerZIndex = {
  foreground: 30,
  midground: 20,
  background: 10,
};

export default function FacilityParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    const handleScroll = () => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress from when element enters view to when it leaves
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Progress: 0 when element just enters bottom, 1 when element exits top
      const progress = Math.max(0, Math.min(1,
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCardTransform = (card: FacilityCard) => {
    const speed = layerSpeeds[card.layer];
    // Horizontal movement based on scroll (cards move left as you scroll down)
    const horizontalOffset = (scrollProgress - 0.5) * 200 * speed;
    // Slight vertical parallax
    const verticalOffset = (scrollProgress - 0.5) * 30 * speed;

    return {
      transform: `
        translateX(${card.initialX + horizontalOffset}%)
        translateY(${card.initialY + verticalOffset}px)
        perspective(1000px)
        rotateX(2deg)
        rotateY(${(scrollProgress - 0.5) * 5 * speed}deg)
      `,
      zIndex: layerZIndex[card.layer],
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Cards Container */}
      <div className="relative w-full h-full">
        {facilityCards.map((card) => {
          const { transform, zIndex } = getCardTransform(card);

          return (
            <div
              key={card.id}
              className={`
                absolute w-[280px] h-[380px]
                transition-transform duration-100 ease-out
                ${isInView ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transform,
                zIndex,
                top: '50%',
                left: '0',
                marginTop: '-190px',
                transitionProperty: 'opacity',
                transitionDuration: '0.5s',
              }}
            >
              {/* Card with perspective tilt (top narrower than bottom) */}
              <div
                className="relative w-full h-full rounded-xl overflow-hidden"
                style={{
                  // Perspective card effect - top slightly narrower
                  transform: 'perspective(800px) rotateX(-2deg)',
                  transformOrigin: 'center bottom',
                  // Soft drop shadow
                  boxShadow: '0 14px 30px rgba(0, 0, 0, 0.25)',
                  // Faint outer stroke
                  border: '1.5px solid #f1f1f1',
                  // Rounded corners
                  borderRadius: '12px',
                }}
              >
                {/* Image */}
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="280px"
                  style={{
                    // Slight warm color grading
                    filter: 'saturate(1.05) contrast(1.02) brightness(1.02)',
                  }}
                />

                {/* Corner vignette overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.15) 100%)',
                  }}
                />

                {/* Micro-grain texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Bottom gradient with label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4">
                  <p className="text-white text-sm font-semibold tracking-wide">
                    {card.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-400 text-xs">
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}
