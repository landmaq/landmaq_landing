
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
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

  const handleSecureSpot = () => {
    window.open('https://forms.gle/ABD13w4rfLRNbCsd8', '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
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
              src="/lovable-uploads/7398eb88-2b48-4a5f-a95f-9341c6f0cc0e.png" 
              alt="Landmaq Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Heading */}
          <h2 
            id="modal-title" 
            className="text-2xl font-bold text-[#1E3A8A] text-center mb-4"
          >
            Be First In Line!
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-sm md:text-base text-center mb-6">
            Early access members get premium properties first and exclusive discounts.
          </p>

          <p className="text-gray-700 font-medium text-center mb-6">
            Join our waitlist today and receive:
          </p>

          {/* Benefits list */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <span className="text-[#10B981] font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
              <div>
                <span className="font-semibold text-gray-800">Exclusive Access</span>
                <span className="text-gray-600"> – Get ahead in the game with insider deals, top-tier resources, and powerful connections</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-[#10B981] font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
              <div>
                <span className="font-semibold text-gray-800">Monetization Opportunities</span>
                <span className="text-gray-600"> – Be part of a marketplace that helps you earn, grow, and succeed in real estate wealth building</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-[#10B981] font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
              <div>
                <span className="font-semibold text-gray-800">Community of Experts</span>
                <span className="text-gray-600"> – Learn, share, and network with real estate moguls, investors, and suppliers who can elevate your journey</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleSecureSpot}
            className="w-full bg-[#10B981] text-white font-medium px-6 py-3 rounded-full shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Secure My Spot →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
