import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const academicLinks = [
  { label: 'Fakülteler', href: '/fakulteler' },
  { label: 'Enstitüler', href: '/enstituler' },
  { label: 'Yüksekokullar', href: '/yuksekokullar' },
  { label: 'Meslek Yüksekokulları', href: '/myo' },
  { label: 'Araştırma Merkezleri', href: '/arastirma-merkezleri' },
];

const quickLinks = [
  { label: 'Online Başvuru', href: '/online-basvuru' },
  { label: 'Bölümler', href: '/bolumler' },
  { label: 'Burslar', href: '/burslar' },
  { label: 'Yatay Geçiş', href: '/yatay-gecis' },
  { label: 'Öğrenci Bilgi Sistemi', href: '/obs' },
];

const policyLinks = [
  { label: 'Gizlilik Politikası', href: '/gizlilik' },
  { label: 'KVKK', href: '/kvkk' },
  { label: 'Çerez Politikası', href: '/cerez-politikasi' },
];

const socialLinks = [
  { name: 'Facebook', icon: 'FB', href: 'https://facebook.com/beykent' },
  { name: 'Twitter', icon: 'X', href: 'https://twitter.com/beykent' },
  { name: 'Instagram', icon: 'IG', href: 'https://instagram.com/beykent' },
  { name: 'YouTube', icon: 'YT', href: 'https://youtube.com/beykent' },
];

export default function Footer() {
  return (
    <footer className="bg-[#3D2673] py-16 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Logo & Info */}
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logos/beykent-logo.svg"
                alt="Beykent Üniversitesi"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <div className="text-sm font-semibold">
                <div>İSTANBUL BEYKENT</div>
                <div>ÜNİVERSİTESİ</div>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-white/80 leading-relaxed">
              30 yıllık deneyimi ile eğitimde öncü, geleceğe yön veren
              üniversite. Modern eğitim yaklaşımı ile öğrencilerimizi başarıya
              hazırlıyoruz.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xs font-bold hover:bg-white hover:text-[#3D2673] transition-all duration-300"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:max-w-2xl">
            {/* Academic Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase text-[#FFDD00] tracking-wider">
                Akademik
              </h4>
              <ul className="mt-4 space-y-3">
                {academicLinks.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/80 hover:text-[#FFDD00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase text-[#FFDD00] tracking-wider">
                Hızlı Erişim
              </h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/80 hover:text-[#FFDD00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-[#FFDD00] tracking-wider">
              İletişim
            </h4>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a
                href="mailto:info@beykent.edu.tr"
                className="text-sm font-medium hover:text-[#FFDD00] transition-colors"
              >
                info@beykent.edu.tr
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <a
                href="tel:02164441997"
                className="text-sm font-medium hover:text-[#FFDD00] transition-colors"
              >
                0216 444 1997
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Ayazağa, İstanbul</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {policyLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-[#FFDD00] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} İstanbul Beykent Üniversitesi. Tüm
              hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
