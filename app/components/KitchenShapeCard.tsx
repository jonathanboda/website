'use client';

import Image from 'next/image';
import Link from 'next/link';

interface KitchenShapeCardProps {
  href: string;
  image: string;
  shape: string;
  benefits: string[];
}

export default function KitchenShapeCard({
  href,
  image,
  shape,
  benefits,
}: KitchenShapeCardProps) {
  return (
    <Link href={href}>
      <div className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={shape}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition">
            {shape}
          </h3>
          <ul className="space-y-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="mr-2 text-orange-500">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
