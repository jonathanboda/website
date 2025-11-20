'use client';

import { useState } from 'react';
import Link from 'next/link';
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
      <section className="bg-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Luxury Kitchen Design</h1>
          <p className="text-lg text-gray-300">Transform your kitchen into a culinary masterpiece</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Kitchen Layouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <KitchenShapeCard
            href="/kitchen/l-shaped"
            image="/placeholder.jpg"
            shape="L-Shaped"
            benefits={['Efficient use of corner space', 'Good for flow', 'Flexible design']}
          />
          <KitchenShapeCard
            href="/kitchen/u-shaped"
            image="/placeholder.jpg"
            shape="U-Shaped"
            benefits={['Maximum storage', 'Work triangle', 'Two cooks']}
          />
          <KitchenShapeCard
            href="/kitchen/parallel"
            image="/placeholder.jpg"
            shape="Parallel"
            benefits={['Compact layout', 'Easy navigation', 'Modern feel']}
          />
          <KitchenShapeCard
            href="/kitchen/island"
            image="/placeholder.jpg"
            shape="Island"
            benefits={['Central workspace', 'Social cooking', 'Extra storage']}
          />
          <KitchenShapeCard
            href="/kitchen/straight"
            image="/placeholder.jpg"
            shape="Straight"
            benefits={['Simple layout', 'Affordable', 'Space-saving']}
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Kitchen Design Philosophy</h2>
          <p className="text-gray-600 mb-4">
            Our kitchen designs merge functionality with luxury aesthetics. Each layout is carefully chosen to maximize workflow while creating a stunning focal point for your home.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury"
          >
            Enquire About Your Kitchen
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
