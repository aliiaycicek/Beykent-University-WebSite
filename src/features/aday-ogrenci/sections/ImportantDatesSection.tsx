'use client';

import DateTimelineItem from '../components/DateTimelineItem';
import React from 'react';

interface DateItem {
  id: number;
  date: string;
  title: string;
  description: string;
  active: boolean;
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! DİKKAT: VERİ YÖNETİMİ
// !!! Bu yapı şu anda arka uç (backend) entegrasyonuna uygun *değildir*.
// !!! Veriler sabit (hardcoded) veya geçici kaynaklardan gelmektedir.
// !!! CANLI (PRODUCTION) ORTAMA geçmeden önce back-end entegrasyonu
// !!! **ZORUNLUDUR** ve yapı buna göre revize edilmelidir.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default function ImportantDatesSection() {
  const dates: DateItem[] = [
    {
      id: 5,
      date: '2 Ekim',
      title: 'Güz Dönemi Başlangıcı',
      description: '2024-2025 akademik yılı güz dönemi dersleri başlıyor',
      active: false,
    },
    {
      id: 4,
      date: '25 Eylül',
      title: 'Oryantasyon Programı',
      description: 'Yeni öğrenciler için oryantasyon etkinlikleri',
      active: false,
    },
    {
      id: 3,
      date: '15 Eylül',
      title: 'Kayıt Yenileme Son Tarihi',
      description: 'Eski öğrenciler için kayıt yenileme işlemleri',
      active: true, // AKTİF (Mor)
    },
    {
      id: 2,
      date: '30 Ağustos',
      title: 'Yerleştirme Sonuçları',
      description: 'YKS yerleştirme sonuçlarının açıklanması',
      active: false,
    },
    {
      id: 1,
      date: '15 Ağustos',
      title: 'Online Başvuru Başlangıcı',
      description: 'Tüm Programlar için online başvuru süreci başlıyor',
      active: false,
    },
  ];

  return (
    <section className="py-16 bg-white font-roboto overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Grubu */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[36px] lg:text-5xl font-semibold mb-4 text-black font-roboto">
            Önemli Tarihler
          </h2>
          <p className="text-xl md:text-[24px] font-medium text-gray-700 font-roboto">
            Akademik takvim ve başvuru süreçlerini takip edin
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative w-full">
          {/* MERKEZİ DİKEY ÇİZGİ */}
          {/* left-1/2 ile tam ortaya sabitlenir. Mobilde gizlenir. */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2 hidden md:block"></div>

          <div className="flex flex-col gap-12 md:gap-16">
            {dates.map(date => (
              <DateTimelineItem key={date.id} {...date} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
