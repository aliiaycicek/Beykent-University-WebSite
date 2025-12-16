import type { ImportantDate } from '../types';

export default function DateTimelineItem({
  date,
  title,
  description,
  active,
}: ImportantDate) {
  return (
    <div className="flex gap-6">
      <div
        className={`${active ? 'bg-[#3D2673]' : 'bg-gray-300'} rounded-2xl px-6 py-4 text-white font-medium text-2xl min-w-[251px] text-center`}
      >
        📅 {date}
      </div>

      <div className="flex-1">
        <div
          className={`w-10 h-10 rounded-full ${active ? 'bg-[#3D2673]' : 'bg-gray-300'} mb-4`}
        />
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-xl">{description}</p>
        {active && <p className="text-[#009EE0] text-lg mt-2">Şu anda Aktif</p>}
      </div>
    </div>
  );
}
