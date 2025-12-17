import Image from 'next/image';
import Link from 'next/link';

const HOSPITAL_DATA = [
  {
    title: 'Beykent Üniversitesi Hastanesi',
    logoSrc: '/icon/adayogrenci/hastane_logo.png',
    description:
      'Beykent Üniversitesi Hastanesi, yüksek kalitede sağlık hizmeti sunmak amacıyla; tıp teknolojisinin son ürünü olan en gelişmiş cihazları, güçlü altyapısı, uzman kadrosu, kent içinde ulaşım kolaylığı sağlayan lokasyonu ve çok sayıda branşı tek çatı altında toplayan geniş yelpazesiyle, sağlık hizmetine yeni bir boyut kazandırmaktadır.',
    link: 'https://www.beykentuniversitesihastanesi.com/',
    buttonText: 'Hastaneyi Ziyaret Et',
  },
  {
    title: 'Beykent Üniversitesi Diş Hastanesi',
    logoSrc: '/icon/adayogrenci/dis_hastane_logo.png',
    description:
      'İstanbul Beykent Üniversitesi Diş Hastanesi; nitelikli hekim kadrosu, son güncel teknolojik cihazları, güçlü medikal altyapısı, kent içinde ulaşım kolaylığı sağlayan lokasyonu ile kaliteli sağlık hizmeti ve hasta memnuniyeti odaklı tedavi anlayışıyla hizmet vermektedir.',
    link: 'https://dishastanesi.beykent.edu.tr/',
    buttonText: 'Diş Hastanesini Ziyaret Et',
  },
];

export default function HospitalsSection() {
  return (
    <section className="relative h-[1049px] overflow-hidden">
      {/* Arkaplan */}
      <Image
        src="/icon/adayogrenci/hastana_arkaplan.png"
        alt="Arkaplan"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3D2673]/80 mix-blend-multiply z-0">
        <Image
          src="/icon/adayogrenci/bina_sekli.png"
          alt="Overlay"
          fill
          className="object-cover opacity-90 mix-blend-multiply"
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-[1400px] w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            {/* Orta çizgi */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-white/70 -translate-x-1/2" />

            {HOSPITAL_DATA.map((hospital, index) => (
              <div
                key={index}
                className={`flex justify-center ${
                  index === 1 ? 'lg:pl-20' : 'lg:pr-20'
                }`}
              >
                {/* TEK MERKEZ BLOK */}
                <div className="flex flex-col text-white max-w-[600px] w-full h-full">
                  {/* LOGO */}
                  <div className="h-[160px] flex items-center justify-center w-full">
                    <div className="w-36 h-36 relative">
                      <Image
                        src={hospital.logoSrc}
                        alt={`${hospital.title} Logosu`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* BAŞLIK */}
                  <div className="h-[90px] flex items-center w-full">
                    <h2 className="text-[34px] font-bold text-left leading-tight">
                      {hospital.title}
                    </h2>
                  </div>

                  {/* METİN */}
                  <div className="min-h-[260px] flex items-start w-full">
                    <p className="text-[26px] leading-[40px] font-medium opacity-90 text-left">
                      {hospital.description}
                    </p>
                  </div>

                  {/* BUTON */}
                  <div className="mt-auto h-[110px] flex items-center justify-start w-full">
                    <Link
                      href={hospital.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-4 text-xl font-bold rounded-lg bg-white text-[#3D2673]
                                 hover:bg-gray-200 transition shadow-lg"
                    >
                      {hospital.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
