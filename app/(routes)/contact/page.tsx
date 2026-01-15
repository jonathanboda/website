'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEnquiry = async (data: EnquiryData) => {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit');
    alert('Thank you! We will contact you soon.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/facility/Living Room — Gather & Relax.avif"
            alt="Contact Elvenwood"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-stroke">
            Let's Create Something Beautiful
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto text-shadow-subtitle">
            Ready to transform your space? We'd love to hear from you.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <a
              href="tel:+919035913611"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-orange-500 font-semibold text-lg group-hover:text-orange-600 transition-colors">
                +91 9035913611
              </p>
              <p className="text-gray-500 text-sm mt-2">Mon - Sat: 9:00 AM - 7:00 PM</p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@elvenwood.in"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-orange-500 font-semibold text-lg group-hover:text-orange-600 transition-colors">
                info@elvenwood.in
              </p>
              <p className="text-gray-500 text-sm mt-2">We reply within 24 hours</p>
            </a>

            {/* Location Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Chandapura - Dommasandra Rd, post,<br />
                Heelalige, Bengaluru, Bommasandra, Karnataka 560099
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="mb-8">
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Send a Message</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
                  Let's Discuss Your Project
                </h2>
                <p className="text-gray-600 mt-4">
                  Fill out the form below and our design experts will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                    Oops! Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-10">
              {/* Why Choose Us */}
              <div>
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Why Elvenwood</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
                  Experience the Difference
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  With over years of experience in luxury interior design, we bring your vision to life with precision, creativity, and unmatched craftsmanship.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Free Consultation</h3>
                    <p className="text-gray-600 mt-1">Get expert advice on your interior design project at no cost.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Quick Turnaround</h3>
                    <p className="text-gray-600 mt-1">Fast project delivery without compromising on quality.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Premium Quality</h3>
                    <p className="text-gray-600 mt-1">Only the finest materials and superior craftsmanship.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Dedicated Support</h3>
                    <p className="text-gray-600 mt-1">Personal project manager assigned to your project.</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="text-gray-300 mb-6">
                  Give us a call and speak directly with our design experts.
                </p>
                <a
                  href="tel:+919035913611"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl transition-colors font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9035913611
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Visit Our Workshop
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Come see our state-of-the-art manufacturing facility where we bring your designs to life.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-[21/9] bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps?q=Elvenwood+Interiors,+Chandapura+-+Dommasandra+Rd,+Heelalige,+Bengaluru&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elvenwood Interior - Heelalige, Attibele, Bengaluru"
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Elvenwood Interior</p>
                  <p className="text-gray-600 text-sm">Chandapura - Dommasandra Rd, post, Heelalige, Bengaluru, Bommasandra, Karnataka 560099</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/Elvenwood+Interiors+Chandapura+Dommasandra+Rd+Heelalige+Bengaluru+560099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold whitespace-nowrap"
              >
                Get Directions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
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
