'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    if (
      !formData.name.trim() ||
      !formData.surname.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      return;
    }

    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 2) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep(3);
      } else {
        console.error('Contact form submission failed');
      }
    } catch (error) {
      console.error('Error submitting contact form', error);
    } finally {
      setIsLoading(false);
    }
  };

  const stepOneActive = 'bg-gradient-to-b from-[#009EE0] to-[#3D2673]';
  const stepTwoActive = step >= 2 ? stepOneActive : 'bg-gray-300';
  const connectorActive =
    step >= 2 ? 'bg-gradient-to-r from-[#009EE0] to-[#3D2673]' : 'bg-gray-300';

  return (
    <section className="py-16 bg-gradient-to-b from-[#009EE0] to-[#7348D9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-4 text-center">
          İletişime Geçin
        </h2>
        <p className="text-2xl lg:text-4xl font-medium text-white mb-12 text-center">
          Sorularınız için bizimle iletişime geçin, size en kısa sürede dönüş
          yapalım
        </p>

        <div className="bg-white rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl lg:text-5xl font-medium text-center mb-8">
            İletişim Formu
          </h3>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div
              className={`w-16 h-16 rounded-full ${stepOneActive} flex items-center justify-center text-white text-2xl font-medium`}
            >
              {step > 1 ? '✓' : '1'}
            </div>
            <div className={`w-32 h-0.5 ${connectorActive}`} />
            <div
              className={`w-16 h-16 rounded-full ${stepTwoActive} flex items-center justify-center text-white text-2xl font-medium`}
            >
              {step === 3 ? '✓' : '2'}
            </div>
          </div>

          {step !== 3 && (
            <h4 className="text-2xl font-medium mb-6">
              {step === 1 ? 'Kişisel Bilgiler' : 'Mesajınız'}
            </h4>
          )}

          {step === 3 ? (
            <div className="py-16 text-center">
              <p className="text-3xl lg:text-4xl font-semibold mb-4">
                Teşekkürler! Mesajınız bize ulaştı.
              </p>
              <p className="text-xl text-gray-600">
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#EAE9E9] border border-black rounded-2xl p-4 flex items-center gap-3">
                      <Image
                        src="/icon/adayogrenci/person.png"
                        alt="Kullanıcı adı"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <input
                        type="text"
                        placeholder="Ad"
                        className="bg-transparent flex-1 outline-none text-xl"
                        value={formData.name}
                        onChange={e =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="bg-[#EAE9E9] border border-black rounded-2xl p-4 flex items-center gap-3">
                      <Image
                        src="/icon/adayogrenci/person.png"
                        alt="Kullanıcı soyadı"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <input
                        type="text"
                        placeholder="Soyad"
                        className="bg-transparent flex-1 outline-none text-xl"
                        value={formData.surname}
                        onChange={e =>
                          setFormData({ ...formData, surname: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="bg-[#EAE9E9] border border-black rounded-2xl p-4 flex items-center gap-3">
                    <Image
                      src="/icon/adayogrenci/mail.png"
                      alt="E-posta"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <input
                      type="email"
                      placeholder="E posta Adresiniz"
                      className="bg-transparent flex-1 outline-none text-xl"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="bg-[#EAE9E9] border border-black rounded-2xl p-4 flex items-center gap-3">
                    <Image
                      src="/icon/adayogrenci/call.png"
                      alt="Telefon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <input
                      type="tel"
                      placeholder="0530 454 90 99"
                      className="bg-transparent flex-1 outline-none text-xl"
                      value={formData.phone}
                      onChange={e =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-[#B59DEF] rounded-2xl p-4 text-white text-2xl font-medium flex items-center justify-center gap-2"
                  >
                    Devam Et -&gt;
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="bg-[#EAE9E9] border border-black rounded-2xl p-4 flex items-start gap-3">
                    <Image
                      src="/icon/adayogrenci/mail.png"
                      alt="Mesajınız"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1"
                    />
                    <textarea
                      placeholder="Mesajınızı buraya yazabilirsiniz"
                      className="bg-transparent flex-1 outline-none text-xl min-h-[140px] resize-none"
                      value={formData.message}
                      onChange={e =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#B59DEF] rounded-2xl p-4 text-white text-2xl font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Gönderiliyor...' : 'Gönder'}
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
