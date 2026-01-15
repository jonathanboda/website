'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function LivingRoomPage() {
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
            src="/images/facility/Living Room — Gather & Relax.avif"
            alt="Luxury Living Room Design"
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
            Living Room — Gather & Relax
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
            Your living room is where your day ends and begins. We design living spaces that balance comfort and sophistication—places where you can unwind with family, entertain guests, and create lasting memories.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Explore Living Rooms
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                Lighting is layered across ambient, task, and accent fixtures to create mood and functionality. We balance proportions, textures, and colors to achieve timeless elegance.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Material Selection</h3>
              <p className="text-gray-700 leading-relaxed">
                Premium upholstery, natural wood elements, and carefully curated finishes create spaces that are both beautiful and durable—designed to age gracefully.
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
              <p className="text-gray-700">Carefully layered lighting design creates the perfect ambiance for any occasion—from bright family gatherings to intimate evenings.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Storage</h3>
              <p className="text-gray-700">Integrated storage solutions keep your space organized without compromising on design—every element serves a purpose.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ergonomic Layout</h3>
              <p className="text-gray-700">Thoughtful spatial planning ensures comfort and flow—furniture placement optimized for conversation and relaxation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Living Room Design Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-700">Understand your lifestyle, entertaining style, and design preferences through detailed conversations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design Concepts</h3>
              <p className="text-gray-700">Create multiple design directions with 3D renderings—visualize every element before execution.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Material Selection</h3>
              <p className="text-gray-700">Curate premium fabrics, finishes, and accessories that reflect your aesthetic and withstand daily living.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flawless Execution</h3>
              <p className="text-gray-700">Professional installation and styling—every detail executed to perfection with white-glove service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Living Room?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Let our design experts create a living space that perfectly reflects your lifestyle and brings your vision to life.
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
