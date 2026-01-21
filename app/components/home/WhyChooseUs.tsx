'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  {
    title: 'Bespoke Atelier',
    description: 'Every design is uniquely crafted for you. No templates, no compromises - just personalized excellence tailored to your lifestyle.',
    image: '/images/facility/Bespoke Carpentry.jpg',
    accent: 'Custom Design',
  },
  {
    title: 'Transparent Collaboration',
    description: 'Stay connected throughout the journey. Real-time updates, clear communication, and complete visibility into every stage.',
    image: '/images/facility/Strategic Planning INTERIOR.jpg',
    accent: 'Open Process',
  },
  {
    title: 'Lifetime Support',
    description: 'Our relationship extends beyond project completion. Enjoy dedicated support and maintenance for years to come.',
    image: '/images/facility/Installation & Handover.webp',
    accent: 'Ongoing Care',
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-900 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-orange-400 font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Why Elvenwood
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Elvenwood
            </span>{' '}
            Difference
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Discover why discerning homeowners choose us to transform their
            spaces into extraordinary living experiences.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                {/* Accent Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {reason.accent}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
