import React, { useState } from 'react';
import { Users, Building2, Wallet, Calculator, CreditCard, HeartHandshake, Clock, Shield, ArrowRight, Check } from 'lucide-react';
import { Features } from '../components/sections/Features';
import { FAQ } from '../components/sections/FAQ';
import { Modal } from '../components/ui/Modal';

interface ServiceDetails {
  title: string;
  description: string;
  features: string[];
  requirements: string[];
  benefits: string[];
}

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  const serviceDetails: Record<string, ServiceDetails> = {
    "CARTE DE MEMBRE": {
      title: "Carte de Membre MURCAS FASAS",
      description: "Votre passeport pour accéder à l'ensemble de nos services et avantages exclusifs. La carte de membre MURCAS FASAS est votre identifiant unique qui vous permet de bénéficier de tous nos services.",
      features: [
        "Identifiant unique sécurisé",
        "Accès à tous les services MURCAS FASAS",
        "Suivi en ligne de vos prestations",
        "Avantages exclusifs"
      ],
      requirements: [
        "Être employé d'ENEO",
        "Remplir le formulaire d'adhésion",
        "Fournir une photo d'identité",
        "Verser la cotisation initiale"
      ],
      benefits: [
        "Reconnaissance immédiate dans nos agences",
        "Traitement prioritaire de vos demandes",
        "Accès à l'espace membre en ligne",
        "Notifications personnalisées"
      ]
    },
    "RETRAITE COMPLÉMENTAIRE SOUS RÉPARTITION": {
      title: "Retraite Complémentaire sous Répartition",
      description: "Un système solidaire où les cotisations des actifs financent les pensions des retraités, garantissant une retraite stable et prévisible.",
      features: [
        "Calcul transparent des cotisations",
        "Garantie de versement mensuel",
        "Indexation sur l'inflation",
        "Protection du pouvoir d'achat"
      ],
      requirements: [
        "Être membre actif de MURCAS FASAS",
        "Cotiser régulièrement",
        "Avoir un minimum d'années de cotisation",
        "Respecter l'âge légal de départ"
      ],
      benefits: [
        "Pension garantie à vie",
        "Revalorisation annuelle",
        "Réversion au conjoint",
        "Compléments familiaux"
      ]
    },
    "RETRAITE COMPLÉMENTAIRE SOUS CAPITALISATION": {
      title: "Retraite Complémentaire sous Capitalisation",
      description: "Constituez votre propre capital retraite en fonction de vos moyens et objectifs. Un système flexible qui vous permet de maîtriser votre épargne.",
      features: [
        "Compte individuel personnalisé",
        "Choix du montant des versements",
        "Suivi en temps réel",
        "Options de sortie flexibles"
      ],
      requirements: [
        "Être membre de MURCAS FASAS",
        "Définir un plan d'épargne",
        "Versements réguliers",
        "Durée minimum de 5 ans"
      ],
      benefits: [
        "Capital personnel garanti",
        "Rendement optimisé",
        "Fiscalité avantageuse",
        "Transmission aux héritiers"
      ]
    }
  };

  const services = {
    particuliers: [
      {
        title: "CARTE DE MEMBRE",
        icon: Users,
        description: "Accédez à tous nos services avec votre carte de membre personnalisée",
        link: "#"
      },
      {
        title: "RETRAITE COMPLÉMENTAIRE SOUS RÉPARTITION",
        icon: Calculator,
        description: "Assurez votre avenir avec notre système de retraite par répartition",
        link: "#"
      },
      {
        title: "RETRAITE COMPLÉMENTAIRE SOUS CAPITALISATION",
        icon: Wallet,
        description: "Constituez votre capital retraite progressivement",
        link: "#"
      },
      {
        title: "ASSURANCE SANTÉ À LA RETRAITE",
        icon: Shield,
        description: "Protégez votre santé même après la vie active",
        link: "#"
      },
      {
        title: "ACHAT DE TERRAIN",
        icon: Building2,
        description: "Bénéficiez de nos programmes d'acquisition foncière",
        link: "#"
      },
      {
        title: "AIDE AU LOGEMENT",
        icon: HeartHandshake,
        description: "Obtenez un soutien pour votre projet immobilier",
        link: "#"
      },
      {
        title: "AVANCE/CREDIT",
        icon: CreditCard,
        description: "Des solutions de financement adaptées à vos besoins",
        link: "#"
      }
    ],
    entreprises: [
      {
        title: "GARANTIE DE FONDS",
        icon: Shield,
        description: "Sécurisez les fonds de votre entreprise",
        link: "#"
      },
      {
        title: "SÉCURISATION DES EMPLOYÉS",
        icon: Users,
        description: "Protégez vos employés avec nos solutions sur mesure",
        link: "#"
      }
    ]
  };

  const openServiceModal = (serviceTitle: string) => {
    const details = serviceDetails[serviceTitle];
    if (details) {
      setSelectedService(details);
    }
  };

  return (
    <div className="py-20">
      <div className="bg-gradient-to-r from-[#003DA5] to-[#002D7A] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Explore Our <span className="text-[#8FC03C]">POSSIBLE</span></h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos prestations conçues pour votre protection et votre avenir
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#8FC03C]/10 rounded-full mb-6">
            <Users className="w-5 h-5 text-[#8FC03C] mr-2" />
            <span className="text-[#8FC03C] text-sm font-semibold">PARTICULIER (EMPLOYER/RETRAITÉ)</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Services aux Particuliers</h2>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8FC03C] mb-2">6534</div>
              <p className="text-gray-600">Particuliers nous ont déjà rejoint</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.particuliers.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#8FC03C] to-[#7AA832] rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8FC03C] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <button 
                onClick={() => openServiceModal(service.title)}
                className="inline-flex items-center text-[#8FC03C] font-medium group-hover:text-[#7AA832] transition-colors"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-[#003DA5] text-white rounded-xl hover:bg-[#002D7A] transition-all duration-300 transform hover:translate-y-[-2px]">
            NOUS REJOINDRE
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-gray-50 py-32 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#003DA5]/10 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-[#003DA5] mr-2" />
              <span className="text-[#003DA5] text-sm font-semibold">ENTREPRISE</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Services aux Entreprises</h2>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#003DA5] mb-2">4</div>
                <p className="text-gray-600">Entreprises nous ont déjà rejoint</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.entreprises.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#003DA5] to-[#002D7A] rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#003DA5] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <button 
                  onClick={() => openServiceModal(service.title)}
                  className="inline-flex items-center text-[#003DA5] font-medium group-hover:text-[#002D7A] transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-[#003DA5] text-white rounded-xl hover:bg-[#002D7A] transition-all duration-300 transform hover:translate-y-[-2px]">
              NOUS REJOINDRE
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedService.title}
            </h2>
            
            <p className="text-gray-600 mb-8">
              {selectedService.description}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Caractéristiques Principales
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#8FC03C]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#8FC03C]" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Conditions d'Accès
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#003DA5]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#003DA5]" />
                      </div>
                      <span className="text-gray-600">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Avantages
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#FF6B00]" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 bg-[#003DA5] text-white rounded-xl hover:bg-[#002D7A] transition-all duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Features />
      <FAQ />
    </div>
  );
}