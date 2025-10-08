import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BeykentFooter = () => {
  const leftLinks = [
    { name: 'Fakülteler', href: '/fakulteler' },
    { name: 'Enstitüler', href: '/enstituler' },
    { name: 'Yüksekokullar', href: '/yuksekokullar' },
    { name: 'Lisansüstü Merkezleri', href: '/lisansustu-merkezleri' },
  ]

  const rightLinks = [
    { name: 'Online Başvuru', href: '/online-basvuru' },
    { name: 'Burslar', href: '/burslar' },
    { name: 'Yatay Geçiş', href: '/yatay-gecis' },
    { name: 'Öğrenci Bilgi Sistemi', href: '/ogrenci-bilgi-sistemi' },
  ]

  const legalLinks = [
    { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    { name: 'KVKK', href: '/kvkk' },
    { name: 'Çerez Politikası', href: '/cerez-politikasi' },
  ]

  return (
    <footer className="bg-[#3D2673] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image
                src="/images/logos/beykent-logo-final.svg"
                alt="İstanbul Beykent Üniversitesi"
                width={200}
                height={60}
                className="h-16 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-white text-[16px] leading-relaxed max-w-sm" style={{fontFamily: 'Roboto, sans-serif'}}>
                30 yıllık deneyimi ile eğitimde öncü, geleceğe yön veren üniversite.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://twitter.com/beykentuni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4C400] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Image
                  src="/images/social-media/twitter-icon.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </a>
              <a
                href="https://facebook.com/beykentuniversitesi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4C400] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Image
                  src="/images/social-media/facebook-icon.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </a>
              <a
                href="https://instagram.com/beykentuniversitesi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4C400] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Image
                  src="/images/social-media/instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </a>
              <a
                href="https://youtube.com/beykentuniversitesi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4C400] transition-colors duration-200"
                aria-label="YouTube"
              >
                <Image
                  src="/images/social-media/youtube-icon.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Links */}
              <div>
                <div className="space-y-3">
                  {leftLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-[#F4C400] hover:text-white transition-colors duration-200 text-[16px]"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Links */}
              <div>
                <div className="space-y-3">
                  {rightLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-[#F4C400] hover:text-white transition-colors duration-200 text-[16px]"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          <div className="flex items-center">
            <Image
              src="/images/icons/mail-icon-final.svg"
              alt="Email"
              width={20}
              height={20}
              className="h-5 w-5 mr-3 filter brightness-0 invert"
            />
            <a
              href="mailto:info@beykent.edu.tr"
              className="text-white hover:text-[#F4C400] transition-colors duration-200 text-[16px]"
              style={{fontFamily: 'Roboto, sans-serif'}}
            >
              info@beykent.edu.tr
            </a>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/icons/phone-icon-final.svg"
              alt="Phone"
              width={20}
              height={20}
              className="h-5 w-5 mr-3 filter brightness-0 invert"
            />
            <a
              href="tel:02164441997"
              className="text-white hover:text-[#F4C400] transition-colors duration-200 text-[16px]"
              style={{fontFamily: 'Roboto, sans-serif'}}
            >
              0216 444 1997
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#F4C400] hover:text-white transition-colors duration-200 text-[16px]"
                  style={{fontFamily: 'Roboto, sans-serif'}}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-[#F4C400] text-[16px]" style={{fontFamily: 'Roboto, sans-serif'}}>
                © 2024 İstanbul Beykent Üniversitesi. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default BeykentFooter