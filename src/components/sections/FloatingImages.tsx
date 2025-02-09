import React from 'react';

const FLOATING_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=300&h=300",
    alt: "Médecin",
    className: "absolute top-[10%] right-[15%] w-32 h-32"
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=300&h=300",
    alt: "Consultation",
    className: "absolute top-[40%] right-[5%] w-40 h-40"
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300&h=300",
    alt: "Laboratoire",
    className: "absolute bottom-[15%] right-[25%] w-36 h-36"
  },
  {
    src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=300&h=300",
    alt: "Équipement médical",
    className: "absolute top-[20%] left-[10%] w-28 h-28"
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=300&h=300",
    alt: "Soins",
    className: "absolute bottom-[25%] left-[5%] w-32 h-32"
  }
];

export function FloatingImages() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {FLOATING_IMAGES.map((image, index) => (
        <img 
          key={index}
          src={image.src}
          alt={image.alt}
          className={`${image.className} rounded-2xl object-cover shadow-2xl transform hover:rotate-0 transition-transform duration-700 ease-out opacity-60 hover:opacity-100 ${
            index % 2 === 0 ? 'rotate-6' : '-rotate-12'
          }`}
        />
      ))}
    </div>
  );
}