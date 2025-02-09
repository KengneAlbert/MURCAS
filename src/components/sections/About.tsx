import React from 'react';
import { Users, Building, Briefcase, ArrowRight } from 'lucide-react';
import Image1 from '../../assets/images/agee.jpg';
import Image2 from '../../assets/images/eneo.jpg';

export function About() {
  const stats = [
    {
      icon: Users,
      number: "4357",
      label: "Agents actifs",
      description: "Employés bénéficiant de nos services"
    },
    {
      icon: Users,
      number: "1877",
      label: "Agents Retraités",
      description: "Retraités accompagnés"
    },
    {
      icon: Building,
      number: "4",
      label: "Entreprises",
      description: "Partenaires de confiance"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Cercles décoratifs animés */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8FC03C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#003DA5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#8FC03C]/10 rounded-full mb-6 transform hover:scale-105 transition-all cursor-default">
            <span className="text-[#8FC03C] text-sm font-semibold tracking-wider">DÉCOUVREZ NOTRE HISTOIRE</span>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            MURCAS <span className="text-[#8FC03C]">FASAS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Créée par les travailleurs actifs pour préparer leurs retraites et soutenir leurs familles
            en cas de décès, La mutuelle est le trésor des travailleurs du secteur de l'eau et de
            l'énergie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Gradient de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8FC03C]/10 via-[#003DA5]/10 to-[#8FC03C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8FC03C] to-[#7AA832] rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                
                <div className="flex items-baseline mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-[#8FC03C] to-[#003DA5] bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <div className="w-2 h-2 bg-[#8FC03C] rounded-full ml-4 animate-pulse"></div>
                </div>
                
                <p className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#8FC03C] transition-colors duration-300">
                  {stat.label}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8FC03C] to-[#003DA5] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative grid grid-cols-12 gap-4">
              <div className="col-span-7 transform group-hover:-translate-y-2 transition-transform duration-500">
                <img 
                  src={Image1}
                  alt="Retraités heureux"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="col-span-5 pt-16 transform group-hover:translate-y-2 transition-transform duration-500">
                <img 
                  src={Image2}
                  alt="Infrastructure énergétique"
                  className="w-full h-[300px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Notre Engagement pour{' '}
              <span className="relative">
                <span className="relative z-10 text-[#8FC03C]">Votre Avenir</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#8FC03C]/20 -rotate-2"></span>
              </span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Depuis sa création, MURCAS FASAS s'engage à offrir une protection sociale complète 
              à ses membres. Notre mission est d'assurer un avenir serein aux travailleurs du 
              secteur de l'énergie et de l'eau, tout en garantissant la sécurité financière 
              de leurs proches.
            </p>
            <div className="space-y-6">
              {[
                "Protection sociale complète pour tous les membres",
                "Gestion transparente et efficace des ressources",
                "Accompagnement personnalisé pour la retraite",
                "Soutien aux familles en cas de besoin"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-2 h-2 bg-[#8FC03C] rounded-full group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8FC03C] to-[#7AA832] text-white rounded-xl hover:shadow-lg hover:shadow-[#8FC03C]/25 transition-all duration-300">
              <span className="font-semibold">En savoir plus</span>
              <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}