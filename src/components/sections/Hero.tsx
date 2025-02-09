import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageCarousel } from '../ui/ImageCarousel';

export function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden bg-gradient-to-br from-[#003DA5] to-[#002D7A]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8">
              <span className="text-white/90 text-sm font-medium">25 ans d'expertise</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Votre avenir,<br />
              Notre engagement
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              MURCAS FASAS accompagne les agents d'ENEO dans la préparation de leur retraite et la protection de leurs proches depuis 1998.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white font-medium rounded-xl hover:bg-[#E66000] transition-colors duration-300 shadow-lg shadow-[#FF6B00]/25">
                Simuler ma rente
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#003DA5] font-medium rounded-xl hover:bg-gray-50 transition-colors duration-300">
                En savoir plus
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                { value: "3000+", label: "Agents protégés" },
                { value: "25 ans", label: "D'expérience" },
                { value: "100%", label: "Engagement" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}