'use client';

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call will be here
    console.log('Form submitted:', formData);
  };

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
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#009EE0] to-[#3D2673] flex items-center justify-center text-white text-2xl font-medium">
              1
            </div>
            <div className="w-32 h-0.5 bg-gray-300" />
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-white text-2xl font-medium">
              2
            </div>
          </div>

          <h4 className="text-2xl font-medium mb-6">Kişisel Bilgiler</h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#EAE9E9] border border-black rounded-2xl p-4 flex items-center gap-3">
                <span className="text-2xl">👤</span>
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
                <span className="text-2xl">👤</span>
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
              <span className="text-2xl">📧</span>
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
              <span className="text-2xl">📞</span>
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
              type="submit"
              className="w-full bg-[#B59DEF] rounded-2xl p-4 text-white text-2xl font-medium flex items-center justify-center gap-2"
            >
              Devam Et →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
