'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useHoverDelay } from '@/app/hooks/useHoverDelay';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const linkClass = "hover:text-orange-500 focus-visible:text-orange-500 focus-visible:outline-none focus-visible:underline transition-colors";
  const dropdownLinkClass = "block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 focus-visible:bg-orange-50 focus-visible:text-orange-500 focus-visible:outline-none transition-colors text-gray-700";

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="group focus-visible:outline-none transition-all duration-300">
          <img
            src="/images/process/logo.svg"
            alt="Elvenwood"
            className="h-12 w-auto object-contain group-hover:scale-105 group-hover:brightness-110 group-focus-visible:scale-105 transition-all duration-300"
          />
        </Link>

        <ul className="flex gap-6 lg:gap-8 items-center text-gray-700">
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
      </nav>
    </header>
  );
}
