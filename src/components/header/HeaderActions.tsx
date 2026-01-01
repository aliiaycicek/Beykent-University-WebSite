import Link from 'next/link';
import HeaderButton from './HeaderButton';

export default function HeaderActions() {
  return (
    <div className="flex flex-row items-center" style={{ gap: '34px' }}>
      <Link href="/aday-ogrenci">
        <HeaderButton label="ADAY ÖĞRENCİ" icon="student" />
      </Link>
      <HeaderButton label="MEZUN" icon="graduate" />
      <HeaderButton label="HIZLI MENÜ" variant="light" icon="menu" />
    </div>
  );
}
