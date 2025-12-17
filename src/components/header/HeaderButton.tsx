import type { ButtonVariant } from './types';

interface Props {
  label: string;
  variant?: ButtonVariant;
}

export default function HeaderButton({ label, variant = 'default' }: Props) {
  const base =
    'h-10 sm:h-12 lg:h-[52px] px-4 sm:px-6 lg:px-8 rounded-[20px] font-bold text-xs sm:text-sm lg:text-base uppercase flex items-center justify-center transition-colors whitespace-nowrap';

  const styles =
    variant === 'light'
      ? 'bg-white/90 text-[#3D2673] hover:bg-white'
      : 'bg-[#F4C400]/20 text-white hover:bg-[#F4C400]/30 border border-[#F4C400]/30';

  return (
    <button className={`${base} ${styles}`} style={{ fontFamily: 'Roboto' }}>
      {label}
    </button>
  );
}
