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
      image: '/images/aday-ogrenci/dıs-hekımlıgı.png',
    },
    {
      id: 2,
      name: 'Fen - Edebiyat Fakültesi',
      programs: 11,
      image: '/images/aday-ogrenci/fen-edebiyat.jpg',
    },
    {
      id: 3,
      name: 'Güzel Sanatlar Fakültesi',
      programs: 8,
      image: '/images/aday-ogrenci/guzel-sanatlar.jpg',
    },
    {
      id: 4,
      name: 'Mühendislik - Mimarlık Fakültesi',
      programs: 15,
      image: '/images/aday-ogrenci/muhendislik-mimarlık.jpg',
    },
    {
      id: 5,
      name: 'Sağlık Bilimleri Fakültesi',
      programs: 6,
      image: '/images/aday-ogrenci/saglık-bılımlerı.png',
    },
    {
      id: 6,
      name: 'İktisadi ve İdari Bilimler Fakültesi',
      programs: 17,
      image: '/images/aday-ogrenci/ıkdısadı-ıdarı.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 text-center"
          style={{ fontFamily: 'Roboto Slab' }}
        >
          Bölümleri Keşfet
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-8 sm:mb-10 lg:mb-12 text-center"
          style={{ fontFamily: 'Roboto' }}
        >
          Tüm önlisans,lisans ve lisansüstü programları tek yerden keşfet
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
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
