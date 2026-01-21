'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Projects Completed', suffix: '' },
  { number: '8+', label: 'Years of Excellence', suffix: '' },
  { number: '50+', label: 'Cities Served', suffix: '' },
  { number: '100', label: 'Quality Assurance', suffix: '%' },
];

export default function TrustIndicators() {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="relative inline-block">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">
                    {stat.suffix}
                  </span>
                )}
                {/* Decorative underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' as const }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full origin-left"
                />
              </div>
              <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
