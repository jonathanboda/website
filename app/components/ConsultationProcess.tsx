'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ConsultationProcessProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationProcess({ isOpen, onClose }: ConsultationProcessProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const steps = [
    {
      number: 1,
      title: 'Connect With Us',
      description: 'Say hi to start your design journey.',
      icon: '👋',
    },
    {
      number: 2,
      title: 'Share Your Details',
      description: 'Fill the form with basic info & property details.',
      icon: '📝',
    },
    {
      number: 3,
      title: 'Initial Call',
      description: 'We call to understand your vision.',
      icon: '📞',
    },
    {
      number: 4,
      title: 'Submit Floor Plan',
      description: 'Share your layout so we match the right designer.',
      icon: '📐',
    },
    {
      number: 5,
      title: 'Meet Your Designer',
      description: 'Discuss lifestyle & aesthetic needs.',
      icon: '🤝',
    },
    {
      number: 6,
      title: 'Design Proposal',
      description: 'Receive a tailored concept & estimate.',
      icon: '✨',
    },
    {
      number: 7,
      title: 'Feedback & Refinement',
      description: 'Iterate until the proposal fits your taste.',
      icon: '🔄',
    },
    {
      number: 8,
      title: 'Booking Confirmation (10%)',
      description: 'Pay 10% to join the Elvenwood family.',
      icon: '✅',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/placeholder.jpg)',
          filter: 'blur(8px)',
        }}
      />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full h-full overflow-y-auto px-4 py-8 md:py-16"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:top-8 md:right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Your Path to <span className="text-orange-400">Refinement</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            From first hello to flawless execution—your journey through 8 seamless steps
          </motion.p>
        </div>

        {/* Diagonal Steps Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Connector Line (Desktop) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 100 100 L 1400 900"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="10 10"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className={`relative ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
                  style={{
                    marginTop: `${index * 2}rem`,
                  }}
                >
                  {/* Card */}
                  <div className="group relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100/50 hover:border-amber-300/70 hover:scale-105">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg viewBox="0 0 100 100" fill="currentColor" className="text-orange-500">
                        <circle cx="50" cy="50" r="40" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="max-w-6xl mx-auto mt-16 text-center"
        >
          <button
            onClick={onClose}
            className="btn-luxury rounded-full text-lg px-10 py-5"
          >
            Ready to Begin? Schedule Your Consultation
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
