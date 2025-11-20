'use client';

import { useState } from 'react';
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
      <section className="bg-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Our Design Process</h1>
          <p className="text-lg text-gray-300">A systematic approach to creating your dream interior</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {[
            { step: 1, title: 'Consultation', desc: 'We meet to understand your vision, lifestyle, and budget.' },
            { step: 2, title: 'Design Concept', desc: 'Our team develops tailored design concepts for your space.' },
            { step: 3, title: 'Planning', desc: 'Detailed floor plans and material selections are finalized.' },
            { step: 4, title: 'Execution', desc: 'Professional installation brings your design to life.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury"
          >
            Start Your Project
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
