import React, { useState, useEffect } from "react";
import {
  Users,
  Building,
  Award,
  Target,
  Eye,
  Rocket,
  Heart,
  Shield,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Check,
} from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function AboutPage() {
  const [activeTab, setActiveTab] = useState("vision");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isInView = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  const tabs = [
    { id: "vision", label: "Notre Vision", icon: Eye },
    { id: "objectif", label: "Notre Objectif", icon: Target },
    { id: "mission", label: "Notre Mission", icon: Rocket },
    { id: "valeurs", label: "Nos Valeurs", icon: Heart },
  ];

  const tabContent = {
    vision: {
      title: "Notre Vision",
      description:
        "Nous avons l'ambition de rendre la MUTUELLE plus attractive et efficace tout en veillant sur sa pérennité.",
      points: [
        "Être la référence en matière de protection sociale dans le secteur de l'énergie",
        "Moderniser continuellement nos services pour répondre aux besoins évolutifs",
        "Maintenir les plus hauts standards de qualité dans nos opérations",
        "Assurer une croissance responsable et pérenne de la mutuelle",
      ],
    },
    objectif: {
      title: "Notre Objectif",
      description:
        "Fournir un cadre en vue d’offrir à ses membres les moyens de :",
      points: [
        "Se constituer une retraite complémentaire",
        "Maintenir une gestion transparente et efficace des ressources",
        "Exercer, à titre accessoire toute activité ayant pour objet l’amélioration des conditions de vie et l’épanouissement sociale de ses membres",
        "Mettre en place une solidarité agissante à travers le Fasas",
      ],
    },
    mission: {
      title: "Notre Mission",
      description:
        "Collecter mensuellement les cotisations au travers des retenues sur salaires des agents mutualistes ainsi que les contributions patronales afin de constituer une épargne individuelle.",
      points: [
        "Collecter mensuellement par retenues sur salaire un montant défini, afin de constituer un fonds d’aide et de solidarité",
        "Payer mensuellement les rentes aux retraités",
        "L’amélioration des conditions de vie et l’épanouissement social de ses membres",
        "Assurer la pérennité de la mutuelle",
      ],
    },
    valeurs: {
      title: "Nos Valeurs",
      description: "Des principes forts qui guident nos actions au quotidien.",
      points: [
        "Avoir une attitude intègre",
        "Respecter la Mutuelle, ses collaborateurs et son environnement",
        "Servir au mieux et avec abnégation l’intérêt des mutualistes",
        "Veiller à la confidentialité des informations",
        "Se conformer aux Statuts, au Règlement Intérieur et la charte interne",
        "Avoir une relation saine éthique avec les partenaires",
      ],
    },
  };

  const stats = [
    {
      icon: Users,
      number: "4357",
      label: "Agents actifs",
      description: "Employés bénéficiant de nos services",
    },
    {
      icon: Shield,
      number: "1877",
      label: "Agents Retraités",
      description: "Retraités accompagnés",
    },
    {
      icon: Building,
      number: "4",
      label: "Entreprises",
      description: "Partenaires de confiance",
    },
  ];

  const teamMembers = [
    {
      title: "PCA",
      designation: "Président du Conseil d'Administration",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      title: "Vice-PCA",
      designation: "Vice-Président du Conseil",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      title: "Conseiller",
      designation: "Conseiller Stratégique",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      title: "Responsable administratif",
      designation: "Administration",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      title: "Responsable juridique",
      designation: "Affaires Juridiques",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      title: "Responsable Financier",
      designation: "Finance",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  return (
    <div className="py-20">
      {/* En-tête avec dégradé amélioré */}
      <div className="relative bg-gradient-to-br from-[#003DA5]/95 via-[#002D7A]/90 to-[#001F52]/85 py-32 mb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#8FC03C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#003DA5]/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
              À PROPOS DE
            </h1>
            <h2 className="text-6xl font-bold mb-8 animate-fade-in-up delay-100">
              MURCAS <span className="text-[#8FC03C]">FASAS</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Votre partenaire de confiance depuis plus de 25 ans dans la
              protection sociale et l'accompagnement des travailleurs du secteur
              de l'énergie.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation par onglets avec animation fluide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl transition-all duration-500 transform hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-[#003DA5] text-white shadow-lg shadow-[#003DA5]/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <tab.icon
                className={`w-5 h-5 mr-2 transition-transform duration-300 ${
                  activeTab === tab.id ? "rotate-0" : "-rotate-12"
                }`}
              />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu des onglets avec transition */}
        <div className="bg-white rounded-3xl shadow-xl p-12 transform transition-all duration-500 hover:shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h3>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-100">
              {tabContent[activeTab as keyof typeof tabContent].description}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {tabContent[activeTab as keyof typeof tabContent].points.map(
                (point, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-[#8FC03C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#8FC03C] transition-all duration-500 transform group-hover:rotate-12">
                      <ChevronRight className="w-6 h-6 text-[#8FC03C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-[#8FC03C] transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques avec animation au scroll */}
      <div className="bg-gradient-to-br from-[#003DA5] to-[#002D7A] py-20 mb-20 transform perspective-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2 animate-count-up">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section avec hover effects améliorés */}
      <div className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF6B00]/10 rounded-full mb-6 hover:bg-[#FF6B00]/20 transition-colors duration-300">
              <span className="text-[#8FC03C] text-sm font-semibold">
                NOTRE ÉQUIPE
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="text-[#8FC03C]">STAFF</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe dévouée et expérimentée au service de nos membres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex flex-col items-center text-white">
                        <h3 className="text-2xl font-bold mb-2">
                          {member.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {member.designation}
                        </p>
                        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          {[Facebook, Twitter, Instagram].map((Icon, i) => (
                            <a
                              key={i}
                              href="#"
                              className="p-2 bg-white/20 rounded-full hover:bg-[#8FC03C] transition-all duration-300 transform hover:scale-110"
                              style={{ transitionDelay: `${i * 100}ms` }}
                            >
                              <Icon className="w-5 h-5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section finale avec parallax et animations */}
      <div className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#003DA5] to-[#8FC03C] rounded-3xl blur-lg opacity-20 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Notre équipe"
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in-right">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Rejoignez une mutuelle engagée pour votre avenir
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                MURCAS FASAS continue d'innover et d'améliorer ses services pour
                répondre aux besoins évolutifs de ses membres. Notre engagement
                envers l'excellence et la satisfaction de nos membres reste
                notre priorité absolue.
              </p>
              <button className="group inline-flex items-center px-8 py-4 bg-[#003DA5] text-white rounded-xl hover:bg-[#002D7A] transition-all duration-500 transform hover:translate-x-2 hover:shadow-lg hover:shadow-[#003DA5]/20">
                Devenir membre
                <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelle section Application Mobile */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#002D7A] py-32 relative overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8FC03C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8">
                <Smartphone className="w-5 h-5 text-white mr-2" />
                <span className="text-white/90 text-sm font-medium">
                  Application Mobile
                </span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-8">
                Sur votre <span className="text-[#8FC03C]">mobile</span>
              </h2>

              <p className="text-xl text-gray-200 mb-12">
                Grace à notre application mobile, suivez-nous et réalisez toutes
                vos actions sans avoir besoin de vous déplacer.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "Consultation de votre compte",
                  "Suivi de vos prestations",
                  "Demandes en ligne",
                  "Notifications en temps réel",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 text-white group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#8FC03C]/20 flex items-center justify-center group-hover:bg-[#8FC03C] transition-colors duration-300">
                      <Check className="w-4 h-4 text-[#8FC03C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center px-8 py-4 bg-[#8FC03C] text-white rounded-xl hover:bg-[#7AA832] transition-all duration-300 transform hover:translate-x-2 group">
                TÉLÉCHARGER L'APPLICATION
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Effet de perspective et d'ombre */}
              <div className="relative transform perspective-1000 hover:rotate-y-12 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-[#003DA5] to-[#8FC03C] rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Application mobile MURCAS FASAS"
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Badges flottants */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6">
                <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-8"
                  />
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
