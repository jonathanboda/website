'use client';

import { useEffect, useRef, useState } from 'react';

export default function Facility3DShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        // Auto-play when in view, pause when out of view
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Autoplay may be blocked, that's okay
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Video Container */}
      <video
        ref={videoRef}
        className={`w-full h-full object-contain transition-opacity duration-700 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/facility-3d.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay gradient for polish */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/10 via-transparent to-white/5" />

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange-500/30 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-orange-500/30 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-orange-500/30 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-orange-500/30 rounded-br-lg" />
    </div>
  );
}
