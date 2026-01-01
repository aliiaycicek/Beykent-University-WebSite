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
  // Figma'ya göre: 200x50px, border-radius: 16px
  // Font küçültüldü: 14px (tek satırda görünmesi için)
  const baseStyles = {
    width: '200px',
    height: '50px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '13px 16px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: '14px', // Küçültüldü - tek satır için
    lineHeight: '16px',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap' as const, // Tek satırda kalması için
  };

  const variantStyles =
    variant === 'light'
      ? {
          background: 'rgba(255, 255, 255, 0.75)',
          color: '#3D2673',
        }
      : {
          background: 'rgba(244, 196, 0, 0.1)',
          color: '#FFFFFF',
        };

  const renderIcon = () => {
    const iconColor = variant === 'light' ? '#3D2673' : '#FFFFFF';

    switch (icon) {
      case 'student':
        return (
          <svg
            width="24"
            height="20"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 0L0 8L15 16L27 9.6V20H30V8L15 0Z" fill={iconColor} />
            <path
              d="M6 11.6V18.4L15 24L24 18.4V11.6L15 17.2L6 11.6Z"
              fill={iconColor}
            />
          </svg>
        );
      case 'graduate':
        return (
          <svg
            width="18"
            height="20"
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 12.5C14.3137 12.5 17 9.81371 17 6.5C17 3.18629 14.3137 0.5 11 0.5C7.68629 0.5 5 3.18629 5 6.5C5 9.81371 7.68629 12.5 11 12.5Z"
              fill={iconColor}
            />
            <path
              d="M0 24.5V21.5C0 17.5 4.5 14.5 11 14.5C17.5 14.5 22 17.5 22 21.5V24.5H0Z"
              fill={iconColor}
            />
          </svg>
        );
      case 'menu':
        return (
          <svg
            width="22"
            height="18"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H26V4H0V0Z" fill={iconColor} />
            <path d="M0 9H26V13H0V9Z" fill={iconColor} />
            <path d="M0 18H26V22H0V18Z" fill={iconColor} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      style={{ ...baseStyles, ...variantStyles }}
      className="hover:shadow-lg"
    >
      {renderIcon()}
      <span>{label}</span>
    </button>
  );
}
