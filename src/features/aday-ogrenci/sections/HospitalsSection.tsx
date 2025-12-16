import Image from 'next/image';

export default function HospitalsSection() {
  return (
    <section className="relative h-[1049px] overflow-hidden">
      <Image
        src="/images/aday-ogrenci/hospitals-bg.jpg"
        alt="Hastaneler"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3D2673]/91 to-[#2A5391]/91" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Beykent Üniversitesi Hastanesi
              </h2>
              <div className="w-40 h-40 rounded-full bg-white mb-6" />
              <p className="text-3xl leading-relaxed">
                Beykent Üniversitesi Hastanesi, yüksek kalitede sağlık hizmeti
                sunmak amacıyla; tıp teknolojisinin son ürünü olan en gelişmiş
                cihazları, güçlü altyapısı, uzman kadrosu, kent içinde ulaşım
                kolaylığı sağlayan lokasyonu ve çok sayıda branşı tek çatı
                altında toplayan geniş yelpazesiyle, sağlık hizmetine yeni bir
                boyut kazandırmaktadır.
              </p>
            </div>

            <div className="text-white border-l-4 border-white pl-12">
              <h2 className="text-4xl font-bold mb-6">
                Beykent Üniversitesi Diş Hastanesi
              </h2>
              <div className="w-40 h-40 rounded-full bg-white mb-6" />
              <p className="text-3xl leading-relaxed">
                İstanbul Beykent Üniversitesi Diş Hastanesi; nitelikli hekim
                kadrosu, son güncel teknolojik cihazları, güçlü medikal
                altyapısı, kent içinde ulaşım kolaylığı sağlayan lokasyonu ile
                kaliteli sağlık hizmeti ve hasta memnuniyeti odaklı tedavi
                anlayışıyla hizmet vermektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
