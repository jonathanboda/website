'use client';

import { useState } from 'react';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';

export default function IslandKitchenPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEnquiry = async (data: EnquiryData) => {
    const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (!response.ok) throw new Error('Failed'); alert('Thank you!');
  };

  return (<div className="bg-white"><section className="bg-gray-900 text-white py-20 pt-32"><div className="max-w-7xl mx-auto px-6"><h1 className="text-5xl font-bold mb-4">Island Kitchen</h1><p className="text-lg text-gray-300">Central hub for cooking and socializing</p></div></section><section className="max-w-3xl mx-auto px-6 py-20"><ul className="space-y-4 text-gray-600 mb-8"><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Central island workspace</span></li><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Extra storage and seating</span></li><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Social cooking layout</span></li><li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Luxury peninsula options</span></li></ul><button onClick={() => setModalOpen(true)} className="btn-luxury">Enquire Now</button></section><ModalEnquiry isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleEnquiry} /></div>);
}
