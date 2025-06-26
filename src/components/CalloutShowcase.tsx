
import React from 'react';
import { Button } from '@/components/ui/button';

interface CalloutShowcaseProps {
  onJoinWaitlist: () => void;
}

const CalloutShowcase = ({ onJoinWaitlist }: CalloutShowcaseProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Be the first to experience trust in real estate
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Join thousands of buyers, sellers, and agents who are already on our waitlist. 
              Get early access to the platform that's revolutionizing real estate transactions.
            </p>
            <div className="space-y-4">
              <Button 
                onClick={onJoinWaitlist}
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join Our Waitlist Now
              </Button>
              <p className="text-sm text-gray-500">
                No spam, just updates on our launch progress
              </p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Phone mockup container */}
              <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-2xl p-2">
                  <div className="bg-white rounded-xl overflow-hidden">
                    {/* Mock phone screen */}
                    <div className="aspect-[9/16] bg-gradient-to-b from-blue-900 to-blue-800 p-6 flex flex-col justify-center items-center text-white">
                      <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                          <span className="text-2xl font-bold text-blue-900">L</span>
                        </div>
                        <h3 className="text-xl font-bold">Join the Waitlist</h3>
                        <p className="text-sm text-blue-100">
                          Get early access to the future of real estate
                        </p>
                        <div className="space-y-3 w-full">
                          <div className="bg-white bg-opacity-20 rounded-lg h-10"></div>
                          <div className="bg-white bg-opacity-20 rounded-lg h-10"></div>
                          <div className="bg-green-500 rounded-lg h-12 flex items-center justify-center">
                            <span className="font-semibold">Join Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalloutShowcase;
