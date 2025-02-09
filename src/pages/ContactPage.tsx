import React from 'react';
import { Contact } from '../components/sections/Contact';

export function ContactPage() {
  return (
    <div className="py-20">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#002D7A] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
}