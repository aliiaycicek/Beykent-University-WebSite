'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterSectionProps {
  className?: string;
}

export default function FooterSection({ className = '' }: FooterSectionProps) {
  return (
    <footer className={`bg-[#3D2673] text-white py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/images/logos/beykent-logo.svg"
                alt="İstanbul Beykent Üniversitesi"
                width={60}
                height={60}
                className="h-12 w-12"
              />
              <div className="ml-3">
                <div
                  className="text-white font-bold text-sm leading-tight"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  İSTANBUL BEYKENT
                  <br />
                  ÜNİVERSİTESİ
                </div>
              </div>
            </div>
            <p
              className="text-[16px] text-white mb-6 leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              30 yıllık deneyimi ile eğitimde öncü, geleceğe yön veren
              üniversite.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#F4C400] transition-colors"
              >
                <Image
                  src="/images/social-media/twitter-icon.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F4C400] transition-colors"
              >
                <Image
                  src="/images/social-media/facebook-icon.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F4C400] transition-colors"
              >
                <Image
                  src="/images/social-media/instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F4C400] transition-colors"
              >
                <Image
                  src="/images/social-media/youtube-icon.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-[#FFDD00] font-bold text-[16px] mb-4 uppercase"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Online Başvuru
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Fakülteler
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Bölümler
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Enstitüler
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Burslar
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Yüksekokullar
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Yatay Geçiş
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h3
              className="text-[#FFDD00] font-bold text-[16px] mb-4 uppercase"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Akademik
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Meslek Yüksekokulları
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Öğrenci Bilgi Sistemi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Araştırma Merkezleri
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Akademik Takvim
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Kütüphane
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[#FFDD00] font-bold text-[16px] mb-4 uppercase"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              İletişim
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <Image
                    src="/images/icons/mail-icon.svg"
                    alt="Email"
                    width={16}
                    height={16}
                  />
                </div>
                <span
                  className="text-[16px] text-white"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  info@beykent.edu.tr
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <Image
                    src="/images/icons/phone-icon-final.svg"
                    alt="Phone"
                    width={16}
                    height={16}
                  />
                </div>
                <span
                  className="text-[16px] text-white"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  0216 444 1997
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div
              className="text-[16px] text-white"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              © 2024 İstanbul Beykent Üniversitesi. Tüm hakları saklıdır.
            </div>
            <div className="flex flex-wrap gap-6">
              <Link
                href="#"
                className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="#"
                className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                KVKK
              </Link>
              <Link
                href="#"
                className="text-[16px] text-white hover:text-[#FFDD00] transition-colors"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
