'use client';

import React from 'react';
import HeaderSection from '@/components/features/HeaderSection';
import FooterSection from '@/components/features/FooterSection';
import NewsPageContent from '@/components/pages/NewsPageContent';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderSection />

      {/* News Page Content */}
      <NewsPageContent />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
