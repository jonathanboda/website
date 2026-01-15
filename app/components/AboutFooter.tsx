'use client';

interface AboutFooterProps {
  onScheduleClick?: () => void;
}

export default function AboutFooter({ onScheduleClick }: AboutFooterProps = {}) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Elvenwood Interior
          </h2>
          <p className="text-base md:text-lg text-orange-500 font-semibold tracking-widest uppercase mb-10">
            Premium Residential Interior Designers in Bangalore
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </div>

        {/* Content Blocks */}
        <div className="space-y-10 text-gray-700 mb-16">
          {/* Block 1 */}
          <p className="text-lg md:text-xl leading-8 md:leading-9">
            Elvenwood Interior is one of Bangalore's fast-growing and trusted residential interior design studios. We specialize in creating sophisticated, personalized living spaces that reflect each client's unique aesthetic and lifestyle. Our philosophy centers on the belief that great design is both beautiful and functional—spaces that inspire daily living while standing the test of time.
          </p>

          {/* Block 2 */}
          <p className="text-lg md:text-xl leading-8 md:leading-9">
            Every space we design is thoughtfully planned, carefully detailed, and executed with meticulous attention. From conceptualization through final installation, we ensure that every element—material, color, texture, and proportion—works harmoniously to create interiors of lasting elegance.
          </p>

          {/* Block 3 */}
          <p className="text-lg md:text-xl leading-8 md:leading-9">
            At Elvenwood Interior, our process blends creative design thinking with strategic space planning. We begin with deep discovery conversations to understand your vision, lifestyle, and aspirations. From there, we develop bespoke design concepts, curate premium materials, and oversee flawless execution—ensuring your home becomes a true sanctuary.
          </p>

          {/* Block 4 */}
          <p className="text-lg md:text-xl leading-8 md:leading-9">
            We take pride in offering transparent processes, collaborative partnerships, and white-glove coordination throughout every project. Our team's expertise spans interior architecture, bespoke craftsmanship, and premium finishes—delivering homes that exceed expectations in both beauty and functionality.
          </p>

          {/* Block 5 - Closing Statement */}
          <p className="text-2xl md:text-3xl text-gray-900 font-semibold leading-10 md:leading-12 italic pt-4">
            At Elvenwood Interior, we don't just design homes — we craft experiences that elevate the way you live.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center my-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300" />
          <span className="text-gray-400">•</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300" />
        </div>

        {/* Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
              Our Approach
            </h3>
            <p className="text-gray-700 text-base leading-7">
              Bespoke design thinking combined with strategic planning, executed with precision and care.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
              Our Commitment
            </h3>
            <p className="text-gray-700 text-base leading-7">
              Transparent collaboration, premium craftsmanship, and white-glove support from start to finish.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <p className="text-gray-600 text-lg mb-8">
            Ready to transform your home into a space that truly reflects you?
          </p>
          <button
            onClick={onScheduleClick}
            className="btn-luxury"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
