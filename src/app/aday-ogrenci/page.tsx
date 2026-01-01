import AdayOgrenciPage from '@/features/aday-ogrenci/AdayOgrenciPage';
import FooterSection from '@/components/features/FooterSection';
// Aday öğrenci sayfası kendi özel header'ını kullanır - GlobalHeader kullanılmaz

export const metadata = {
  title: 'Aday Öğrenci - İstanbul Beykent Üniversitesi',
  description:
    'İstanbul Beykent Üniversitesi aday öğrenci bilgileri, başvuru süreçleri ve burs imkanları.',
};

export default function Page() {
  return (
    <>
      {/* Aday öğrenci sayfası kendi HeroSection içinde kendine özel header'ını kullanır */}
      <AdayOgrenciPage />
      <FooterSection />
    </>
  );
}
