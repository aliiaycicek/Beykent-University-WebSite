import type { MenuItem } from './types';

const MENU: MenuItem[] = [
  { label: 'Beykent Hakkında', href: '/beykent-hakkinda' },
  { label: 'Haberler', href: '/haberler' },
  { label: 'Akademik', href: '/akademik' },
  { label: 'Öğrenci', href: '/ogrenci' },
  { label: 'Uluslararası', href: '/uluslararasi' },
];

export default function HeaderNav() {
  return (
    <nav className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10 text-base lg:text-xl font-bold w-full lg:w-auto">
      {MENU.map(item => (
        <a
          key={item.label}
          href={item.href}
          className="hover:opacity-80 transition-opacity"
        >
          {item.label}
        </a>
      ))}

      <div className="flex gap-3 mt-2 lg:mt-0">
        <button className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors" />
        <button className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors" />
      </div>
    </nav>
  );
}
