import React from 'react';

interface DateTimelineItemProps {
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

export default function DateTimelineItem({
  date,
  title,
  description,
  active,
}: DateTimelineItemProps) {
  // Renk Sınıfları
  const boxBgColor = active ? 'bg-[#3D2673]' : 'bg-[#D9D9D9]';
  const dotColor = active ? 'bg-[#3D2673]' : 'bg-[#D9D9D9]';
  const dotBorder = active ? 'border-[#3D2673]' : 'border-black';

  return (
    // Ana Satır: Mobilde dikey (col), Masaüstünde yatay (row)
    <div className="relative flex flex-col md:flex-row items-center w-full group">
      {/* 1. SOL BLOK: TARİH KUTUSU */}
      {/* Masaüstünde: %50 genişlik alır ve içeriği SAĞA yaslar (çizgiye yakın olması için) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 relative mb-6 md:mb-0">
        <div
          className={`
            w-[251px] h-[90px] rounded-[16px] text-white 
            flex items-center justify-center shadow-md
            ${boxBgColor} transition-colors duration-300
          `}
        >
          <span className="text-[24px] font-medium leading-7 font-roboto">
            {date}
          </span>
        </div>
      </div>

      {/* 2. ORTA NOKTA (DOT) */}
      {/* Mutlak pozisyon ile tam merkeze (left-1/2) yerleşir. */}
      {/* Mobilde gizlenir. */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
        <div
          className={`
                w-10 h-10 rounded-full border-2 z-10
                ${dotColor} ${dotBorder}
            `}
        ></div>
      </div>

      {/* 3. SAĞ BLOK: İÇERİK */}
      {/* Masaüstünde: %50 genişlik alır ve içeriği SOLA yaslar */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pl-12 text-center md:text-left">
        {/* Başlık */}
        <h3 className="text-2xl md:text-[36px] font-semibold leading-tight text-black font-roboto">
          {title}
        </h3>

        {/* Aktif İbaresi */}
        {active && (
          <p className="mt-1 text-[20px] font-medium text-[#009EE0] font-roboto animate-pulse">
            Şu anda Aktif
          </p>
        )}

        {/* Açıklama */}
        <p className="mt-2 text-base md:text-[20px] font-medium text-gray-600 font-roboto max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
