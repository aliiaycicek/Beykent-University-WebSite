import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[810px]">
      <Image
        src="/images/aday-ogrenci/adayogrenci-hero.png"
        alt="Beykent Kampüsü"
        fill
        className="object-cover blur-sm"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/0" />

      <div className="relative z-10 h-full flex items-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-tight mb-8">
            Beykent&apos;te Geleceğini İnşa Et
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#FFDD00] rounded-full" />
              <span className="text-lg sm:text-2xl font-bold text-white">
                160+ Program
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#009EE0] rounded-full" />
              <span className="text-lg sm:text-2xl font-bold text-white">
                50,000 Mezun
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#FFDD00] rounded-full" />
              <span className="text-lg sm:text-2xl font-bold text-white">
                4 Kampüs
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-[#3613C3]/30 to-[#009EE0]/35 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-3xl font-bold text-sm hover:bg-white/20 transition-all">
              Online Başvuru Yap →
            </button>
            <button className="bg-gradient-to-r from-[#3613C3]/30 to-[#009EE0]/35 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-3xl font-bold text-sm hover:bg-white/20 transition-all">
              🔍 Bölüm Keşfet
            </button>
            <button className="bg-gradient-to-r from-[#3613C3]/30 to-[#009EE0]/35 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-3xl font-bold text-sm hover:bg-white/20 transition-all">
              Tanıtım Videosu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
