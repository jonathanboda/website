'use client';

import Image from 'next/image';

interface CapabilityCardProps {
  icon?: string;
  title: string;
  description: string;
}

export default function CapabilityCard({
  icon,
  title,
  description,
}: CapabilityCardProps) {
  return (
    <div className="group bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
      {icon && (
        <div className="w-12 h-12 mb-4 text-gray-900">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg" />
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
