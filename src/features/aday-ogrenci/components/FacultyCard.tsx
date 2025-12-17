import Image from 'next/image';
import type { Faculty } from '../types';

export default function FacultyCard({ name, programs, image }: Faculty) {
  return (
    <div className="relative rounded-[20px] overflow-hidden group cursor-pointer w-full aspect-square">
      <Image src={image} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 p-4 sm:p-6 flex flex-col justify-end">
        <h3
          className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2"
          style={{ fontFamily: 'Roboto Slab' }}
        >
          {name}
        </h3>
        <p
          className="text-[#F4C400] text-sm sm:text-base font-medium mb-3 sm:mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          {programs} Program
        </p>
        <button
          className="bg-white text-black rounded-[20px] py-2 sm:py-3 px-4 sm:px-6 font-bold text-xs sm:text-sm w-fit"
          style={{ fontFamily: 'Roboto' }}
        >
          Bölüm Detayına Git →
        </button>
      </div>
    </div>
  );
}
