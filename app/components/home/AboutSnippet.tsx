'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GradientButton from '@/app/components/GradientButton';

export default function AboutSnippet() {
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
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/facility/Modern Living Space.png"
                alt="Elvenwood Interior Design Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">8+ Years</p>
                  <p className="text-sm text-gray-500">Crafting Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-orange-500/30 rounded-tl-3xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4"
            >
              About Elvenwood
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Where{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Vision
              </span>{' '}
              Meets Craftsmanship
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              At Elvenwood, we believe every space tells a story. Our team of
              passionate designers and skilled craftsmen work together to
              transform your ideas into stunning realities that blend
              functionality with aesthetic excellence.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              From contemporary minimalism to classic elegance, we specialize
              in creating personalized interiors that reflect your unique
              lifestyle and aspirations.
            </motion.p>

            {/* Feature list */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                'Custom Design Solutions',
                'Premium Quality Materials',
                'Expert Craftsmanship',
                'End-to-End Service',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <GradientButton href="/about" variant="primary">
                Discover Our Story
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
