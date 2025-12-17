import HeaderButton from './HeaderButton';

export default function HeaderActions() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
      <HeaderButton label="ADAY ÖĞRENCİ" />
      <HeaderButton label="MEZUN" />
      <HeaderButton label="HIZLI MENÜ" variant="light" />
    </div>
  );
}
