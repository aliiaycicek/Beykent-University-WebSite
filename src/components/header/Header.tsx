'use client';

import { useState, useEffect } from 'react';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderActions from './HeaderActions';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#3D2673] text-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg backdrop-blur-sm bg-[#3D2673]/95' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-[60px] sm:h-[72px] border-b border-white/10">
          <HeaderLogo />
          <HeaderTop />
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-4 lg:h-[92px] gap-4 lg:gap-0">
          <HeaderActions />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
