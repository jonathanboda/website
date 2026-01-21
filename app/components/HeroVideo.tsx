'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface HeroVideoProps {
  videoUrl?: string;
  fallbackColor?: string;
  posterImage?: string;
  disableVideo?: boolean;
  overlayOpacity?: number;
}

export default function HeroVideo({
  videoUrl = '/videos/hero-video.mp4',
  fallbackColor = 'from-gray-900 via-gray-800 to-black',
  posterImage,
  disableVideo = false,
  overlayOpacity = 0.4,
}: HeroVideoProps) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || disableVideo) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(() => {
        // Autoplay may be blocked by browser policy
      });
    };

    const handleError = () => {
      setVideoError(true);
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);

    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [prefersReducedMotion, disableVideo]);

  // Show gradient if video is disabled, error, or reduced motion
  if (prefersReducedMotion || videoError || disableVideo) {
    return (
      <>
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColor} z-0`} />
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />
      </>
    );
  }

  return (
    <>
      {/* Gradient background (always present, hidden when video loads) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${fallbackColor} z-0 transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterImage}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={() => setVideoError(true)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
    </>
  );
}
