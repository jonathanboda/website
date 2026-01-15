'use client';

import { useState } from 'react';
import Image from 'next/image';
import KitchenShapeCard from '@/app/components/KitchenShapeCard';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function KitchenPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEnquiry = async (data: EnquiryData) => {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit');
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated 3D Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="/images/facility/Kitchen — Engineered For Everyday.jpg"
            alt="Luxury Kitchen Design"
            fill
            className="object-cover animate-3d-motion"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Create, connect, and celebrate — in a kitchen made just for you
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-lg">
            Our kitchens are more than cooking spaces—they're gathering places where families and friends come together. Every design reflects your lifestyle, preferences, and how you live.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury rounded-full"
          >
            Explore Kitchens
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            "We design kitchens that bring joy to everyday cooking, comfort to your family, and pride every time you walk in."
          </p>
        </div>
      </section>

      {/* Kitchen Shapes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose your kitchen shape
            </h2>
            <p className="text-lg text-gray-600">
              Select the layout that best fits your space and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <KitchenShapeCard
              href="/kitchen/l-shaped"
              image="/images/facility/L-Shaped Kitchen.jpg"
              shape="L-Shaped"
              benefits={['Efficient corner space', 'Great flow', 'Flexible design']}
            />
            <KitchenShapeCard
              href="/kitchen/u-shaped"
              image="/images/facility/U-Shaped Kitchen.jpg"
              shape="U-Shaped"
              benefits={['Maximum storage', 'Work triangle', 'Two cooks']}
            />
            <KitchenShapeCard
              href="/kitchen/parallel"
              image="/images/facility/Parallel (Galley) Kitchen.png"
              shape="Parallel"
              benefits={['Compact layout', 'Easy navigation', 'Modern feel']}
            />
            <KitchenShapeCard
              href="/kitchen/island"
              image="/images/facility/Island Kitchen.jpg"
              shape="Island"
              benefits={['Central workspace', 'Social cooking', 'Extra storage']}
            />
            <KitchenShapeCard
              href="/kitchen/straight"
              image="/images/facility/Straight Line Kitchen.jpg"
              shape="Straight"
              benefits={['Simple layout', 'Affordable', 'Space-saving']}
            />
          </div>
        </div>
      </section>

      {/* Kitchen Accessories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Multiply the utility
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Every element in your kitchen is designed with purpose—smart storage, premium accessories, and thoughtful layouts that make cooking effortless and entertaining a joy.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Kitchen Accessories */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Bottle Pullout.jpg"
                  alt="Bottle Pullout"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Bottle Pullout</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Cutlery Tray.avif"
                  alt="Cutlery Tray"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Cutlery Tray</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Detergent Rack.webp"
                  alt="Detergent Rack"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Detergent Rack</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Pantry Pullout.jpg"
                  alt="Pantry Pullout"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Pantry Pullout</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Plate Holder.jpg"
                  alt="Plate Holder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Plate Holder</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Tambour Uni.jpg"
                  alt="Tambour Unit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Tambour Unit</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Tandem Box.jpg"
                  alt="Tandem Box"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Tandem Box</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/facility/Wicker Basket.webp"
                  alt="Wicker Basket"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Wicker Basket</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Kitchen Design Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-700">Understand your cooking style, family needs, and design preferences through detailed consultation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Layout Planning</h3>
              <p className="text-gray-700">Design optimal kitchen layout with 3D visualization—perfect workflow and stunning aesthetics.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Material Curation</h3>
              <p className="text-gray-700">Select premium materials, finishes, and appliances that match your style and budget.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Execution</h3>
              <p className="text-gray-700">Professional installation with white-glove service—every detail executed to perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Dream Kitchen?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Let our experts design a kitchen that brings joy to every meal and moment.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      <ModalEnquiry
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleEnquiry}
      />
    </div>
  );
}
