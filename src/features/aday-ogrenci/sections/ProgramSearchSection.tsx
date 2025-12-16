'use client';

import { useState } from 'react';

export default function ProgramSearchSection() {
  const [selectedProgram, setSelectedProgram] = useState('Lisans');

  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bölüm Ara */}
          <div className="bg-[#3D2673] rounded-2xl p-8 text-white">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-6">BÖLÜM ARA</h2>
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-4 text-black">
                Tüm Fakülteler
              </div>
              <div className="bg-white rounded-2xl p-4 text-black">
                Tüm Programlar
              </div>
              <div className="bg-white rounded-2xl p-4 text-black">
                Tüm Puan Türleri
              </div>
            </div>
          </div>

          {/* Tercih Robotu */}
          <div className="bg-[#008CBE] rounded-2xl p-8 text-white">
            <div className="bg-gradient-to-b from-[#3B9DD2] to-[#97E7F0] rounded-2xl w-20 h-20 flex items-center justify-center mb-4">
              🤖
            </div>
            <h2 className="text-2xl font-bold mb-4">Tercih Robotu</h2>
            <p className="mb-6">Size en uygun bölümleri keşfedin</p>
            <button className="bg-gradient-to-b from-[#3B9DD2] to-[#97E7F0] border border-[#D0FAFF] rounded-3xl px-8 py-3 font-bold">
              🤖 Başla
            </button>
          </div>

          {/* Ücret Hesapla */}
          <div className="bg-[#F4C400] rounded-2xl p-8 text-white">
            <div className="text-6xl mb-4">💰</div>
            <h2 className="text-2xl font-bold mb-4">Ücret Hesapla</h2>
            <p className="mb-6">
              Bursları da hesaba katarak eğitim ücretlerinizi önceden planlayın
            </p>
            <button className="bg-gradient-to-b from-[#F4C400] to-[#FFE889] border border-[#FFF4C7] rounded-3xl px-8 py-3 font-bold">
              💰 Hesapla
            </button>
          </div>
        </div>

        {/* Uzman Danışman */}
        <div className="mt-8 bg-white border border-[#2A5391] rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-[#306FCE] rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
            ⭐
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#2A5391] to-black bg-clip-text text-transparent">
            Daha fazla yardıma mı ihtiyacınız var?
          </h3>
          <button className="bg-gradient-to-r from-[#3D2673] to-[#009EE0] text-white px-8 py-3 rounded-3xl font-medium">
            Uzman Danışman ile Görüş
          </button>
        </div>
      </div>
    </section>
  );
}
