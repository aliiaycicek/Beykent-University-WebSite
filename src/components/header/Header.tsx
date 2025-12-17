'use client';

import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderActions from './HeaderActions';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <header className="w-full bg-[#3D2673] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="flex items-center justify-center h-16 sm:h-[72px] border-b border-white/10 relative">
          <div className="absolute left-0">
            <HeaderLogo />
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <HeaderActions />
            <HeaderTop />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex items-center justify-center h-20 sm:h-[92px]">
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
