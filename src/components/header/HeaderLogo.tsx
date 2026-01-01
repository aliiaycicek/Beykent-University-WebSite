import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 hover:opacity-90 transition-opacity"
    >
      <Image
        src="/images/logos/beykent-logo.svg"
        alt="Beykent Üniversitesi"
        width={52}
        height={52}
        priority
        className="w-10 h-10 sm:w-[52px] sm:h-[52px]"
      />
      <div className="text-xs sm:text-sm font-semibold leading-tight hidden sm:block">
        <div>İSTANBUL BEYKENT</div>
        <div>ÜNİVERSİTESİ</div>
      </div>
    </Link>
  );
}
