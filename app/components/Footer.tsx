'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ELVENWOOD</h3>
            <p className="text-gray-400 text-sm">
              Luxury interior design for modern homes.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/process" className="hover:text-white transition">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/explore-rooms"
                  className="hover:text-white transition"
                >
                  Explore Rooms
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">hello@elvenwood.com</p>
            <p className="text-sm text-gray-400 mb-4">+1 (555) 123-4567</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Elvenwood Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
