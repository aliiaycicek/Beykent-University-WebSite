import HeroSection from './sections/HeroSection';
import ProgramSearchSection from './sections/ProgramSearchSection';
import FacultiesSection from './sections/FacultiesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CampusLifeSection from './sections/CampusLifeSection';
import HospitalsSection from './sections/HospitalsSection';
import ImportantDatesSection from './sections/ImportantDatesSection';
import FAQSection from './sections/FAQSection';
import ContactFormSection from './sections/ContactFormSection';

export default function AdayOgrenciPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <HeroSection />
      <ProgramSearchSection />
      <FacultiesSection />
      <TestimonialsSection />
      <CampusLifeSection />
      <HospitalsSection />
      <ImportantDatesSection />
      <FAQSection />
      <ContactFormSection />
    </div>
  );
}
