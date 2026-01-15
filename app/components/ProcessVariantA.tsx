'use client';

export default function ProcessVariantA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Crafted with Intention
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Every project unfolds in carefully orchestrated phases, ensuring nothing is left to chance.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology blends meticulous planning with creative intuition. From initial discovery to final unveiling, each phase builds upon the last—creating interiors that transcend expectation.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-500 to-orange-200" />

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { num: 1, title: 'Discovery', desc: 'Understanding your aesthetic, lifestyle, and aspirations.' },
                { num: 2, title: 'Concept', desc: 'Crafting bespoke design directions tailored to you.' },
                { num: 3, title: 'Refinement', desc: 'Collaborating to perfect every material and detail.' },
                { num: 4, title: 'Execution', desc: 'Flawless production and installation with precision.' },
                { num: 5, title: 'Reveal', desc: 'Stepping into your finished sanctuary.' },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-orange-500">{step.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12 mb-12">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Why Clients Choose Elvenwood
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Bespoke design with museum-quality craftsmanship and precision.',
              'Transparent process with white-glove support every step.',
              'Lifetime partnership—your concierge for all future refinements.',
            ].map((highlight, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100">
                    <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105" aria-label="Begin your interior design journey">
            Start Your Project
          </button>
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="See completed projects and design inspiration">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
