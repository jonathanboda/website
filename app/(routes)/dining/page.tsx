'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function DiningPage() {
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
            src="/images/facility/dining room.jpg"
            alt="Luxury Dining Room Design"
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
            Dining Room — A Stage for Gatherings
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
            Your dining room is where life's most meaningful moments unfold. We design elegant, welcoming spaces that elevate every meal, every conversation, and every celebration—creating an atmosphere where connections deepen and memories last.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Design Your Dining Room
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Elegant & Inviting</h3>
              <p className="text-gray-700 leading-relaxed">
                Sophisticated design that welcomes guests with warmth and style. Luxurious finishes, thoughtful lighting, and curated details create an ambiance that makes entertaining effortless and memorable.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeless Sophistication</h3>
              <p className="text-gray-700 leading-relaxed">
                A well-designed dining room transcends trends. We create spaces with enduring style that work beautifully for intimate dinners, family gatherings, or formal entertaining—a room that grows more special with every gathering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ambient Lighting</h3>
              <p className="text-gray-700">Layered lighting design that sets the perfect mood—from intimate dinners to lively celebrations. Dimmable options and statement fixtures create atmosphere and elegance.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Curated Aesthetics</h3>
              <p className="text-gray-700">Sophisticated color palettes, premium materials, and thoughtful styling—every element chosen to create a cohesive, elegant space that impresses and inspires.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Functional Luxury</h3>
              <p className="text-gray-700">Beautiful furniture that works seamlessly for entertaining—buffet systems, wine storage, flexible layouts that accommodate gatherings large and small.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Your Dining Room Design Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Envision the Gathering</h3>
              <p className="text-gray-700">Understand how you entertain—intimate dinners, family gatherings, dinner parties—creating a space perfectly suited to your lifestyle and entertaining style.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design for Flow</h3>
              <p className="text-gray-700">Create an efficient layout with beautiful sightlines—optimal table placement, traffic flow from kitchen, and functional zones that support seamless entertaining.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Elevate with Style</h3>
              <p className="text-gray-700">Select elegant furnishings, art, and accessories—sophisticated elements that reflect your taste and create an atmosphere of warmth and refinement.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect the Experience</h3>
              <p className="text-gray-700">Expert lighting design, accessory styling, and finishing details—creating a room that's stunning to look at and perfect for making every meal memorable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Art of Sophisticated Entertaining</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Confidence in Entertaining</h3>
                <p className="text-gray-700 mt-1">A beautifully designed dining room puts you at ease—you can focus on guests and conversation, knowing your space impresses and delights.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Enhanced Entertaining</h3>
                <p className="text-gray-700 mt-1">Thoughtful design supports effortless hosting—functional layouts, smart storage, and stunning aesthetics make entertaining easier and more enjoyable.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Timeless Investment</h3>
                <p className="text-gray-700 mt-1">A well-designed dining room grows more valuable over time—elegant, classic design that works for every occasion and every chapter of your life.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Connection & Warmth</h3>
                <p className="text-gray-700 mt-1">A beautiful dining room invites people to linger and connect—creating spaces where relationships deepen and life's best moments unfold.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Dream Dining Room?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Design an elegant space where unforgettable gatherings happen, conversations flow, and memories are made. Let's create your perfect dining experience.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-xl"
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
