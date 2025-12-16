'use client';

import { useState } from 'react';
import FAQItem from '../components/FAQItem';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'Başvuru için hangi belgeler gerekli?',
      answer:
        'T.C. uyruklu öğrenciler için Lise diploması, ÖSYM Yerleştirme Sonuç Belgesi, Nüfus Cüzdanı fotokopisi, ikametgâh ve adli sicil kaydı gibi temel belgeler istenir. Yurt dışından başvuran öğrenciler için YÖK tarafından belirlenen ek şartlar ve belgeler (örn. denklik belgesi) talep edilir. Kesin ve güncel liste için lütfen Beykent Üniversitesi Öğrenci İşleri sayfasını kontrol ediniz.',
    },
    {
      id: 2,
      question: 'Burs Başvurusu nasıl yapılır?',
      answer:
        'Beykent Üniversitesi, öğrencilerine ÖSYM başarı bursları, sporcu bursları ve bazı özel durumlarda yönetim kurulu bursları sunmaktadır. ÖSYM bursları, yerleştirme puanınıza göre otomatik olarak tanımlanır. Ek burs başvuruları (örn. başarı veya sporcu bursları) için üniversitenin ilgili birimleri tarafından belirlenen tarihlerde başvuru yapılması gerekmektedir. Detaylı bilgi ve başvuru süreçleri için üniversitenin Burslar ve Ücretler sayfasını takip ediniz.',
    },
    {
      id: 3,
      question: 'Yatay geçiş mümkün mü?',
      answer:
        'Evet, Beykent Üniversitesi Yükseköğretim Kurumları Arasında Önlisans ve Lisans Düzeyinde Yatay Geçiş Esaslarına Dair Yönetmelik kapsamında Merkezi Yerleştirme Puanı (Ek Madde-1) ve Kurumlar Arası Yatay Geçiş ile öğrenci kabul etmektedir. Başvurular genellikle akademik takvimde belirtilen dönemlerde yapılır. Başvuru şartları, kontenjanlar ve gerekli belgeler her dönem üniversitenin web sitesinde duyurulur. Başvuru yapmadan önce ilgili yönetmelik ve duyuruları incelemeniz önemlidir.',
    },
    {
      id: 4,
      question: 'Mezuniyet sonrası iş bulma desteği sağlanıyor mu?',
      answer:
        'Beykent Üniversitesi, Kariyer Merkezi aracılığıyla öğrencilerine ve mezunlarına çeşitli destekler sunmaktadır. Bu destekler arasında kariyer planlama danışmanlığı, özgeçmiş hazırlama atölyeleri, staj ve iş ilanları duyuruları, kariyer günleri etkinlikleri ve mezunlarla buluşma organizasyonları yer alır. Merkez, öğrencilerin sektörle buluşmasını sağlamak için aktif olarak çalışır.',
    },
    {
      id: 5,
      question: 'Erasmus programı var mı?',
      answer:
        'Evet, Beykent Üniversitesi Avrupa Birliği Eğitim ve Gençlik Programları Merkezi Başkanlığı (Ulusal Ajans) tarafından desteklenen Erasmus+ öğrenci ve personel hareketliliği programına sahiptir. Öğrenciler anlaşmalı Avrupa üniversitelerinde bir veya iki yarıyıl eğitim alabilirler. Başvuru şartları (not ortalaması, yabancı dil yeterliliği) her akademik yıl için Uluslararası İlişkiler Ofisi tarafından belirlenir ve duyurulur.',
    },
  ];

  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full max-w-[1306px] mx-auto px-4 md:px-0">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4 text-center text-gray-800 font-roboto">
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-2xl lg:text-4xl font-medium mb-12 text-center text-gray-600 font-roboto">
          Merak ettiğiniz konulara yanıt bulun veya bizimle iletişime geçin
        </p>
        <div className="flex flex-col gap-6">
          {faqs.map(faq => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.id === openItemId}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
