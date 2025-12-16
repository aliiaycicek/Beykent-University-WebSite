import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logos/beykent-logo.svg"
        alt="Beykent Üniversitesi"
        width={52}
        height={52}
        priority
      />
      <div className="text-sm font-semibold leading-tight">
        <div>BEYKENT</div>
        <div>ÜNİVERSİTESİ</div>
      </div>
    </div>
  );
}
