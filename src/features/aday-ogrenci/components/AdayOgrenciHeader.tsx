'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MENU_ITEMS = [
  { label: 'Beykent Hakkında', href: '/beykent-hakkinda' },
  { label: 'Haberler', href: '/haberler' },
  { label: 'Akademik', href: '/akademik' },
  { label: 'Uluslararası', href: '/uluslararasi' },
];

export default function AdayOgrenciHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full h-[80px] bg-[#3D2673]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/logos/beykent-logo.svg"
            alt="Beykent Üniversitesi"
            width={52}
            height={52}
            priority
            className="w-10 h-10 sm:w-[52px] sm:h-[52px]"
          />
          <div className="text-xs sm:text-sm font-semibold leading-tight text-white hidden sm:block">
            <div>İSTANBUL BEYKENT</div>
            <div>ÜNİVERSİTESİ</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {MENU_ITEMS.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-base font-normal hover:text-[#FFDD00] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-2 text-white">
            <span className="text-base">En</span>
            <svg
              className="w-2.5 h-1.5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5L0 0H10L5 5Z" fill="white" />
            </svg>
          </div>

          {/* Vertical Line */}
          <div className="hidden sm:block w-px h-4 bg-white" />

          {/* Search Icon */}
          <button className="w-6 h-6 flex items-center justify-center text-white hover:text-[#FFDD00] transition-colors">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 16L20 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-6 h-6 flex flex-col justify-center items-center gap-1 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-5 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-[#3D2673] border-t border-white/10 py-4">
          <nav className="flex flex-col gap-4 px-4">
            {MENU_ITEMS.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-base font-normal hover:text-[#FFDD00] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
