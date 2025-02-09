import React from 'react';
import { Calendar, ArrowRight, Users, Building } from 'lucide-react';

const NEWS_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Événement",
    date: "15 Mars 2024",
    title: "Assemblée Générale Annuelle",
    description: "Participez à notre assemblée générale annuelle pour découvrir les résultats et les perspectives de votre mutuelle.",
    icon: Users
  },
  {
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Nouveauté",
    date: "10 Mars 2024",
    title: "Lancement du Nouveau Service Digital",
    description: "Découvrez notre nouvelle plateforme en ligne pour gérer vos prestations et suivre vos demandes en temps réel.",
    icon: Building
  },
  {
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Information",
    date: "5 Mars 2024",
    title: "Nouveaux Avantages pour les Membres",
    description: "De nouvelles prestations sont désormais disponibles pour tous les membres de la mutuelle.",
    icon: Users
  }
];

export function News() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8FC03C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#003DA5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#8FC03C]/10 rounded-full mb-6">
            <span className="text-[#8FC03C] text-sm font-semibold">ACTUALITÉS</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Les dernières <span className="text-[#8FC03C]">nouvelles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières actualités et événements de votre mutuelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <span className="px-3 py-1 bg-[#8FC03C] rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8FC03C] to-[#7AA832] rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8FC03C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {item.description}
                </p>

                <button className="inline-flex items-center text-[#8FC03C] font-medium group-hover:text-[#7AA832] transition-colors">
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}