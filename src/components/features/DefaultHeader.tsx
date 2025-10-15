'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAkademikHover } from '@/components/context/AkademikHoverContext';
import AkademikHoverAnimation from '@/components/ui/AkademikHoverAnimation';

const DefaultHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAkademikHovered } = useAkademikHover();

  return (
    <header className="bg-[#3D2673] w-full">
      {/* Main Header Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#FFDD00] rounded-lg flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">BEYKENT</div>
                <div className="text-xs opacity-80">UNIVERSITY</div>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="/hakkimizda"
              className="text-white font-bold text-xl hover:text-[#FFDD00] transition-colors"
            >
              Beykent Hakkında
            </Link>

            <AkademikHoverAnimation>
              <Link
                href="/akademik"
                className="text-white font-bold text-xl hover:text-[#FFDD00] transition-colors relative"
              >
                Akademik
              </Link>
            </AkademikHoverAnimation>

            <Link
              href="/ogrenci"
              className="text-white font-bold text-xl hover:text-[#FFDD00] transition-colors"
            >
              Öğrenci
            </Link>

            <Link
              href="/uluslararasi"
              className="text-white font-bold text-xl hover:text-[#FFDD00] transition-colors"
            >
              Uluslararası
            </Link>

            <Link
              href="/haberler"
              className="text-white font-bold text-xl hover:text-[#FFDD00] transition-colors"
            >
              Haberler
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button className="w-10 h-10 bg-[rgba(244,196,0,0.15)] rounded-lg flex items-center justify-center hover:bg-[rgba(244,196,0,0.25)] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 bg-[rgba(244,196,0,0.15)] rounded-lg px-3 py-2">
              <span className="text-white font-bold text-sm">TR</span>
            </div>

            {/* Search Button */}
            <button className="w-10 h-10 bg-[rgba(244,196,0,0.15)] rounded-lg flex items-center justify-center hover:bg-[rgba(244,196,0,0.25)] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Share Button */}
            <button className="w-10 h-10 bg-[rgba(244,196,0,0.15)] rounded-lg flex items-center justify-center hover:bg-[rgba(244,196,0,0.25)] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 6L12 2L8 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-[rgba(244,196,0,0.15)] rounded-lg flex items-center justify-center hover:bg-[rgba(244,196,0,0.25)] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="bg-[#3D2673] border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8">
            {/* Aday Öğrenci Button */}
            <Link
              href="/aday-ogrenci"
              className="flex items-center space-x-3 bg-[rgba(244,196,0,0.1)] hover:bg-[rgba(244,196,0,0.2)] rounded-2xl px-4 py-3 transition-colors group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white group-hover:text-[#FFDD00] transition-colors"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-sm uppercase group-hover:text-[#FFDD00] transition-colors">
                Aday Öğrenci
              </span>
            </Link>

            {/* Mezun Button */}
            <Link
              href="/mezun"
              className="flex items-center space-x-3 bg-[rgba(244,196,0,0.1)] hover:bg-[rgba(244,196,0,0.2)] rounded-2xl px-4 py-3 transition-colors group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white group-hover:text-[#FFDD00] transition-colors"
                >
                  <path
                    d="M22 12H18L15 21L9 3L6 12H2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-sm uppercase group-hover:text-[#FFDD00] transition-colors">
                Mezun
              </span>
            </Link>

            {/* Hızlı Menü Button */}
            <button className="flex items-center space-x-3 bg-[rgba(255,255,255,0.75)] hover:bg-white rounded-2xl px-4 py-3 transition-colors group">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#3D2673] group-hover:text-[#3D2673] transition-colors"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[#3D2673] font-bold text-sm uppercase group-hover:text-[#3D2673] transition-colors">
                Hızlı Menü
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#3D2673] border-t border-[rgba(255,255,255,0.1)]">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/hakkimizda"
              className="block text-white font-bold text-lg hover:text-[#FFDD00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beykent Hakkında
            </Link>
            <Link
              href="/akademik"
              className="block text-white font-bold text-lg hover:text-[#FFDD00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Akademik
            </Link>
            <Link
              href="/ogrenci"
              className="block text-white font-bold text-lg hover:text-[#FFDD00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Öğrenci
            </Link>
            <Link
              href="/uluslararasi"
              className="block text-white font-bold text-lg hover:text-[#FFDD00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Uluslararası
            </Link>
            <Link
              href="/haberler"
              className="block text-white font-bold text-lg hover:text-[#FFDD00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Haberler
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default DefaultHeader;
