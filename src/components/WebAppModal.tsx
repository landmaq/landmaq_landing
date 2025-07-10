
import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface WebAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebAppModal = ({ isOpen, onClose }: WebAppModalProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContinueToApp = () => {
    window.open('https://app.landmaq.com.ng/', '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="web-app-modal-title"
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal content */}
        <div className="p-8 pt-12">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/transparent_logo.png" 
              alt="Landmaq Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Heading */}
          <h2 
            id="web-app-modal-title" 
            className="text-2xl font-bold text-[#1E3A8A] text-center mb-4"
          >
            Landmaq Web App is Now Live!
          </h2>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <p className="text-gray-700 text-center leading-relaxed">
              You're about to explore the full Landmaq platform — where buyers, sellers, and agents interact on verified, secure listings.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Please note:</strong> This is an early-stage version still under development. We're actively adding new features and refining the experience.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleContinueToApp}
            className="w-full bg-[#1E3A8A] text-white font-medium px-6 py-3 rounded-full shadow hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Continue to App
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebAppModal;
