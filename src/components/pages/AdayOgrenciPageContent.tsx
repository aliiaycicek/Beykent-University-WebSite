'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdayOgrenciPageContent() {
  const [selectedProgram, setSelectedProgram] = useState('Lisans');

  const programs = [
    { id: 'Onlisans', name: 'Önlisans', active: false },
    { id: 'Lisans', name: 'Lisans', active: true },
    { id: 'Lisansustu', name: 'Lisansüstü', active: false },
    { id: 'OzelYetenek', name: 'Özel Yetenek', active: false },
  ];

  const faculties = [
    {
      id: 1,
      name: 'Fen - Edebiyat Fakültesi',
      programs: 11,
      image: '/images/figma/faculty-1.jpg',
      description: 'Bölüm Detayına Git',
    },
    {
      id: 2,
      name: 'Sağlık Bilimleri Fakültesi',
      programs: 6,
      image: '/images/figma/faculty-2.jpg',
      description: 'Bölüm Detayına Git',
    },
    {
      id: 3,
      name: 'Güzel Sanatlar Fakültesi',
      programs: 8,
      image: '/images/figma/faculty-3.jpg',
      description: 'Bölüm Detayına Git',
    },
    {
      id: 4,
      name: 'İktisadi ve İdari Bilimler Fakültesi',
      programs: 17,
      image: '/images/figma/faculty-4.jpg',
      description: 'Bölüm Detayına Git',
    },
    {
      id: 5,
      name: 'Diş Hekimliği Fakültesi',
      programs: 3,
      image: '/images/figma/faculty-5.jpg',
      description: 'Bölüm Detayına Git',
    },
    {
      id: 6,
      name: 'Mühendislik - Mimarlık Fakültesi',
      programs: 15,
      image: '/images/figma/faculty-6.jpg',
      description: 'Bölüm Detayına Git',
    },
  ];

  const campusFeatures = [
    {
      id: 1,
      name: 'Öğrenci Külüpleri',
      description: '105+ aktif kulüp ile sosyal yaşamın renkleri',
      image: '/images/figma/clubs.jpg',
    },
    {
      id: 2,
      name: 'Labarotuvarlar',
      description: 'En son teknoloji ile donatılmış araştırma merkezleri',
      image: '/images/figma/labs.jpg',
    },
    {
      id: 3,
      name: 'Beylikdüzü Yerleşkesi',
      description:
        'Geniş alanları ve modern olanaklarıyla öğrencilere huzurlu ve verimli bir eğitim ortamı sunuyor.',
      image: '/images/figma/campus.jpg',
    },
  ];

  const studentTestimonials = [
    {
      id: 1,
      name: 'Berkay Öztürk',
      image: '/images/figma/student-1.jpg',
      text: "İstanbul Beykent Üniversitesi Fen-Edebiyat Fakültesi Türk Dili ve Edebiyatı bölümünden 2020'de mezun oldum. Aynı yıl yüksek lisans eğitimimi tamamladım. Üniversitede etkinlik uzmanı ve eğitmen olarak çalışmaya devam ediyorum. Öğrencilere Türk Dili ve Edebiyatı alanında dersler veriyor, kariyer seminerlerinde buluşuyorum. Akademik kariyerimde adım adım ilerlerken, Beykent Üniversitesi'ne teşekkür ediyorum.",
    },
    {
      id: 2,
      name: 'İclal Yavuz',
      image: '/images/figma/student-2.jpg',
      text: "Kariyer planlamamda benim için doğru bir tercih olan Beykent Üniversitesini seçerek şu an aldığım Sağlık Yönetimi dersleri ile hayal ettiğim mesleği yapıyorum. Beykent'le siz de hayallerinizi inşa edebilirsiniz!",
    },
    {
      id: 3,
      name: 'Gizem Dağdeviren',
      image: '/images/figma/student-3.jpg',
      text: 'Nitelikli üniversite eğitiminin, kariyerimi büyük ölçüde etkilediğini düşünüyorum. Beykent Üniversitesinde aldığım eğitimler ve katıldığım seminerler, kariyerime önemli katkıda bulunmuştur. 2020 Sosyal Hizmetler bölümü mezunuyum. Üniversiteye devam ederken okulumuzda Sosyal Hizmet Kulübünün 2 dönem boyunca kulüp başkanlığını yaparak diğer kulüplerle de iç içe oldum. Şimdi ise sosyoloji eğitimimi almaya devam ederken aynı zamanda kurumsal bir firmada kariyer basamaklarımı adım adım tırmanmaya başladım.',
    },
  ];

  const importantDates = [
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

  const faqItems = [
    {
      id: 1,
      question: 'Başvuru için hangi belgeler gerekli?',
    },
    {
      id: 2,
      question: 'Burs Başvurusu nasıl yapılır?',
    },
    {
      id: 3,
      question: 'Yatay geçiş mümkün mü?',
    },
    {
      id: 4,
      question: 'Mezuniyet sonrası iş bulma desteği sağlanıyor mu?',
    },
    {
      id: 5,
      question: 'Erasmus programı var mı?',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] bg-gradient-to-br from-[#3613C3] via-[#009EE0] to-[#3D2673]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/figma/hero-background.jpg"
            alt="Beykent Üniversitesi Kampüsü"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Main heading */}
              <h1 className="mb-6">
                <span
                  className="block text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.2] text-white font-bold"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Beykent&apos;te Geleceğini İnşa Et
                </span>
              </h1>

              {/* Statistics */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FFDD00] rounded-full"></div>
                  <span className="text-[24px] font-bold text-white">
                    160+ Program
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#009EE0] rounded-full"></div>
                  <span className="text-[24px] font-bold text-white">
                    50,000 Mezun
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FFDD00] rounded-full"></div>
                  <span className="text-[24px] font-bold text-white">
                    4 Kampüs
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white/20 backdrop-blur-lg border border-white/30 text-white text-[14px] py-4 px-8 rounded-3xl transition-all duration-300 hover:bg-white/30 hover:shadow-lg font-bold uppercase flex items-center gap-2">
                  <span>Online Başvuru Yap</span>
                  <Image
                    src="/images/icons/arrow-forward.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </button>

                <button className="bg-white/20 backdrop-blur-lg border border-white/30 text-white text-[14px] py-4 px-8 rounded-3xl transition-all duration-300 hover:bg-white/30 hover:shadow-lg font-bold uppercase flex items-center gap-2">
                  <Image
                    src="/images/icons/search.svg"
                    alt="Search"
                    width={16}
                    height={16}
                  />
                  <span>Bölüm Keşfet</span>
                </button>

                <button className="bg-white/20 backdrop-blur-lg border border-white/30 text-white text-[14px] py-4 px-8 rounded-3xl transition-all duration-300 hover:bg-white/30 hover:shadow-lg font-bold uppercase">
                  Tanıtım Videosu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Search Section */}
      <section className="py-16 bg-[#F6F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Search Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-[24px] font-bold text-[#3D2673] mb-6">
                BÖLÜM ARA
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <select className="bg-white border border-[#000000] rounded-2xl px-4 py-3 text-[#000000] font-medium">
                    <option>Tüm Fakülteler</option>
                  </select>
                  <select className="bg-white border border-[#000000] rounded-2xl px-4 py-3 text-[#000000] font-medium">
                    <option>Tüm Programlar</option>
                  </select>
                  <select className="bg-white border border-[#000000] rounded-2xl px-4 py-3 text-[#000000] font-medium">
                    <option>Tüm Puan Türleri</option>
                  </select>
                </div>

                <button className="w-full bg-[#3D2673] text-white py-4 rounded-2xl font-bold text-[16px] flex items-center justify-center gap-2">
                  <Image
                    src="/images/icons/search.svg"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                  <span>Ara</span>
                </button>
              </div>
            </div>

            {/* Quick Tools */}
            <div className="space-y-6">
              {/* Tercih Robotu */}
              <div className="bg-[#008CBE] rounded-2xl p-6 text-white">
                <h3 className="text-[24px] font-bold mb-2">Tercih Robotu</h3>
                <p className="text-[20px] font-light mb-4">
                  Size en uygun bölümleri keşfedin
                </p>
                <button className="bg-white text-[#008CBE] py-3 px-6 rounded-2xl font-bold flex items-center gap-2">
                  <Image
                    src="/images/icons/robot.svg"
                    alt="Robot"
                    width={20}
                    height={20}
                  />
                  <span>Başla</span>
                </button>
              </div>

              {/* Ücret Hesapla */}
              <div className="bg-[#F4C400] rounded-2xl p-6 text-[#3D2673]">
                <h3 className="text-[24px] font-bold mb-2">Ücret Hesapla</h3>
                <p className="text-[20px] font-light mb-4">
                  Bursları da hesaba katarak eğitim ücretlerinizi önceden
                  planlayın
                </p>
                <button className="bg-[#3D2673] text-white py-3 px-6 rounded-2xl font-bold flex items-center gap-2">
                  <Image
                    src="/images/icons/calculator.svg"
                    alt="Calculator"
                    width={20}
                    height={20}
                  />
                  <span>Hesapla</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[64px] font-semibold text-[#3D2673] mb-4"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Bölümleri Keşfet
            </h2>
            <p
              className="text-[36px] text-[#3D2673] max-w-4xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Tüm önlisans,lisans ve lisansüstü programları tek yerden keşfet
            </p>
          </div>

          {/* Program Type Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {programs.map(program => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`px-8 py-4 rounded-full text-[36px] font-medium transition-all duration-300 ${
                  selectedProgram === program.id
                    ? 'bg-[#3D2673] text-white'
                    : 'bg-white text-[#3D2673] border border-[#000000]'
                }`}
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {program.name}
              </button>
            ))}
          </div>

          {/* Faculties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {faculties.map(faculty => (
              <div
                key={faculty.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-black/56 text-white">
                  <h3
                    className="text-[24px] font-medium mb-2"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {faculty.name}
                  </h3>
                  <p className="text-[#F4C400] text-[16px] mb-4">
                    {faculty.programs} Program
                  </p>
                  <Link
                    href="#"
                    className="text-[20px] text-white hover:text-[#F4C400] transition-colors"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {faculty.description}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button
              className="bg-white border border-[#000000] text-[#3D2673] px-8 py-4 rounded-full text-[32px] font-bold hover:bg-[#3D2673] hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Tüm Bölümleri Gör
            </button>
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-16 bg-[#F6F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[64px] font-semibold text-[#3D2673] mb-4"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Kampüs Yaşamı
            </h2>
            <p
              className="text-[36px] text-[#3D2673] max-w-4xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Beykent&apos;te eğitim sadece derslerin ötesinde, zengin sosyal
              yaşam ve deneyimlerle dolu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campusFeatures.map(feature => (
              <div
                key={feature.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-[24px] font-bold text-[#3D2673] mb-3"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {feature.name}
                  </h3>
                  <p
                    className="text-[20px] text-[#3D2673]"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[64px] font-semibold text-[#3D2673] mb-4"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Öğrenci ve Mezun Deneyimleri
            </h2>
            <p
              className="text-[36px] text-[#3D2673] max-w-4xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Beykent ailesi olarak yaşadıkları deneyimleri ve başarı
              hikayalerini keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTestimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white border border-[#000000] rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4
                      className="text-[20px] font-bold text-[#3D2673]"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {testimonial.name}
                    </h4>
                    <div className="w-8 h-8 bg-[#3D2673] rounded-full border border-[#3D2673]"></div>
                  </div>
                </div>
                <p
                  className="text-[15px] text-[#3D2673]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {testimonial.text}
                </p>
                <div className="mt-4 flex justify-end">
                  <Image
                    src="/images/icons/quotes.svg"
                    alt="Quotes"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-[#F6F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[64px] font-semibold text-[#3D2673] mb-4"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Önemli Tarihler
            </h2>
            <p
              className="text-[36px] text-[#3D2673] max-w-4xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Akademik takvim ve başvuru süreçlerini takip edin
            </p>
          </div>

          <div className="space-y-6">
            {importantDates.map(date => (
              <div key={date.id} className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      date.active ? 'bg-[#3D2673]' : 'bg-[#D9D9D9]'
                    }`}
                  >
                    <span
                      className={`text-[24px] font-medium ${
                        date.active ? 'text-white' : 'text-[#3D2673]'
                      }`}
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {date.date}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    className="text-[36px] font-semibold text-[#3D2673] mb-2"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {date.title}
                  </h3>
                  <p
                    className="text-[20px] text-[#3D2673]"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {date.description}
                  </p>
                </div>

                {date.active && (
                  <div className="flex-shrink-0">
                    <span
                      className="text-[20px] text-[#009EE0]"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      Şu anda Aktif
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[64px] font-semibold text-[#3D2673] mb-4"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              Sıkça Sorulan Sorular
            </h2>
            <p
              className="text-[36px] text-[#3D2673] max-w-4xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Merak ettiğiniz konulara yanıt bulun veya bizimle iletişime geçin
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map(item => (
              <div
                key={item.id}
                className="bg-white border border-[#000000] rounded-full p-6 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[36px] text-[#3D2673]"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {item.question}
                  </span>
                  <Image
                    src="/images/icons/arrow-down.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#009EE0] to-[#7348D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[64px] font-semibold text-white mb-4"
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              İletişime Geçin
            </h2>
            <p
              className="text-[36px] text-white max-w-4xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Sorularınız için bizimle iletişime geçin, size en kısa sürede
              dönüş yapalım
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
            <h3
              className="text-[48px] font-medium text-[#3D2673] text-center mb-8"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              İletişim Formu
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#009EE0] rounded-full flex items-center justify-center">
                  <span className="text-[48px] font-medium text-white">1</span>
                </div>
                <span
                  className="text-[24px] font-medium text-[#3D2673]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Kişisel Bilgiler
                </span>
                <div className="w-12 h-12 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                  <span className="text-[48px] font-medium text-white">2</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#EAE9E9] border border-[#000000] rounded-2xl p-4 flex items-center gap-3">
                  <Image
                    src="/images/icons/person.svg"
                    alt="Person"
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    placeholder="Ad"
                    className="bg-transparent text-[#B7B5B5] text-[24px] font-medium flex-1"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>

                <div className="bg-[#EAE9E9] border border-[#000000] rounded-2xl p-4 flex items-center gap-3">
                  <Image
                    src="/images/icons/person.svg"
                    alt="Person"
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    placeholder="Soyad"
                    className="bg-transparent text-[#B7B5B5] text-[24px] font-medium flex-1"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>

                <div className="bg-[#EAE9E9] border border-[#000000] rounded-2xl p-4 flex items-center gap-3">
                  <Image
                    src="/images/icons/mail.svg"
                    alt="Mail"
                    width={20}
                    height={20}
                  />
                  <input
                    type="email"
                    placeholder="E posta Adresiniz"
                    className="bg-transparent text-[#B7B5B5] text-[24px] font-medium flex-1"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>

                <div className="bg-[#EAE9E9] border border-[#000000] rounded-2xl p-4 flex items-center gap-3">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                  <input
                    type="tel"
                    placeholder="0530 454 90 99"
                    className="bg-transparent text-[#B7B5B5] text-[24px] font-medium flex-1"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
              </div>

              <button
                className="w-full bg-[#B59DEF] text-white py-4 rounded-2xl font-medium text-[24px] flex items-center justify-center gap-2"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                <span>Devam Et</span>
                <Image
                  src="/images/icons/arrow-forward.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
