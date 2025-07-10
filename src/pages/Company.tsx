
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Company = () => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">The Landmaq Company</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Our Origin Story</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Founded by real estate professionals and engineers, Landmaq was born to bring trust into property dealings. 
              Our founders experienced firsthand the challenges of fraud, lack of transparency, and complex processes 
              that plague the African real estate market.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Modern office building"
              className="w-full h-64 object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Our Vision</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              A safe, transparent, and seamless real estate experience for every African. We envision a continent 
              where property transactions are conducted with complete confidence, backed by technology and trust.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  GO
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Great Okoma Ogboi</h3>
                <p className="text-blue-600 font-medium mb-3">CEO</p>
                <p className="text-sm text-gray-600">
                  Leading Landmaq's vision with deep industry expertise and passion for transforming African real estate.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  CS
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Chuks Humphrey Stephen</h3>
                <p className="text-blue-600 font-medium mb-3">CTO</p>
                <p className="text-sm text-gray-600">
                  Architecting secure, scalable technology solutions that power Landmaq's trusted platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Company;
