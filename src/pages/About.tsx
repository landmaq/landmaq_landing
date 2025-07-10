
import React from 'react';
import PageLayout from '@/components/PageLayout';

const About = () => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">About Landmaq</h1>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Modern cityscape"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Who We Are</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Landmaq is redefining real estate in Africa through trust, verification, and transparency. 
              We're building the future of property transactions with cutting-edge technology and human expertise.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">What We Do</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              We connect buyers, sellers, renters, and agents with a secure platform backed by verification agents 
              and escrow services. Every transaction is protected by our comprehensive verification process.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Why It Matters</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Fraud and complexity plague real estate in emerging markets. Landmaq solves this with innovative 
              technology and human intelligence, creating a safer marketplace for everyone.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
