'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useHoverDelay } from '@/app/hooks/useHoverDelay';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { delayedClose } = useHoverDelay(300);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    delayedClose(() => setDropdownOpen(false));
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          ELVENWOOD
        </Link>

        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/process" className="hover:text-blue-600 transition">
              Process
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="hover:text-blue-600 transition">
              Explore Rooms
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-48">
                <Link
                  href="/living-room"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Living Room
                </Link>
                <Link
                  href="/kitchen"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Kitchen
                </Link>
                <Link
                  href="/bedroom"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bedroom
                </Link>
                <Link
                  href="/kids-room"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Kids Room
                </Link>
                <Link
                  href="/home-office"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Home Office
                </Link>
                <Link
                  href="/dining"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dining
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
