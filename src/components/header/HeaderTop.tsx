'use client';

export default function HeaderTop() {
  return (
    <div className="flex items-center gap-4">
      {/* MOD Yazısı - Roboto 400 16px */}
      <span
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FFFFFF',
        }}
      >
        Mod
      </span>

      {/* Güneş ikonu - 28x28px */}
      <button
        className="flex items-center justify-center hover:opacity-80 transition-opacity"
        style={{
          width: '28px',
          height: '28px',
          background: 'rgba(244, 196, 0, 0.15)',
          borderRadius: '8px',
        }}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" fill="white" />
          <path
            d="M12 1V3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 21V23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4.22 4.22L5.64 5.64"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.36 18.36L19.78 19.78"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 12H3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21 12H23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4.22 19.78L5.64 18.36"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.36 5.64L19.78 4.22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* TR Dil Seçeneği - 28x28px, Roboto 700 16px */}
      <button
        className="flex items-center justify-center hover:opacity-80 transition-opacity"
        style={{
          width: '28px',
          height: '28px',
          background: 'rgba(244, 196, 0, 0.15)',
          borderRadius: '8px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FFFFFF',
        }}
      >
        TR
      </button>
    </div>
  );
}
