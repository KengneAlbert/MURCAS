import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ALL_NEWS = [
  {
    id: "assemblee-generale-2024",
    images: [
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Événement",
    date: "15 Mars 2024",
    title: "Assemblée Générale Annuelle",
    description: "Participez à notre assemblée générale annuelle pour découvrir les résultats et les perspectives de votre mutuelle.",
  },
  {
    id: "nouveau-service-digital",
    images: [
      "https://images.unsplash.com/photo-1579389083395-4507e98b5b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Nouveauté",
    date: "10 Mars 2024",
    title: "Lancement du Nouveau Service Digital",
    description: "Découvrez notre nouvelle plateforme en ligne pour gérer vos prestations et suivre vos demandes en temps réel.",
  }
];

export function NewsPage() {
  const navigate = useNavigate();

  return (
    <div className="py-20">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#002D7A] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Actualités</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles et événements de votre mutuelle
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_NEWS.map((article, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => navigate(`/news/${article.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.images[0]}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {article.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                    +{article.images.length - 1} photos
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <span className="px-3 py-1 bg-[#8FC03C] rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8FC03C] transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {article.description}
                </p>

                <div className="inline-flex items-center text-[#8FC03C] font-medium group-hover:text-[#7AA832] transition-colors">
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}