'use client';

import Image from 'next/image';
import ImageWithMotion from './ImageWithMotion';
import ScrollAnimation from './ScrollAnimation';

export default function ProcessHeader() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderImage: 'linear-gradient(to right, #fbbf24, #d97706, #fbbf24) 1' }}
    >
      <div className="absolute inset-0 z-0" style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}>
        <div className="w-full h-full" style={{ animation: 'parallax3D 20s ease-in-out infinite' }}>
          <Image
            src="/images/facility/process.jpg"
            alt="Process Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/60 via-teal-700/55 to-cyan-800/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <ScrollAnimation variant="slideUp">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.7)' }}>
              Our Detailed Process
            </h2>
          </ScrollAnimation>
          <ScrollAnimation variant="fadeIn" delay={0.2}>
            <p className="text-xl text-white max-w-2xl mx-auto font-semibold" style={{ textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 1px 8px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
              Explore our comprehensive 4-step journey that transforms your vision into a beautifully crafted home with precision and care.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
