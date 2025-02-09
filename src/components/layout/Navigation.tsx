import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "Actualités" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } hover:text-[#003DA5] ${
                  location.pathname === link.href ? 'text-[#003DA5]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-[#003DA5] text-white px-6 py-2.5 rounded-lg hover:bg-[#002D7A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#003DA5]/20">
              Espace membre
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu avec largeur contrôlée */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[64px] bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 transform w-full overflow-hidden ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="px-3 sm:px-6 py-6 space-y-6 w-full">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block py-2 text-gray-900 hover:text-[#003DA5] ${
                location.pathname === link.href ? 'text-[#003DA5]' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-[#003DA5] text-white px-6 py-3 rounded-lg hover:bg-[#002D7A] transition-all duration-300 shadow-lg hover:shadow-[#003DA5]/20">
            Espace membre
          </button>
        </div>
      </div>
    </nav>
  );
}