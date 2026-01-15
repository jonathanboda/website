'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function BedroomPage() {
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
            src="/images/facility/Master Bedroom — Sanctuary by Design.jpg"
            alt="Luxury Master Bedroom Design"
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
            Master Bedroom — Sanctuary by Design
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
            Your bedroom is your most intimate space—a personal sanctuary where comfort and tranquility reign supreme. We design bedrooms that invite rest, inspire relaxation, and reflect your sophisticated taste.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Explore Bedrooms
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                Serenity through design. We focus on soft textures, ambient lighting, and sophisticated color palettes that create an atmosphere of calm and luxury—a true retreat from the world.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comfort & Elegance</h3>
              <p className="text-gray-700 leading-relaxed">
                Premium fabrics, quality materials, and thoughtful layouts work together to create spaces that are both aesthetically stunning and supremely comfortable—perfect for rest and relaxation.
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
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ambient Lighting</h3>
              <p className="text-gray-700">Layered lighting design creates the perfect mood for sleep and relaxation—dimmable options for complete control over your sanctuary.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Textiles</h3>
              <p className="text-gray-700">Luxurious fabrics, quality linens, and soft furnishings create layers of comfort—tactile elements that enhance relaxation.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Minimalist Design</h3>
              <p className="text-gray-700">Clean lines and thoughtful curation create serene spaces—less clutter, more tranquility for better rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Bedroom Design Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understanding Rest</h3>
              <p className="text-gray-700">Discover your sleep preferences, color preferences, and the atmosphere that helps you relax most deeply.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Serene Design</h3>
              <p className="text-gray-700">Create calming color palettes and layouts that promote rest—thoughtful design meets therapeutic comfort.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Materials</h3>
              <p className="text-gray-700">Select high-quality textiles, bedding, and finishes that feel luxurious and enhance your sanctuary.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flawless Execution</h3>
              <p className="text-gray-700">Expert installation and styling—every element perfectly placed to maximize comfort and tranquility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Dream Bedroom?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Transform your bedroom into the ultimate sanctuary with expert design and premium craftsmanship.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-xl cursor-pointer"
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
