
import React from 'react';
import { Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onJoinWaitlist: () => void;
}

const Footer = ({ onJoinWaitlist }: FooterProps) => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>📧 hello@landmaq.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Real Estate Ave<br />San Francisco, CA 94105</p>
            </div>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <div className="space-y-3">
              <a href="#company" className="block text-gray-300 hover:text-white transition-colors">
                Company
              </a>
              <a href="#mission" className="block text-gray-300 hover:text-white transition-colors">
                Mission
              </a>
              <a href="#team" className="block text-gray-300 hover:text-white transition-colors">
                Team
              </a>
              <a href="#careers" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </a>
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
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join Now
            </Button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-bold">Landmaq</h2>
              <span className="text-gray-400">|</span>
              <p className="text-gray-400">© 2024 All rights reserved</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Follow us:</span>
              <Facebook 
                className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" 
                aria-label="Facebook" 
              />
              <Youtube 
                className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" 
                aria-label="YouTube" 
              />
              <div className="w-6 h-6 bg-gray-600 rounded cursor-pointer hover:bg-gray-500 transition-colors flex items-center justify-center text-xs font-bold" aria-label="TikTok">
                T
              </div>
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center text-xs font-bold" aria-label="Instagram">
                I
              </div>
              <div className="w-6 h-6 bg-black rounded cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center text-xs font-bold" aria-label="Threads">
                @
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
