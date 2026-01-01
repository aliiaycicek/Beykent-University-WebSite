'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Backend'den gelen haber tipi
type ApiNews = {
  id: string;
  title: string;
  content?: string;
  summary?: string;
  date?: string;
  photo?: string | null;
};

// UI'da kullanılacak haber tipi
type UiNews = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string | null;
};

// Backend API URL
const NEWS_API_URL = 'https://localhost:7149/beykent/news';
// Duyurular için ayrı endpoint varsa buraya eklenecek
// const ANNOUNCEMENTS_API_URL = 'https://localhost:7149/beykent/announcements';

// Statik duyurular (backend endpoint eklenince dinamik yapılabilir)
const staticAnnouncements: UiNews[] = [
  {
    id: '1',
    title: '2024-2025 Akademik Yılı Kayıt Tarihleri Açıklandı',
    summary:
      'Yeni akademik yıl için kayıt işlemleri 15 Eylül tarihinde başlayacaktır.',
    imageUrl: null,
  },
  {
    id: '2',
    title: 'Burs Başvuruları Başladı',
    summary:
      'Başarı bursu ve sosyal destek programları için başvurular açıldı.',
    imageUrl: null,
  },
  {
    id: '3',
    title: 'Kütüphane Çalışma Saatleri Güncellendi',
    summary: 'Sınav döneminde kütüphane 7/24 açık olacaktır.',
    imageUrl: null,
  },
  {
    id: '4',
    title: 'Yaz Okulu Başvuruları',
    summary: 'Yaz okulu dersleri için son başvuru tarihi 30 Haziran.',
    imageUrl: null,
  },
];

export default function NewsAnnouncementsSection() {
  const [activeTab, setActiveTab] = useState<'news' | 'announcements'>('news');
  const [news, setNews] = useState<UiNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchNews() {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<ApiNews[]>(NEWS_API_URL);

        const uiNews: UiNews[] = (response.data ?? []).map(item => ({
          id: item.id,
          title: item.title,
          summary: item.summary || item.content?.substring(0, 150) || '',
          imageUrl: item.photo || null,
        }));

        if (isMounted) {
          setNews(uiNews);
        }
      } catch (err) {
        console.error('Haberler alınırken hata:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Haberler alınamadı');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchNews();

    return () => {
      isMounted = false;
    };
  }, []);

  // Gösterilecek içerik
  const displayItems = activeTab === 'news' ? news : staticAnnouncements;
  const featured = displayItems[0];
  const sideItems = displayItems.slice(1, 5);

  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
            Haberler & Duyurular
          </h2>
          <p className="mt-3 text-base font-bold text-black/60">
            Üniversitemizin güncel gelişmelerini ve önemli duyurularını takip
            edin
          </p>
        </div>

        {/* Tab Butonları */}
        <div className="mt-8 flex justify-center">
          <div className="flex rounded-full bg-[#D9D9D9] p-1">
            <button
              onClick={() => setActiveTab('news')}
              className={`rounded-full px-6 py-2 text-base font-bold transition-all duration-300 ${
                activeTab === 'news'
                  ? 'bg-[#3D2673] text-white'
                  : 'text-black hover:bg-gray-300'
              }`}
            >
              Haberler
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`rounded-full px-6 py-2 text-base font-bold transition-all duration-300 ${
                activeTab === 'announcements'
                  ? 'bg-[#3D2673] text-white'
                  : 'text-black hover:bg-gray-300'
              }`}
            >
              Duyurular
            </button>
          </div>
        </div>

        {/* Loading Durumu */}
        {loading && activeTab === 'news' && (
          <div className="mt-10 text-center">
            <p className="text-base font-medium text-gray-600">Yükleniyor...</p>
          </div>
        )}

        {/* Hata Durumu */}
        {error && activeTab === 'news' && (
          <div className="mt-10 text-center">
            <p className="text-base font-medium text-red-500">Hata: {error}</p>
          </div>
        )}

        {/* İçerik Yok Durumu */}
        {!loading && !error && displayItems.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-base font-medium text-gray-600">
              {activeTab === 'news'
                ? 'Henüz haber bulunmamaktadır.'
                : 'Henüz duyuru bulunmamaktadır.'}
            </p>
          </div>
        )}

        {/* İçerik */}
        {!loading && !error && displayItems.length > 0 && featured && (
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {/* Öne Çıkan Haber/Duyuru */}
            <article className="rounded-2xl bg-white shadow-sm overflow-hidden">
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#3D2673] to-[#5B3AA0]">
                {featured.imageUrl ? (
                  <img
                    src={featured.imageUrl}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white text-4xl font-bold opacity-20">
                    {activeTab === 'news' ? 'HABER' : 'DUYURU'}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm font-medium text-black/70">
                  {featured.summary}
                </p>
                <button className="mt-4 text-sm font-bold text-[#3D2673] underline hover:text-[#5B3AA0] transition-colors">
                  Devamını oku
                </button>
              </div>
            </article>

            {/* Yan Haberler/Duyurular */}
            <div className="flex flex-col gap-6">
              {sideItems.map(item => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row"
                >
                  <div className="flex h-28 w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#3D2673]/20 to-[#5B3AA0]/20 sm:w-40">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">
                        {activeTab === 'news' ? 'Haber' : 'Duyuru'}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-black">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs font-medium text-black/70 line-clamp-2">
                      {item.summary}
                    </p>
                    <button className="mt-3 text-xs font-bold text-[#3D2673] underline hover:text-[#5B3AA0] transition-colors">
                      Devamını oku
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tümünü Gör Butonu */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#4B2E83] bg-[#5B3AA0] px-6 py-3 text-xs font-bold uppercase text-white hover:bg-[#4B2E83] transition-colors">
            Tümünü Gör
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-[#5B3AA0]">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
