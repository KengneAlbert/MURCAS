import React from 'react';
import { Building2, Wallet, Calculator, CreditCard, HeartHandshake, Clock, Check } from 'lucide-react';

const FEATURES = [
  {
    icon: Building2,
    title: "Requêtes en ligne",
    description: "Soumettez vos requêtes à tout moment via notre plateforme digitale disponible 24/7.",
    benefits: [
      "Suivi en temps réel",
      "Notifications automatiques",
      "Historique des demandes",
      "Support prioritaire"
    ]
  },
  {
    icon: Wallet,
    title: "Épargne & Crédit",
    description: "Accédez à des solutions de crédit flexibles basées sur votre épargne et vos besoins.",
    benefits: [
      "Taux préférentiels",
      "Délai rapide",
      "Montants adaptés",
      "Remboursement flexible"
    ]
  },
  {
    icon: Calculator,
    title: "Simulation Retraite",
    description: "Planifiez votre avenir avec notre calculateur de rente intelligent et personnalisé.",
    benefits: [
      "Calcul instantané",
      "Scénarios multiples",
      "Conseils personnalisés",
      "Ajustements en temps réel"
    ]
  },
  {
    icon: CreditCard,
    title: "Crédits Sociaux",
    description: "Bénéficiez de prêts avantageux pour vos projets personnels et familiaux.",
    benefits: [
      "Sans frais cachés",
      "Études gratuites",
      "Garantie solidaire",
      "Accompagnement dédié"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Fonds de Solidarité",
    description: "Un soutien financier garanti pour vos proches en cas de besoin.",
    benefits: [
      "Versement rapide",
      "Couverture étendue",
      "Assistance administrative",
      "Support familial"
    ]
  },
  {
    icon: Clock,
    title: "Gestion Optimisée",
    description: "Une gestion efficace et transparente de vos prestations et avantages.",
    benefits: [
      "Délais optimisés",
      "Reporting régulier",
      "Tableau de bord",
      "Alertes personnalisées"
    ]
  }
];

export function Features() {
  return (
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Motif de fond animé */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8FC03C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#003DA5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#8FC03C]/10 rounded-full mb-6 transform hover:scale-105 transition-all cursor-default">
            <span className="text-[#8FC03C] text-sm font-semibold tracking-wider">NOS SERVICES</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Des Solutions <span className="text-[#8FC03C]">Complètes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour assurer votre avenir et protéger vos proches,
            spécialement conçue pour les agents d'ENEO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Gradient de fond */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8FC03C]/5 to-[#003DA5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative">
                {/* Icône avec animation */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#8FC03C] to-[#7AA832] rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8FC03C] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Liste des avantages toujours visible */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#8FC03C]/10 flex items-center justify-center group-hover:bg-[#8FC03C]/20 transition-colors">
                        <Check className="h-3 w-3 text-[#8FC03C]" />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}