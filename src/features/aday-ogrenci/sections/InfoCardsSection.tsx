import InfoCard from '../components/InfoCard';

export default function InfoCardsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard type="tanitim" />
          <InfoCard type="indirim" />
          <InfoCard type="mezun" />
          <InfoCard type="yokak" />
        </div>
      </div>
    </section>
  );
}
