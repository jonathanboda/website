'use client';

import Image from 'next/image';
import Link from 'next/link';

interface RoomCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

export default function RoomCard({
  href,
  image,
  title,
  description,
}: RoomCardProps) {
  return (
    <Link href={href}>
      <div className="group cursor-pointer overflow-hidden rounded-lg">
        <div className="relative h-64 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
        </div>
        <div className="p-6 bg-white border border-t-0 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
