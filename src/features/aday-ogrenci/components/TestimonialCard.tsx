import Image from 'next/image';
import type { Testimonial } from '../types';

export default function TestimonialCard({ name, image, text }: Testimonial) {
  return (
    <div className="bg-white border border-black rounded-2xl p-6">
      <div className="relative w-16 h-16 bg-[#009EE0] rounded-full mb-4 flex items-center justify-center text-3xl">
        💬
      </div>
      <p className="text-sm leading-relaxed mb-6">{text}</p>
      <hr className="border-black mb-4" />
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={98}
          height={98}
          className="w-24 h-24 rounded-full object-cover"
        />
        <p className="font-bold text-lg">{name}</p>
      </div>
    </div>
  );
}
