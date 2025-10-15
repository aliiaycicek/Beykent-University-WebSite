'use client';

import React from 'react';
import DefaultHeader from '@/components/features/DefaultHeader';
import FooterSection from '@/components/features/FooterSection';
import NewsPageContent from '@/components/pages/NewsPageContent';
import { AkademikHoverProvider } from '@/components/context/AkademikHoverContext';

export default function NewsPage() {
  return (
    <AkademikHoverProvider>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <DefaultHeader />

        {/* News Page Content */}
        <NewsPageContent />

        {/* Footer */}
        <FooterSection />
      </div>
    </AkademikHoverProvider>
  );
}
