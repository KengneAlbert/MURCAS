import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import agee from '../assets/images/agee.jpg';
import eneo from '../assets/images/eneo.jpg';
import jeune from '../assets/images/jeune.jpg';
import retraite from '../assets/images/retraite.jpg';

const ALL_NEWS = [
  {
    id: "mutuelle-aux-mutualistes",
    images: [
      agee,
      eneo,
      jeune,
      retraite
    ],
    category: "Événement",
    date: "30 août 2024",
    title: "LA MUTUELLE S'ADRESSE à SES MUTUALISTES",
    description: "Par la voir de son président, le vendredi 30 août 2024 via un interview réalisé sur WhatsApp, la mutuelle a partagé à ses mutualistes la vision, les missions et les[...]",
  },
  {
    id: "parole-aux-actes",
    images: [
      jeune,
      retraite
    ],
    category: "Nouveauté",
    date: "10 Mars 2024",
    title: "DE LA PAROLE AUX ACTES, LA MURCAS TIENT SES PROMESSES.",
    description: "La mutuelle grâce au partenariat établi avec l'entreprise SKY MOTORS, fait une exposition pour le CAR PLAN promis aux mutualiste",
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