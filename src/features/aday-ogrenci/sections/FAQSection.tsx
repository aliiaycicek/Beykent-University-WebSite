import FAQItem from '../components/FAQItem';

export default function FAQSection() {
  const faqs = [
    { id: 1, question: 'Başvuru için hangi belgeler gerekli?' },
    { id: 2, question: 'Burs Başvurusu nasıl yapılır?' },
    { id: 3, question: 'Yatay geçiş mümkün mü?' },
    { id: 4, question: 'Mezuniyet sonrası iş bulma desteği sağlanıyor mu?' },
    { id: 5, question: 'Erasmus programı var mı?' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4 text-center">
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-2xl lg:text-4xl font-medium mb-12 text-center">
          Merak ettiğiniz konulara yanıt bulun veya bizimle iletişime geçin
        </p>

        <div className="space-y-4">
          {faqs.map(faq => (
            <FAQItem key={faq.id} question={faq.question} />
          ))}
        </div>
      </div>
    </section>
  );
}
