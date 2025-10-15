'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Statistic {
  id: number;
  value: string;
  label: string;
  icon?: string;
  targetValue: number;
}

interface StatisticsSectionProps {
  className?: string;
}

const mockStatistics: Statistic[] = [
  {
    id: 1,
    value: '1500+',
    label: 'Akademik Kadro',
    icon: '/images/icons/medal-alt.svg',
    targetValue: 1500,
  },
  {
    id: 2,
    value: '200+',
    label: 'Program',
    icon: '/images/icons/graduate.svg',
    targetValue: 200,
  },
  {
    id: 3,
    value: '100.000+',
    label: 'Mezun',
    icon: '/images/icons/community.svg',
    targetValue: 100000,
  },
  {
    id: 4,
    value: '30.000+',
    label: 'Öğrenci',
    icon: '/images/icons/group.svg',
    targetValue: 30000,
  },
  {
    id: 5,
    value: '105',
    label: 'Öğrenci Kulübu',
    icon: '/images/icons/book-open.svg',
    targetValue: 105,
  },
  {
    id: 6,
    value: '121',
    label: 'Bilimsel Araştırma Projeleri',
    icon: '/images/icons/project-presentation.svg',
    targetValue: 121,
  },
];

// Animated Counter Component
const AnimatedCounter = ({
  targetValue,
  suffix = '',
  duration = 2000,
}: {
  targetValue: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(targetValue * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString('tr-TR');
  };

  return (
    <div
      ref={ref}
      className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-[#3D2673] mb-2"
      style={{ fontFamily: 'Roboto Slab, serif' }}
    >
      {formatNumber(count)}
      {suffix}
    </div>
  );
};

export default function StatisticsSection({
  className = '',
}: StatisticsSectionProps) {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[32px] font-bold text-[#3D2673] mb-4 uppercase"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Sayılarla Beykent
          </h2>
          <p
            className="text-[16px] text-[rgba(0,0,0,0.56)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto Slab, serif' }}
          >
            Beykent Üniversitesi&apos;nin eğitim kalitesi ve başarısını
            rakamlarla keşfedin. Binlerce öğrencimiz ve güçlü akademik
            kadromuzla geleceği şekillendiriyoruz.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {mockStatistics.map(stat => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl shadow-lg border border-[#E8EAF2] p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                {/* Icon */}
                {stat.icon && (
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <Image
                        src={stat.icon}
                        alt={stat.label}
                        width={40}
                        height={40}
                        className="sm:w-12 sm:h-12 text-[#F4C400]"
                      />
                    </div>
                  </div>
                )}

                {/* Animated Value */}
                <AnimatedCounter
                  targetValue={stat.targetValue}
                  suffix={stat.value.includes('+') ? '+' : ''}
                  duration={2500}
                />

                {/* Label */}
                <div
                  className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#3D2673] leading-tight"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
