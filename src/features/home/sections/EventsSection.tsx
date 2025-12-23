import React from 'react';

const events = [
  {
    id: 1,
    day: '15',
    month: 'EYL',
    title: '7. Uluslararasi Tarim, Biyoloji ve Yasam Bilimleri Konferansi',
    time: '09.00-18.00',
    location: 'Taksim Yerleskesi Adem Celik Amfisi',
  },
  {
    id: 2,
    day: '18',
    month: 'EYL',
    title: 'Girisimcilik ve Yenilik Haftasi Acilisi',
    time: '10.00-16.30',
    location: 'Beylikduzu Yerleskesi Konferans Salonu',
  },
  {
    id: 3,
    day: '21',
    month: 'EYL',
    title: 'Kariyer Zirvesi 2024',
    time: '11.00-17.00',
    location: 'Ayazaga Yerleskesi Cok Amacli Salon',
  },
  {
    id: 4,
    day: '25',
    month: 'EYL',
    title: 'Yapay Zeka ve Tasarim Atolyesi',
    time: '13.00-19.00',
    location: 'Hadimkoy Yerleskesi Studio 4',
  },
];

export default function EventsSection() {
  return (
    <section className="bg-[#3D2673] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-white">
            Etkinlikler
          </h2>
          <p className="mt-3 text-base font-bold text-[#7F8080]">
            Yaklasan etkinliklerimizi kacirmayin
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map(event => (
            <article
              key={event.id}
              className="relative overflow-hidden rounded-3xl bg-white p-6"
            >
              <div className="absolute left-0 top-0 h-full w-2 bg-[#F4C400]" />

              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[#F4C400] text-black">
                  <span className="text-lg font-bold">{event.day}</span>
                  <span className="text-xs font-bold">{event.month}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-black">
                    {event.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-bold text-[#009EE0]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#009EE0] text-[10px] text-white">
                      T
                    </span>
                    {event.time}
                  </div>
                  <div className="mt-2 text-sm font-medium text-black">
                    {event.location}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
