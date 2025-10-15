'use client';

import React from 'react';
import HeaderSection from '@/components/features/HeaderSection';
import HeroSection from '@/components/features/HeroSection';
import NewsSection from '@/components/features/NewsSection';
import EventsSection from '@/components/features/EventsSection';
import StatisticsSection from '@/components/features/StatisticsSection';
import EducationSection from '@/components/features/EducationSection';
import CampusesSection from '@/components/features/CampusesSection';
import FooterSection from '@/components/features/FooterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderSection />

      {/* Hero Section */}
      <HeroSection />

      {/* News & Announcements Section */}
      <NewsSection />

      {/* Events Section */}
      <EventsSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Education & Certificate Programs Section */}
      <EducationSection />

      {/* Campuses Section */}
      <CampusesSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
