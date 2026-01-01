'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AkademikHoverProvider } from '@/components/context/AkademikHoverContext';
import AkademikHoverAnimation from '@/components/ui/AkademikHoverAnimation';

interface HeaderSectionProps {
  className?: string;
}

const topButtons = [
  {
    label: 'Aday Ogrenci',
    href: '/aday-ogrenci',
    icon: '/images/homepage-icons/user-icon.svg',
  },
  {
    label: 'Mezun',
    href: '/mezun',
    icon: '/images/homepage-icons/graduation-cap-icon.svg',
  },
  {
    label: 'Hizli Menu',
    href: '/hizli-menu',
    icon: '/images/homepage-icons/menu-icon.svg',
  },
];

const navigationItems = [
  { name: 'Beykent Hakkinda', href: '/beykent-hakkinda' },
  { name: 'Akademik', href: '/akademik' },
  { name: 'Ogrenci', href: '/ogrenci' },
  { name: 'Uluslararasi', href: '/uluslararasi' },
];

const quickIcons = [
  { label: 'Ara', icon: '/images/homepage-icons/search-icon.svg' },
  { label: 'Paylas', icon: '/images/homepage-icons/share-icon.svg' },
];

export default function HeaderSection({ className = '' }: HeaderSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AkademikHoverProvider>
      <header className={`absolute top-0 left-0 w-full z-50 ${className}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md shadow-sm ring-1 ring-black/5">
            <div className="flex items-center justify-between gap-4 px-4 py-4 lg:px-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logos/beykent-logo.svg"
                  alt="Istanbul Beykent Universitesi"
                  width={60}
                  height={60}
                  className="h-10 w-10"
                />
                <div
                  className="text-xs sm:text-sm font-bold leading-tight text-[#3D2673]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  ISTANBUL BEYKENT
                  <br />
                  UNIVERSITESI
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-3">
                {topButtons.map(button => (
                  <Link
                    key={button.label}
                    href={button.href}
                    className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-4 py-2 text-sm font-bold uppercase text-[#3D2673] shadow-sm transition-colors hover:bg-white"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    <Image
                      src={button.icon}
                      alt={button.label}
                      width={18}
                      height={18}
                    />
                    {button.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 text-[#3D2673]">
                  <span
                    className="text-xs font-semibold uppercase"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Mod:
                  </span>
                  <button className="h-8 w-8 rounded-lg border border-[#3D2673]/20 bg-white shadow-sm transition-colors hover:bg-[#3D2673]/5">
                    <Image
                      src="/images/homepage-icons/sun-icon.svg"
                      alt="Aydinlik mod"
                      width={16}
                      height={16}
                      className="mx-auto"
                    />
                  </button>
                  <button className="h-8 w-8 rounded-lg border border-[#3D2673]/20 bg-white shadow-sm transition-colors hover:bg-[#3D2673]/5">
                    <Image
                      src="/images/homepage-icons/moon-icon.svg"
                      alt="Karanlik mod"
                      width={16}
                      height={16}
                      className="mx-auto"
                    />
                  </button>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <button className="h-8 w-8 rounded-lg border border-[#3D2673]/20 bg-white shadow-sm">
                    <Image
                      src="/images/homepage-icons/globe-icon.svg"
                      alt="Dil secimi"
                      width={16}
                      height={16}
                      className="mx-auto"
                    />
                  </button>
                  <span
                    className="rounded-lg bg-[#F4C400]/20 px-2 py-1 text-xs font-bold text-[#3D2673]"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    TR
                  </span>
                </div>

                <button
                  className="lg:hidden rounded-lg border border-[#3D2673]/20 p-2 text-[#3D2673]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Menu"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="border-t border-white/70 px-4 pb-4 pt-3 lg:px-6">
              <div className="flex items-center justify-between gap-4">
                <nav className="hidden lg:flex items-center gap-8">
                  {navigationItems.map(item =>
                    item.name === 'Akademik' ? (
                      <AkademikHoverAnimation key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm font-semibold text-[#3D2673] transition-colors hover:text-[#F4C400]"
                          style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                          {item.name}
                        </Link>
                      </AkademikHoverAnimation>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-semibold text-[#3D2673] transition-colors hover:text-[#F4C400]"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>

                <div className="flex items-center gap-3">
                  {quickIcons.map(icon => (
                    <button
                      key={icon.label}
                      className="h-10 w-10 rounded-2xl border border-[#F4C400]/30 bg-[#F4C400]/15 transition-colors hover:bg-[#F4C400]/25"
                      aria-label={icon.label}
                    >
                      <Image
                        src={icon.icon}
                        alt={icon.label}
                        width={18}
                        height={18}
                        className="mx-auto"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {isMenuOpen && (
                <div className="lg:hidden mt-4 space-y-3">
                  <div className="flex flex-col gap-2">
                    {topButtons.map(button => (
                      <Link
                        key={button.label}
                        href={button.href}
                        className="flex items-center gap-2 rounded-2xl border border-[#3D2673]/10 bg-white px-4 py-2 text-sm font-bold uppercase text-[#3D2673] shadow-sm"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Image
                          src={button.icon}
                          alt={button.label}
                          width={18}
                          height={18}
                        />
                        {button.label}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    {navigationItems.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-[#3D2673] transition-colors hover:bg-[#F4C400]/10"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </AkademikHoverProvider>
  );
}
