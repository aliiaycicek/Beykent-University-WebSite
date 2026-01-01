'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Hero Background Image - Tam ekran, header'ın arkasına geçecek */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-image.svg"
          alt="Beykent Üniversitesi Kampüs"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay - Üstten aşağı doğru karartma */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Hero Content - Header'ın altından başlıyor */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Spacer for fixed header - 164px */}
        <div style={{ height: '164px' }} />

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Subtitle */}
              <p
                className="text-sm sm:text-base font-medium text-white/80 mb-4 animate-fade-in"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Geleceğin Kapısını Aralayın
              </p>

              {/* Main Title */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                <span className="text-[#FFDD00] drop-shadow-[0_2px_20px_rgba(255,221,0,0.3)]">
                  Geleceğini
                </span>
                <br />
                <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  Beykent&apos;te İnşa Et.
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-xl leading-relaxed animate-fade-in-delayed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                30 yıllık deneyimi ile eğitimde öncü, geleceğe yön veren
                üniversite. Modern eğitim yaklaşımı ve güçlü akademik kadrosu
                ile öğrencilerimizi başarıya hazırlıyoruz.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-slide-up-delayed">
                <Link
                  href="/aday-ogrenci"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5B3AA0] to-[#3D2673] px-8 py-4 text-sm font-bold uppercase text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(93,58,160,0.4)] hover:scale-105"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <span className="relative z-10">Keşfetmeye Başla</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Link>
                <Link
                  href="/haberler"
                  className="rounded-2xl border-2 border-white/80 px-8 py-4 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-[#3D2673] hover:scale-105 backdrop-blur-sm"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Haberler
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-16">
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFDD00]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  30+
                </div>
                <div
                  className="text-sm text-white/80 mt-1"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Yıllık Deneyim
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFDD00]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  50K+
                </div>
                <div
                  className="text-sm text-white/80 mt-1"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Mezun
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFDD00]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  100+
                </div>
                <div
                  className="text-sm text-white/80 mt-1"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Program
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFDD00]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  4
                </div>
                <div
                  className="text-sm text-white/80 mt-1"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Kampüs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
            <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
