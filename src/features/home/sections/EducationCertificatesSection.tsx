'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Backend'den gelen eğitim tipi
type ApiEducation = {
  id: string;
  title: string;
  campus?: string;
  duration?: string;
  price?: string;
  photo?: string | null;
  description?: string;
};

// UI'da kullanılacak eğitim tipi
type UiEducation = {
  id: string;
  title: string;
  campus: string;
  duration: string;
  price: string;
  imageUrl: string | null;
};

// Backend API URL
const EDUCATION_API_URL = 'https://localhost:7149/beykent/educations';

export default function EducationCertificatesSection() {
  const [programs, setPrograms] = useState<UiEducation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchEducations() {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<ApiEducation[]>(EDUCATION_API_URL);

        const uiEducations: UiEducation[] = (response.data ?? []).map(item => ({
          id: item.id,
          title: item.title,
          campus: item.campus || 'Beykent Üniversitesi',
          duration: item.duration || 'Süre bilgisi yok',
          price: item.price || 'Fiyat bilgisi yok',
          imageUrl: item.photo || null,
        }));

        if (isMounted) {
          setPrograms(uiEducations);
        }
      } catch (err) {
        console.error('Eğitimler alınırken hata:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Eğitimler alınamadı');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchEducations();

    return () => {
      isMounted = false;
    };
  }, []);

  // Loading durumu
  if (loading) {
    return (
      <section className="bg-[#F6F7FB] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
              Eğitim & Sertifika Programları
            </h2>
            <p className="mt-3 text-base font-bold text-black/60">
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
      <section className="bg-[#F6F7FB] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
              Eğitim & Sertifika Programları
            </h2>
            <p className="mt-3 text-base font-bold text-red-500">
              Hata: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Program yok durumu
  if (programs.length === 0) {
    return (
      <section className="bg-[#F6F7FB] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
              Eğitim & Sertifika Programları
            </h2>
            <p className="mt-3 text-base font-bold text-black/60">
              Henüz eğitim programı bulunmamaktadır.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-[#3D2673]">
            Eğitim & Sertifika Programları
          </h2>
          <p className="mt-3 text-base font-bold text-black/60">
            Beykent Üniversitesi&apos;nin sunduğu güncel eğitim ve sertifika
            programlarını keşfedin.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {programs.map(program => (
            <article
              key={program.id}
              className="overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                {program.imageUrl ? (
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#3D2673] to-[#5B3AA0]">
                    <span className="text-white text-4xl font-bold opacity-20">
                      EĞİTİM
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-[#3D2673]/30" />
              </div>
              <div className="p-6">
                <div className="text-sm font-bold text-[#3D2673]">
                  {program.campus}
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[#3D2673]">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm font-bold text-[#009EE0]">
                  {program.duration}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3D2673]">
                    {program.price}
                  </span>
                  <button className="flex items-center gap-2 rounded-full border border-[#3D2673] bg-white px-4 py-2 text-xs font-bold text-[#3D2673] hover:bg-[#3D2673] hover:text-white transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 6H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tümünü Gör Butonu */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#4B2E83] bg-[#5B3AA0] px-6 py-3 text-xs font-bold uppercase text-white hover:bg-[#4B2E83] transition-colors">
            Tüm Programları Gör
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-[#5B3AA0]">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
