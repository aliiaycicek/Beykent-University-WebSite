'use client';

import { useState } from 'react';
import FacultyCard from '../components/FacultyCard';

export default function FacultiesSection() {
  const [selected, setSelected] = useState('Lisans');

  const faculties = [
    {
      id: 1,
      name: 'Diş Hekimliği Fakültesi',
      programs: 3,
      image: '/images/aday-ogrenci/faculty-1.jpg',
    },
    {
      id: 2,
      name: 'Fen - Edebiyat Fakültesi',
      programs: 11,
      image: '/images/aday-ogrenci/faculty-2.jpg',
    },
    {
      id: 3,
      name: 'Güzel Sanatlar Fakültesi',
      programs: 8,
      image: '/images/aday-ogrenci/faculty-3.jpg',
    },
    {
      id: 4,
      name: 'Mühendislik - Mimarlık Fakültesi',
      programs: 15,
      image: '/images/aday-ogrenci/faculty-4.jpg',
    },
    {
      id: 5,
      name: 'Sağlık Bilimleri Fakültesi',
      programs: 6,
      image: '/images/aday-ogrenci/faculty-5.jpg',
    },
    {
      id: 6,
      name: 'İktisadi ve İdari Bilimler Fakültesi',
      programs: 17,
      image: '/images/aday-ogrenci/faculty-6.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4">
          Bölümleri Keşfet
        </h2>
        <p className="text-2xl lg:text-4xl font-medium mb-12">
          Tüm önlisans,lisans ve lisansüstü programları tek yerden keşfet
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {['Önlisans', 'Lisans', 'Lisansüstü', 'Özel Yetenek'].map(prog => (
            <button
              key={prog}
              onClick={() => setSelected(prog)}
              className={`px-8 py-4 rounded-[36px] border border-black text-2xl lg:text-4xl font-medium ${
                selected === prog
                  ? 'bg-[#3D2673] text-white'
                  : 'bg-white text-black'
              }`}
            >
              {prog}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {faculties.map(faculty => (
            <FacultyCard key={faculty.id} {...faculty} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white border border-black rounded-[36px] px-12 py-6 text-3xl font-bold">
            Tüm Bölümleri Gör
          </button>
        </div>
      </div>
    </section>
  );
}
