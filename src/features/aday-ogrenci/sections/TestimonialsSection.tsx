import TestimonialCard from '../components/TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Berkay Öztürk',
      image: '/images/aday-ogrenci/Berkay.svg',
      text: "İstanbul Beykent Üniversitesi Fen-Edebiyat Fakültesi Türk Dili ve Edebiyatı bölümünden 2020'de mezun oldum. Aynı yıl yüksek lisans eğitimimi tamamladım. Üniversitede etkinlik uzmanı ve eğitmen olarak çalışmaya devam ediyorum. Öğrencilere Türk Dili ve Edebiyatı alanında dersler veriyor, kariyer seminerlerinde buluşuyorum. Akademik kariyerimde adım adım ilerlerken, Beykent Üniversitesi'ne teşekkür ediyorum.",
    },
    {
      id: 2,
      name: 'İclal Yavuz',
      image: '/images/aday-ogrenci/Iclal.png',
      text: "Kariyer planlamamda benim için doğru bir tercih olan Beykent Üniversitesini seçerek şu an aldığım Sağlık Yönetimi dersleri ile hayal ettiğim mesleği yapıyorum. Beykent'le siz de hayallerinizi inşa edebilirsiniz!",
    },
    {
      id: 3,
      name: 'Gizem Dağdeviren',
      image: '/images/aday-ogrenci/Gizem.svg',
      text: 'Nitelikli üniversite eğitiminin, kariyerimi büyük ölçüde etkilediğini düşünüyorum. Beykent Üniversitesinde aldığım eğitimler ve katıldığım seminerler, kariyerime önemli katkıda bulunmuştur. 2020 Sosyal Hizmetler bölümü mezunuyum. Üniversiteye devam ederken okulumuzda Sosyal Hizmet Kulübünün 2 dönem boyunca kulüp başkanlığını yaparak diğer kulüplerle de iç içe oldum. Şimdi ise sosyoloji eğitimimi almaya devam ederken aynı zamanda kurumsal bir firmada kariyer basamaklarımı adım adım tırmanmaya başladım.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 text-center"
          style={{ fontFamily: 'Roboto Slab' }}
        >
          Öğrenci ve Mezun Deneyimleri
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-8 sm:mb-10 lg:mb-12 text-center"
          style={{ fontFamily: 'Roboto' }}
        >
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
