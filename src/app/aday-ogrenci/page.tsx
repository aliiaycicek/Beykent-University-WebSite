import AdayOgrenciPage from '@/features/aday-ogrenci/AdayOgrenciPage';
import FooterSection from '@/components/features/FooterSection';
import { GlobalHeader } from '@/components/header';

export const metadata = {
  title: 'Aday Öğrenci - İstanbul Beykent Üniversitesi',
  description:
    'İstanbul Beykent Üniversitesi aday öğrenci bilgileri, başvuru süreçleri ve burs imkanları.',
};

export default function Page() {
  return (
    <>
      <GlobalHeader />
      <AdayOgrenciPage />
      <FooterSection />
    </>
  );
}
