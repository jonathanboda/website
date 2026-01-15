'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GradientButton from '@/app/components/GradientButton';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
}

export default function FinalCTA({ onOpenEnquiry }: FinalCTAProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/facility/Living Room — Gather & Relax.avif"
          alt="Luxury interior background"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        {/* Gradient overlay that blends to white at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" style={{ height: '30%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-white/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Limited Time Consultation Offer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Your Space?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
          >
            Take the first step towards your dream interior. Book a free
            consultation with our design experts and discover how we can bring
            your vision to life.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 mb-10"
          >
            {[
              'Free Design Consultation',
              '3D Visualization',
              'No Obligation Quote',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <GradientButton onClick={onOpenEnquiry} variant="primary">
              Book Free Consultation
            </GradientButton>
            <GradientButton href="/contact" variant="outline" className="border-white text-white hover:text-white">
              Contact Us
            </GradientButton>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">500+</span> happy
                homeowners have transformed their spaces with us
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 right-10 w-40 h-40 border border-orange-500/20 rounded-full hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-20 right-20 w-60 h-60 border border-orange-500/10 rounded-full hidden lg:block"
      />
    </section>
  );
}
