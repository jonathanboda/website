'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface RoomShowcaseProps {
  onTellYourStory?: () => void;
}

function RoomCard({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Card with rounded corners, shadow, and border */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function RoomShowcase({ onTellYourStory }: RoomShowcaseProps) {
  const rooms = [
    {
      id: 1,
      category: 'LIVING SPACES',
      title: 'Living Room — Gather & Relax',
      description: 'Our design living room for you—a timeless setting where lighting, textures, and proportions combine. Lighting is layered across ceilings, task, and accent lighting combined with smart controls to create mood.',
      features: ['Ambient Lighting', 'Smart Controls', 'Ergonomic Layout'],
      image: '/images/facility/Living Room — Gather & Relax.avif',
      layout: 'left'
    },
    {
      id: 2,
      category: 'CULINARY SPACES',
      title: 'Kitchen — Engineered For Everyday',
      description: 'Advanced think elegant, functional and continuous working perfect for smooth cooking workflows. Intelligent cabinetry manufactured in our facility with 2-3 pieces per installation. Precision-crafted surfaces and hardware ensure durability.',
      features: ['Smart Storage', 'Premium Materials', 'Functional Layout'],
      image: '/images/facility/Kitchen — Engineered For Everyday.jpg',
      layout: 'right'
    },
    {
      id: 3,
      category: 'PRIVATE RETREATS',
      title: 'Master Bedroom — Sanctuary by Design',
      description: 'Spaces for serenity, soft textures, subtle in-aesthetic soft under-statement. Everything we design focuses on quality and timeless calm architecture, restful, quiet, and soft light.',
      features: ['Ambient Lighting', 'Premium Textiles', 'Minimalist Design'],
      image: '/images/facility/Master Bedroom — Sanctuary by Design.jpg',
      layout: 'left'
    },
    {
      id: 4,
      category: 'CHILDREN\'S SPACES',
      title: 'Kid Room — Smart & Safe',
      description: 'Playful, creative, inspiring and completely functional. Includes practical and scalable for growing kids and future. Design is a smart arrangement to scale with all the age.',
      features: ['Safety First', 'Smart Storage', 'Growth-Ready'],
      image: '/images/facility/Kid Room — Smart & Safe.jpg',
      layout: 'right'
    },
    {
      id: 5,
      category: 'WORK SPACES',
      title: 'Home Office — Focus of Style',
      description: 'Crafted for creative minds. Designed for productivity by proportions, natural light, surfaces, and quiet comfort. Design is a work center within a quiet focal and soft ambient.',
      features: ['Ergonomic Design', 'Natural Light', 'Distraction-Free'],
      image: '/images/facility/Home Office — Focus of Style.webp',
      layout: 'left'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured Room Designs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of beautifully designed spaces across different room types and aesthetic preferences.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="space-y-24">
          {rooms.map((room) => (
            <div key={room.id} className="group">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${room.layout === 'right' ? 'lg:auto-cols-max' : ''}`}>

                {/* Image - Left or Right based on layout */}
                <div className={`relative h-80 md:h-[420px] ${room.layout === 'right' ? 'lg:order-2' : ''}`}>
                  <RoomCard
                    src={room.image}
                    alt={room.title}
                  />
                </div>

                {/* Content */}
                <div className={room.layout === 'right' ? 'lg:order-1' : ''}>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                      {room.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {room.title}
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {room.features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-32 py-20 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif">
            "Your home should tell your story. We'll help you write it beautifully."
          </p>
          <button
            onClick={onTellYourStory}
            className="btn-luxury rounded-full"
          >
            Tell Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
