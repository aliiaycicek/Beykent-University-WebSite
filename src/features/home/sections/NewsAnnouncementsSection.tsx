import React from 'react';

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  imageAlt: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title:
      "Ebru sanati dijitallesti: Doc. Dr. Duygu Atalay Onur'un 'Across Strata' sergisi yayinda",
    summary:
      "Istanbul Beykent Universitesi Tekstil ve Moda Tasarimi Bolum Baskani Doc. Dr. Duygu Atalay Onur'un 'Across Strata' adli yeni sergisi, geleneksel ebru sanatini yapay zeka destekli dijital tasarimla bir araya getiriyor.",
    imageAlt: 'Sergi gorseli',
  },
  {
    id: 2,
    title:
      'Uluslararasi Tarim, Biyoloji ve Yasam Bilimleri Konferansi duzenlendi',
    summary:
      'Beykent Universitesi ev sahipliginde gerceklestirilen konferans, alaninda onemli akademisyenleri bir araya getirdi.',
    imageAlt: 'Konferans gorseli',
  },
  {
    id: 3,
    title: 'Yeni donem akademik takvim yayimlandi',
    summary: '2024-2025 akademik takvimi ve kayit tarihleri guncellendi.',
    imageAlt: 'Akademik takvim gorseli',
  },
  {
    id: 4,
    title: 'Beykent TechLab ogrenci projeleri sergilendi',
    summary:
      'Muhendislik ve Tasarim fakultelerinden yenilikci projeler kampuste sergilendi.',
    imageAlt: 'TechLab gorseli',
  },
  {
    id: 5,
    title: 'Burs ve destek programlari basvurulari acildi',
    summary:
      'Basari bursu ve sosyal destek programlari icin basvurular basladi.',
    imageAlt: 'Burs programlari gorseli',
  },
];

export default function NewsAnnouncementsSection() {
  const [featured, ...sideItems] = newsItems;

  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
            Haberler & Duyurular
          </h2>
          <p className="mt-3 text-base font-bold text-black/60">
            Universitemizin guncel gelismelerini ve onemli duyurularini takip
            edin
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex rounded-full bg-[#D9D9D9] p-1">
            <button className="rounded-full bg-[#3D2673] px-6 py-2 text-base font-bold text-white">
              Haberler
            </button>
            <button className="rounded-full px-6 py-2 text-base font-bold text-black">
              Duyurular
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="rounded-2xl bg-white shadow-sm">
            <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-300 text-sm text-gray-600">
              Image Placeholder
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">{featured.title}</h3>
              <p className="mt-4 text-sm font-medium text-black">
                {featured.summary}
              </p>
              <button className="mt-4 text-sm font-bold underline">
                Devamini oku
              </button>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {sideItems.map(item => (
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row"
              >
                <div className="flex h-28 w-full items-center justify-center rounded-xl bg-gray-300 text-xs text-gray-600 sm:w-40">
                  Image
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black">{item.title}</h4>
                  <p className="mt-2 text-xs font-medium text-black">
                    {item.summary}
                  </p>
                  <button className="mt-3 text-xs font-bold underline">
                    Devamini oku
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#4B2E83] bg-[#5B3AA0] px-6 py-3 text-xs font-bold uppercase text-white">
            Get started
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-[#5B3AA0]">
              {'>'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
