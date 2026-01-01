'use client';

import Image from 'next/image';
import Link from 'next/link';
import AdayOgrenciHeader from '../components/AdayOgrenciHeader';

export default function HeroSection() {
  return (
    <section className="relative min-h-[810px] lg:min-h-[890px]">
      {/* Header - Ayrı bileşen olarak */}
      <AdayOgrenciHeader />

      {/* Hero Background - Mevcut görsel korunuyor */}
      <div className="absolute inset-0 top-[80px]">
        <Image
          src="/images/aday-ogrenci/adayogrenci-hero.png"
          alt="Beykent Kampüsü"
          fill
          className="object-cover"
          style={{ filter: 'blur(4px)' }}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 top-[80px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 pt-[80px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-20 lg:pt-32">
            {/* Left Side - Title & Stats */}
            <div className="flex-1">
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-tight mb-8 font-['Plus_Jakarta_Sans']">
                Beykent&apos;te
                <br />
                Geleceğini
                <br />
                İnşa Et
              </h1>
            </div>

            {/* Right Side - Stats & CTA Buttons */}
            <div className="flex-1">
              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 lg:gap-12 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-[21px] h-[21px] bg-[#FFDD00] rounded-full" />
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                    160+ Program
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[21px] h-[21px] bg-[#009EE0] rounded-full" />
                  <span className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                    50,000 Mezun
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[21px] h-[21px] bg-[#FFDD00] rounded-full" />
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                    4 Kampüs
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/online-basvuru"
                  className="flex items-center gap-2 px-6 py-4 rounded-3xl text-white/40 font-bold text-sm font-['Roboto_Slab'] hover:text-white transition-colors"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(54, 19, 195, 0.3) 0%, rgba(0, 158, 224, 0.35) 100%)',
                    backdropFilter: 'blur(25px)',
                  }}
                >
                  Online Başvuru Yap
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <button
                  className="flex items-center gap-2 px-6 py-4 rounded-3xl text-white/40 font-bold text-sm font-['Roboto_Slab'] hover:text-white transition-colors"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(54, 19, 195, 0.3) 0%, rgba(0, 158, 224, 0.35) 100%)',
                    backdropFilter: 'blur(25px)',
                  }}
                >
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
                  Bölüm Keşfet
                </button>

                <button
                  className="flex items-center gap-2 px-6 py-4 rounded-3xl text-white/40 font-bold text-sm font-['Roboto_Slab'] hover:text-white transition-colors"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(54, 19, 195, 0.3) 0%, rgba(0, 158, 224, 0.35) 100%)',
                    backdropFilter: 'blur(25px)',
                  }}
                >
                  Tanıtım Videosu
                </button>
              </div>
            </div>
          </div>

          {/* Info Cards Section */}
          <div className="flex flex-wrap gap-6 mt-16 lg:mt-24">
            {/* Card 1 - Tanıtım Günleri */}
            <div
              className="w-[200px] h-[250px] rounded-[25px] p-4 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(270deg, rgba(54, 19, 195, 0.7) 0%, #009EE0 100%)',
                border: '4px solid #007AFF',
                boxShadow:
                  '0px 10px 15px rgba(255, 255, 255, 0.12), 0px 0px 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="Beykent"
                  width={28}
                  height={28}
                />
                <span className="text-xs text-white font-semibold">
                  İSTANBUL BEYKENT
                  <br />
                  ÜNİVERSİTESİ
                </span>
              </div>

              <h3 className="text-white text-sm font-medium font-['Roboto_Slab'] leading-tight mb-4">
                2025 TANITIM VE
                <br />
                TERCİH GÜNLERİ
              </h3>

              {/* Date Circle */}
              <div className="absolute right-4 top-24">
                <div className="w-[85px] h-[85px] rounded-full border-4 border-[#F4C400] flex flex-col items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#F4C400] mb-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 4h-2v-2h2v2zm4 4h-2v-2h2v2z" />
                  </svg>
                  <span className="text-white text-[10px] font-bold">
                    22 TEMMUZ
                  </span>
                  <span className="text-white text-[10px] font-bold">
                    13 AĞUSTOS
                  </span>
                </div>
              </div>

              {/* Locations */}
              <div className="absolute bottom-4 left-4 text-white text-[10px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Ayazağa-Maslak</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Beylikdüzü</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Hadımköy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Taksim</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="absolute bottom-4 right-4 text-white text-[10px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full border border-[#F4C400] flex items-center justify-center">
                    🌐
                  </div>
                  <span>beykent.edu.tr</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#F4C400] flex items-center justify-center">
                    📞
                  </div>
                  <span>444 1997</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Tercih İndirimi */}
            <div
              className="w-[200px] h-[250px] rounded-[25px] p-4 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(270deg, rgba(54, 19, 195, 0.7) 0%, #009EE0 100%)',
                border: '4px solid #007AFF',
                boxShadow:
                  '0px 10px 15px rgba(255, 255, 255, 0.12), 0px 0px 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="Beykent"
                  width={28}
                  height={28}
                />
                <span className="text-xs text-white font-semibold">
                  İSTANBUL BEYKENT
                  <br />
                  ÜNİVERSİTESİ
                </span>
              </div>

              <p className="text-[#F4C400] text-[6px] font-medium font-['Roboto_Slab']">
                İstanbul Beykent Üniversitesine Yerleş
              </p>
              <p className="text-[#F4C400] text-[10px] font-bold font-['Roboto_Slab']">
                Tercih İndiriminden Faydalan!
              </p>

              {/* Discount Circles */}
              <div className="flex gap-2 mt-4">
                <div className="w-[47px] h-[51px] bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-[5px] text-center leading-none">
                    İlk 3 Tercihte
                  </span>
                  <span className="text-[15px] font-medium">+%25</span>
                  <span className="text-[8px] font-medium">İNDİRİM</span>
                </div>
                <div className="w-[47px] h-[51px] bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-[5px] text-center leading-none">
                    4. ve 5. Tercihte
                  </span>
                  <span className="text-[15px] font-medium">+%20</span>
                  <span className="text-[8px] font-medium">İNDİRİM</span>
                </div>
              </div>

              <p className="text-white text-[15px] font-bold mt-3 font-['Roboto']">
                İLK 5 TERCİHTE +%10
              </p>

              {/* Bottom Tags */}
              <div className="flex gap-2 mt-3">
                <div className="bg-white rounded-2xl px-2 py-1">
                  <p className="text-[#007AFF] text-[8px] font-bold leading-tight">
                    Beykent Mezun
                    <br />
                    Referans İndirimi
                  </p>
                </div>
                <span className="text-white text-[8px] self-center">veya</span>
                <div className="bg-white rounded-2xl px-2 py-1">
                  <p className="text-[#007AFF] text-[8px] font-bold leading-tight">
                    Rehber Öğretmen
                    <br />
                    Referans İndirimi
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Mezun Referans İndirimi */}
            <div
              className="w-[200px] h-[250px] rounded-[25px] p-4 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(270deg, rgba(54, 19, 195, 0.7) 0%, #009EE0 100%)',
                border: '4px solid #007AFF',
                boxShadow:
                  '0px 10px 15px rgba(255, 255, 255, 0.12), 0px 0px 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="Beykent"
                  width={28}
                  height={28}
                />
                <span className="text-xs text-white font-semibold">
                  İSTANBUL BEYKENT
                  <br />
                  ÜNİVERSİTESİ
                </span>
              </div>

              <div className="mt-8">
                <p className="text-white text-xs font-medium">%10 Mezun</p>
                <p className="text-white text-sm font-bold">
                  Referans İndirimi
                </p>
              </div>
            </div>

            {/* Card 4 - Rehber Öğretmen */}
            <div
              className="w-[200px] h-[250px] rounded-[25px] p-4 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(270deg, rgba(54, 19, 195, 0.7) 0%, #009EE0 100%)',
                border: '4px solid #007AFF',
                boxShadow:
                  '0px 10px 15px rgba(255, 255, 255, 0.12), 0px 0px 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="Beykent"
                  width={28}
                  height={28}
                />
                <span className="text-xs text-white font-semibold">
                  İSTANBUL BEYKENT
                  <br />
                  ÜNİVERSİTESİ
                </span>
              </div>

              <div className="mt-8">
                <p className="text-white text-[10px] font-medium">
                  %10 Rehber Öğretmen
                </p>
                <p className="text-white text-sm font-bold">
                  Referans İndirimi
                </p>
              </div>
            </div>

            {/* Card 5 - YÖKAK */}
            <div
              className="w-[200px] h-[250px] rounded-[25px] p-4 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(270deg, rgba(54, 19, 195, 0.7) 0%, #009EE0 100%)',
                border: '4px solid #007AFF',
                boxShadow:
                  '0px 10px 15px rgba(255, 255, 255, 0.12), 0px 0px 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="Beykent"
                  width={28}
                  height={28}
                />
                <span className="text-xs text-white font-semibold">
                  İSTANBUL BEYKENT
                  <br />
                  ÜNİVERSİTESİ
                </span>
              </div>

              {/* YOKAK Badge */}
              <div className="bg-white rounded-2xl px-4 py-2 mt-4 mx-auto w-fit">
                <p className="text-[#2A5391] text-xs font-bold text-center">
                  YÖKAK
                </p>
              </div>

              <div className="mt-4 text-center">
                <p className="text-white text-xs font-medium">
                  İstanbul Beykent Üniversitesi
                </p>
                <p className="text-white text-xs font-bold mt-1">
                  YÖKAK Kurumsal
                </p>
                <p className="text-white text-xs font-medium font-['Roboto_Slab']">
                  Akraditasyonunu tamamladı
                </p>
              </div>

              <p className="text-white text-[7px] font-medium font-['Roboto_Slab'] text-center mt-4 leading-tight">
                Üniversitemiz Yüksek Öğretim Kalite Kurulu (YÖKAK) Kurumsal
                Akraditasyon Sürecini Başarıyla Tamamlayarak Tam Akraditasyon
                Almaya Hak Kazandı
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
