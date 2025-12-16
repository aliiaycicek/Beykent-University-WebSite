'use client';

import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderActions from './HeaderActions';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <header className="w-full bg-[#3D2673] text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-[72px]">
          <HeaderLogo />
          <HeaderTop />
        </div>

        {/* BOTTOM BAR */}
        <div className="flex items-center justify-between h-[92px]">
          <HeaderActions />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
