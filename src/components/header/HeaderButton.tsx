import type { ButtonVariant } from './types';

interface Props {
  label: string;
  variant?: ButtonVariant;
}

export default function HeaderButton({ label, variant = 'default' }: Props) {
  const base =
    'h-10 sm:h-12 lg:h-[50px] px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm uppercase flex items-center justify-center transition-colors';

  const styles =
    variant === 'light'
      ? 'bg-white/70 text-[#3D2673] hover:bg-white'
      : 'bg-yellow-400/10 text-white hover:bg-yellow-400/20';

  return <button className={`${base} ${styles}`}>{label}</button>;
}
