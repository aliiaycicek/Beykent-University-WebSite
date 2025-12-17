'use client'; // Swiper ve hooklar için client component olmalı

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Swiper stillerini import ediyoruz
import 'swiper/css';
import 'swiper/css/navigation';

export default function CampusLifeSection() {
  // Beykent'te Yaşam görselinden ve mevcut verilerden derlenen liste
  // Dosya yolları /icon/adayogrenci/ klasörüne göre revize edildi.
  const features = [
    {
      id: 1,
      name: 'Beylikdüzü Yerleşkesi',
      desc: 'Geniş alanları ve modern olanaklarıyla huzurlu bir eğitim ortamı.',
      image: '/icon/adayogrenci/kampus_foto.png',
    },
    {
      id: 2,
      name: 'Öğrenci Kulüpleri',
      desc: '105+ aktif kulüp ile sosyal yaşamın ve eğlencenin merkezi.',
      image: '/icon/adayogrenci/klupler_foto.png',
    },
    {
      id: 3,
      name: 'Laboratuvarlar',
      desc: 'En son teknoloji ile donatılmış ileri düzey araştırma merkezleri.',
      image: '/icon/adayogrenci/lab_foto.png',
    },
    {
      id: 4,
      name: 'Spor Tesisleri',
      desc: 'Fitness salonları ve kapalı spor kompleksleri ile aktif bir yaşam.',
      image: '/icon/adayogrenci/klupler_foto.png', // Placeholder
    },
    {
      id: 5,
      name: 'Öğrenci Yurtları',
      desc: 'Kampüse yakın, güvenli ve ev konforunda konaklama imkanları.',
      image: '/icon/adayogrenci/klupler_foto.png', // Placeholder
    },
    {
      id: 6,
      name: 'Etkinlikler',
      desc: 'Yıl boyu süren festivaller, konserler ve kariyer günleri.',
      image: '/icon/adayogrenci/klupler_foto.png', // Placeholder
    },
    {
      id: 7,
      name: 'Shuttle Hizmeti',
      desc: 'Yerleşkeler arası ve merkezi noktalara ücretsiz ring seferleri.',
      image: '/icon/adayogrenci/klupler_foto.png', // Placeholder
    },
    {
      id: 8,
      name: 'Engelli Öğrenci Birimi',
      desc: 'Herkes için erişilebilir, engelsiz bir kampüs deneyimi.',
      image: '/icon/adayogrenci/klupler_foto.png', // Placeholder
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative group">
        {/* Başlık Bölümü */}
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4 text-center text-gray-900">
          Kampüs Yaşamı
        </h2>
        <p className="text-2xl lg:text-4xl font-medium mb-12 text-center text-gray-600">
          Beykent&apos;te eğitim sadece derslerin ötesinde, zengin sosyal yaşam
          ve deneyimlerle dolu
        </p>

        {/* Slider Yapısı */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24} // Kartlar arası boşluk
          slidesPerView={1} // Mobilde 1 kart
          loop={true} // Sonsuz döngü
          speed={1000} // Kayma animasyon hızı (yumuşak geçiş için)
          autoplay={{
            delay: 3000, // 3 saniyede bir otomatik kayar
            disableOnInteraction: false, // Kullanıcı dokunsa bile otomatikten çıkmaz
            pauseOnMouseEnter: true, // Mouse üzerine gelince durur
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 2 }, // Tablette 2 kart
            1024: { slidesPerView: 3 }, // Masaüstünde 3 kart
          }}
          className="w-full px-2"
        >
          {features.map(f => (
            <SwiperSlide key={f.id} className="h-auto">
              {/* Kart Yapısı */}
              <div className="relative rounded-3xl overflow-hidden h-[300px] w-full select-none">
                {/* 1. Katman: Arkaplan Görseli */}
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover z-0"
                />

                {/* 2. Katman: Soft Katman Görseli (İsteğin üzerine eklendi) */}
                <Image
                  src="/icon/adayogrenci/soft_katman.png"
                  alt="overlay"
                  fill
                  className="object-cover z-10 opacity-50"
                />

                {/* 3. Katman: İçerik Yazıları */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                  <h3 className="font-bold text-2xl mb-2 drop-shadow-md">
                    {f.name}
                  </h3>
                  <p className="text-lg leading-snug drop-shadow-md opacity-100">
                    {f.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Özel Ok Butonları (Custom Navigation Arrows) */}
        {/* Sol Ok */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all -ml-4 lg:-ml-12 cursor-pointer text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Sağ Ok */}
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all -mr-4 lg:-mr-12 cursor-pointer text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
