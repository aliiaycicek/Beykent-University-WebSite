import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';

export default function HeaderTop() {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <ThemeToggle />
      <LanguageSwitch />
    </div>
  );
}
