import React from "react";
import { ArrowRight } from "lucide-react";
import { ImageCarousel } from "../ui/ImageCarousel";

export function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Fond avec dégradés multiples plus doux */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003DA5]/80 via-[#002D7A]/75 to-[#001F52]/70" />

      {/* Overlay avec multiples couches pour adoucir */}
      <div className="absolute inset-0">
        {/* Couche de base avec motif */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.07]" />

        {/* Couche de dégradé supplémentaire pour adoucir */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Cercles décoratifs avec flou augmenté */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#8FC03C]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#003DA5]/15 rounded-full blur-[100px]" />

        {/* Effet de grain plus subtil */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Lueur d'accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg">
          <div className="absolute inset-0 bg-[#8FC03C]/20 blur-[100px] rounded-full" />
        </div>

        {/* Contenu existant */}
        <div className="lg:flex lg:items-center lg:gap-12 relative">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Votre avenir,
              <br />
              Notre engagement
            </h1>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              MURCAS FASAS accompagne les agents du secteur de l'eau et de
              l'énergie dans la préparation de leur retraite et la protection de
              leurs proches depuis 1998.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#8FC03C] text-white font-medium rounded-xl hover:bg-[#E66000] transition-colors duration-300 shadow-lg shadow-[#FF6B00]/25">
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
                { value: "4", label: "Entreprises" },
                { value: "100%", label: "Engagement" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
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

      {/* Séparateur ondulé en bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8F9FA]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 51% 80%, 0 0)",
        }}
      />
    </section>
  );
}
