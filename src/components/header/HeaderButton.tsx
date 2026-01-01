import type { ButtonVariant } from './types';

interface Props {
  label: string;
  variant?: ButtonVariant;
  icon?: 'student' | 'graduate' | 'menu';
}

export default function HeaderButton({
  label,
  variant = 'default',
  icon,
}: Props) {
  const base =
    'h-10 sm:h-12 lg:h-[50px] px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-3 transition-all duration-300';

  const styles =
    variant === 'light'
      ? 'bg-white/75 text-[#3D2673] hover:bg-white hover:shadow-lg'
      : 'bg-yellow-400/10 text-white hover:bg-yellow-400/20 hover:shadow-lg';

  const renderIcon = () => {
    switch (icon) {
      case 'student':
        return (
          <svg
            className="w-6 h-5"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0L0 8L15 16L27 9.6V20H30V8L15 0Z"
              fill="currentColor"
            />
            <path
              d="M6 11.6V18.4L15 24L24 18.4V11.6L15 17.2L6 11.6Z"
              fill="currentColor"
            />
          </svg>
        );
      case 'graduate':
        return (
          <svg
            className="w-5 h-5"
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 12.5C14.3137 12.5 17 9.81371 17 6.5C17 3.18629 14.3137 0.5 11 0.5C7.68629 0.5 5 3.18629 5 6.5C5 9.81371 7.68629 12.5 11 12.5Z"
              fill="currentColor"
            />
            <path
              d="M0 24.5V21.5C0 17.5 4.5 14.5 11 14.5C17.5 14.5 22 17.5 22 21.5V24.5H0Z"
              fill="currentColor"
            />
          </svg>
        );
      case 'menu':
        return (
          <svg
            className="w-6 h-5"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H26V4H0V0Z" fill="#3D2673" />
            <path d="M0 9H26V13H0V9Z" fill="#3D2673" />
            <path d="M0 18H26V22H0V18Z" fill="#3D2673" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button className={`${base} ${styles}`}>
      {renderIcon()}
      {label}
    </button>
  );
}
