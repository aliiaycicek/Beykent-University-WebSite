'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsService, NewsItem } from '@/services/newsService';

interface NewsSectionProps {
  className?: string;
}

export default function NewsSection({ className = '' }: NewsSectionProps) {
  const [activeTab, setActiveTab] = useState<'news' | 'announcements'>('news');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiNews = await newsService.getActiveNews();
        setNews(apiNews.slice(0, 5)); // İlk 5 haberi al
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <section className={`py-16 bg-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#3D2673] mx-auto"></div>
            <p className="mt-4 text-gray-600">Haberler yükleniyor...</p>
          </div>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section className={`py-16 bg-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-[32px] font-bold text-[#3D2673] mb-4 uppercase"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Haberler & Duyurular
            </h2>
            <p
              className="text-[16px] text-[rgba(0,0,0,0.56)] max-w-2xl mx-auto"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Henüz haber bulunmuyor.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const mainNews = news[0];
  const otherNews = news.slice(1);

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[32px] font-bold text-[#3D2673] mb-4 uppercase"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Haberler & Duyurular
          </h2>
          <p
            className="text-[16px] text-[rgba(0,0,0,0.56)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto Slab, serif' }}
          >
            Üniversitemizin güncel gelişmelerini ve önemli duyurularını takip
            edin
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full border-3 border-[#3D2673] p-1 flex">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-8 py-3 rounded-full text-[24px] font-bold transition-all duration-300 ${
                activeTab === 'news'
                  ? 'bg-[#3D2673] text-white'
                  : 'text-[#000000] hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Haberler
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`px-8 py-3 rounded-full text-[24px] font-bold transition-all duration-300 ${
                activeTab === 'announcements'
                  ? 'bg-[#3D2673] text-white'
                  : 'text-[#000000] hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Duyurular
            </button>
          </div>
        </div>

        {/* News Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main News - Large */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="relative h-48 sm:h-64 lg:h-80">
                <Image
                  src={mainNews.photo}
                  alt={mainNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3
                  className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#000000] mb-3 sm:mb-4 leading-tight"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {mainNews.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] text-[#000000] mb-3 sm:mb-4 leading-relaxed"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {mainNews.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <Link
                    href="/haberler"
                    className="text-[14px] sm:text-[16px] text-[#000000] font-medium hover:text-[#3D2673] transition-colors"
                    style={{ fontFamily: 'Roboto Slab, serif' }}
                  >
                    Devamını oku
                  </Link>
                  <span
                    className="text-[14px] sm:text-[16px] text-[#000000]"
                    style={{ fontFamily: 'Roboto Slab, serif' }}
                  >
                    {formatDate(mainNews.date)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Other News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
            {otherNews.map(newsItem => (
              <div
                key={newsItem.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="relative h-32 sm:h-40">
                  <Image
                    src={newsItem.photo}
                    alt={newsItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h4
                    className="text-[14px] sm:text-[16px] font-bold text-[#000000] mb-2 line-clamp-2 leading-tight"
                    style={{ fontFamily: 'Roboto Slab, serif' }}
                  >
                    {newsItem.title}
                  </h4>
                  <p
                    className="text-[12px] sm:text-[12px] text-[#000000] mb-3 line-clamp-2"
                    style={{ fontFamily: 'Roboto Slab, serif' }}
                  >
                    {newsItem.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <Link
                      href="/haberler"
                      className="text-[12px] sm:text-[16px] text-[#000000] font-medium hover:text-[#3D2673] transition-colors"
                      style={{ fontFamily: 'Roboto Slab, serif' }}
                    >
                      Devamını oku
                    </Link>
                    <span
                      className="text-[10px] sm:text-[12px] text-[#000000]"
                      style={{ fontFamily: 'Roboto Slab, serif' }}
                    >
                      {formatDate(newsItem.date)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/haberler"
            className="bg-[#5B3AA0] border-2 border-[#4B2E83] text-white text-[14px] py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-[#482D7E] hover:shadow-lg font-bold uppercase flex items-center gap-2 mx-auto"
          >
            <span>Tüm haberleri gör</span>
            <Image
              src="/images/icons/arrow-forward.svg"
              alt="Arrow"
              width={16}
              height={16}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
