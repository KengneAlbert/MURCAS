import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#8FC03C] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center space-x-6">
            <a href="mailto:mutuelle.agents@eneo.cm" className="flex items-center space-x-2 text-sm hover:text-white/80 transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">mutuelle.agents@eneo.cm</span>
            </a>
            <a href="tel:+237233429800" className="flex items-center space-x-2 text-sm hover:text-white/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(+237) 694 592 119 / 693 171 253</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white/80 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}