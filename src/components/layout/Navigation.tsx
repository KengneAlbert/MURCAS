import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Déterminer si nous sommes sur la page d'accueil
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "Actualités" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : isHomePage
          ? "bg-transparent py-4"
          : "bg-[#003DA5] py-4" // Fond bleu pour les autres pages quand non scrollé
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo plus grand */}
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Logo
              variant={isScrolled ? "dark" : "light"}
              className="h-16 sm:h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu avec meilleurs effets hover */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-2 font-medium transition-all duration-300
                  ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#003DA5]"
                      : "text-white hover:text-white/90"
                  }
                  group overflow-hidden rounded-lg
                  ${
                    location.pathname === link.href
                      ? isScrolled
                        ? "text-[#003DA5]"
                        : "text-white"
                      : ""
                  }
                `}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                  ${isScrolled ? "bg-[#003DA5]" : "bg-white"}
                `}
                />
              </Link>
            ))}

            {/* Bouton Espace membre amélioré */}
            <button
              className="bg-[#003DA5] text-white px-6 py-2.5 rounded-xl
              hover:bg-[#002D7A] active:bg-[#001F52]
              transition-all duration-300 transform hover:scale-105
              shadow-lg hover:shadow-[#003DA5]/20
              border border-transparent hover:border-white/10"
            >
              Espace membre
            </button>
          </div>

          {/* Mobile Menu Button avec meilleur contraste */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu avec transitions améliorées */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bg-white/95 backdrop-blur-md 
        shadow-lg transition-all duration-300 transform w-full overflow-hidden
        ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
      `}
      >
        <div className="px-4 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block px-4 py-2 rounded-lg transition-colors duration-300
                ${
                  location.pathname === link.href
                    ? "bg-[#003DA5]/10 text-[#003DA5]"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Espace membre button */}
          <button
            className="w-full mt-4 bg-[#003DA5] text-white px-6 py-3 rounded-xl
            hover:bg-[#002D7A] active:bg-[#001F52]
            transition-all duration-300
            shadow-lg hover:shadow-[#003DA5]/20
            border border-transparent hover:border-white/10"
          >
            Espace membre
          </button>
        </div>
      </div>
    </nav>
  );
}
