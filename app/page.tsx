'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ModalEnquiry, { EnquiryData } from './components/ModalEnquiry';

// Home Section Components
import HeroSection from './components/home/HeroSection';
import TrustIndicators from './components/home/TrustIndicators';
import AboutSnippet from './components/home/AboutSnippet';
import ServicesOverview from './components/home/ServicesOverview';
import HowItWorks from './components/home/HowItWorks';
import WhyChooseUs from './components/home/WhyChooseUs';
import FinalCTA from './components/home/FinalCTA';

// Additional Components
import RoomShowcase from './components/RoomShowcase';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ExpertiseCarousel from './components/ExpertiseCarousel';

// Section wrapper with motion
function MotionSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

  const openModal = () => setModalOpen(true);

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HeroSection onOpenEnquiry={openModal} />

      {/* 2. Trust Indicators */}
      <TrustIndicators />

      {/* 3. About Snippet */}
      <AboutSnippet />

      {/* 4. Services Overview */}
      <ServicesOverview />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. Expertise Carousel */}
      <MotionSection>
        <ExpertiseCarousel
          items={[
            {
              title: 'Strategic Planning',
              description: 'Optimizing spatial flow and functionality tailored to your lifestyle.',
              image: '/images/facility/Strategic Planning INTERIOR.jpg',
            },
            {
              title: 'Modular Manufacturing',
              description: 'Precision-crafted furniture and bespoke elements produced in-house.',
              image: '/images/facility/MODULAR MAN.png',
            },
            {
              title: 'Turnkey Execution',
              description: 'Seamless end-to-end project delivery with zero compromise on quality.',
              image: '/images/facility/Turnkey Execution.jpg',
            },
            {
              title: 'Material Curation',
              description: 'Sourcing premium materials and establishing partnerships with trusted vendors.',
              image: '/images/facility/Material Curation.jpg',
            },
            {
              title: 'Final Styling',
              description: 'Curated finishing touches and accessories that complete your vision.',
              image: '/images/facility/FINAL STYLING.webp',
            },
          ]}
          onCardClick={openModal}
        />
      </MotionSection>

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Room Showcase */}
      <MotionSection>
        <RoomShowcase onTellYourStory={openModal} />
      </MotionSection>

      {/* 9. Testimonials */}
      <MotionSection>
        <TestimonialsCarousel />
      </MotionSection>

      {/* 10. Final CTA */}
      <FinalCTA onOpenEnquiry={openModal} />

      {/* Modal */}
      <ModalEnquiry
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleEnquiry}
      />
    </div>
  );
}
