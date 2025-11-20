'use client';

import { useState } from 'react';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function HomeOfficePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEnquiry = async (data: EnquiryData) => {
    const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (!response.ok) throw new Error('Failed'); alert('Thank you!');
  };

  return (<div className="bg-white"><section className="bg-gray-900 text-white py-20 pt-32"><div className="max-w-7xl mx-auto px-6"><h1 className="text-5xl font-bold mb-4">Home Office Design</h1><p className="text-lg text-gray-300">Productive workspace designed for your success</p></div></section><section className="max-w-3xl mx-auto px-6 py-20"><h2 className="text-3xl font-bold mb-6">Professional Home Workspace</h2><p className="text-gray-600 mb-8">Create a dedicated, productive workspace that inspires and motivates.</p><ul className="space-y-3 text-gray-600 mb-8"><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Ergonomic furniture</span></li><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Professional lighting</span></li><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Acoustic design</span></li><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Smart storage solutions</span></li></ul><button onClick={() => setModalOpen(true)} className="btn-luxury">Enquire Now</button></section><ModalEnquiry isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleEnquiry} /></div>);
}
