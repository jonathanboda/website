'use client';

import { useEffect, useRef, useState } from 'react';

interface ModalEnquiryProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EnquiryData) => Promise<void>;
}

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType?: string;
  spaceSize?: string;
  budgetRange?: string;
  pincode?: string;
}

export default function ModalEnquiry({
  isOpen,
  onClose,
  onSubmit,
}: ModalEnquiryProps) {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'Full Home Interior',
    spaceSize: '',
    budgetRange: '',
    pincode: '',
  });
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      setError('Please confirm your details to proceed');
      return;
    }
    setError(null);
    setLoading(true);
    try {
      // Build message from form data
      const message = `Project Type: ${formData.projectType}\nSpace Size: ${formData.spaceSize} sq.ft\nBudget Range: ${formData.budgetRange}\nPincode: ${formData.pincode}`;
      await onSubmit({ ...formData, message });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: 'Full Home Interior',
        spaceSize: '',
        budgetRange: '',
        pincode: '',
      });
      setConfirmed(false);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl animate-slideUp overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Left Panel - Image & Heading */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 p-12 flex flex-col justify-end text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Request a Quote
              </h2>
              <p className="text-lg text-gray-200">
                Get your free estimate from Elvenwood Interiors
              </p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-8 md:p-12 overflow-y-auto max-h-[600px] relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 flex items-center justify-center"
              aria-label="Close"
            >
              ×
            </button>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile
                </label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  I want to
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                >
                  <option>Full Home Interior</option>
                  <option>Kitchen Design</option>
                  <option>Bedroom Design</option>
                  <option>Living Room Design</option>
                  <option>Modular Kitchen</option>
                  <option>Home Office Design</option>
                  <option>Renovation</option>
                </select>
              </div>

              {/* Space Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Space Size (sq.ft)
                </label>
                <input
                  type="number"
                  placeholder="Enter space size in sq.ft"
                  value={formData.spaceSize}
                  onChange={(e) =>
                    setFormData({ ...formData, spaceSize: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetRange: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                >
                  <option value="">Select budget range</option>
                  <option>Under ₹5 Lakhs</option>
                  <option>₹5 - ₹10 Lakhs</option>
                  <option>₹10 - ₹20 Lakhs</option>
                  <option>₹20 - ₹30 Lakhs</option>
                  <option>₹30 Lakhs+</option>
                </select>
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Confirm Details */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm"
                  checked={confirmed}
                  onChange={(e) => {
                  setConfirmed(e.target.checked);
                  if (e.target.checked) setError(null);
                }}
                  className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="confirm" className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Confirm your details</span>
                  <br />
                  Yes, every detail are correct
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !confirmed}
                className="btn-luxury w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'GET FREE ESTIMATE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
