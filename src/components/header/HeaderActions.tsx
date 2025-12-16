import HeaderButton from './HeaderButton';

export default function HeaderActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto">
      <HeaderButton label="ADAY ÖĞRENCİ" />
      <HeaderButton label="MEZUN" />
      <HeaderButton label="HIZLI MENÜ" variant="light" />
    </div>
  );
}
