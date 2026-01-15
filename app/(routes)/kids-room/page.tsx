'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function KidsRoomPage() {
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
            src="/images/facility/Kid Room — Smart & Safe.jpg"
            alt="Creative Kids Room Design"
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
            Kids Room — Smart & Safe
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
            A child's room is more than just a bedroom—it's their personal sanctuary, creative hub, and safe haven. We design spaces that inspire imagination, encourage learning, and grow with your child through every stage.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Design Your Kids Room
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe & Thoughtfully Designed</h3>
              <p className="text-gray-700 leading-relaxed">
                Safety is paramount. We select child-safe materials, secure furniture anchoring, and eliminate hazards while maintaining the playful, engaging atmosphere your child deserves.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative & Inspiring Spaces</h3>
              <p className="text-gray-700 leading-relaxed">
                Colors, themes, and layouts designed to spark imagination and creativity. Whether it's a reading nook, art station, or themed adventure space, we create environments that fuel curiosity and play.
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
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Organization</h3>
              <p className="text-gray-700">Intelligent storage solutions that grow with your child—toy storage, closet systems, and display areas that make organization fun and accessible.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Playful & Fun</h3>
              <p className="text-gray-700">Themed designs, accent walls, and creative layouts that spark joy and imagination—spaces children love to be in every single day.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Durability</h3>
              <p className="text-gray-700">Child-safe materials, secure fixtures, and hardwearing finishes that withstand play, adventure, and the chaos of childhood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Evolution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Kids Rooms That Grow With Them</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understand Their World</h3>
              <p className="text-gray-700">Learn about your child's interests, favorite colors, and personality—creating a space that truly reflects who they are.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create the Foundation</h3>
              <p className="text-gray-700">Build layouts and designs that are flexible and adaptable—allowing the room to evolve as your child grows and their interests change.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enhance with Details</h3>
              <p className="text-gray-700">Add personal touches, themed elements, and functional zones—reading corners, art walls, and play areas that inspire.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect & Perfect Again</h3>
              <p className="text-gray-700">Expert execution and finish work—creating a space that's beautiful, functional, and built to last through countless childhood adventures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Professional Kids Room Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Certified Safety Standards</h3>
                <p className="text-gray-700 mt-1">All materials and furniture meet child safety regulations with proper certifications and secure anchoring.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Timeless Yet Flexible</h3>
                <p className="text-gray-700 mt-1">Designs adapt as your child grows—from toddler-friendly to teen-appropriate without major overhauls.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Maximized Space Efficiency</h3>
                <p className="text-gray-700 mt-1">Smart layouts and multi-functional furniture that make even small rooms feel spacious and organized.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Inspiration for Learning & Play</h3>
                <p className="text-gray-700 mt-1">Thoughtfully designed spaces encourage creativity, reading, play, and the kind of imagination that shapes childhood memories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create the Perfect Kids Room?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Let's design a space where your child can play, dream, learn, and grow. From nurseries to teen rooms, we create spaces that inspire and delight.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl"
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
