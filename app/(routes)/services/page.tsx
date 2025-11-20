'use client';

import { useState } from 'react';
import CapabilityCard from '@/app/components/CapabilityCard';
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
      <section className="bg-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300">Comprehensive interior design solutions for every space</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <CapabilityCard title="Interior Design" description="Complete design concepts tailored to your lifestyle and aesthetic preferences." />
          <CapabilityCard title="Space Planning" description="Optimize your spaces with efficient layouts and functional design." />
          <CapabilityCard title="Material Selection" description="Premium materials and finishes curated for luxury and longevity." />
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury"
          >
            Enquire About Our Services
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
