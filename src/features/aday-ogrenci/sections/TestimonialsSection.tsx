import TestimonialCard from '../components/TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Berkay Öztürk',
      image: '/images/aday-ogrenci/student-1.jpg',
      text: "İstanbul Beykent Üniversitesi Fen-Edebiyat Fakültesi Türk Dili ve Edebiyatı bölümünden 2020'de mezun oldum...",
    },
    {
      id: 2,
      name: 'İclal Yavuz',
      image: '/images/aday-ogrenci/student-2.jpg',
      text: 'Kariyer planlamamda benim için doğru bir tercih olan Beykent Üniversitesini seçerek...',
    },
    {
      id: 3,
      name: 'Gizem Dağdeviren',
      image: '/images/aday-ogrenci/student-3.jpg',
      text: 'Nitelikli üniversite eğitiminin, kariyerimi büyük ölçüde etkilediğini düşünüyorum...',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4">
          Öğrenci ve Mezun Deneyimleri
        </h2>
        <p className="text-2xl lg:text-4xl font-medium mb-12">
          Beykent ailesi olarak yaşadıkları deneyimleri ve başarı hikayalerini
          keşfedin
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
