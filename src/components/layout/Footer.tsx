import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Logo } from "../ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description avec taille augmentée */}
          <div className="space-y-6">
            <Logo
              variant="light"
              className="h-20 sm:h-24 w-auto transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-300">
              Votre partenaire de confiance dans la protection sociale et
              l'accompagnement des travailleurs du secteur de l'énergie.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#8FC03C] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-4">
              {[
                { label: "À propos", href: "/about" },
                { label: "Nos services", href: "/services" },
                { label: "Actualités", href: "/news" },
                { label: "Contact", href: "/contact" },
                { label: "Espace membre", href: "/login" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos services</h3>
            <ul className="space-y-4">
              {[
                "Prestations sociales",
                "Services de santé",
                "Aide au logement",
                "Assistance financière",
                "Fonds de solidarité",
              ].map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#8FC03C] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Rue Example, Douala, Cameroun
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8FC03C] flex-shrink-0" />
                <span className="text-gray-300">+237 233 XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8FC03C] flex-shrink-0" />
                <span className="text-gray-300">contact@murcas-fasas.cm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>© {currentYear} MURCAS FASAS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
