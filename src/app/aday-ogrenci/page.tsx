import AdayOgrenciPageContent from '@/components/pages/AdayOgrenciPageContent';
import HeaderSection from '@/components/features/HeaderSection';
import FooterSection from '@/components/features/FooterSection';

export const metadata = {
  title: 'Aday Öğrenci - İstanbul Beykent Üniversitesi',
  description:
    'İstanbul Beykent Üniversitesi aday öğrenci bilgileri, başvuru süreçleri ve burs imkanları.',
};

export default function AdayOgrenciPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderSection />

      {/* Aday Öğrenci Page Content */}
      <AdayOgrenciPageContent />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
