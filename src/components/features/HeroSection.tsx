'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section className={`relative h-screen min-h-[600px] ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/figma/hero-background.jpg"
          alt="Beykent Üniversitesi Kampüsü"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Main heading */}
            <h1 className="mb-6">
              <span
                className="block text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] text-[#3D2673] font-black"
                style={{ fontFamily: 'Roboto Slab, serif' }}
              >
                Geleceğini Beykent&apos;te
              </span>
              <span
                className="block text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] text-[#3D2673] font-black"
                style={{ fontFamily: 'Roboto Slab, serif' }}
              >
                İnşa Et.
              </span>
            </h1>

            {/* Description paragraph */}
            <p
              className="text-[14px] sm:text-[16px] leading-[1.4] max-w-[700px] mb-8 text-[#3D2673] font-bold"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              30 yıllık deneyimi ile eğitimde öncü, geleceğe yön veren
              üniversite. Modern eğitim yaklaşımı ve güçlü akademik kadrosu ile
              öğrencilerimizi başarıya hazırlıyoruz.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-[#5B3AA0] border-2 border-[#4B2E83] text-white text-[14px] sm:text-[16px] py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-[#482D7E] hover:shadow-lg font-bold uppercase w-full sm:w-auto"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  minWidth: '200px',
                  height: '50px',
                }}
              >
                Beykent&apos;i Keşfet
              </button>

              <button
                className="bg-transparent border-2 border-white text-white text-[14px] sm:text-[16px] py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-white hover:text-[#3D2673] font-bold uppercase w-full sm:w-auto"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  minWidth: '200px',
                  height: '50px',
                }}
              >
                Bölümleri İncele
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
