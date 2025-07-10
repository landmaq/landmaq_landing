
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Mission = () => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Mission</h1>
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
            alt="Mountain landscape representing vision"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Transparency First</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              We aim to eliminate fraudulent listings through a layered verification approach. Every property, 
              every agent, and every transaction is thoroughly vetted to ensure complete transparency and trust 
              in the real estate process.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Empower Users</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether buying, renting, or selling — users are in control, protected by smart technology and 
              secure payments. Our platform puts the power back in the hands of property seekers and owners, 
              with tools that make informed decisions possible.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Drive Growth</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              We're not just building a platform. We're building a movement for verified real estate in Africa. 
              By fostering trust and transparency, we're contributing to the growth of healthy, sustainable 
              property markets across the continent.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Mission;
