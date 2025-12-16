'use client';

import { useState } from 'react';

interface Props {
  question: string;
}

export default function FAQItem({ question }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-black rounded-[36px] p-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-2xl lg:text-4xl font-medium">{question}</span>
        <span className="text-3xl transform transition-transform">
          {open ? '↑' : '↓'}
        </span>
      </button>
    </div>
  );
}
