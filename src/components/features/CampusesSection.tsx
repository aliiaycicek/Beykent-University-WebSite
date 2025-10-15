'use client';

import React from 'react';
import Image from 'next/image';

interface Campus {
  id: number;
  name: string;
  image: string;
  description?: string;
}

interface CampusesSectionProps {
  className?: string;
}

const mockCampuses: Campus[] = [
  {
    id: 1,
    name: 'Beylikdüzü Yerleşkesi',
    image: '/images/figma/beylikduzu-campus.jpg',
    description:
      'Modern altyapısı ve geniş yeşil alanları ile öne çıkan ana yerleşkemiz',
  },
  {
    id: 2,
    name: 'Hadımköy Yerleşkesi',
    image: '/images/figma/hadimkoy-campus.jpg',
    description:
      'Ana kampüsümüz modern laboratuvarları ve sosyal alanları ile hizmet vermektedir',
  },
  {
    id: 3,
    name: 'Taksim Yerleşkesi',
    image: '/images/figma/taksim-campus.jpg',
    description:
      'Şehrin kalbinde yer alan kampüsümüz kolay ulaşım imkanları sunmaktadır',
  },
  {
    id: 4,
    name: 'Ayazağa Yerleşkesi',
    image: '/images/figma/ayazaga-campus.jpg',
    description:
      'Teknoloji ve inovasyon odaklı eğitim veren modern yerleşkemiz',
  },
];

export default function CampusesSection({
  className = '',
}: CampusesSectionProps) {
  return (
    <section className={`py-16 bg-[#F4C400] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[32px] font-bold text-[#3D2673] mb-4 uppercase"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Yerleşkelerimiz
          </h2>
        </div>

        {/* Campuses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {mockCampuses.map(campus => (
            <div
              key={campus.id}
              className="bg-white/25 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-black/10 hover:bg-white/35"
            >
              {/* Campus Image */}
              <div className="relative h-40 sm:h-48">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>

              {/* Campus Content */}
              <div className="p-4 sm:p-6">
                {/* Campus Name */}
                <h3
                  className="text-[14px] sm:text-[16px] font-bold text-[#000000] mb-3 uppercase"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {campus.name}
                </h3>

                {/* Location Icon */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icons/location.svg"
                    alt="Location"
                    width={14}
                    height={14}
                    className="sm:w-4 sm:h-4"
                  />
                  <span
                    className="text-[12px] sm:text-[14px] text-[#3D2673] font-medium"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {campus.name.split(' ')[0]}, İstanbul
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
