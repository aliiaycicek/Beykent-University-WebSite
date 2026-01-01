'use client';

import React from 'react';
import { GlobalHeader } from '@/components/header';
import FooterSection from '@/components/features/FooterSection';
import NewsPageContent from '@/components/pages/NewsPageContent';
import { AkademikHoverProvider } from '@/components/context/AkademikHoverContext';

export default function NewsPage() {
  return (
    <AkademikHoverProvider>
      <div className="min-h-screen bg-white">
        {/* Header - Mor arka planlı (transparent=false default) */}
        <GlobalHeader />

        {/* Spacer for fixed header */}
        <div style={{ height: '164px' }} />

        {/* News Page Content */}
        <NewsPageContent />

        {/* Footer */}
        <FooterSection />
      </div>
    </AkademikHoverProvider>
  );
}
