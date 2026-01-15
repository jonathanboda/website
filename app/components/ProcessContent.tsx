'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ProcessContentProps {
  step: 'consultation' | 'design' | 'execution' | 'movein';
  isVisible: boolean;
}

const contentLibrary = {
  consultation: {
    title: 'Connect With Us',
    subtitle: 'Reach out to our team and begin your journey toward a beautifully crafted home.',
    sections: [
      {
        heading: '1. Connect With Us',
        text: 'Reach out to our team and begin your journey toward a beautifully crafted home.',
        icon: '👋'
      },
      {
        heading: '2. Share Your Details',
        text: 'Fill out the short form and provide basic information about your space and your requirements.',
        icon: '📝'
      },
      {
        heading: '3. Initial Interaction',
        text: 'An Elvenwood representative will call you to understand your style, needs, and expectations.',
        icon: '📞'
      },
      {
        heading: '4. Provide Your Floor Plan',
        text: 'Share your floor plan so we can assign the most suitable Elvenwood designer for your project.',
        icon: '📐'
      },
      {
        heading: '5. Meet Your Designer',
        text: 'Your dedicated designer connects with you to understand your lifestyle, family needs, and vision in detail.',
        icon: '🤝'
      },
      {
        heading: '6. Concept & Proposal',
        text: 'We prepare a tailored design concept along with an initial estimate aligned with your budget.',
        icon: '✨'
      },
      {
        heading: '7. Feedback & Refinement',
        text: 'Share your thoughts — we refine the design and update the proposal as per your inputs.',
        icon: '🔄'
      }
    ],
    milestone: 'You Pay 10% Milestone',
    milestoneText: 'Once you\'re satisfied, pay the 10% booking confirmation and officially become part of the Elvenwood Family.'
  },
  design: {
    title: 'Design Phase',
    subtitle: 'Where ideas take shape and every detail is crafted with intention.',
    sections: [
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
    ],
    milestone: 'You Pay 50% Milestone',
    milestoneText: 'This secures your project and allows us to begin production.'
  },
  execution: {
    title: 'Execution Phase',
    subtitle: 'Where your vision begins to materialize with precision.',
    sections: [
      {
        heading: 'Manufacturing Begins',
        text: 'Your modular elements are produced at our advanced manufacturing facilities with strict quality control.',
        icon: '🏭'
      },
      {
        heading: 'Site Preparation & Civil Work',
        text: 'Our operations team ensures all required civil work is completed in sync with your approved design plan.',
        icon: '🔨'
      },
      {
        heading: 'Order Ready for Dispatch',
        text: 'Once production is complete, your materials are checked, packed, and prepared for dispatch.',
        icon: '📦'
      }
    ],
    milestone: 'You Pay 35% Milestone',
    milestoneText: 'The designer raises the payment request to schedule dispatch. Materials are then delivered to your home and installed with care by our expert technicians, ensuring perfect fit and finish.'
  },
  movein: {
    title: 'Move-In Phase',
    subtitle: 'Step into your newly transformed space.',
    sections: [
      {
        heading: 'Handover & Warranty',
        text: 'You receive your invoice and warranty documents. All Elvenwood products include a 10-year warranty for peace of mind.',
        icon: '📋'
      },
      {
        heading: 'After-Sales Support',
        text: 'Our support team remains available for any service requests throughout your warranty period.',
        icon: '🛟'
      }
    ],
    milestone: null,
    milestoneText: null
  }
};

export default function ProcessContent({ step, isVisible }: ProcessContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentContent, setCurrentContent] = useState(step);
  const content = contentLibrary[currentContent];

  // Handle step changes with fade animation
  useEffect(() => {
    if (isVisible && step !== currentContent) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentContent(step);
        setIsAnimating(false);
      }, 300);
    } else if (isVisible) {
      setCurrentContent(step);
    }
  }, [step, isVisible]);

  // Scroll to content when shown
  useEffect(() => {
    if (isVisible && containerRef.current && !isAnimating) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isVisible, isAnimating]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className={`mt-20 mb-16 relative overflow-hidden transition-opacity duration-300 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Header */}
      <motion.div
        key={`${currentContent}-header`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" tabIndex={-1}>
          {content.title}
        </h2>
        <p className="text-2xl text-orange-500 italic font-light">
          {content.subtitle}
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
          key={`${currentContent}-line`}
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
        {content.sections.map((section, index) => {
          const isLeftAligned = index % 2 === 0;
          const diagonalOffset = index * 80;

          return (
            <motion.div
              key={`${currentContent}-${index}`}
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
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-amber-300 transform hover:-translate-y-2">
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>

                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                  {section.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {section.heading}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.text}
                </p>

                <div className="absolute bottom-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-500" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Spacer for absolute positioned elements */}
      <div className="h-[600px] md:h-[700px]" />

      {/* Milestone Payment Box (if exists) */}
      {content.milestone && (
        <motion.div
          key={`${currentContent}-milestone`}
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
              {content.milestone}
            </h3>
            <p className="text-xl md:text-2xl font-light text-amber-50">
              {content.milestoneText}
            </p>

            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
