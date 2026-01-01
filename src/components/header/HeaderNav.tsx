import type { MenuItem } from './types';
import Link from 'next/link';

const MENU: MenuItem[] = [
  { label: 'Üniversitemiz', href: '/beykent-hakkinda' },
  { label: 'Akademik', href: '/akademik' },
  { label: 'Öğrenci', href: '/ogrenci' },
  { label: 'Uluslararası', href: '/uluslararasi' },
];

export default function HeaderNav() {
  return (
    <div className="flex items-center" style={{ gap: '17px' }}>
      {/* Navigasyon Menüsü - Roboto 700 24px */}
      <nav className="flex items-start" style={{ gap: '40px' }}>
        {MENU.map(item => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '28px',
              color: '#FFFFFF',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            className="hover:text-[#FFDD00]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Arama Butonu - 47x44px */}
      <button
        className="flex items-center justify-center hover:opacity-80 transition-opacity"
        style={{
          width: '47px',
          height: '44px',
          background: 'rgba(244, 196, 0, 0.15)',
          borderRadius: '16px',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2.5" />
          <path
            d="M16 16L21 21"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Kullanıcı/Paylaşım Butonu - 43x43px */}
      <button
        className="flex items-center justify-center hover:opacity-80 transition-opacity"
        style={{
          width: '43px',
          height: '43px',
          background: 'rgba(244, 196, 0, 0.15)',
          borderRadius: '8px',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="7" r="4" fill="white" />
          <path
            d="M4 21V19C4 16.2386 6.23858 14 9 14H15C17.7614 14 20 16.2386 20 19V21"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
