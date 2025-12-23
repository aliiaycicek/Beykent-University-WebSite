import React from 'react';

const programs = [
  {
    id: 1,
    campus: 'Taksim Yerleskesi',
    title: 'Bilirkisilik Temel Egitimi',
    duration: '12 Saat Teorik Egitim 12 Saat Uygulamali Egitim',
    price: '5.000 TL (KDV Dahil)',
  },
  {
    id: 2,
    campus: 'Taksim Yerleskesi',
    title: 'Bilirkisilik Temel Egitimi',
    duration: '12 Saat Teorik Egitim 12 Saat Uygulamali Egitim',
    price: '5.000 TL (KDV Dahil)',
  },
];

export default function EducationCertificatesSection() {
  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
            Egitim & Sertifika Programlari
          </h2>
          <p className="mt-3 text-base font-bold text-black/60">
            Beykent Universitesi&apos;nin sundugu guncel egitim ve sertifika
            programlarini kesfedin.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {programs.map(program => (
            <article
              key={program.id}
              className="overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <div className="relative h-56">
                <div className="flex h-full w-full items-center justify-center bg-gray-300 text-sm text-gray-600">
                  Image Placeholder
                </div>
                <div className="absolute inset-0 bg-[#3D2673]/40" />
              </div>
              <div className="p-6">
                <div className="text-sm font-bold text-[#3D2673]">
                  {program.campus}
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[#3D2673]">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm font-bold text-[#009EE0]">
                  {program.duration}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3D2673]">
                    {program.price}
                  </span>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8EAF2] bg-white text-xs font-bold text-[#3D2673]">
                    Sepet
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
