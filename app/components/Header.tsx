'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useHoverDelay } from '@/app/hooks/useHoverDelay';

const navItems = [
  { href: '/process', label: 'Process', description: 'Our design journey' },
  { href: '/services', label: 'Services', description: 'What we offer' },
  { href: '/explore-rooms', label: 'View Projects', description: 'Our portfolio' },
  { href: '/contact', label: 'Contact', description: 'Get in touch' },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { delayedClose, cancel } = useHoverDelay(300);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    cancel();
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    delayedClose(() => setDropdownOpen(false));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    } else if (e.key === 'Escape') {
      setDropdownOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown' && dropdownOpen) {
      e.preventDefault();
      const firstLink = dropdownRef.current?.querySelector('a');
      firstLink?.focus();
    }
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setDropdownOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const links = dropdownRef.current?.querySelectorAll('a');
      const current = document.activeElement;
      if (links) {
        const index = Array.from(links).indexOf(current as HTMLAnchorElement);
        if (index < links.length - 1) links[index + 1]?.focus();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const links = dropdownRef.current?.querySelectorAll('a');
      const current = document.activeElement;
      if (links) {
        const index = Array.from(links).indexOf(current as HTMLAnchorElement);
        if (index > 0) links[index - 1]?.focus();
        else {
          setDropdownOpen(false);
          buttonRef.current?.focus();
        }
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const linkClass = "hover:text-orange-500 focus-visible:text-orange-500 focus-visible:outline-none focus-visible:underline transition-colors";
  const dropdownLinkClass = "block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 focus-visible:bg-orange-50 focus-visible:text-orange-500 focus-visible:outline-none transition-colors text-gray-700";

  return (
    <>
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[200] border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="group focus-visible:outline-none transition-all duration-300">
          <img
            src="/images/process/logo.svg"
            alt="Elvenwood"
            className="h-12 w-auto object-contain group-hover:scale-105 group-hover:brightness-110 group-focus-visible:scale-105 transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center text-gray-700">
          <li>
            <Link href="/process" className={linkClass}>
              Process
            </Link>
          </li>
          <li>
            <Link href="/services" className={linkClass}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/explore-rooms" className={linkClass}>
              View Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

    </header>

    {/* Mobile Menu - Rendered outside header to avoid stacking context issues */}
    {mobileMenuOpen && (
      <div className="md:hidden fixed inset-0 z-[9999]" style={{ top: '73px' }}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-hidden">
          {/* Decorative header accent */}
          <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500" />

          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-orange-50 active:bg-orange-100 transition-all duration-200"
                      onClick={handleMobileLinkClick}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center group-hover:from-orange-200 group-hover:to-amber-100 transition-colors">
                        <span className="text-orange-500 font-semibold text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="block text-lg font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                          {item.label}
                        </span>
                        <span className="block text-sm text-gray-500">
                          {item.description}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA */}
            <div className="px-6 py-6 border-t border-gray-100 bg-gray-50/50">
              <p className="text-sm text-gray-500 mb-3">Ready to transform your space?</p>
              <Link
                href="/contact"
                className="block w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center font-medium rounded-xl hover:from-orange-600 hover:to-amber-600 active:scale-[0.98] transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                onClick={handleMobileLinkClick}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
