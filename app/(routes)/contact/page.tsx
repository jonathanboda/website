'use client';

import { useState } from 'react';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function ContactPage() {
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
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">Get in touch with our design team</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:hello@elvenwood.com" className="text-blue-600 hover:underline">
                  hello@elvenwood.com
                </a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-luxury"
            >
              Open Enquiry Form
            </button>
          </div>
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
