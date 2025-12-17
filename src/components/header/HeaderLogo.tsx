import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Image
        src="/images/logos/beykent-logo.svg"
        alt="Beykent Üniversitesi"
        width={40}
        height={40}
        className="sm:w-[52px] sm:h-[52px]"
        priority
      />
      <div
        className="text-xs sm:text-sm font-bold leading-tight"
        style={{ fontFamily: 'Roboto Slab' }}
      >
        <div>BEYKENT</div>
        <div>ÜNİVERSİTESİ</div>
      </div>
    </div>
  );
}
