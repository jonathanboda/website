'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProcessContent from './ProcessContent';

interface JourneySectionProps {
  onScheduleClick?: () => void;
}

type StepType = 'consultation' | 'design' | 'execution' | 'movein';

export default function JourneySection({ onScheduleClick }: JourneySectionProps = {}) {
  const [activeStep, setActiveStep] = useState(0);
  const [currentProcessStep, setCurrentProcessStep] = useState<StepType>('consultation');
  const [showDetailedContent, setShowDetailedContent] = useState(false);

  const steps = [
    {
      label: 'Consultation',
      description: 'Connect with us and share your vision for your dream home.',
      badge: '10%'
    },
    {
      label: 'Design Phase',
      description: 'Ideas take shape with precision and detailed planning.',
      badge: '50%'
    },
    {
      label: 'Execution',
      description: 'Your vision materializes through expert craftsmanship.',
      badge: '85%'
    },
    {
      label: 'Move-In',
      description: 'Step into your beautifully transformed space.',
      badge: '100%'
    },
  ];

  const highlights = [
    'Bespoke design curated exclusively for your aesthetic and lifestyle.',
    'In-house atelier crafting custom elements with museum-quality precision.',
    'White-glove coordination from concept through move-in day.',
    'Lifetime partnership with dedicated concierge support.',
  ];

  // Map step index to process step type
  const stepMap: StepType[] = ['consultation', 'design', 'execution', 'movein'];

  // Handle URL params on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const step = params.get('step') as StepType;
      if (step && stepMap.includes(step)) {
        setCurrentProcessStep(step);
        setShowDetailedContent(true);
        const index = stepMap.indexOf(step);
        setActiveStep(index);
      }
    }
  }, []);

  const handleShowContent = (e: React.MouseEvent, stepIndex: number) => {
    e.preventDefault();
    const processStep = stepMap[stepIndex];
    setCurrentProcessStep(processStep);
    setActiveStep(stepIndex);
    setShowDetailedContent(true);

    // Update URL
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('step', processStep);
      window.history.replaceState({ step: processStep }, '', url.toString());
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Your Journey to <span className="italic text-orange-500">Refinement</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            From visionary concept to flawless execution—your home transformed with uncompromising craftsmanship.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe your interior should tell your story. Every material, every detail, every decision reflects who you are. That's why we partner with you at every stage, ensuring your vision becomes reality with the precision of an atelier and the warmth of a trusted advisor.
          </p>
        </div>

        {/* Top Process Buttons */}
        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={(e) => handleShowContent(e, idx)}
              className={`px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 border-2 ${activeStep === idx && showDetailedContent
                ? 'btn-luxury border-transparent'
                : 'btn-outline border-gray-300 text-gray-900 hover:border-orange-400'
                }`}
              data-step={stepMap[idx]}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Phase Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={(e) => handleShowContent(e, idx)}
              className={`relative bg-white border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 overflow-hidden ${activeStep === idx && showDetailedContent
                ? 'border-orange-500 shadow-xl shadow-amber-200/50 bg-gradient-to-br from-amber-50/50 to-white'
                : 'border-gray-200 hover:border-orange-400 hover:-translate-y-1 hover:shadow-lg'
                }`}
              data-step={stepMap[idx]}
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white px-3.5 py-1 rounded-full font-bold text-sm">
                {step.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 pr-16">
                {step.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Content - Shows different content based on selected step */}
        <ProcessContent step={currentProcessStep} isVisible={showDetailedContent} />

        {/* Highlights Section */}
        <div className="mt-32 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Why Clients Trust Elvenwood
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bespoke Atelier', desc: 'Custom craftsmanship with museum-quality standards.' },
              { title: 'Transparent Collaboration', desc: 'Clear communication at every phase of the journey.' },
              { title: 'Lifetime Support', desc: 'Perpetual concierge ensuring lasting satisfaction.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={onScheduleClick}
            className="btn-dark-gradient cursor-pointer"
            aria-label="Begin your interior design journey"
          >
            Start Your Journey
          </button>
          <a href="/explore-rooms" className="btn-outline text-center cursor-pointer" aria-label="View our completed interior design projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
