'use client';

import { useState } from 'react';
import CapabilityCard from './components/CapabilityCard';
import RoomCard from './components/RoomCard';
import ModalEnquiry, { EnquiryData } from './components/ModalEnquiry';
import ImageWithMotion from './components/ImageWithMotion';

export default function HomePage() {
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Luxury Interior Design
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 animate-fadeIn">
            Transform your space into a sanctuary of elegance and comfort
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury mb-8 animate-scaleIn"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CapabilityCard
            title="Custom Design"
            description="Tailored interior solutions that match your unique style and lifestyle."
          />
          <CapabilityCard
            title="Expert Execution"
            description="Professional installation and finishing with meticulous attention to detail."
          />
          <CapabilityCard
            title="Consultation"
            description="In-depth consultations to understand your vision and bring it to life."
          />
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoomCard
              href="/living-room"
              image="/placeholder.jpg"
              title="Living Room"
              description="Modern comfort meets elegant design in our living room transformations."
            />
            <RoomCard
              href="/kitchen"
              image="/placeholder.jpg"
              title="Kitchen"
              description="Luxury kitchens designed for both function and style."
            />
            <RoomCard
              href="/bedroom"
              image="/placeholder.jpg"
              title="Bedroom"
              description="Create your personal sanctuary with our bedroom designs."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let our design experts help you create the home of your dreams.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-luxury"
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
