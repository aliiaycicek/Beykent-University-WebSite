'use client';

export default function ThemeToggle() {
  return (
    <button className="w-7 h-7 rounded-lg bg-yellow-400/15 flex items-center justify-center hover:bg-yellow-400/25 transition-all duration-300 group">
      <svg
        className="w-[19px] h-[19px] text-white group-hover:rotate-12 transition-transform"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center circle */}
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        {/* Sun rays */}
        <path
          d="M12 2V4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 20V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12H2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 12H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.07 4.93L17.66 6.34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6.34 17.66L4.93 19.07"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.07 19.07L17.66 17.66"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6.34 6.34L4.93 4.93"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
