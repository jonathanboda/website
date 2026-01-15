'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface DiagonalDesignPhaseProps {
  isVisible: boolean;
}

export default function DiagonalDesignPhase({ isVisible }: DiagonalDesignPhaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      heading: 'Site Survey & Measurements',
      text: 'Our technical team visits your home to take accurate measurements, assess site conditions, and capture reference photographs.',
      icon: '📐'
    },
    {
      heading: 'Concept Discussion – Meeting 1',
      text: 'We finalize the spatial layout, flow, and unit placements tailored to your lifestyle.',
      icon: '💭'
    },
    {
      heading: 'Design Development – Meeting 2',
      text: 'Together, we refine module selections, material preferences, and receive an initial estimate.',
      icon: '✏️'
    },
    {
      heading: 'Material & Finish Selection – Meeting 3',
      text: 'Finalize materials, finishes, fittings, appliances, and design direction to generate a refined quote.',
      icon: '🎨'
    },
    {
      heading: 'Detailing & Visualization',
      text: 'Our designers prepare detailed technical drawings, 3D renders, and final design documentation for your approval.',
      icon: '📊'
    },
    {
      heading: 'Order Confirmation',
      text: 'After incorporating your feedback, we present the final drawings and final estimate.',
      icon: '✅'
    }
  ];

  useEffect(() => {
    if (isVisible && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className="mt-20 mb-16 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Design Phase
        </h2>
        <p className="text-2xl text-orange-500 italic font-light">
          Where ideas take shape and every detail is crafted with intention.
        </p>
      </motion.div>

      {/* Diagonal SVG Connector Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        style={{ zIndex: 0 }}
        viewBox="0 0 1200 1600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 100,50 L 1100,1550"
          stroke="url(#diagonalGradient)"
          strokeWidth="3"
          strokeDasharray="15 15"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>

      {/* Diagonal Steps Grid */}
      <div className="relative z-10 space-y-8 md:space-y-0">
        {sections.map((section, index) => {
          const isLeftAligned = index % 2 === 0;
          const diagonalOffset = index * 80; // Pixels to offset diagonally

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeftAligned ? -100 : 100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.2,
                type: 'spring',
                stiffness: 80,
                damping: 15
              }}
              className={`
                relative md:absolute w-full md:w-[500px] lg:w-[580px]
                ${isLeftAligned ? 'md:left-0' : 'md:right-0'}
              `}
              style={{
                top: `${diagonalOffset}px`,
              }}
            >
              {/* Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-amber-300 transform hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                  {section.icon}
                </div>

                {/* Heading */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {section.heading}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.text}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Spacer for absolute positioned elements */}
      <div className="h-[600px] md:h-[700px]" />

      {/* Milestone Payment Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="relative z-20 mt-12"
      >
        <div className="bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 rounded-3xl p-10 shadow-2xl text-white text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.7, type: 'spring', stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-4xl">💰</span>
            </div>
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            You Pay 50% Milestone
          </h3>
          <p className="text-xl md:text-2xl font-light text-amber-50">
            This secures your project and allows us to begin production.
          </p>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />
        </div>
      </motion.div>
    </div>
  );
}
