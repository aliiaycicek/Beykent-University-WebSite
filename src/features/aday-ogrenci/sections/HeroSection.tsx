import Image from 'next/image';
import InfoCard from '../components/InfoCard';

export default function HeroSection() {
  return (
    <section className="relative h-[941px] w-full">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 w-full h-[810px]">
        <Image
          src="/images/aday-ogrenci/adayogrenci-hero.png"
          alt="Beykent Kampüsü"
          fill
          className="object-cover"
          priority
          style={{ filter: 'blur(4px)' }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-[810px] bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Hero Text */}
        <div className="absolute left-4 sm:left-8 lg:left-[105px] top-[50px] sm:top-[70px] lg:top-[86px]">
          <h1
            className="text-3xl sm:text-4xl lg:text-[64px] font-bold text-white mb-6 lg:mb-8"
            style={{
              fontFamily: 'Roboto Slab',
              lineHeight: '81px',
              width: '364px',
              height: '248px',
            }}
          >
            Beykent&apos;te Geleceğini İnşa Et
          </h1>

          {/* Action Buttons - positioned at right side on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 lg:absolute lg:left-[530px] lg:top-[166px]">
            <button
              className="bg-gradient-to-b from-[#3613C3]/30 to-[#009EE0]/35 backdrop-blur-[25px] border border-white/30 text-white px-6 py-4 rounded-3xl font-bold text-sm hover:opacity-80 transition-all flex items-center justify-center gap-2"
              style={{
                fontFamily: 'Roboto',
                width: '220px',
                height: '66.76px',
              }}
            >
              <span>Online Başvuru Yap</span>
              <span>→</span>
            </button>
            <button
              className="bg-gradient-to-b from-[#3613C3]/30 to-[#009EE0]/35 backdrop-blur-[25px] border border-white/30 text-white px-6 py-4 rounded-3xl font-bold text-sm hover:opacity-80 transition-all flex items-center justify-center gap-2"
              style={{
                fontFamily: 'Roboto',
                width: '220px',
                height: '66.76px',
              }}
            >
              <span>🔍</span>
              <span>Bölüm Keşfet</span>
            </button>
            <button
              className="bg-gradient-to-b from-[#3613C3]/30 to-[#009EE0]/35 backdrop-blur-[25px] border border-white/30 text-white px-6 py-4 rounded-3xl font-bold text-sm hover:opacity-80 transition-all"
              style={{
                fontFamily: 'Roboto',
                width: '220px',
                height: '66.76px',
              }}
            >
              Tanıtım Videosu
            </button>
          </div>
        </div>

        {/* Stats - positioned above info cards */}
        <div className="absolute left-4 sm:left-8 lg:left-[686px] top-[246px] sm:top-[286px] lg:top-[190px] flex flex-wrap gap-4 lg:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 lg:w-[21px] lg:h-[21px] bg-[#FFDD00] rounded-full" />
            <span
              className="text-base sm:text-xl lg:text-2xl font-extrabold text-white"
              style={{ fontFamily: 'Roboto Slab' }}
            >
              160+ Program
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 lg:w-[21px] lg:h-[21px] bg-[#009EE0] rounded-full" />
            <span
              className="text-base sm:text-xl lg:text-2xl font-bold text-white"
              style={{ fontFamily: 'Roboto Slab' }}
            >
              50,000 Mezun
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 lg:w-[21px] lg:h-[21px] bg-[#FFDD00] rounded-full" />
            <span
              className="text-base sm:text-xl lg:text-2xl font-extrabold text-white"
              style={{ fontFamily: 'Roboto Slab' }}
            >
              4 Kampüs
            </span>
          </div>
        </div>

        {/* Info Cards - Positioned absolutely on hero */}
        <div className="absolute left-4 sm:left-8 lg:left-[117px] top-[340px] sm:top-[380px] lg:top-[366px] right-4 sm:right-8 lg:right-[115px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <InfoCard type="tanitim" />
            <InfoCard type="indirim" />
            <InfoCard type="mezun" />
            <InfoCard type="yokak" />
          </div>
        </div>
      </div>
    </section>
  );
}
