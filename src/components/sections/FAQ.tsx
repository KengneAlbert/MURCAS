import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Comment devenir membre de MURCAS FASAS ?",
    answer: "Pour devenir membre, vous devez être un employé d'ENEO. L'adhésion se fait automatiquement lors de votre recrutement, avec une cotisation mensuelle prélevée sur votre salaire."
  },
  {
    question: "Quels sont les avantages de la retraite complémentaire ?",
    answer: "La retraite complémentaire MURCAS FASAS vous permet de maintenir votre niveau de vie après la cessation d'activité. Elle complète la pension de base et s'adapte à vos cotisations tout au long de votre carrière."
  },
  {
    question: "Comment fonctionne le fonds de solidarité ?",
    answer: "Le fonds de solidarité intervient en cas de décès d'un membre pour soutenir financièrement sa famille. Il assure une prise en charge rapide des frais funéraires et un capital décès aux ayants droit."
  },
  {
    question: "Quelles sont les conditions pour obtenir un crédit social ?",
    answer: "Les crédits sociaux sont accessibles après 6 mois d'adhésion. Le montant accordé dépend de votre capacité de remboursement et de votre ancienneté. Les taux sont préférentiels et les délais de traitement rapides."
  },
  {
    question: "Comment suivre l'évolution de mon épargne ?",
    answer: "Vous pouvez suivre votre épargne via votre espace membre en ligne ou en contactant directement nos conseillers. Un relevé détaillé vous est également envoyé chaque trimestre."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8FC03C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#003DA5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#8FC03C]/10 rounded-full mb-6">
            <span className="text-[#8FC03C] text-sm font-semibold">QUESTIONS FRÉQUENTES</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nous répondons à vos <span className="text-[#8FC03C]">questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées par nos membres
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="mb-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-lg font-semibold text-gray-900 text-left group-hover:text-[#8FC03C] transition-colors">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-[#8FC03C] rotate-180' : 'bg-gray-100'
                }`}>
                  {openIndex === index ? (
                    <Minus className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-gray-600'}`} />
                  ) : (
                    <Plus className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-gray-600'}`} />
                  )}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 bg-gray-50 rounded-2xl mt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}