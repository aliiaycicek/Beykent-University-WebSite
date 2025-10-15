'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Search, Share2 } from 'lucide-react';
import { AkademikHoverProvider } from '@/components/context/AkademikHoverContext';
import AkademikHoverAnimation from '@/components/ui/AkademikHoverAnimation';

interface HeaderSectionProps {
  className?: string;
}

export default function HeaderSection({ className = '' }: HeaderSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  // Navigation items with dropdown menus
  const navigationItems = [
    {
      name: 'Beykent Hakkında',
      href: '/beykent-hakkinda',
      hasDropdown: false,
    },
    {
      name: 'Haberler',
      href: '/haberler',
      hasDropdown: false,
    },
    {
      name: 'Akademik',
      href: '/akademik',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AKADEMİK KADRO', href: '/akademik/kadro' },
        { name: 'AKADEMİK TAKVİM', href: '/akademik/takvim' },
        { name: 'AKTS KATALOĞU', href: '/akademik/akts-katalogu' },
        {
          name: 'TEKNOLOJİ TRANSFER OFİSİ',
          href: '/akademik/teknoloji-transfer',
        },
        { name: 'FAKÜLTELER', href: '/akademik/fakulteler' },
        { name: 'KÜTÜPHANE', href: '/akademik/kutuphane' },
        { name: 'YÜKSEKOKULLAR', href: '/akademik/yuksekokullar' },
        { name: 'KURALLAR VE KOMİSYONLAR', href: '/akademik/kurallar' },
        { name: 'TÜM PROGRAMLAR', href: '/akademik/programlar' },
        { name: 'ENSTİTÜLER', href: '/akademik/enstitüler' },
        { name: 'ENDÜSTRİYEL HİZMET', href: '/akademik/endustriyel-hizmet' },
        { name: 'SÜREKLİ EĞİTİM MERKEZİ', href: '/akademik/surekli-egitim' },
        {
          name: 'ÖĞRETİM ÜYESİ YETİŞTİRME VE GELİŞTİRME PROGRAMI',
          href: '/akademik/ogretim-uyesi-yetistirme',
        },
      ],
    },
    {
      name: 'Öğrenci',
      href: '/ogrenci',
      hasDropdown: false,
    },
    {
      name: 'Uluslararası',
      href: '/uluslararasi',
      hasDropdown: false,
    },
  ];

  return (
    <AkademikHoverProvider>
      <header className={`absolute top-0 left-0 w-full z-50 ${className}`}>
        {/* Logo positioned at top-left corner */}
        <div className="absolute left-2 sm:left-4 z-60" style={{ top: '15px' }}>
          <div className="flex items-center">
            <Image
              src="/images/logos/beykent-logo.svg"
              alt="İstanbul Beykent Üniversitesi"
              width={60}
              height={60}
              className="h-8 w-8 sm:h-12 sm:w-12"
            />
            <div className="ml-2 sm:ml-3">
              <div
                className="text-white font-bold text-xs sm:text-base leading-tight"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                }}
              >
                <span className="hidden sm:block">
                  İSTANBUL BEYKENT
                  <br />
                  ÜNİVERSİTESİ
                </span>
                <span className="block sm:hidden">BEYKENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Line 1: Top Buttons */}
        <div className="text-white py-2 relative" style={{ marginTop: '10px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center">
              {/* Header Buttons */}
              <div className="hidden lg:flex items-center space-x-4 mr-6">
                <Link
                  href="/aday-ogrenci"
                  className="bg-transparent border-2 border-white rounded-2xl flex items-center justify-center text-[#3D2673] font-bold text-sm uppercase hover:bg-white hover:text-[#482D7E] transition-colors"
                  style={{
                    width: '180px',
                    height: '45px',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  <Image
                    src="/images/homepage-icons/user-icon.svg"
                    alt="User"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  ADAY ÖĞRENCİ
                </Link>
                <Link
                  href="/mezun"
                  className="bg-transparent border-2 border-white rounded-2xl flex items-center justify-center text-[#3D2673] font-bold text-sm uppercase hover:bg-white hover:text-[#482D7E] transition-colors"
                  style={{
                    width: '180px',
                    height: '45px',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  <Image
                    src="/images/homepage-icons/graduation-cap-icon.svg"
                    alt="Graduation"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  MEZUN
                </Link>
                <Link
                  href="/hizli-menu"
                  className="bg-transparent border-2 border-white rounded-2xl flex items-center justify-center text-[#3D2673] font-bold text-sm uppercase hover:bg-white hover:text-[#482D7E] transition-colors"
                  style={{
                    width: '180px',
                    height: '45px',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  <Image
                    src="/images/homepage-icons/menu-icon.svg"
                    alt="Menu"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  HIZLI MENÜ
                </Link>
              </div>

              {/* Right side: Theme Toggle and Language Selector */}
              <div className="flex items-center space-x-6">
                {/* Theme Toggle Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    className="w-8 h-8 rounded bg-transparent border border-[#3D2673] hover:bg-[#3D2673]/20 transition-colors flex items-center justify-center text-sm font-medium text-[#3D2673]"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Mod
                  </button>
                  <button className="w-8 h-8 rounded bg-white border border-[#3D2673] hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
                    <Image
                      src="/images/homepage-icons/sun-icon.svg"
                      alt="Light mode"
                      width={16}
                      height={16}
                      className="filter"
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(2270%) hue-rotate(260deg) brightness(95%) contrast(95%)',
                      }}
                    />
                  </button>
                  <button className="w-8 h-8 rounded bg-transparent border border-[#3D2673] hover:bg-[#3D2673]/20 transition-colors flex items-center justify-center">
                    <Image
                      src="/images/homepage-icons/moon-icon.svg"
                      alt="Dark mode"
                      width={16}
                      height={16}
                      className="filter"
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(2270%) hue-rotate(260deg) brightness(95%) contrast(95%)',
                      }}
                    />
                  </button>
                </div>

                {/* Language Selector */}
                <div className="flex items-center space-x-3">
                  <button
                    className="text-[#3D2673] text-sm hover:text-[#F4C400] transition-colors"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    TR
                  </button>
                  <span className="text-[#3D2673]/50">|</span>
                  <button
                    className="text-[#3D2673] text-sm hover:text-[#F4C400] transition-colors"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    EN
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5 text-[#3D2673]" />
                  ) : (
                    <Menu className="h-5 w-5 text-[#3D2673]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Line 2: Navigation and Search/Share */}
        <div className="text-white py-3 relative" style={{ marginTop: '20px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Left side: Empty space for logo */}
              <div className="w-64"></div>

              {/* Center: Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navigationItems.map(item => (
                  <div key={item.name} className="relative group">
                    {item.name === 'Akademik' ? (
                      <AkademikHoverAnimation>
                        <button
                          className="text-[#3D2673] text-sm font-medium hover:text-[#F4C400] transition-colors flex items-center"
                          style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                      </AkademikHoverAnimation>
                    ) : (
                      <>
                        <button
                          className="text-[#3D2673] text-sm font-medium hover:text-[#F4C400] transition-colors flex items-center"
                          style={{ fontFamily: 'Roboto, sans-serif' }}
                          onMouseEnter={() => setHoveredMenu(item.name)}
                          onMouseLeave={() => setHoveredMenu(null)}
                        >
                          {item.name}
                          {item.hasDropdown && (
                            <ChevronDown className="ml-1 h-4 w-4" />
                          )}
                        </button>

                        {item.hasDropdown && hoveredMenu === item.name && (
                          <div
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                            onMouseEnter={() => setHoveredMenu(item.name)}
                            onMouseLeave={() => setHoveredMenu(null)}
                          >
                            <div className="grid grid-cols-1 gap-1">
                              {item.dropdownItems?.map(dropdownItem => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F4C400]/10 hover:text-[#3D2673] transition-colors"
                                  style={{ fontFamily: 'Roboto, sans-serif' }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right side: Search and Share Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-[#3D2673] hover:text-[#F4C400] transition-colors">
                  <Search className="h-6 w-6" />
                </button>
                <button className="text-[#3D2673] hover:text-[#F4C400] transition-colors">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-xs font-medium text-[#3D2673] hover:text-[#F4C400] hover:bg-gray-50 rounded-md transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </AkademikHoverProvider>
  );
}
