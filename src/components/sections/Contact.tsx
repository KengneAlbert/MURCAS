import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "(+237) 233 42 98 00",
      subInfo: "Lun-Ven, 8h-16h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@murcas-fasas.cm",
      subInfo: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "Avenue de Gaulle, Douala",
      subInfo: "Cameroun"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant votre retraite et vos avantages.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#003DA5] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-[#003DA5]/10 rounded-xl p-4 group-hover:bg-[#003DA5]/20 transition-colors">
                      <item.icon className="h-6 w-6 text-[#003DA5]" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                    <div className="text-[#003DA5] font-medium mb-1">{item.info}</div>
                    <div className="text-sm text-gray-500">{item.subInfo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#003DA5] to-[#FF6B00] rounded-2xl"></div>
                </div>
              </div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Prénom"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 transition-all outline-none"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Nom"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 transition-all outline-none"
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 transition-all outline-none"
                    ></textarea>
                  </div>
                  <button className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#003DA5] text-white font-medium rounded-lg hover:bg-[#002D7A] transition-colors duration-300">
                    Envoyer le message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}