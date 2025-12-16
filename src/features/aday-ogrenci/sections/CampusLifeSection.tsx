import Image from 'next/image';

export default function CampusLifeSection() {
  const features = [
    {
      id: 1,
      name: 'Beylikdüzü Yerleşkesi',
      desc: 'Geniş alanları ve modern olanaklarıyla öğrencilere huzurlu ve verimli bir eğitim ortamı sunuyor.',
      image: '/images/aday-ogrenci/campus-1.jpg',
    },
    {
      id: 2,
      name: 'Öğrenci Külüpleri',
      desc: '105+ aktif kulüp ile sosyal yaşamın renkleri',
      image: '/images/aday-ogrenci/campus-2.jpg',
    },
    {
      id: 3,
      name: 'Labarotuvarlar',
      desc: 'En son teknoloji ile donatılmış araştırma merkezleri',
      image: '/images/aday-ogrenci/campus-3.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4 text-center">
          Kampüs Yaşamı
        </h2>
        <p className="text-2xl lg:text-4xl font-medium mb-12 text-center">
          Beykent&apos;te eğitim sadece derslerin ötesinde, zengin sosyal yaşam
          ve deneyimlerle dolu
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.id} className="relative rounded-3xl overflow-hidden">
              <Image
                src={f.image}
                alt={f.name}
                width={419}
                height={206}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black/56 p-6 flex flex-col justify-between">
                <h3 className="text-white font-bold text-2xl">{f.name}</h3>
                <p className="text-white text-lg">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
