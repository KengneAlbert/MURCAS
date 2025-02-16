import React from "react";
import { Contact } from "../components/sections/Contact";

export function ContactPage() {
  return (
    <div className="py-20">
      {/* En-tête avec dégradé amélioré */}
      <div className="relative bg-gradient-to-br from-[#003DA5]/95 via-[#002D7A]/90 to-[#001F52]/85 py-32 mb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#8FC03C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#003DA5]/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
}
