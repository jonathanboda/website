'use client';

import { motion } from 'framer-motion';
import HeroVideo from '@/app/components/HeroVideo';
import GradientButton from '@/app/components/GradientButton';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <HeroVideo
        videoUrl="/videos/hero-video.mp4"
        fallbackColor="from-slate-900 via-gray-900 to-black"
        overlayOpacity={0.5}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium tracking-wider uppercase">
              Premium Interior Design
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 hero-heading"
          >
            Crafting Spaces That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Inspire Living
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed text-shadow-subtitle"
          >
            Transform your vision into reality with bespoke interior solutions.
            From concept to completion, we create timeless spaces that reflect
            your unique style.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GradientButton onClick={onOpenEnquiry} variant="primary">
              Start Your Journey
            </GradientButton>
            <GradientButton href="/explore-rooms" variant="outline" className="border-white text-white hover:text-white">
              Explore Our Work
            </GradientButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-3 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
