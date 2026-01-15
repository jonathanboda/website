'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProcessDiagonal from '@/app/components/ProcessDiagonal';
import DetailedProcessSteps from '@/app/components/DetailedProcessSteps';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function ProcessPage() {
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden">
        {/* Animated 3D Background Image */}
        <div className="absolute inset-0" style={{ perspective: '1000px' }}>
          <div className="absolute inset-0 animate-3d-float">
            <Image
              src="/images/facility/process.jpg"
              alt="Elvenwood Process"
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
            Our Process
            <br />
            <span className="text-orange-500">From Vision to Perfection</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            How we transform ideas into beautifully crafted homes.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg cursor-pointer animate-scaleIn"
            style={{ animationDelay: '0.4s' }}
          >
            Let's Start Your Process
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

      {/* Process Content */}
      <ProcessDiagonal />

      {/* Detailed Process Steps */}
      <DetailedProcessSteps />

      {/* Modal */}
      <ModalEnquiry
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleEnquiry}
      />
    </div>
  );
}
