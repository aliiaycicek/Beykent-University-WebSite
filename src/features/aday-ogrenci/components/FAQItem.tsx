import React from 'react';

type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

// Figma'daki tasarıma uygun ok ikonu
const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`
      flex items-center justify-center 
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'rotate-180' : 'rotate-0'} 
    `}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
);

export default function FAQItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div
      className={`
        w-full bg-white overflow-hidden relative
        border border-black rounded-[36px]
        transition-all duration-300 ease-in-out
        ${isOpen ? 'h-auto pb-8' : 'h-[111px]'}
      `}
    >
      <button
        className="w-full h-[111px] flex justify-between items-center focus:outline-none text-left"
        // Figma: Left 44px, Icon Left 1266px (Total 1306) -> Right padding approx 40px
        style={{ paddingLeft: '44px', paddingRight: '40px' }}
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        {/* Soru Metni */}
        {/* Figma: Roboto, Medium (500), 36px */}
        <span className="font-roboto font-medium text-[20px] md:text-[36px] text-black leading-tight select-none">
          {question}
        </span>

        {/* Ok İkonu */}
        <ArrowIcon isOpen={isOpen} />
      </button>

      {/* Cevap Alanı */}
      <div
        className={`
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}
        `}
      >
        <div className="px-[44px] pt-2 text-gray-700 text-lg sm:text-xl md:text-2xl font-roboto leading-relaxed border-t border-gray-200 mt-2 mx-[44px]">
          {answer}
        </div>
      </div>
    </div>
  );
}
