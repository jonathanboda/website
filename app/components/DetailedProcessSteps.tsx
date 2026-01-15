'use client';

import Image from 'next/image';
import ImageWithMotion from './ImageWithMotion';
import ScrollAnimation from './ScrollAnimation';

export default function DetailedProcessSteps() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Step 1: Consultation & Mapping */}
        <ScrollAnimation variant="slideRight" className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-b-2 border-orange-500 pb-4 mb-6 w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Consultation & Mapping
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We begin with an in-depth consultation to understand your vision, lifestyle, preferences, and budget. Our experts conduct a thorough site assessment, measuring and documenting every detail—lighting, proportions, architectural features, and spatial flow.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Laser Measurement</h4>
                    <p className="text-gray-600 text-sm">Precise room dimensions and spatial analysis</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Photography Documentation</h4>
                    <p className="text-gray-600 text-sm">Complete visual record of existing conditions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Budget Planning</h4>
                    <p className="text-gray-600 text-sm">Transparent cost estimation aligned with vision</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <ImageWithMotion
                src="https://www.hololaserlevel.com/wp-content/uploads/2024/05/Y-LASER-DISTANCE-METER.webp"
                alt="Laser measurement and consultation"
                variant="arch"
                frame="offset"
                className="w-full h-full"
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Step 2: Design & Visualization */}
        <ScrollAnimation variant="slideLeft" className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:order-2">
              <ImageWithMotion
                src="https://sketsstudio.com/wp-content/uploads/2023/09/Residential-Architecture-1.jpg"
                alt="3D design visualization"
                variant="squircle"
                frame="glass"
                className="w-full h-full"
              />
            </div>
            <div className="lg:order-1">
              <div className="border-b-2 border-orange-500 pb-4 mb-6 w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Design & Visualization
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our design team creates comprehensive 3D visualizations and detailed renderings of your space. You'll see exactly how every element—colors, materials, furniture, lighting—works together before any work begins. We present multiple design concepts for your review and refinement.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-24">
                  <ImageWithMotion
                    src="https://cdn.homedit.com/wp-content/uploads/civil-engineering/materials/timber/What-is-Plywood.jpg"
                    alt="Best in Class Plywood"
                    variant="default"
                    frame="gold"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative h-24">
                  <ImageWithMotion
                    src="https://www.walmakply.com/wp-content/uploads/2021/08/Color-Core-Laminate-Sheets.jpg"
                    alt="Premium Laminates"
                    variant="default"
                    frame="gold"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Step 3: Production & Craft */}
        <ScrollAnimation variant="slideRight" className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-b-2 border-orange-500 pb-4 mb-6 w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Production & Craft
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Once approved, our in-house manufacturing facility crafts every custom element with precision. Our state-of-the-art machinery and expert craftsmen ensure museum-quality finishes. From cabinetry to bespoke millwork, every piece is built to exact specifications with rigorous quality control.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Materials</h4>
                    <p className="text-gray-600 text-sm">Best in class plywood and laminates selection</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Hardware Fixtures</h4>
                    <p className="text-gray-600 text-sm">Premium hinges, handles, and finishing accessories</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Edge Banding</h4>
                    <p className="text-gray-600 text-sm">Seamless edges and premium surface treatment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <ImageWithMotion
                src="/images/facility/Production & Craft.webp"
                alt="In-house manufacturing facility"
                variant="leaf-left"
                frame="offset"
                className="w-full h-full"
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Step 4: Installation & Handover */}
        <ScrollAnimation variant="slideLeft">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:order-2">
              <ImageWithMotion
                src="/images/facility/Installation & Handover.webp"
                alt="Safe packaging and delivery"
                variant="blob"
                frame="gold"
                className="w-full h-full"
              />
            </div>
            <div className="lg:order-1">
              <div className="border-b-2 border-orange-500 pb-4 mb-6 w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Installation & Handover
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our professional installation team manages every aspect of the on-site work with precision and care. We handle all logistics, coordination, and quality assurance. Upon completion, we conduct a final walkthrough, address any touch-ups, and ensure you're completely satisfied with your transformed space.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="text-green-800 font-semibold">✓ Safe Packaging</p>
                  <p className="text-green-700 text-sm">Professional crating and protective packaging for all pieces</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="text-green-800 font-semibold">✓ On-Site Quality Assurance</p>
                  <p className="text-green-700 text-sm">Complete inspection and final adjustments before handover</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
