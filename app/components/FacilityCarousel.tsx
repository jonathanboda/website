'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
  label: string;
}

const images: CarouselImage[] = [
  { src: '/images/process/biesse_RoverCutGo_SF_D5.webp', alt: 'Rover Cut Go', label: 'Advanced CNC Cutting' },
  { src: '/images/process/RoverEdgeGoSS_C_D5_i5.webp', alt: 'Rover Edge Go', label: 'Precision Edge Banding' },
  { src: '/images/process/RoverMultiUpMCS_D5_i5.webp', alt: 'Rover Multi Go', label: '5-Axis Machining' },
  { src: '/images/process/plywood lamination.png', alt: 'Laminating Press', label: 'Plywood Lamination' },
];

export default function FacilityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gray-900 shape-squircle" style={{ perspective: '1000px' }}>
      {/* Image Container with 3D Transform */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-out transform ${index === currentIndex
              ? 'opacity-100 scale-100 translate-z-0'
              : index === (currentIndex - 1 + images.length) % images.length
                ? 'opacity-0 scale-95 -translate-x-8 translate-z-negative'
                : 'opacity-0 scale-105 translate-x-8 translate-z-negative'
              }`}
            style={{
              transform:
                index === currentIndex
                  ? 'perspective(1000px) rotateY(0deg) scale(1)'
                  : index === (currentIndex - 1 + images.length) % images.length
                    ? 'perspective(1000px) rotateY(35deg) scale(0.9)'
                    : 'perspective(1000px) rotateY(-35deg) scale(0.9)',
              filter: index === currentIndex ? 'brightness(1)' : 'brightness(0.7)',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={index === currentIndex}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Bottom Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4 z-10">
        <p className="text-white text-sm font-semibold">
          {images[currentIndex].label}
        </p>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 animate-gradient-xy w-6'
              : 'bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-gray-900/80 to-black/80 hover:from-gray-800 hover:to-black text-white p-2 rounded-full transition animate-gradient-xy"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-gray-900/80 to-black/80 hover:from-gray-800 hover:to-black text-white p-2 rounded-full transition animate-gradient-xy"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
