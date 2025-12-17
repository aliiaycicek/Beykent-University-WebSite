import Image from 'next/image';

interface Props {
  type: 'tanitim' | 'indirim' | 'mezun' | 'yokak';
}

export default function InfoCard({ type }: Props) {
  const cards = {
    tanitim: (
      <div className="bg-gradient-to-r from-[#3613C3]/70 to-[#009EE0] border-4 border-[#007AFF] rounded-3xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#FFDD00] rounded-full" />
          <h3 className="text-white font-medium text-sm">
            2025 TANITIM VE TERCİH GÜNLERİ
          </h3>
        </div>
        <div className="bg-[#F4C400] rounded-full w-20 h-20 flex flex-col items-center justify-center mb-4">
          <span className="text-xs">22 TEMMUZ</span>
          <span className="text-xs">13 AĞUSTOS</span>
        </div>
        <div className="space-y-2 text-white text-xs">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            Ayazağa-Maslak
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            Beylikdüzü
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            Hadımköy
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            Taksim
          </div>
        </div>
        <div className="mt-4 space-y-2 text-white text-xs">
          <div className="flex items-center gap-2">🌐 beykent.edu.tr</div>
          <div className="flex items-center gap-2">📞 444 1997</div>
        </div>
      </div>
    ),
    indirim: (
      <div className="bg-gradient-to-r from-[#3613C3]/70 to-[#009EE0] border-4 border-[#007AFF] rounded-3xl p-6 shadow-xl">
        <p className="text-[#F4C400] text-xs mb-2">
          İstanbul Beykent Üniversitesine Yerleş
        </p>
        <h3 className="text-[#F4C400] font-bold text-sm mb-4">
          Tercih İndiriminden Faydalan!
        </h3>
        <div className="flex gap-4 mb-4">
          <div className="bg-white rounded-full w-12 h-14 flex flex-col items-center justify-center">
            <span className="text-[8px]">İlk 3 Tercihte</span>
            <span className="font-bold text-lg">+%25</span>
            <span className="text-[8px]">İNDİRİM</span>
          </div>
          <div className="bg-white rounded-full w-12 h-14 flex flex-col items-center justify-center">
            <span className="text-[8px]">4. ve 5. Tercihte</span>
            <span className="font-bold text-lg">+%20</span>
            <span className="text-[8px]">İNDİRİM</span>
          </div>
        </div>
        <p className="text-white font-bold text-sm mb-3">İLK 5 TERCİHTE +%10</p>
        <div className="flex gap-2">
          <div className="bg-white rounded-2xl px-3 py-2 text-[#007AFF] text-[8px] font-bold">
            Beykent Mezun Referans İndirimi
          </div>
          <span className="text-white text-xs">veya</span>
          <div className="bg-white rounded-2xl px-3 py-2 text-[#007AFF] text-[8px] font-bold">
            Rehber Öğretmen Referans İndirimi
          </div>
        </div>
      </div>
    ),
    mezun: (
      <div className="bg-gradient-to-r from-[#3613C3]/70 to-[#009EE0] border-4 border-[#007AFF] rounded-3xl p-6 shadow-xl">
        <div className="w-12 h-12 bg-[#FFDD00] rounded-full mb-4" />
        <p className="text-white text-xs mb-2">%10 Mezun</p>
        <h3 className="text-white font-bold text-sm">Referans İndirimi</h3>
      </div>
    ),
    yokak: (
      <div className="bg-gradient-to-r from-[#3613C3]/70 to-[#009EE0] border-4 border-[#007AFF] rounded-3xl p-6 shadow-xl">
        <div className="w-12 h-12 bg-[#FFDD00] rounded-full mb-4" />
        <div className="bg-white rounded-2xl p-3 mb-4 relative h-16">
          <Image
            src="/images/aday-ogrenci/yuksekogretim-kalite-kurulu-seeklogo-2 1.png"
            alt="YÖKAK"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-white text-xs mb-2">İstanbul Beykent Üniversitesi</p>
        <h3 className="text-white font-bold text-sm mb-2">YÖKAK Kurumsal</h3>
        <p className="text-white text-xs">Akraditasyonunu tamamladı</p>
      </div>
    ),
  };

  return cards[type];
}
