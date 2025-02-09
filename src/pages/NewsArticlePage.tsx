import React, { useState } from 'react';
import { Calendar, Share2, Facebook, Twitter, Linkedin, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

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

export function NewsArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const article = ALL_NEWS.find(article => article.id === id);

  if (!article) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <button 
            onClick={() => navigate('/news')}
            className="inline-flex items-center text-[#003DA5] hover:text-[#002D7A]"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux actualités
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === article.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? article.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-20">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#002D7A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/news')}
            className="inline-flex items-center text-white mb-8 hover:text-[#8FC03C] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux actualités
          </button>

          <div className="flex items-center space-x-4 text-white/80 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <span className="px-3 py-1 bg-[#8FC03C] rounded-full text-white text-sm">
              {article.category}
            </span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl">
            {article.description}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Carrousel d'images */}
          <div className="relative">
            <img 
              src={article.images[currentImageIndex]}
              alt={`${article.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-[500px] object-cover"
            />
            
            {article.images.length > 1 && (
              <>
                <button 
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {article.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white w-4' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          <div className="p-12">
            {/* Contenu de l'article... */}
            <div className="prose prose-lg max-w-none">
              <h2>Une rencontre importante pour l'avenir de MURCAS FASAS</h2>
              <p>
                L'Assemblée Générale Annuelle est un moment crucial dans la vie de notre mutuelle. 
                C'est l'occasion pour tous les membres de se réunir, d'échanger et de participer 
                activement aux décisions qui façonneront l'avenir de MURCAS FASAS.
              </p>

              <h3>Au programme de cette année</h3>
              <ul>
                <li>Présentation des résultats financiers 2023</li>
                <li>Bilan des actions menées</li>
                <li>Perspectives et projets pour 2024</li>
                <li>Élection des nouveaux membres du conseil d'administration</li>
              </ul>

              <h3>Informations pratiques</h3>
              <p>
                L'assemblée se tiendra le 15 mars 2024 à partir de 9h dans les locaux de MURCAS FASAS.
                Un cocktail déjeunatoire sera servi à l'issue de la réunion.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h4 className="font-semibold mb-4">Documents à télécharger</h4>
                <div className="space-y-4">
                  <button className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#003DA5] hover:shadow-md transition-all text-left">
                    Rapport annuel 2023 (PDF)
                  </button>
                  <button className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#003DA5] hover:shadow-md transition-all text-left">
                    Ordre du jour (PDF)
                  </button>
                  <button className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#003DA5] hover:shadow-md transition-all text-left">
                    Formulaire de procuration (PDF)
                  </button>
                </div>
              </div>

              <h3>Inscription obligatoire</h3>
              <p>
                Pour des raisons d'organisation, l'inscription est obligatoire. Merci de confirmer 
                votre présence avant le 10 mars 2024.
              </p>

              <div className="mt-8">
                <button className="px-8 py-4 bg-[#003DA5] text-white rounded-xl hover:bg-[#002D7A] transition-all duration-300">
                  Je m'inscris à l'Assemblée Générale
                </button>
              </div>
            </div>

            {/* Partage social */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Share2 className="w-5 h-5" />
                  <span>Partager cet article</span>
                </div>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                    <button 
                      key={index}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-gray-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}