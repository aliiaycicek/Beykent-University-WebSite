'use client';

import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';

export default function HeaderTop() {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {/* MOD Yazısı */}
      <span className="text-xs sm:text-sm font-normal text-white/90 hidden sm:block">
        Mod
      </span>

      <ThemeToggle />
      <LanguageSwitch />
    </div>
  );
}
