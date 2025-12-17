import Image from 'next/image';
import type { Testimonial } from '../types';

export default function TestimonialCard({ name, image, text }: Testimonial) {
  return (
    <div
      className="bg-white border-2 border-black rounded-[20px] p-4 sm:p-6 flex flex-col"
      style={{ width: '100%', minHeight: '384px' }}
    >
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
        <Image
          src="/icon/adayogrenci/ogrenci.icon.svg"
          alt="Student"
          fill
          className="object-contain"
        />
      </div>
      <p
        className="text-sm sm:text-base leading-relaxed mb-auto"
        style={{ fontFamily: 'Roboto' }}
      >
        {text}
      </p>
      <hr className="border-black my-4 sm:my-6" />
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <p
          className="font-bold text-base sm:text-lg lg:text-xl"
          style={{ fontFamily: 'Roboto Slab' }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
