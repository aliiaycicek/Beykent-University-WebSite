'use client';

import { useState, useEffect } from 'react';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderActions from './HeaderActions';
import HeaderLogo from './HeaderLogo';

interface HeaderProps {
  transparent?: boolean; // Ana sayfada true, diğer sayfalarda false
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ana sayfada şeffaf, scroll olunca veya diğer sayfalarda mor arka plan
  const headerBackground =
    transparent && !isScrolled ? 'transparent' : '#3D2673';

  const headerBackgroundStyle =
    transparent && !isScrolled ? {} : { background: '#3D2673' };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        height: '164px',
        ...headerBackgroundStyle,
        backdropFilter: transparent && isScrolled ? 'blur(10px)' : undefined,
      }}
    >
      <div className="relative max-w-[1440px] mx-auto h-full px-4 lg:px-0">
        {/* Logo - Sol tarafta, Figma: left 115px, top 53px */}
        <div className="absolute" style={{ left: '115px', top: '53px' }}>
          <HeaderLogo />
        </div>

        {/* Butonlar - Figma: left 503px, top 25px, gap 34px */}
        <div
          className="absolute hidden lg:block"
          style={{ left: '503px', top: '25px' }}
        >
          <HeaderActions />
        </div>

        {/* Mod ve Dil ayarları - Sağ üst, Figma: right ~62px, top 35px */}
        <div className="absolute" style={{ right: '62px', top: '35px' }}>
          <HeaderTop />
        </div>

        {/* Alt Navigasyon - Figma: left 605px, top 97px */}
        <div
          className="absolute hidden lg:block"
          style={{ left: '605px', top: '97px' }}
        >
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
