import type { MenuItem } from './types';
import Link from 'next/link';

const MENU: MenuItem[] = [
  { label: 'Beykent Hakkında', href: '/beykent-hakkinda' },
  { label: 'Haberler', href: '/haberler' },
  { label: 'Akademik', href: '/akademik' },
  { label: 'Öğrenci', href: '/ogrenci' },
  { label: 'Uluslararası', href: '/uluslararasi' },
];

export default function HeaderNav() {
  return (
    <nav className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-base lg:text-xl font-bold w-full lg:w-auto">
      <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-8">
        {MENU.map(item => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-[#FFDD00] transition-colors duration-300 text-sm lg:text-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-3">
        {/* Arama Butonu */}
        <button className="w-10 h-10 lg:w-12 lg:h-11 rounded-xl lg:rounded-2xl bg-yellow-400/15 hover:bg-yellow-400/25 transition-all duration-300 flex items-center justify-center group">
          <svg
            className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M16 16L21 21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Kullanıcı Butonu */}
        <button className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-yellow-400/15 hover:bg-yellow-400/25 transition-all duration-300 flex items-center justify-center group">
          <svg
            className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 21V19C4 16.2386 6.23858 14 9 14H15C17.7614 14 20 16.2386 20 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
