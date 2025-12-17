import type { MenuItem } from './types';

const MENU: MenuItem[] = [
  { label: 'Üniversitemiz', href: '/universitemiz' },
  { label: 'Akademik', href: '/akademik' },
  { label: 'Öğrenci', href: '/ogrenci' },
  { label: 'Uluslararası', href: '/uluslararasi' },
];

export default function HeaderNav() {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
      {MENU.map(item => (
        <a
          key={item.label}
          href={item.href}
          className="hover:opacity-80 transition-opacity whitespace-nowrap text-white text-center uppercase"
          style={{
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          {item.label}
        </a>
      ))}

      <div className="flex gap-2 sm:gap-3">
        <button className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-[12px] bg-[#F4C400]/20 hover:bg-[#F4C400]/30 transition-colors border border-[#F4C400]/30" />
        <button className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-[12px] bg-[#F4C400]/20 hover:bg-[#F4C400]/30 transition-colors border border-[#F4C400]/30" />
      </div>
    </nav>
  );
}
