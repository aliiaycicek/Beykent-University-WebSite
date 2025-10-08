'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, User, Users } from 'lucide-react'

const BeykentHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  // Navigation items with dropdown menus
  const navigationItems = [
    { 
      name: 'Beykent Hakkında', 
      href: '/beykent-hakkinda',
      hasDropdown: false
    },
    { 
      name: 'Akademik', 
      href: '/akademik',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AKADEMİK KADRO', href: '/akademik/kadro' },
        { name: 'AKADEMİK TAKVİM', href: '/akademik/takvim' },
        { name: 'AKTS KATALOĞU', href: '/akademik/akts-katalogu' },
        { name: 'TEKNOLOJİ TRANSFER OFİSİ', href: '/akademik/teknoloji-transfer' },
        { name: 'FAKÜLTELER', href: '/akademik/fakulteler' },
        { name: 'KÜTÜPHANE', href: '/akademik/kutuphane' },
        { name: 'YÜKSEKOKULLAR', href: '/akademik/yuksekokullar' },
        { name: 'KURALLAR VE KOMİSYONLAR', href: '/akademik/kurallar' },
        { name: 'TÜM PROGRAMLAR', href: '/akademik/programlar' },
        { name: 'ENSTİTÜLER', href: '/akademik/enstitüler' },
        { name: 'ENDÜSTRİYEL HİZMET', href: '/akademik/endustriyel-hizmet' },
        { name: 'SÜREKLİ EĞİTİM MERKEZİ', href: '/akademik/surekli-egitim' },
        { name: 'ÖĞRETİM ÜYESİ YETİŞTİRME VE GELİŞTİRME PROGRAMI', href: '/akademik/ogretim-uyesi-yetistirme' }
      ]
    },
    { 
      name: 'Öğrenci', 
      href: '/ogrenci',
      hasDropdown: false
    },
    { 
      name: 'Uluslararası', 
      href: '/uluslararasi',
      hasDropdown: false
    }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#3D2673] text-white py-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center space-x-2">
            {/* Header Buttons */}
            <div className="flex items-center space-x-2">
              <Link href="/aday-ogrenci" className="bg-white rounded-xl flex items-center justify-center text-[#3D2673] font-bold text-[14px] uppercase hover:bg-gray-50 transition-colors px-3 py-1" style={{fontFamily: 'Roboto, sans-serif'}}>
                <User className="h-3 w-3 mr-1 text-[#3D2673]" />
                ADAY ÖĞRENCİ
              </Link>
              <Link href="/mezun" className="bg-white rounded-xl flex items-center justify-center text-[#3D2673] font-bold text-[14px] uppercase hover:bg-gray-50 transition-colors px-3 py-1" style={{fontFamily: 'Roboto, sans-serif'}}>
                <Users className="h-3 w-3 mr-1 text-[#3D2673]" />
                MEZUN
              </Link>
              <Link href="/hizli-menu" className="bg-white rounded-xl flex items-center justify-center text-[#3D2673] font-bold text-[14px] uppercase hover:bg-gray-50 transition-colors px-3 py-1" style={{fontFamily: 'Roboto, sans-serif'}}>
                HIZLI MENÜ
              </Link>
            </div>
            
            {/* Theme Toggle Buttons */}
            <div className="flex items-center space-x-1">
              <button className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-[#3D2673] text-[12px] font-medium" style={{fontFamily: 'Roboto, sans-serif'}}>
                Mod
              </button>
              <button className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-[12px]">
                ☀️
              </button>
              <button className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-[12px]">
                🌙
              </button>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center text-[#3D2673] text-[14px] bg-white rounded px-2 py-1" style={{fontFamily: 'Roboto, sans-serif'}}>
              <span className="mr-1">🌐</span>
              <span>TR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="İstanbul Beykent Üniversitesi"
                  width={80}
                  height={80}
                  className="h-16 w-16"
                />
                <div className="ml-3">
                  <div className="text-[#3D2673] font-bold text-[18px] leading-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
                    İSTANBUL BEYKENT<br />
                    ÜNİVERSİTESİ
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-[#3D2673] hover:text-[#3D2673]/80 px-3 py-2 text-[18px] font-medium transition-colors duration-200"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4 text-[#3D2673]" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && hoveredMenu === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-[#FFDD03] rounded-lg shadow-lg z-50">
                      <div className="p-4 grid grid-cols-2 gap-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-[#3D2673] hover:bg-[#3D2673] hover:text-white px-2 py-1 text-[14px] font-medium rounded transition-colors duration-200"
                            style={{fontFamily: 'Roboto, sans-serif'}}
                          >
                            • {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Share Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-[#482D7E] p-2 rounded-md transition-colors duration-200">
                🔍
              </button>
              <button className="text-gray-700 hover:text-[#482D7E] p-2 rounded-md transition-colors duration-200">
                📤
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#482D7E] p-2 rounded-md transition-colors duration-200"
                aria-label="Ana menü"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-[#482D7E] hover:bg-gray-50 rounded-md transition-colors duration-200"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-[16px] text-gray-600 hover:text-[#482D7E] hover:bg-gray-50 rounded-md transition-colors duration-200"
                            style={{fontFamily: 'Roboto, sans-serif'}}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            • {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default BeykentHeader