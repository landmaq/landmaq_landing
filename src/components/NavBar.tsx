
import React, { useState } from 'react';
import { Menu, X, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavBarProps {
  onJoinWaitlist: () => void;
}

const NavBar = ({ onJoinWaitlist }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">Landmaq</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-800 hover:text-blue-900 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-900 transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" aria-label="Facebook" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" aria-label="YouTube" />
            </div>
            <Button 
              onClick={onJoinWaitlist}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-2xl"
            >
              Join Our Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-900 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-800 hover:text-blue-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-800 hover:text-blue-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" aria-label="Facebook" />
                <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" aria-label="YouTube" />
              </div>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    onJoinWaitlist();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-2xl"
                >
                  Join Our Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
