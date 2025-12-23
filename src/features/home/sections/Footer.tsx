import React from 'react';

const academicLinks = [
  'Fakulteler',
  'Enstituler',
  'Yuksekokullar',
  'Meslek Yuksekokullari',
  'Arastirma Merkezleri',
];

const quickLinks = [
  'Online Basvuru',
  'Bolumler',
  'Burslar',
  'Yatay Gecis',
  'Ogrenci Bilgi Sistemi',
];

const policyLinks = ['Gizlilik Politikasi', 'KVKK', 'Cerez Politikasi'];

export default function Footer() {
  return (
    <footer className="bg-[#3D2673] py-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFDD00] text-xs font-bold text-black">
                LOGO
              </div>
              <div className="text-sm font-semibold">
                Istanbul Beykent Universitesi
              </div>
            </div>
            <p className="mt-4 text-sm font-medium">
              30 yillik deneyimi ile egitimde oncu, gelecege yon veren
              universite.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {['FB', 'TW', 'IG', 'YT'].map(item => (
                <div
                  key={item}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-xs font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:max-w-2xl">
            <div>
              <h4 className="text-sm font-semibold uppercase text-[#FFDD00]">
                Akademik
              </h4>
              <ul className="mt-4 space-y-3 text-sm font-medium text-[#FFDD00]">
                {academicLinks.map(link => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase text-[#FFDD00]">
                Hizli Erisim
              </h4>
              <ul className="mt-4 space-y-3 text-sm font-medium text-[#FFDD00]">
                {quickLinks.map(link => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-xs">
                @
              </div>
              <span className="text-sm font-medium">info@beykent.edu.tr</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-xs">
                TEL
              </div>
              <span className="text-sm font-medium">0216 444 1997</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-[#FFDD00]">
          {policyLinks.map(link => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
