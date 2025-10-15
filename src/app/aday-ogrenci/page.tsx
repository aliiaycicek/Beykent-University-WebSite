import AdayOgrenciPageContent from '@/components/pages/AdayOgrenciPageContent';
import DefaultHeader from '@/components/features/DefaultHeader';
import FooterSection from '@/components/features/FooterSection';
import { AkademikHoverProvider } from '@/components/context/AkademikHoverContext';

export const metadata = {
  title: 'Aday Öğrenci - İstanbul Beykent Üniversitesi',
  description:
    'İstanbul Beykent Üniversitesi aday öğrenci bilgileri, başvuru süreçleri ve burs imkanları.',
};

export default function AdayOgrenciPage() {
  return (
    <AkademikHoverProvider>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <DefaultHeader />

        {/* Aday Öğrenci Page Content */}
        <AdayOgrenciPageContent />

        {/* Footer */}
        <FooterSection />
      </div>
    </AkademikHoverProvider>
  );
}
