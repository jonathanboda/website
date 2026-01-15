'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function HomeOfficePage() {
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
            src="/images/facility/Home Office — Focus of Style.webp"
            alt="Professional Home Office Design"
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
            Home Office — Focus of Style
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
            A well-designed home office transforms your work. From ergonomic excellence to inspiring aesthetics, we create spaces that enhance focus, boost productivity, and reflect your professional identity.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Design Your Home Office
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Productivity Meets Comfort</h3>
              <p className="text-gray-700 leading-relaxed">
                Ergonomic furniture, thoughtful layouts, and professional design combine to create a workspace where you can perform at your best while staying comfortable throughout the day.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional & Personal</h3>
              <p className="text-gray-700 leading-relaxed">
                Your home office is a reflection of your professionalism. We design sophisticated spaces that impress clients, support focus, and create clear boundaries between work and home life.
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
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ergonomic Excellence</h3>
              <p className="text-gray-700">Premium desks, supportive seating, and optimized layouts designed for long work hours—comfort and health prioritized for peak performance.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Productivity & Focus</h3>
              <p className="text-gray-700">Strategic lighting, acoustic design, and minimal distractions combine to create an environment where deep work thrives and creativity flows.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Organization</h3>
              <p className="text-gray-700">Custom storage, filing systems, and workspace organization that keeps everything accessible yet organized—eliminating clutter and chaos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Your Home Office Design Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understand Your Work</h3>
              <p className="text-gray-700">Discover your work style, daily tasks, client interactions, and specific needs—creating a space optimized for how you actually work.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan the Layout</h3>
              <p className="text-gray-700">Design an efficient workspace—optimal desk positioning, storage zones, and traffic flow that maximizes productivity and minimizes distractions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Add Professional Style</h3>
              <p className="text-gray-700">Select furniture, colors, and design elements that project professionalism and reflect your personal brand while maintaining focus and clarity.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Every Detail</h3>
              <p className="text-gray-700">Expert installation and finishing—lighting optimization, cable management, and styling that creates a polished, distraction-free workspace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Invest in Professional Home Office Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Increased Productivity</h3>
                <p className="text-gray-700 mt-1">A well-designed space eliminates distractions and optimizes workflow—measurable improvements in focus and output.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Professional Presence</h3>
                <p className="text-gray-700 mt-1">Impress clients and colleagues with a polished, professional backdrop—boost your credibility and business image.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Health & Wellness</h3>
                <p className="text-gray-700 mt-1">Ergonomic design and proper lighting reduce strain and fatigue—invest in your long-term health and comfort.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Work-Life Balance</h3>
                <p className="text-gray-700 mt-1">A dedicated, professional space helps establish clear boundaries between work and home—essential for mental health and relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Workspace?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Create a home office that supports your success, impresses your clients, and makes you excited to work. Let's design a space built just for you.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl"
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
