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
          src="/images/hero/hero-image.svg"
          alt="Beykent Universitesi kampusu"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
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
                Gelecegini Beykent&apos;te
              </span>
              <span
                className="block text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] text-[#3D2673] font-black"
                style={{ fontFamily: 'Roboto Slab, serif' }}
              >
                Insa Et.
              </span>
            </h1>

            {/* Description paragraph */}
            <p
              className="text-[14px] sm:text-[16px] leading-[1.4] max-w-[700px] mb-8 text-[#3D2673] font-bold"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              30 yillik deneyimi ile egitimde oncu, gelecege yon veren
              universite. Modern egitim yaklasimi ve guclu akademik kadrosu ile
              ogrencilerimizi basariya hazirliyoruz.
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
                Beykent&apos;i Kesfet
              </button>

              <button
                className="bg-transparent border-2 border-white text-white text-[14px] sm:text-[16px] py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-white hover:text-[#3D2673] font-bold uppercase w-full sm:w-auto"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  minWidth: '200px',
                  height: '50px',
                }}
              >
                Bolumleri Incele
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
