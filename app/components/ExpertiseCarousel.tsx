'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ExpertiseItem {
  title: string;
  description: string;
  image: string;
}

interface ExpertiseCarouselProps {
  items: ExpertiseItem[];
  onCardClick?: () => void;
}

export default function ExpertiseCarousel({ items, onCardClick }: ExpertiseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + items.length) % items.length);

    // Calculate position relative to center
    let position = normalizedDiff;
    if (position > items.length / 2) position -= items.length;

    const isCenter = position === 0;
    const isLeft = position === -1 || position === items.length - 1;
    const isRight = position === 1;
    const isFarLeft = position === -2 || position === items.length - 2;
    const isFarRight = position === 2;

    if (isCenter) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (isLeft) {
      return {
        transform: 'translateX(-110%) scale(0.85)',
        zIndex: 20,
        opacity: 0.9,
      };
    } else if (isRight) {
      return {
        transform: 'translateX(110%) scale(0.85)',
        zIndex: 20,
        opacity: 0.9,
      };
    } else if (isFarLeft) {
      return {
        transform: 'translateX(-200%) scale(0.75)',
        zIndex: 10,
        opacity: 0.6,
      };
    } else if (isFarRight) {
      return {
        transform: 'translateX(200%) scale(0.75)',
        zIndex: 10,
        opacity: 0.6,
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.5)',
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-900 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-orange-400 font-bold">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-white font-serif">
            Comprehensive Interior Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our interior designers create personalized homes that fit your style, needs, and budget.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[600px] flex items-center justify-center">
          {items.map((item, index) => {
            const style = getCardStyle(index);
            return (
              <div
                key={index}
                className="absolute w-[320px] transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: style.transform,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                }}
                onClick={onCardClick}
              >
                {/* Image with slight curve - no border/background */}
                <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content below image */}
                <div className="pt-5">
                  <h3 className="text-xl font-bold text-orange-400 mb-2 font-serif italic">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-orange-500 w-6'
                  : 'bg-gray-600 hover:bg-gray-500'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
