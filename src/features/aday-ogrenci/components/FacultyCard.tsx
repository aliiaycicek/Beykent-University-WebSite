import Image from 'next/image';
import type { Faculty } from '../types';

export default function FacultyCard({ name, programs, image }: Faculty) {
  return (
    <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
      <Image
        src={image}
        alt={name}
        width={419}
        height={206}
        className="w-full h-52 object-cover"
      />
      <div className="absolute inset-0 bg-black/56 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-white font-medium text-xl mb-2">{name}</h3>
          <p className="text-[#F4C400] text-sm">{programs} Program</p>
        </div>
        <p className="text-white text-lg">Bölüm Detayına Git</p>
      </div>
    </div>
  );
}
