import React from 'react';
import { Building, Car, Plane, Home } from 'lucide-react';

export function Subsidiaries() {
  const subsidiaries = [
    {
      icon: Building,
      name: "MURCAS FASAS",
      description: "Protection sociale et retraite complémentaire",
      color: "from-[#003DA5] to-[#002D7A]",
    },
    {
      icon: Home,
      name: "MURCAS IMMO",
      description: "Solutions immobilières et accompagnement dans l'acquisition de biens",
      color: "from-[#8FC03C] to-[#7AA832]",
    },
    {
      icon: Car,
      name: "MURCAS VÉHICULE",
      description: "Facilitation dans l'acquisition de véhicules neufs et d'occasion",
      color: "from-[#FF6B00] to-[#E66000]",
    },
    {
      icon: Plane,
      name: "MURCAS VOYAGE",
      description: "Service de billetterie et organisation de voyages",
      color: "from-[#2563EB] to-[#1E40AF]",
    },
  ];

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8FC03C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#003DA5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#003DA5]/10 rounded-full mb-6">
            <span className="text-[#003DA5] text-sm font-semibold">NOS FILIALES</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Un écosystème complet pour votre{' '}
            <span className="text-[#003DA5]">bien-être</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos différentes filiales spécialisées pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${subsidiary.color} mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <subsidiary.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {subsidiary.name}
              </h3>
              
              <p className="text-gray-600">
                {subsidiary.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-[#003DA5] font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
