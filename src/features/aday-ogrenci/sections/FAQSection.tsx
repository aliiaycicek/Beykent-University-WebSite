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
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 text-center"
          style={{ fontFamily: 'Roboto Slab' }}
        >
          Sıkça Sorulan Sorular
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-8 sm:mb-10 lg:mb-12 text-center"
          style={{ fontFamily: 'Roboto' }}
        >
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
