import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center transform hover:shadow-2xl transition-all duration-500">
          <h3 className="text-3xl font-bold mb-6">
            Souscrire à notre <span className="text-[#003DA5]">LETTRE D'INFORMATION</span>
          </h3>
          <p className="text-gray-600 mb-8">
            Restez informé des dernières actualités et événements de MURCAS FASAS
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="flex-1 px-6 py-4 rounded-l-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 transition-all duration-300"
            />
            <button className="px-8 py-4 bg-[#003DA5] text-white rounded-r-xl hover:bg-[#002D7A] transition-all duration-300 transform hover:translate-x-1 flex items-center">
              ENVOYER
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}