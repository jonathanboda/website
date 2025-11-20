'use client';

import { useReducedMotion } from '@/app/hooks/useReducedMotion';

export default function WatermarkLayer() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 pointer-events-none overflow-hidden">
      {/* Left watermark */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap text-gray-200 text-xs font-light opacity-40 animate-moveVertical">
        ELVENWOOD INTERIOR • LUXURY DESIGN •
      </div>

      {/* Right watermark */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-1/2 rotate-90 whitespace-nowrap text-gray-200 text-xs font-light opacity-40 animate-moveVertical">
        ELVENWOOD INTERIOR • LUXURY DESIGN •
      </div>
    </div>
  );
}
