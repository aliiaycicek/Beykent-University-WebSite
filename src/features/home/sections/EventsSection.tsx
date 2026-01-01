'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Backend'den gelen event tipi
type ApiEvent = {
  id: string;
  title: string;
  date: string; // "2025-12-31T18:44:00"
  photo?: string | null;
  location?: string | null;
  time?: string | null;
};

// UI'da kullanılacak event tipi
type UiEvent = {
  id: string;
  title: string;
  location: string;
  time: string;
  day: string;
  month: string;
};

// Türkçe ay kısaltmaları
function getTrMonthShort(monthIndex: number): string {
  const months = [
    'OCA',
    'ŞUB',
    'MAR',
    'NİS',
    'MAY',
    'HAZ',
    'TEM',
    'AĞU',
    'EYL',
    'EKİ',
    'KAS',
    'ARA',
  ];
  return months[monthIndex] ?? '';
}

// Saat formatla: "18:44" -> "18.44"
function formatTimeFromIso(iso: string): string {
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}.${mm}`;
}

// Backend API URL
const API_URL = 'https://localhost:7149/beykent/events';

export default function EventsSection() {
  const [events, setEvents] = useState<UiEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchEvents() {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<ApiEvent[]>(API_URL);

        const uiEvents: UiEvent[] = (response.data ?? []).map(event => {
          const date = new Date(event.date);

          return {
            id: event.id,
            title: event.title,
            day: String(date.getDate()),
            month: getTrMonthShort(date.getMonth()),
            location: event.location ?? 'Konum bilgisi yok',
            time: event.time ?? formatTimeFromIso(event.date),
          };
        });

        // Tarihe göre sırala
        uiEvents.sort((a, b) => parseInt(a.day) - parseInt(b.day));

        if (isMounted) {
          setEvents(uiEvents);
        }
      } catch (err) {
        console.error('Etkinlikler alınırken hata:', err);
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : 'Etkinlikler alınamadı'
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  // Loading durumu
  if (loading) {
    return (
      <section className="bg-[#3D2673] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-white">
              Etkinlikler
            </h2>
            <p className="mt-3 text-base font-bold text-[#7F8080]">
              Yükleniyor...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Hata durumu
  if (error) {
    return (
      <section className="bg-[#3D2673] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-white">
              Etkinlikler
            </h2>
            <p className="mt-3 text-base font-bold text-red-400">
              Hata: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Etkinlik yok durumu
  if (events.length === 0) {
    return (
      <section className="bg-[#3D2673] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-white">
              Etkinlikler
            </h2>
            <p className="mt-3 text-base font-bold text-[#7F8080]">
              Henüz etkinlik bulunmamaktadır.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#3D2673] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-white">
            Etkinlikler
          </h2>
          <p className="mt-3 text-base font-bold text-[#7F8080]">
            Yaklaşan etkinliklerimizi kaçırmayın
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map(event => (
            <article
              key={event.id}
              className="relative overflow-hidden rounded-3xl bg-white p-6"
            >
              <div className="absolute left-0 top-0 h-full w-2 bg-[#F4C400]" />

              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[#F4C400] text-black">
                  <span className="text-lg font-bold">{event.day}</span>
                  <span className="text-xs font-bold">{event.month}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-black">
                    {event.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-bold text-[#009EE0]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#009EE0] text-[10px] text-white">
                      T
                    </span>
                    {event.time}
                  </div>
                  <div className="mt-2 text-sm font-medium text-black">
                    {event.location}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
