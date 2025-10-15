'use client';

import React from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  time: string;
  day: number;
  month: string;
}

interface EventsSectionProps {
  className?: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: '7. Uluslararası Tarım, Biyoloji ve Yaşam Bilimleri Konferansı',
    location: 'Taksim Yerleşkesi Adem Çelik Amfisi',
    date: '15 EYL',
    time: '09.00-18.00',
    day: 15,
    month: 'EYL',
  },
  {
    id: 2,
    title: '7. Uluslararası Tarım, Biyoloji ve Yaşam Bilimleri Konferansı',
    location: 'Taksim Yerleşkesi Adem Çelik Amfisi',
    date: '15 EYL',
    time: '09.00-18.00',
    day: 15,
    month: 'EYL',
  },
  {
    id: 3,
    title: '7. Uluslararası Tarım, Biyoloji ve Yaşam Bilimleri Konferansı',
    location: 'Taksim Yerleşkesi Adem Çelik Amfisi',
    date: '15 EYL',
    time: '09.00-18.00',
    day: 15,
    month: 'EYL',
  },
  {
    id: 4,
    title: '7. Uluslararası Tarım, Biyoloji ve Yaşam Bilimleri Konferansı',
    location: 'Taksim Yerleşkesi Adem Çelik Amfisi',
    date: '15 EYL',
    time: '09.00-18.00',
    day: 15,
    month: 'EYL',
  },
];

export default function EventsSection({ className = '' }: EventsSectionProps) {
  return (
    <section className={`py-16 bg-[#3D2673] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[32px] font-bold text-white mb-4 uppercase"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Etkinlikler
          </h2>
          <p
            className="text-[16px] text-[#7F8080] max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto Slab, serif' }}
          >
            Yaklaşan etkinliklerimizi kaçırmayın
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {mockEvents.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Event Image */}
              <div className="relative h-40 sm:h-48">
                <Image
                  src="/images/events/event-bg.jpg"
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Content */}
              <div className="p-4 sm:p-6">
                {/* Date Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#F4C400] rounded-2xl p-2 sm:p-3 text-center min-w-[50px] sm:min-w-[60px]">
                    <div
                      className="text-[14px] sm:text-[16px] font-bold text-[#000000]"
                      style={{ fontFamily: 'Roboto Slab, serif' }}
                    >
                      {event.day}
                    </div>
                    <div
                      className="text-[14px] sm:text-[16px] font-bold text-[#000000]"
                      style={{ fontFamily: 'Roboto Slab, serif' }}
                    >
                      {event.month}
                    </div>
                  </div>

                  {/* Time and Location */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Image
                        src="/images/icons/alarm.svg"
                        alt="Time"
                        width={14}
                        height={14}
                        className="sm:w-4 sm:h-4"
                      />
                      <span
                        className="text-[14px] sm:text-[16px] text-[#009EE0] font-bold"
                        style={{ fontFamily: 'Roboto Slab, serif' }}
                      >
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/icons/location.svg"
                        alt="Location"
                        width={14}
                        height={14}
                        className="sm:w-4 sm:h-4"
                      />
                      <span
                        className="text-[12px] sm:text-[16px] text-[#1C1B1F] font-medium"
                        style={{ fontFamily: 'Roboto Slab, serif' }}
                      >
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Title */}
                <h3
                  className="text-[14px] sm:text-[16px] font-bold text-[#000000] leading-tight"
                  style={{ fontFamily: 'Roboto Slab, serif' }}
                >
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
