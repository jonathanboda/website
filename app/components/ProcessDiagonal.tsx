'use client';

interface ProcessDiagonalProps {
  onStartJourney?: () => void;
}

export default function ProcessDiagonal({ onStartJourney }: ProcessDiagonalProps = {}) {
  const steps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We begin by understanding your vision, lifestyle, and design preferences. Through detailed consultation and site assessment.',
      position: 'top',
      color: 'from-orange-400 to-orange-500'
    },
    {
      number: 2,
      title: 'Assessment',
      description: 'Your space is measured, photographed, and assessed. We capture every detail—natural light, proportions, existing elements.',
      position: 'right',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: 3,
      title: 'Design Development',
      description: 'Space planning and overall design development begin. We present multiple design directions reflecting your aesthetic.',
      position: 'bottom',
      color: 'from-orange-400 to-orange-500'
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Production and seamless on-site installation commence with unwavering attention to detail and precision.',
      position: 'left',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: 5,
      title: 'Celebration',
      description: 'Time to celebrate! Your finished sanctuary awaits. Every element is perfectly curated and placed.',
      position: 'center',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-full">
        {/* Premium Header with Background - Full Width */}
        <div className="relative mb-24 py-20">

          <div className="text-center max-w-7xl mx-auto px-6">
            {/* Premium Label */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-orange-500" />
              <span className="text-sm uppercase tracking-[0.3em] text-orange-600 font-bold">Our Methodology</span>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-orange-500" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 font-serif leading-tight">
              Elvenwood Design Process
            </h2>

            {/* Decorative underline */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 rounded-full shadow-lg" />
            </div>

            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
              A curated journey from vision to reality, crafted with precision and care.
            </p>

            {/* Start Here Button */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <button
                onClick={onStartJourney}
                className="relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 bg-[length:200%_auto] animate-gradient-xy text-white font-bold text-xl rounded-full hover:from-orange-500 hover:via-orange-600 hover:to-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer border-2 border-white/30"
              >
                <span>Start Here</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

                <div className="max-w-7xl mx-auto px-6">
          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400" />
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-6 pl-4">
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white`}>
                      {step.number}
                    </div>
                    <div className="flex-1 pb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Circular Journey Diagram */}
          <div className="hidden lg:block">
            <div className="relative max-w-5xl mx-auto mb-20 flex items-center justify-center" style={{ minHeight: '750px', perspective: '1500px', transformStyle: 'preserve-3d' }}>
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-52 h-52 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border-4 border-amber-300 flex items-center justify-center shadow-lg animate-rotate3D">
                <div className="text-center px-6">
                  <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest mb-2">Your Vision</p>
                  <p className="text-xl font-bold text-gray-900">Comes to Life</p>
                </div>
              </div>
            </div>

            {/* Step 1 - Top (Discovery) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-64 animate-cardFloat hover:scale-110 transition-all duration-500" style={{ top: '0', animationDelay: '0s' }}>
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${steps[0].color} text-white flex items-center justify-center font-bold text-3xl shadow-xl ring-4 ring-white mb-4 animate-orbitPulse hover:shadow-2xl transition-shadow duration-300`} style={{ animationDelay: '0s' }}>
                  {steps[0].number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{steps[0].title}</h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{steps[0].description}</p>
              </div>
            </div>

            {/* Step 2 - Right (Assessment) */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-64 animate-cardFloat hover:scale-110 transition-all duration-500" style={{ right: '0', animationDelay: '1.5s' }}>
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${steps[1].color} text-white flex items-center justify-center font-bold text-3xl shadow-xl ring-4 ring-white mb-4 animate-orbitPulse hover:shadow-2xl transition-shadow duration-300`} style={{ animationDelay: '0.75s' }}>
                  {steps[1].number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{steps[1].title}</h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{steps[1].description}</p>
              </div>
            </div>

            {/* Step 3 - Bottom (Design Development) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-64 animate-cardFloat hover:scale-110 transition-all duration-500" style={{ bottom: '0', animationDelay: '3s' }}>
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${steps[2].color} text-white flex items-center justify-center font-bold text-3xl shadow-xl ring-4 ring-white mb-4 animate-orbitPulse hover:shadow-2xl transition-shadow duration-300`} style={{ animationDelay: '1.5s' }}>
                  {steps[2].number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{steps[2].title}</h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{steps[2].description}</p>
              </div>
            </div>

            {/* Step 4 - Left (Implementation) */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-64 animate-cardFloat hover:scale-110 transition-all duration-500" style={{ left: '0', animationDelay: '4.5s' }}>
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${steps[3].color} text-white flex items-center justify-center font-bold text-3xl shadow-xl ring-4 ring-white mb-4 animate-orbitPulse hover:shadow-2xl transition-shadow duration-300`} style={{ animationDelay: '2.25s' }}>
                  {steps[3].number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{steps[3].title}</h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{steps[3].description}</p>
              </div>
            </div>
            </div>
          </div>

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
              onClick={onStartJourney}
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              aria-label="Begin your interior design journey"
            >
              Start Your Journey
            </button>
            <a href="/explore-rooms" className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer text-center" aria-label="View our completed interior design projects">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section >
  );
}
