import React from 'react';

const primaryStats = [
  {
    id: 1,
    value: '30.000+',
    label: 'Ogrenci',
  },
  {
    id: 2,
    value: '1500+',
    label: 'Akademik Kadro',
  },
  {
    id: 3,
    value: '200+',
    label: 'Program',
  },
];

const secondaryStats = [
  {
    id: 4,
    value: '121',
    label: 'Bilimsel Arastirma Projeleri',
  },
  {
    id: 5,
    value: '105',
    label: 'Ogrenci Kulubu',
  },
  {
    id: 6,
    value: '100.000+',
    label: 'Mezun',
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
            Sayilarla Beykent
          </h2>
          <p className="mt-3 text-base font-bold text-black/60">
            Beykent Universitesi&apos;nin egitim kalitesi ve basarisini
            rakamlarla kesfedin. Binlerce ogrencimiz ve guclu akademik
            kadromuzla gelecegi sekillendiriyoruz.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {primaryStats.map(stat => (
            <article
              key={stat.id}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F4C400] text-xs font-bold text-[#3D2673]">
                Icon
              </div>
              <div className="mt-6 text-4xl font-bold text-[#3D2673] sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 text-xl font-bold text-[#3D2673]">
                {stat.label}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {secondaryStats.slice(0, 2).map(stat => (
            <article
              key={stat.id}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F4C400] text-xs font-bold text-[#3D2673]">
                Icon
              </div>
              <div className="mt-6 text-4xl font-bold text-[#3D2673] sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 text-xl font-bold text-[#3D2673]">
                {stat.label}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <article className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F4C400] text-xs font-bold text-[#3D2673]">
              Icon
            </div>
            <div className="mt-6 text-4xl font-bold text-[#3D2673] sm:text-5xl">
              {secondaryStats[2].value}
            </div>
            <div className="mt-3 text-xl font-bold text-[#3D2673]">
              {secondaryStats[2].label}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
