
import React from 'react';
import { Smartphone, Download, Apple } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const Mobile = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Smartphone className="w-24 h-24 text-blue-900" />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  📱
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Coming Soon to iOS & Android
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're working hard to bring the Landmaq experience to your mobile device. 
              Our iOS and Android apps are in development and will be available for download soon.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">What to Expect</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Search on the Go</span>
                    <p className="text-gray-600">Browse verified property listings anywhere, anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Instant Notifications</span>
                    <p className="text-gray-600">Get alerts for new properties matching your criteria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Secure Messaging</span>
                    <p className="text-gray-600">Chat directly with agents and property owners</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Photo Gallery</span>
                    <p className="text-gray-600">View high-quality property images with zoom and gallery features</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 w-64 h-96 flex flex-col items-center justify-center">
                <Smartphone className="w-32 h-32 text-blue-900 mb-4" />
                <p className="text-gray-700 text-center font-medium">Mobile App Preview</p>
                <p className="text-gray-500 text-sm text-center mt-2">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-gray-800 mb-8">Available On</h3>
            <div className="flex justify-center items-center space-x-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-gray-100 rounded-2xl p-6 hover:bg-gray-200 transition-colors">
                  <Apple className="w-12 h-12 text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">iOS App Store</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-gray-100 rounded-2xl p-6 hover:bg-gray-200 transition-colors">
                  <Download className="w-12 h-12 text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">Google Play Store</span>
              </div>
            </div>
          </div>

          {/* Stay Updated Section */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stay Updated</h3>
            <p className="text-blue-800 mb-6 leading-relaxed">
              Stay tuned and follow us on social media for launch updates! 
              Be the first to know when our mobile apps are ready for download.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://www.instagram.com/landmaq_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 transition-colors flex items-center gap-2"
              >
                Follow on Instagram
              </a>
              <a 
                href="https://www.youtube.com/@landmaq_1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-2xl hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Mobile;
