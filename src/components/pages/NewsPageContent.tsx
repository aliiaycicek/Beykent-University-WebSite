'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { newsService, NewsItem } from '@/services/newsService';

interface NewsCategory {
  id: string;
  name: string;
  count: number;
}

export default function NewsPageContent() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [categories, setCategories] = useState<NewsCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        console.log('Fetching news from API...');
        console.log(
          'API URL:',
          process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5062/Beykent'
        );
        const apiNews = await newsService.getActiveNews();
        console.log('API News received:', apiNews);
        console.log('Number of news items:', apiNews.length);
        setNews(apiNews);

        // Calculate categories from news data
        const categoryCounts: { [key: string]: number } = {};

        apiNews.forEach(item => {
          categoryCounts[item.category] =
            (categoryCounts[item.category] || 0) + 1;
        });

        const calculatedCategories = [
          { id: 'all', name: 'Tümü', count: apiNews.length },
          ...Object.entries(categoryCounts).map(([key, count]) => ({
            id: key,
            name: getCategoryDisplayName(key),
            count,
          })),
        ];

        setCategories(calculatedCategories);
      } catch (error) {
        console.error('Error fetching news:', error);
        console.error('Error details:', error);
        console.error(
          'Error message:',
          error instanceof Error ? error.message : 'Unknown error'
        );
        console.error(
          'Error stack:',
          error instanceof Error ? error.stack : 'No stack trace'
        );
        setNews([]);
        setCategories([{ id: 'all', name: 'Tümü', count: 0 }]);
      } finally {
        console.log('Loading finished');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews =
    selectedCategory === 'all'
      ? news
      : news.filter(item => item.category === selectedCategory);

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getCategoryDisplayName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      Akademik: 'AKADEMİK',
      Teknoloji: 'TEKNOLOJİ',
      Başarı: 'BAŞARI',
      Etkinlik: 'ETKİNLİK',
      Sosyal: 'SOSYAL',
      Eğitim: 'EĞİTİM',
      Sanat: 'SANAT',
      Bilim: 'BİLİM',
      Yarışma: 'YARIŞMA',
      Sağlık: 'SAĞLIK',
    };
    return categoryMap[category] || category.toUpperCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#3D2673] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Haberler yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-black/50">Beykent Hakkında</span>
            <span className="text-black/50">|</span>
            <span className="text-black font-medium">Haberler</span>
          </div>
        </div>

        {/* Featured News Section */}
        {paginatedNews.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Featured News */}
              <div className="lg:col-span-1">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={paginatedNews[0].photo}
                    alt={paginatedNews[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-4">
                      <span className="bg-[#3D2673] text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                        {getCategoryDisplayName(paginatedNews[0].category)}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 line-clamp-3">
                      {paginatedNews[0].title}
                    </h2>
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <span>by BEYKENT</span>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{formatDate(paginatedNews[0].date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>20 Mins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Featured News */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {paginatedNews.slice(1, 4).map((newsItem, index) => (
                    <div key={newsItem.id} className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={newsItem.photo}
                          alt={newsItem.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="bg-[#3D2673] text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                            {getCategoryDisplayName(newsItem.category)}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#183354] mb-2 line-clamp-2">
                          {newsItem.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-[#6D757F] text-sm">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{formatDate(newsItem.date)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#3D2673] text-white'
                    : 'bg-white text-[#3D2673] border border-[#3D2673] hover:bg-[#3D2673] hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedNews.map(newsItem => (
            <div
              key={newsItem.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={newsItem.photo}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-[#3D2673] text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                    {getCategoryDisplayName(newsItem.category)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#183354] mb-3 line-clamp-2">
                  {newsItem.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {newsItem.description}
                </p>
                <div className="flex items-center space-x-1 text-[#6D757F] text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{formatDate(newsItem.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-[#CFCFCF] rounded text-[#3D2673] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3D2673] hover:text-white transition-colors"
            >
              ←
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded ${
                    currentPage === page
                      ? 'bg-[#3D2673] text-white'
                      : 'text-[#3D2673] hover:bg-[#3D2673] hover:text-white'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-[#CFCFCF] rounded text-[#3D2673] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3D2673] hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredNews.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-2xl font-bold text-[#3D2673] mb-2">
              Haber Bulunamadı
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedCategory === 'all'
                ? 'Henüz hiç haber eklenmemiş.'
                : `${getCategoryDisplayName(selectedCategory)} kategorisinde haber bulunamadı.`}
            </p>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-[#3D2673] text-white px-6 py-3 rounded-lg hover:bg-[#482D7E] transition-colors"
              >
                Tüm Haberleri Görüntüle
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
