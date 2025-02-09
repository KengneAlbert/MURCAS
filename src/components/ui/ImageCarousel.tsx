import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image1 from '../../assets/images/agee.jpg';
import Image2 from '../../assets/images/eneo.jpg';
import Image3 from '../../assets/images/jeune.jpg';
import Image4 from '../../assets/images/retraite.jpg';
import Image5 from '../../assets/images/logo-murcas.png';

const CAROUSEL_IMAGES = [
  {
    src: Image1,
    alt: "Réunion d'équipe ENEO",
  },
  {
    src: Image2,
    alt: "Infrastructure énergétique",
  },
  {
    src: Image3,
    alt: "Techniciens au travail",
  },
  {
    src: Image4,
    alt: "Techniciens au travail",
  },
  {
    src: Image5,
    alt: "Techniciens au travail",
  }
];

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [Autoplay({ delay: 5000 })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="aspect-[4/3]">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay sur toute l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003DA5] via-transparent to-transparent opacity-50"></div>
                {/* Overlay semi-transparent en bas */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#003DA5]/80 backdrop-blur-sm ">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-1">La mutuelle</h2>
                    <p className="text-xl text-white/90">Des agents</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}