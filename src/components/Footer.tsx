
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onJoinWaitlist: () => void;
}

const Footer = ({ onJoinWaitlist }: FooterProps) => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>📧 hello@landmaq.com.ng</p>
              <p>📞 +234 903 308 9849</p>
              <p>📍 123 Real Estate Ave<br />Abuja</p>
            </div>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <div className="space-y-3">
              <Link to="/company" className="block text-gray-300 hover:text-white transition-colors">
                Company
              </Link>
              <Link to="/mission" className="block text-gray-300 hover:text-white transition-colors">
                Mission
              </Link>
              <Link to="/team" className="block text-gray-300 hover:text-white transition-colors">
                Team
              </Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Join the Waitlist */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Join the Waitlist</h3>
            <p className="text-gray-300 mb-4">
              Be among the first to experience the future of real estate transactions.
            </p>
            <Button 
              onClick={onJoinWaitlist}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
            >
              Join Now
            </Button>
          </div>

          {/* Get the App */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Get the App</h3>
            <p className="text-gray-300 mb-4">
              Our mobile app is coming soon to iOS and Android. Be the first to know when it's ready!
            </p>
            <Link to="/mobile">
              <Button 
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                📱 Get the App
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img 
                  src="/transparent_logo.png" 
                  alt="Landmaq logo" 
                  className="h-8 w-auto"
                />
              </Link>
              <span className="text-gray-400">|</span>
              <p className="text-gray-400">© 2024 All rights reserved</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Follow us:</span>
              <a 
                href="https://web.facebook.com/profile.php?id=61577576081482" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Landmaq on Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://www.youtube.com/@landmaq_1" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Landmaq on YouTube"
              >
                <Youtube className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/landmaq_/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Landmaq on Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://www.tiktok.com/@landmaq0" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Landmaq on TikTok"
                className="w-6 h-6 bg-gray-600 rounded cursor-pointer hover:bg-gray-500 transition-colors flex items-center justify-center text-xs font-bold"
              >
                T
              </a>
              <a 
                href="https://www.threads.com/@landmaq_" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Landmaq on Threads"
                className="w-6 h-6 bg-black rounded cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center text-xs font-bold"
              >
                @
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
