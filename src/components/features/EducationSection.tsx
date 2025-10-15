'use client';

import React from 'react';
import Image from 'next/image';

interface EducationProgram {
  id: number;
  title: string;
  location: string;
  price: string;
  duration: string;
  image: string;
  description: string;
}

interface EducationSectionProps {
  className?: string;
}

const mockPrograms: EducationProgram[] = [
  {
    id: 1,
    title: 'Bilirkişilik Temel Eğitimi',
    location: 'Taksim Yerleşkesi',
    price: '5.000 TL (KDV Dahil)',
    duration: '12 Saat Teorik Eğitim\n12 Saat Uygulamalı Eğitim',
    image: '/images/figma/education-program-1.jpg',
    description: 'Profesyonel bilirkişilik eğitimi programı',
  },
  {
    id: 2,
    title: 'Dijital Pazarlama Sertifika Programı',
    location: 'Hadımköy Yerleşkesi',
    price: '3.500 TL (KDV Dahil)',
    duration: '8 Hafta Online Eğitim',
    image: '/images/figma/education-program-2.jpg',
    description: 'Modern dijital pazarlama teknikleri',
  },
  {
    id: 3,
    title: 'Veri Analizi ve Görselleştirme',
    location: 'Taksim Yerleşkesi',
    price: '4.200 TL (KDV Dahil)',
    duration: '10 Hafta Hibrit Eğitim',
    image: '/images/figma/education-program-1.jpg',
    description: 'Veri analizi ve görselleştirme teknikleri',
  },
];

export default function EducationSection({
  className = '',
}: EducationSectionProps) {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[32px] font-bold text-[#3D2673] mb-4 uppercase"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Eğitim & Sertifika Programları
          </h2>
          <p
            className="text-[16px] text-[rgba(0,0,0,0.56)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto Slab, serif' }}
          >
            Beykent Üniversitesi&apos;nin sunduğu güncel eğitim ve sertifika
            programlarını keşfedin.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mockPrograms.map(program => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#E8EAF2]"
            >
              {/* Program Image */}
              <div className="relative h-40 sm:h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,38,115,0.4)] to-transparent" />
              </div>

              {/* Program Content */}
              <div className="p-4 sm:p-6">
                {/* Title */}
                <h3
                  className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-[#3D2673] mb-3 leading-tight"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {program.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src="/images/icons/location.svg"
                    alt="Location"
                    width={14}
                    height={14}
                    className="sm:w-4 sm:h-4"
                  />
                  <span
                    className="text-[14px] sm:text-[16px] text-[#3D2673] font-medium"
                    style={{ fontFamily: 'Roboto Slab, serif' }}
                  >
                    {program.location}
                  </span>
                </div>

                {/* Price */}
                <div
                  className="text-[10px] sm:text-[10px] font-bold text-[#3D2673] mb-3"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {program.price}
                </div>

                {/* Duration */}
                <div
                  className="text-[14px] sm:text-[16px] text-[#009EE0] font-bold mb-4 whitespace-pre-line"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {program.duration}
                </div>

                {/* Description */}
                <p
                  className="text-[14px] sm:text-[16px] text-[#3D2673] mb-6"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {program.description}
                </p>

                {/* Action Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <button className="flex items-center justify-center gap-2 bg-[#3D2673] text-white px-4 py-2 rounded-lg hover:bg-[#482D7E] transition-colors w-full sm:w-auto">
                    <Image
                      src="/images/icons/cart.svg"
                      alt="Cart"
                      width={16}
                      height={16}
                    />
                    <span
                      className="text-[14px] font-medium"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      Başvur
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/images/icons/alarm.svg"
                      alt="Time"
                      width={14}
                      height={14}
                      className="sm:w-4 sm:h-4"
                    />
                    <span
                      className="text-[12px] text-[#009EE0] font-medium"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      Sınırlı Kontenjan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
