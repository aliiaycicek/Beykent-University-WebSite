'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Search, Share2 } from 'lucide-react'

export default function Home() {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Integrated Header */}
      <section className="relative h-screen min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-image.svg"
            alt="Beykent Üniversitesi Kampüsü"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Header embedded directly into Hero - 3 Line Layout */}
        <div className="absolute top-2 left-0 w-full z-50">
          {/* Logo positioned at top-left corner - Y axis same, X axis moved to left */}
          <div className="absolute left-4 z-60" style={{top: '25px'}}>
            <div className="flex items-center">
              <Image
                src="/images/logos/beykent-logo.svg"
                alt="İstanbul Beykent Üniversitesi"
                width={60}
                height={60}
                className="h-12 w-12"
              />
              <div className="ml-3">
                <div className="text-white font-bold text-base leading-tight" style={{fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
                  İSTANBUL BEYKENT<br />
                  ÜNİVERSİTESİ
                </div>
              </div>
            </div>
          </div>

          {/* Line 1: Top Buttons */}
          <div className="text-white py-2 relative" style={{marginTop: '10px'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end items-center">
                {/* Header Buttons - Positioned to the right, just left of Mod button */}
                <div className="flex items-center space-x-4 mr-6">
                  <Link href="/aday-ogrenci" className="bg-transparent border-2 border-white rounded-2xl flex items-center justify-center text-[#3D2673] font-bold text-sm uppercase hover:bg-white hover:text-[#482D7E] transition-colors" style={{width: '180px', height: '45px', fontFamily: 'Roboto, sans-serif'}}>
                    <Image src="/images/homepage-icons/user-icon.svg" alt="User" width={16} height={16} className="mr-2" />
                    ADAY ÖĞRENCİ
                  </Link>
                  <Link href="/mezun" className="bg-transparent border-2 border-white rounded-2xl flex items-center justify-center text-[#3D2673] font-bold text-sm uppercase hover:bg-white hover:text-[#482D7E] transition-colors" style={{width: '180px', height: '45px', fontFamily: 'Roboto, sans-serif'}}>
                    <Image src="/images/homepage-icons/graduation-cap-icon.svg" alt="Graduation" width={16} height={16} className="mr-2" />
                    MEZUN
                  </Link>
                  <Link href="/hizli-menu" className="bg-transparent border-2 border-white rounded-2xl flex items-center justify-center text-[#3D2673] font-bold text-sm uppercase hover:bg-white hover:text-[#482D7E] transition-colors" style={{width: '180px', height: '45px', fontFamily: 'Roboto, sans-serif'}}>
                    <Image src="/images/homepage-icons/menu-icon.svg" alt="Menu" width={16} height={16} className="mr-2" />
                    HIZLI MENÜ
                  </Link>
                </div>

                {/* Right side: Theme Toggle and Language Selector */}
                <div className="flex items-center space-x-6">
                  {/* Theme Toggle Buttons */}
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 rounded bg-transparent border border-[#3D2673] hover:bg-[#3D2673]/20 transition-colors flex items-center justify-center text-sm font-medium text-[#3D2673]" style={{fontFamily: 'Roboto, sans-serif'}}>
                      Mod
                    </button>
                    <button className="w-8 h-8 rounded bg-white border border-[#3D2673] hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
                      <Image src="/images/homepage-icons/sun-icon.svg" alt="Light mode" width={16} height={16} className="filter" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(2270%) hue-rotate(260deg) brightness(95%) contrast(95%)'}} />
                    </button>
                    <button className="w-8 h-8 rounded bg-transparent border border-[#3D2673] hover:bg-[#3D2673]/20 transition-colors flex items-center justify-center">
                      <Image src="/images/homepage-icons/moon-icon.svg" alt="Dark mode" width={16} height={16} className="filter" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(2270%) hue-rotate(260deg) brightness(95%) contrast(95%)'}} />
                    </button>
                  </div>

                  {/* Language Selector */}
                  <div className="flex items-center space-x-3">
                    <button className="text-[#3D2673] text-sm hover:text-[#F4C400] transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>TR</button>
                    <span className="text-[#3D2673]/50">|</span>
                    <button className="text-[#3D2673] text-sm hover:text-[#F4C400] transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>EN</button>
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
          <div className="text-white py-3 relative" style={{marginTop: '20px'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                {/* Left side: Empty space for logo */}
                <div className="w-64"></div>

                {/* Center: Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="relative group">
                      <button 
                        className="text-[#3D2673] text-sm font-medium hover:text-[#F4C400] transition-colors flex items-center"
                        style={{fontFamily: 'Roboto, sans-serif'}}
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
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F4C400]/10 hover:text-[#3D2673] transition-colors"
                                style={{fontFamily: 'Roboto, sans-serif'}}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
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
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-xs font-medium text-[#3D2673] hover:text-[#F4C400] hover:bg-gray-50 rounded-md transition-colors"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Hero Content - Repositioned higher with larger text */}
          <div className="relative z-10 h-full">
            <div className="absolute" style={{left: '117px', top: '120px'}}>
              {/* Main heading - 2x larger and positioned higher */}
              <h1 className="mb-6">
                <span className="block text-[48px] leading-[48px] text-[#3D2673] font-bold" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Geleceğini Beykent&apos;te
                </span>
                <span className="block text-[48px] leading-[48px] text-[#3D2673] font-bold" style={{fontFamily: 'Roboto, sans-serif'}}>
                  İnşa Et.
                </span>
              </h1>
            
            {/* Description paragraph - 2x larger */}
            <p className="text-[18px] leading-[24px] max-w-[700px] mb-8 text-[#3D2673]" style={{fontFamily: 'Roboto, sans-serif', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)'}}>
              30 yıllık deneyimi ile eğitimde öncü, geleceğe yön veren üniversite. 
              Modern eğitim yaklaşımı ve güçlü akademik kadrosu ile öğrencilerimizi başarıya hazırlıyoruz.
            </p>
            
            {/* Buttons - 2x larger and positioned with reduced padding */}
            <div className="flex gap-4">
              <button 
                className="bg-[#3D2673] text-white text-[12px] py-3 px-6 rounded-full transition-all duration-300 hover:bg-[#482D7E] hover:shadow-lg"
                style={{fontFamily: 'Roboto, sans-serif'}}
              >
                BEYKENT&apos;İ KEŞFET
              </button>
              
              <button 
                className="bg-transparent border-2 border-white text-white text-[12px] py-2 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-[#3D2673]"
                style={{fontFamily: 'Roboto, sans-serif'}}
              >
                BÖLÜMLERİ İNCELE
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* News and Announcements Section - Reorganized layout */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-[16px] font-bold text-[#3D2673] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
              HABERLER & DUYURULAR
            </h2>
            <p className="text-[8px] text-gray-600" style={{fontFamily: 'Roboto, sans-serif'}}>
              Üniversitemizden güncel gelişmeler ve önemli duyurular takip edin
            </p>
          </div>

          {/* News Layout - Main news large, 4 smaller news side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main News - Large (Son Haber) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/news/main-news.jpg"
                    alt="Son Haber"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#F4C400] text-[#3D2673] px-2 py-1 rounded text-[7px] font-bold" style={{fontFamily: 'Roboto, sans-serif'}}>
                      SON HABER
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-[12px] font-bold text-[#3D2673] mb-2 line-clamp-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                    Üniversitemiz Yeni Akademik Yıla Hazır
                  </h3>
                  <p className="text-[8px] text-gray-600 mb-2 line-clamp-3" style={{fontFamily: 'Roboto, sans-serif'}}>
                    2024-2025 akademik yılı için tüm hazırlıklar tamamlandı. Öğrencilerimizi modern kampüsümüzde karşılamaya hazırız.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] text-gray-500" style={{fontFamily: 'Roboto, sans-serif'}}>15 Ocak 2024</span>
                    <button className="text-[7px] text-[#3D2673] hover:text-[#F4C400] font-medium" style={{fontFamily: 'Roboto, sans-serif'}}>
                      Devamını Oku →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller News Cards - 4 cards in a 2x2 grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-16">
                    <Image
                      src={`/images/news/news-${item}.jpg`}
                      alt={`Haber ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <h4 className="text-[8px] font-bold text-[#3D2673] mb-1 line-clamp-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                      Önemli Duyuru {item}
                    </h4>
                    <p className="text-[7px] text-gray-600 mb-1 line-clamp-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                      Kısa açıklama metni burada yer alacak.
                    </p>
                    <span className="text-[6px] text-gray-500" style={{fontFamily: 'Roboto, sans-serif'}}>
                      {10 + item} Ocak 2024
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-[16px] font-bold text-[#3D2673] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
              ETKİNLİKLER
            </h2>
            <p className="text-[8px] text-gray-600" style={{fontFamily: 'Roboto, sans-serif'}}>
              Kampüsümüzde düzenlenen etkinlikler ve özel programlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-32">
                  <Image
                    src={`/images/events/event-${item}.jpg`}
                    alt={`Etkinlik ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <div className="bg-[#3D2673] text-white px-2 py-1 rounded text-[6px] text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
                      <div className="font-bold">25</div>
                      <div>OCA</div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-[10px] font-bold text-[#3D2673] mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>
                    Kariyer Günleri 2024
                  </h3>
                  <p className="text-[7px] text-gray-600 mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                    Sektör temsilcileri ile buluşma fırsatı
                  </p>
                  <div className="flex items-center text-[6px] text-gray-500" style={{fontFamily: 'Roboto, sans-serif'}}>
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Beykent Kampüsü
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 bg-[#3D2673] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[20px] font-bold text-[#F4C400] mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>30+</div>
              <div className="text-[8px] text-gray-300" style={{fontFamily: 'Roboto, sans-serif'}}>Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-[20px] font-bold text-[#F4C400] mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>25,000+</div>
              <div className="text-[8px] text-gray-300" style={{fontFamily: 'Roboto, sans-serif'}}>Öğrenci</div>
            </div>
            <div>
              <div className="text-[20px] font-bold text-[#F4C400] mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>100+</div>
              <div className="text-[8px] text-gray-300" style={{fontFamily: 'Roboto, sans-serif'}}>Program</div>
            </div>
            <div>
              <div className="text-[20px] font-bold text-[#F4C400] mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>50+</div>
              <div className="text-[8px] text-gray-300" style={{fontFamily: 'Roboto, sans-serif'}}>Ülke Ortaklığı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certificate Programs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-[16px] font-bold text-[#3D2673] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
              EĞİTİM & SERTİFİKA PROGRAMLARI
            </h2>
            <p className="text-[8px] text-gray-600" style={{fontFamily: 'Roboto, sans-serif'}}>
              Profesyonel gelişiminiz için özel tasarlanmış programlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Dijital Pazarlama', duration: '8 Hafta', level: 'Başlangıç' },
              { title: 'Veri Analizi', duration: '12 Hafta', level: 'Orta' },
              { title: 'Proje Yönetimi', duration: '6 Hafta', level: 'İleri' }
            ].map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#F4C400] text-[#3D2673] px-2 py-1 rounded text-[6px] font-bold" style={{fontFamily: 'Roboto, sans-serif'}}>
                    {program.level}
                  </span>
                  <span className="text-[6px] text-gray-500" style={{fontFamily: 'Roboto, sans-serif'}}>{program.duration}</span>
                </div>
                <h3 className="text-[10px] font-bold text-[#3D2673] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                  {program.title}
                </h3>
                <p className="text-[7px] text-gray-600 mb-3" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Sektör uzmanları tarafından hazırlanan kapsamlı eğitim programı
                </p>
                <button className="w-full bg-[#3D2673] text-white text-[7px] py-1.5 rounded hover:bg-[#482D7E] transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Detayları Görüntüle
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-[16px] font-bold text-[#3D2673] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
              YERLEŞKELERİMİZ
            </h2>
            <p className="text-[8px] text-gray-600" style={{fontFamily: 'Roboto, sans-serif'}}>
              Modern kampüslerimizde eğitim hayatınızı sürdürün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hadımköy Campus */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40">
                <Image
                  src="/images/campuses/hadimkoy-campus.jpg"
                  alt="Hadımköy Yerleşkesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[8px] font-bold text-[#3D2673] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                  HADİMKÖY YERLEŞKESİ
                </h3>
                <p className="text-[7px] text-gray-600 mb-3" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Ana kampüsümüz modern laboratuvarları ve sosyal alanları ile öğrencilerimize hizmet vermektedir.
                </p>
                <div className="flex items-center text-[6px] text-gray-500" style={{fontFamily: 'Roboto, sans-serif'}}>
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Hadımköy, İstanbul
                </div>
              </div>
            </div>

            {/* Taksim Campus */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40">
                <Image
                  src="/images/campuses/taksim-campus.jpg"
                  alt="Taksim Yerleşkesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[8px] font-bold text-[#3D2673] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                  TAKSİM YERLEŞKESİ
                </h3>
                <p className="text-[7px] text-gray-600 mb-3" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Şehrin kalbinde yer alan kampüsümüz kolay ulaşım imkanları sunmaktadır.
                </p>
                <div className="flex items-center text-[6px] text-gray-500" style={{fontFamily: 'Roboto, sans-serif'}}>
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Taksim, İstanbul
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D2673] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="İstanbul Beykent Üniversitesi"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
                <div className="ml-2">
                  <div className="text-white font-bold text-xs leading-tight" style={{fontFamily: 'Roboto, sans-serif'}}>
                    İSTANBUL BEYKENT<br />
                    ÜNİVERSİTESİ
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-300 mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>
                30 yıllık deneyimi ile eğitimde öncü, geleceğe yön veren üniversite.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#F4C400] font-bold text-xs mb-3 uppercase" style={{fontFamily: 'Roboto, sans-serif'}}>Hızlı Bağlantılar</h3>
              <ul className="space-y-1.5">
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Fakülteler</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Enstitüler</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Yüksekokullar</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Araştırma Merkezleri</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Akademik Takvim</a></li>
              </ul>
            </div>

            {/* Academic */}
            <div>
              <h3 className="text-[#F4C400] font-bold text-xs mb-3 uppercase" style={{fontFamily: 'Roboto, sans-serif'}}>Akademik</h3>
              <ul className="space-y-1.5">
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Lisans</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Yüksek Lisans</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Doktora</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Öğrenci Bilgi Sistemi</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>KVKK Aydınlatma Metni</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#F4C400] font-bold text-xs mb-3 uppercase" style={{fontFamily: 'Roboto, sans-serif'}}>İletişim</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-3 h-3 mr-2 text-[#F4C400]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-300" style={{fontFamily: 'Roboto, sans-serif'}}>info@beykent.edu.tr</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 mr-2 text-[#F4C400]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-xs text-gray-300" style={{fontFamily: 'Roboto, sans-serif'}}>0212 444 1997</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xs text-gray-400 mb-3 md:mb-0" style={{fontFamily: 'Roboto, sans-serif'}}>
                © 2024 İstanbul Beykent Üniversitesi. Tüm hakları saklıdır.
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Gizlilik Politikası</a>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>Kullanım Koşulları</a>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Roboto, sans-serif'}}>KVKK</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
