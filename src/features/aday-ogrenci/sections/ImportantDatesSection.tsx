import DateTimelineItem from '../components/DateTimelineItem';

export default function ImportantDatesSection() {
  const dates = [
    {
      id: 1,
      date: '15 Ağustos',
      title: 'Online Başvuru Başlangıcı',
      description: 'Tüm Programlar için online başvuru süreci başlıyor',
      active: true,
    },
    {
      id: 2,
      date: '30 Ağustos',
      title: 'Yerleştirme Sonuçları',
      description: 'YKS yerleştirme sonuçlarının açıklanması',
      active: false,
    },
    {
      id: 3,
      date: '15 Eylül',
      title: 'Kayıt Yenileme Son Tarihi',
      description: 'Eski öğrenciler için kayıt yenileme işlemleri',
      active: false,
    },
    {
      id: 4,
      date: '25 Eylül',
      title: 'Oryantasyon Programı',
      description: 'Yeni öğrenciler için oryantasyon etkinlikleri',
      active: false,
    },
    {
      id: 5,
      date: '2 Ekim',
      title: 'Güz Dönemi Başlangıcı',
      description: '2024-2025 akademik yılı güz dönemi dersleri başlıyor',
      active: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 text-center"
          style={{ fontFamily: 'Roboto Slab' }}
        >
          Önemli Tarihler
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-8 sm:mb-10 lg:mb-12 text-center"
          style={{ fontFamily: 'Roboto' }}
        >
          Akademik takvim ve başvuru süreçlerini takip edin
        </p>

        <div className="space-y-8">
          {dates.map(date => (
            <DateTimelineItem key={date.id} {...date} />
          ))}
        </div>
      </div>
    </section>
  );
}
