'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  photo: string;
  category: string;
  date: string;
  slug: string;
}

const NewsPageContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  const categories = [
    {
      id: 'teknoloji',
      name: 'TEKNOLOJİ',
      image: '/images/news/categories/teknoloji-bg.jpg',
    },
    {
      id: 'akademi',
      name: 'AKADEMİ',
      image: '/images/news/categories/akademi-bg.jpg',
    },
    {
      id: 'bilim',
      name: 'BİLİM',
      image: '/images/news/categories/bilim-bg.jpg',
    },
    { id: 'spor', name: 'SPOR', image: '/images/news/categories/spor-bg.jpg' },
    {
      id: 'saglik',
      name: 'SAĞLIK',
      image: '/images/news/categories/saglik-bg.jpg',
    },
    {
      id: 'sanat',
      name: 'SANAT',
      image: '/images/news/categories/sanat-bg.jpg',
    },
  ];

  // Mock statik haberler
  const mockNews: NewsItem[] = [
    {
      id: '1',
      title:
        'İstanbul Beykent Üniversitesi ile Azerbaycan Üniversitesi arasında iş birliği anlaşması imzalandı',
      description:
        'İki üniversite arasında akademik ve bilimsel iş birliği protokolü imzalandı.',
      photo: '/images/news/news-card-1.jpg',
      category: 'akademi',
      date: '2024-10-15',
      slug: 'azerbaycan-universitesi-isbirligi',
    },
    {
      id: '2',
      title: 'Yapay Zeka ve Makine Öğrenmesi Konferansı Düzenlendi',
      description:
        'Üniversitemizde yapay zeka alanında önemli bir konferans gerçekleştirildi.',
      photo: '/images/news/news-card-1.jpg',
      category: 'teknoloji',
      date: '2024-10-14',
      slug: 'yapay-zeka-konferansi',
    },
    {
      id: '3',
      title: 'Öğrencilerimiz Ulusal Bilim Olimpiyatlarında Başarı Kazandı',
      description:
        'Beykent Üniversitesi öğrencileri bilim olimpiyatlarında derece aldı.',
      photo: '/images/news/news-card-1.jpg',
      category: 'bilim',
      date: '2024-10-13',
      slug: 'bilim-olimpiyatlari-basari',
    },
    {
      id: '4',
      title: 'Spor Bilimleri Fakültesi Yeni Tesislerini Açtı',
      description: 'Modern spor tesisleri öğrencilerin hizmetine sunuldu.',
      photo: '/images/news/news-card-1.jpg',
      category: 'spor',
      date: '2024-10-12',
      slug: 'spor-tesisleri-acildi',
    },
    {
      id: '5',
      title: 'Sağlık Bilimleri Fakültesi Ücretsiz Sağlık Taraması Düzenledi',
      description:
        'Fakültemiz öğrencileri ve personeli için sağlık taraması yapıldı.',
      photo: '/images/news/news-card-1.jpg',
      category: 'saglik',
      date: '2024-10-11',
      slug: 'saglik-taramasi',
    },
    {
      id: '6',
      title: 'Güzel Sanatlar Fakültesi Yıl Sonu Sergisi Açıldı',
      description: 'Öğrencilerimizin eserleri sergileniyor.',
      photo: '/images/news/news-card-1.jpg',
      category: 'sanat',
      date: '2024-10-10',
      slug: 'sanat-sergisi',
    },
    {
      id: '7',
      title: 'Üniversitemiz Akademisyenlerinden Doç. Dr. Gülay Tamer Ödül Aldı',
      description: 'Akademisyenimiz ulusal düzeyde ödüle layık görüldü.',
      photo: '/images/news/recent-post-02.jpg',
      category: 'akademi',
      date: '2024-10-09',
      slug: 'akademisyen-odul',
    },
    {
      id: '8',
      title:
        'Hemşirelikte Güncel Bilgiler ve Geleceğe Yönelik Yaklaşımlar Semineri',
      description: 'Sağlık Bilimleri Fakültesi önemli bir seminer düzenledi.',
      photo: '/images/news/recent-post-02.jpg',
      category: 'saglik',
      date: '2024-10-08',
      slug: 'hemsirelik-semineri',
    },
    {
      id: '9',
      title: 'Teknoloji Zirvesi 2024 Beykent Üniversitesinde',
      description: 'Teknoloji alanında önemli isimler üniversitemizde buluştu.',
      photo: '/images/news/recent-post-02.jpg',
      category: 'teknoloji',
      date: '2024-10-07',
      slug: 'teknoloji-zirvesi',
    },
  ];

  const news = mockNews;

  const filteredNews =
    selectedCategory === 'all'
      ? news
      : news.filter(item => item.category.toLowerCase() === selectedCategory);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-black opacity-50 font-normal">
            Beykent Hakkında
          </span>
          <div className="w-px h-4 bg-black opacity-50" />
          <span className="text-black font-normal">Haberler</span>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
              className="relative w-48 h-24 rounded-[23px] overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/0" />
              {/* White Overlay */}
              <div className="absolute inset-0 bg-white/30" />
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-[13px] tracking-[0.06em] uppercase">
                  {category.name}
                </span>
              </div>
              {/* Icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white opacity-50"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentNews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Henüz haber bulunmamaktadır.
            </p>
          </div>
        ) : (
          <>
            {/* Section Titles */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[36px] font-medium uppercase text-[#202124] font-['Bricolage_Grotesque']">
                  SON HABERLER
                </h2>
                <div className="h-px flex-1 ml-4 bg-[#202124]" />
              </div>
            </div>

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentNews.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.photo || '/images/news/news-card-1.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/0" />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F4796C] text-white px-3 py-1 rounded-sm text-[10px] font-semibold tracking-[0.078em] uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-[18px] font-bold leading-[1.4] text-[#183354] mb-3 line-clamp-2 capitalize">
                      {item.title}
                    </h3>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-[#6D757F]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 2V6M8 2V6M3 10H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-[13px] font-semibold tracking-[0.04em] uppercase">
                        {formatDate(item.date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 py-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center border border-[#CFCFCF] rounded hover:bg-[#3D2673] hover:text-white hover:border-[#3D2673] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center border rounded transition-colors ${
                        currentPage === page
                          ? 'bg-[#3D2673] text-white border-[#3D2673]'
                          : 'border-[#CFCFCF] hover:bg-[#3D2673] hover:text-white hover:border-[#3D2673]'
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage(prev => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center border border-[#CFCFCF] rounded hover:bg-[#3D2673] hover:text-white hover:border-[#3D2673] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Additional News Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Akademik Haberler */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[36px] font-medium uppercase text-[#202124] font-['Bricolage_Grotesque']">
              AKADEMİK HABERLER
            </h2>
            <div className="h-px flex-1 ml-4 bg-[#202124]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news
              .filter(item => item.category.toLowerCase() === 'akademi')
              .slice(0, 3)
              .map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.photo || '/images/news/recent-post-02.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="bg-[#3D2673] text-white px-2 py-1 rounded-sm text-[10px] font-semibold tracking-[0.078em] uppercase inline-block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-[18px] font-bold leading-[1.4] text-[#183354] mb-2 line-clamp-2 capitalize">
                      {item.title}
                    </h3>
                    <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#6D757F]">
                      {formatDate(item.date)}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Sanat Haberleri */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[36px] font-medium uppercase text-[#202124] font-['Bricolage_Grotesque']">
              SANAT HABERLERİ
            </h2>
            <div className="h-px flex-1 ml-4 bg-[#202124]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news
              .filter(item => item.category.toLowerCase() === 'sanat')
              .slice(0, 3)
              .map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.photo || '/images/news/recent-post-02.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="bg-[#3D2673] text-white px-2 py-1 rounded-sm text-[10px] font-semibold tracking-[0.078em] uppercase inline-block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-[18px] font-bold leading-[1.4] text-[#183354] mb-2 line-clamp-2 capitalize">
                      {item.title}
                    </h3>
                    <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#6D757F]">
                      {formatDate(item.date)}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Bilim Haberleri */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[36px] font-medium uppercase text-[#202124] font-['Bricolage_Grotesque']">
              BİLİM HABERLERİ
            </h2>
            <div className="h-px flex-1 ml-4 bg-[#202124]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news
              .filter(item => item.category.toLowerCase() === 'bilim')
              .slice(0, 3)
              .map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.photo || '/images/news/recent-post-02.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="bg-[#3D2673] text-white px-2 py-1 rounded-sm text-[10px] font-semibold tracking-[0.078em] uppercase inline-block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-[18px] font-bold leading-[1.4] text-[#183354] mb-2 line-clamp-2 capitalize">
                      {item.title}
                    </h3>
                    <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[#6D757F]">
                      {formatDate(item.date)}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPageContent;
