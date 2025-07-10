
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Youtube, Instagram, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WebAppModal from './WebAppModal';

interface NavBarProps {
  onJoinWaitlist: () => void;
}

const NavBar = ({ onJoinWaitlist }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWebAppModalOpen, setIsWebAppModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openWebAppModal = () => setIsWebAppModalOpen(true);
  const closeWebAppModal = () => setIsWebAppModalOpen(false);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src="/transparent_logo.png" 
                  alt="Landmaq logo" 
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-800 hover:text-blue-900 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-900 transition-colors">
                Contact
              </Link>
              <div className="flex items-center gap-x-4">
                <a 
                  href="https://web.facebook.com/profile.php?id=61577576081482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Landmaq on Facebook"
                >
                  <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                </a>
                <a 
                  href="https://www.youtube.com/@landmaq_1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Landmaq on YouTube"
                >
                  <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/landmaq_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Landmaq on Instagram"
                >
                  <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
                </a>
                <a 
                  href="https://www.tiktok.com/@landmaq0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Landmaq on TikTok"
                  className="w-6 h-6 bg-black rounded cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center text-xs font-bold text-white"
                >
                  T
                </a>
                <a 
                  href="https://www.threads.com/@landmaq_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Landmaq on Threads"
                  className="w-6 h-6 bg-black rounded cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center text-xs font-bold text-white"
                >
                  @
                </a>
              </div>
              <Button 
                onClick={openWebAppModal}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-2xl flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Explore Our Full App
              </Button>
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
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-800 hover:text-blue-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-800 hover:text-blue-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex items-center gap-x-4 px-3 py-2">
                  <a 
                    href="https://web.facebook.com/profile.php?id=61577576081482" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Landmaq on Facebook"
                  >
                    <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@landmaq_1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Landmaq on YouTube"
                  >
                    <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" />
                  </a>
                  <a 
                    href="https://www.instagram.com/landmaq_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Landmaq on Instagram"
                  >
                    <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@landmaq0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Landmaq on TikTok"
                    className="w-6 h-6 bg-black rounded cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center text-xs font-bold text-white"
                  >
                    T
                  </a>
                  <a 
                    href="https://www.threads.com/@landmaq_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Landmaq on Threads"
                    className="w-6 h-6 bg-black rounded cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center text-xs font-bold text-white"
                  >
                    @
                  </a>
                </div>
                <div className="px-3 py-2 space-y-2">
                  <Button 
                    onClick={() => {
                      openWebAppModal();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-2xl flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-4 h-4" />
                    Explore Our Full App
                  </Button>
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
      
      <WebAppModal isOpen={isWebAppModalOpen} onClose={closeWebAppModal} />
    </>
  );
};

export default NavBar;
