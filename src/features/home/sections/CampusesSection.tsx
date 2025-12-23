import React from 'react';

const campuses = [
  {
    id: 1,
    name: 'Ayazaga Yerleskesi',
  },
  {
    id: 2,
    name: 'Beylikduzu Yerleskesi',
  },
  {
    id: 3,
    name: 'Hadimkoy Yerleskesi',
  },
  {
    id: 4,
    name: 'Taksim Yerleskesi',
  },
];

export default function CampusesSection() {
  return (
    <section className="bg-[#F4C400] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold uppercase text-[#3D2673]">
          Yerleskelerimiz
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {campuses.map(campus => (
            <article
              key={campus.id}
              className="rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm"
            >
              <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-gray-300 text-xs text-gray-600">
                Image Placeholder
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase text-[#3D2673]">
                  {campus.name}
                </h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3D2673] text-[10px] font-bold text-white">
                  {'>'}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
