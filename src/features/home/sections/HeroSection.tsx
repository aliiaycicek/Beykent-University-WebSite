import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[560px] sm:h-[640px] lg:h-[760px]">
        <div className="absolute inset-0">
          <div className="flex h-full w-full items-center justify-center bg-gray-300 text-sm text-gray-600">
            Image Placeholder
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFDD00] text-xs font-bold text-black">
                  LOGO
                </div>
                <div className="text-sm font-semibold text-white/90">
                  Istanbul Beykent Universitesi
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-semibold text-[#3D2673]">
                  S
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-semibold text-[#3D2673]">
                  M
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-semibold text-[#3D2673]">
                  TR
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <nav className="flex flex-wrap items-center gap-6 text-sm font-bold text-white">
                <a className="hover:text-[#FFDD00]" href="#">
                  About
                </a>
                <a className="hover:text-[#FFDD00]" href="#">
                  Features
                </a>
                <a className="hover:text-[#FFDD00]" href="#">
                  Pricing
                </a>
                <a className="hover:text-[#FFDD00]" href="#">
                  Gallery
                </a>
              </nav>

              <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase text-[#3D2673]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#3D2673] text-[10px] text-white">
                    A
                  </span>
                  Aday Ogrenci
                </button>
                <button className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase text-[#3D2673]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#3D2673] text-[10px] text-white">
                    M
                  </span>
                  Mezun
                </button>
                <button className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-2 text-xs font-bold uppercase text-[#3D2673]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#3D2673] text-[10px] text-white">
                    H
                  </span>
                  Hizli Menu
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mt-10 max-w-2xl text-white">
              <p className="text-sm font-medium text-white/80">Mod</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-[#3D2673] drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
                Gelecegini Beykent&apos;te Insa Et.
              </h1>
              <p className="mt-6 text-base font-semibold text-white sm:text-lg">
                30 yillik deneyimi ile egitimde oncu, gelecege yon veren
                universite. Modern egitim yaklasimi ve guclu akademik kadrosu
                ile ogrencilerimizi basariya hazirliyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl border-2 border-[#4B2E83] bg-[#5B3AA0] px-6 py-3 text-sm font-bold uppercase text-white">
                  Get started
                </button>
                <button className="rounded-2xl border-2 border-white px-6 py-3 text-sm font-bold uppercase text-white">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
