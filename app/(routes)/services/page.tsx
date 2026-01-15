'use client';

import { useState } from 'react';
import Image from 'next/image';
import CapabilityCard from '@/app/components/CapabilityCard';
import JourneySection from '@/app/components/JourneySection';
import RoomShowcase from '@/app/components/RoomShowcase';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function ServicesPage() {
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
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden">
        {/* Animated 3D Background Image */}
        <div className="absolute inset-0" style={{ perspective: '1000px' }}>
          <div className="absolute inset-0 animate-3d-float">
            <Image
              src="/images/facility/Strategic Planning INTERIOR.jpg"
              alt="Elvenwood Services"
              fill
              priority
              className="object-cover"
              style={{
                transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)',
                transformStyle: 'preserve-3d',
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn hero-heading">
            Our Services
            <br />
            <span className="text-orange-500">Crafted for Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Comprehensive interior design solutions tailored to transform your space with uncompromising craftsmanship.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg cursor-pointer animate-scaleIn"
            style={{ animationDelay: '0.4s' }}
          >
            Let's Start
          </button>
        </div>

        {/* Add 3D animation styles */}
        <style jsx>{`
          @keyframes float-3d {
            0%, 100% {
              transform: translateZ(0) rotateX(0deg) rotateY(0deg) scale(1.05);
            }
            25% {
              transform: translateZ(20px) rotateX(2deg) rotateY(-2deg) scale(1.08);
            }
            50% {
              transform: translateZ(0) rotateX(-2deg) rotateY(2deg) scale(1.05);
            }
            75% {
              transform: translateZ(20px) rotateX(2deg) rotateY(2deg) scale(1.08);
            }
          }

          .animate-3d-float {
            animation: float-3d 20s ease-in-out infinite;
            transform-style: preserve-3d;
          }
        `}</style>
      </section>

      {/* Services Section - 6 Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Elvenwood Interiors, our services are designed to offer a truly elevated experience. From bespoke design concepts to precision-driven execution, every step reflects craftsmanship and luxury. We collaborate closely with you to curate materials, finishes, and details that feel refined and timeless. With dedicated supervision, transparent communication, and white-glove support, we ensure your space is delivered flawlessly—just as envisioned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Design Presentation</h3>
              <p className="text-gray-600">Our Design Presentation gives you a clear, beautiful preview of your future space—helping you refine every detail before execution.</p>
            </div>

            {/* Service Card 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m0 0h5.581M9 3h6M9 3a2 2 0 012-2h0a2 2 0 012 2m0 0V21m0-21a2 2 0 00-2-2h0a2 2 0 00-2 2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Implementation</h3>
              <p className="text-gray-600">In the implementation stage, we begin the actual on-site work. Every detail is executed exactly as per the approved design.</p>
            </div>

            {/* Service Card 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Site Execution Monitoring</h3>
              <p className="text-gray-600">We closely monitor all on-site work to ensure quality, accuracy, and smooth progress throughout the project.</p>
            </div>

            {/* Service Card 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Standards</h3>
              <p className="text-gray-600">We follow strict company standards to ensure consistent quality, reliable execution, and a smooth experience for every project.</p>
            </div>

            {/* Service Card 5 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quality</h3>
              <p className="text-gray-600">We take quality seriously, using only the finest materials and finishes in all our interior projects.</p>
            </div>

            {/* Service Card 6 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Support</h3>
              <p className="text-gray-600">We provide round-the-clock concierge support, ensuring you receive seamless assistance anytime you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Room Showcase */}
      <RoomShowcase />

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let our design experts help you create the home of your dreams.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury cursor-pointer"
          >
            Enquire Now
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
