import React from 'react';
import { GlobalHeader } from '@/components/header';

import {
  CampusesSection,
  EducationCertificatesSection,
  EventsSection,
  Footer,
  HeroSection,
  NewsAnnouncementsSection,
  StatisticsSection,
} from './sections';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F7FB]">
      <GlobalHeader />
      <HeroSection />
      <NewsAnnouncementsSection />
      <EventsSection />
      <StatisticsSection />
      <EducationCertificatesSection />
      <CampusesSection />
      <Footer />
    </main>
  );
}
