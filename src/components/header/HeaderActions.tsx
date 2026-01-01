import Link from 'next/link';
import HeaderButton from './HeaderButton';

export default function HeaderActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto">
      <Link href="/aday-ogrenci" className="flex-1 sm:flex-none">
        <HeaderButton label="ADAY ÖĞRENCİ" icon="student" />
      </Link>
      <HeaderButton label="MEZUN" icon="graduate" />
      <HeaderButton label="HIZLI MENÜ" variant="light" icon="menu" />
    </div>
  );
}
