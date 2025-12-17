'use client';

import { useState } from 'react';
import Image from 'next/image';
import BeykentDropdown from '@/components/ui/BeykentDropdown';

export default function ProgramSearchSection() {
  const [selectedProgram, setSelectedProgram] = useState('Lisans');

  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Bölüm Ara */}
          <div className="bg-[#3D2673] rounded-[20px] p-4 sm:p-6 text-white flex flex-col items-center w-full aspect-square">
            <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] mb-4 sm:mb-6 relative">
              <Image
                src="/icon/adayogrenci/search.png"
                alt="Search"
                fill
                className="object-contain"
              />
            </div>
            <h2
              className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-tight mb-4 sm:mb-6 text-center"
              style={{ fontFamily: 'Roboto Slab' }}
            >
              BÖLÜM ARA
            </h2>
            <div className="space-y-2 sm:space-y-3 flex-1 w-full">
              <BeykentDropdown
                options={['Fakülte 1', 'Fakülte 2', 'Fakülte 3']}
                placeholder="Tüm Fakülteler"
              />
              <BeykentDropdown
                options={['Program 1', 'Program 2', 'Program 3']}
                placeholder="Tüm Programlar"
              />
              <BeykentDropdown
                options={['SAY', 'SÖZ', 'EA', 'DİL']}
                placeholder="Tüm Puan Türleri"
              />
            </div>
            <button
              className="w-full bg-gradient-to-b from-[#F4C400] to-[#FFE889] rounded-[20px] py-2 sm:py-3 text-black font-bold mt-3 sm:mt-4 h-10 sm:h-[52px] text-sm sm:text-base"
              style={{ fontFamily: 'Roboto' }}
            >
              Ara
            </button>
          </div>

          {/* Tercih Robotu */}
          <div className="bg-[#008CBE] rounded-[20px] p-4 sm:p-6 text-white flex flex-col items-center w-full aspect-square">
            <div className="bg-gradient-to-b from-[#3B9DD2] to-[#97E7F0] rounded-[20px] w-16 h-16 sm:w-[80px] sm:h-[80px] flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image
                  src="/icon/adayogrenci/robot_svgrepo.com.png"
                  alt="Robot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h2
              className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-3 sm:mb-4 text-center"
              style={{ fontFamily: 'Roboto Slab' }}
            >
              Tercih Robotu
            </h2>
            <p
              className="text-sm sm:text-base mb-auto text-center px-2"
              style={{ fontFamily: 'Roboto' }}
            >
              Size en uygun bölümleri keşfedin
            </p>
            <button
              className="w-full bg-gradient-to-b from-[#3B9DD2] to-[#97E7F0] border border-[#D0FAFF] rounded-[20px] py-2 sm:py-3 font-bold flex items-center justify-center gap-2 h-10 sm:h-[52px] text-sm sm:text-base mt-3 sm:mt-4"
              style={{ fontFamily: 'Roboto' }}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                <Image
                  src="/icon/adayogrenci/robot_svgrepo.com.png"
                  alt="Robot"
                  fill
                  className="object-contain"
                />
              </div>
              Başla
            </button>
          </div>

          {/* Ücret Hesapla */}
          <div className="bg-[#F4C400] rounded-[20px] p-4 sm:p-6 text-white flex flex-col items-center w-full aspect-square">
            <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] mb-4 sm:mb-6 relative">
              <Image
                src="/images/icons/calculator.svg"
                alt="Calculator"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <h2
              className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-3 sm:mb-4 text-center"
              style={{ fontFamily: 'Roboto Slab' }}
            >
              Ücret Hesapla
            </h2>
            <p
              className="text-sm sm:text-base mb-auto text-center px-2"
              style={{ fontFamily: 'Roboto' }}
            >
              Bursları da hesaba katarak eğitim ücretlerinizi önceden planlayın
            </p>
            <button
              className="w-full bg-gradient-to-b from-[#F4C400] to-[#FFE889] border border-[#FFF4C7] rounded-[20px] py-2 sm:py-3 font-bold flex items-center justify-center gap-2 h-10 sm:h-[52px] text-sm sm:text-base mt-3 sm:mt-4"
              style={{ fontFamily: 'Roboto' }}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                <Image
                  src="/images/icons/calculator.svg"
                  alt="Calculator"
                  fill
                  className="object-contain"
                />
              </div>
              Hesapla
            </button>
          </div>
        </div>

        {/* Uzman Danışman */}
        <div className="mt-6 sm:mt-8 bg-white border-2 border-[#2A5391] rounded-[20px] p-6 sm:p-8 text-center">
          <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] bg-[#306FCE] rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
              <Image
                src="/icon/adayogrenci/Vector.png"
                alt="Expert"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h3
            className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#2A5391] to-black bg-clip-text text-transparent"
            style={{ fontFamily: 'Roboto Slab' }}
          >
            Daha fazla yardıma mı ihtiyacınız var?
          </h3>
          <button
            className="bg-gradient-to-r from-[#3D2673] to-[#009EE0] text-white rounded-[20px] font-bold w-full sm:w-auto sm:px-8 py-3 sm:h-[52px] text-sm sm:text-base"
            style={{ fontFamily: 'Roboto' }}
          >
            Uzman Danışman ile Görüş
          </button>
        </div>
      </div>
    </section>
  );
}
