'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function OurImpact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: 500,
      suffix: '+',
      label: 'COMPLETED PROJECTS',
      sublabel: 'Across India',
      color: 'from-gray-900 to-gray-700',
      barColor: 'bg-gray-900'
    },
    {
      number: 8,
      suffix: '+',
      label: 'YEARS OF EXCELLENCE',
      sublabel: 'Since 2016',
      color: 'from-gray-700 to-gray-500',
      barColor: 'bg-gray-700'
    },
    {
      number: 100,
      suffix: '%',
      label: 'QUALITY ASSURANCE',
      sublabel: 'Guaranteed',
      color: 'from-green-600 to-green-500',
      barColor: 'bg-green-600'
    }
  ];

  const bottomStats = [
    { number: '50+', label: 'CITIES SERVED' },
    { number: '24/7', label: 'SUPPORT' }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Company Excellence */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 left-0 w-16 h-1 bg-orange-500" />
              <h2 className="text-5xl md:text-6xl font-bold mb-6 mt-2">
                ELVENWOOD
                <br />
                <span className="italic text-gray-700">EXCELLENCE</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-gray-900">Elvenwood Private Limited</strong> specializes in precision-engineered modular furniture using premium laminated plywood construction for kitchens, wardrobes, and living spaces.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every piece is meticulously crafted using advanced CNC technology, ensuring perfect joints and flawless finishes that stand the test of time. Our modular kitchen designs combine functionality with aesthetic excellence.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our integrated Zoho ERP ecosystem streamlines every aspect of your project journey—from initial consultation through final installation. This comprehensive system enables real-time project tracking, precise inventory management, and seamless communication, ensuring transparency and timely delivery at every stage.
            </p>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-gray-900" />
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <div className="w-3 h-3 rounded-full bg-gray-400" />
            </div>
          </motion.div>

          {/* Right: Statistics Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-block mb-3">
                  <div className="w-16 h-1 bg-gray-900 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Impact</h3>
                  <div className="w-16 h-1 bg-gray-900 mx-auto mt-4" />
                </div>
              </div>

              {/* Main Stats */}
              <div className="space-y-8 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    className="relative"
                  >
                    {/* Number */}
                    <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {isVisible && (
                        <CountUp end={stat.number} duration={2} delay={0.4 + index * 0.2} />
                      )}
                      {stat.suffix}
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                      className={`h-1 ${stat.barColor} rounded-full mb-3`}
                      initial={{ width: '0%' }}
                      animate={isVisible ? { width: '100%' } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.2, ease: 'easeOut' as const }}
                    />

                    {/* Label */}
                    <div>
                      <p className="text-sm font-bold text-gray-900 tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-xs text-gray-500">
                        {stat.sublabel}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                {bottomStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-orange-500 mb-1">
                      {stat.number}
                    </div>
                    <p className="text-xs font-semibold text-gray-600 tracking-wide">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-gray-900" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <p className="text-sm text-gray-600 mb-2 tracking-wide">
              POWERED BY ADVANCED BIESSE CNC TECHNOLOGY
            </p>
            <p className="text-xs text-gray-500">
              ENHANCED BY ZOHO ERP FOR SEAMLESS PROJECT MANAGEMENT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CountUp({ end, duration, delay }: { end: number; duration: number; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return <>{count}</>;
}
