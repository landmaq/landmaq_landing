
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Team = () => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Meet the Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of real estate professionals, engineers, and industry experts 
            are united by a common mission: transforming African real estate through trust and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              GO
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Great Okoma Ogboi</h3>
            <p className="text-blue-600 font-medium mb-3 text-center">CEO</p>
            <p className="text-sm text-gray-600 text-center">
              10+ years as a real estate agent in Nigeria. Passionate about bringing transparency 
              and trust to property transactions across Africa.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              CS
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Chuks Humphrey Stephen</h3>
            <p className="text-blue-600 font-medium mb-3 text-center">CTO</p>
            <p className="text-sm text-gray-600 text-center">
              Engineer & cloud specialist focused on secure infrastructure. Expert in building 
              scalable platforms that handle sensitive financial transactions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600 text-2xl font-bold">
              LA
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Legal Advisor</h3>
            <p className="text-blue-600 font-medium mb-3 text-center">Legal Counsel</p>
            <p className="text-sm text-gray-600 text-center">
              Specialized in real estate law and regulatory compliance across African markets. 
              Ensuring all transactions meet legal standards.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600 text-2xl font-bold">
              MM
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Marketing Manager</h3>
            <p className="text-blue-600 font-medium mb-3 text-center">Growth & Marketing</p>
            <p className="text-sm text-gray-600 text-center">
              Digital marketing expert focused on building awareness and trust in emerging markets. 
              Driving user acquisition and engagement.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600 text-2xl font-bold">
              RA
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Real Estate Advisor</h3>
            <p className="text-blue-600 font-medium mb-3 text-center">Industry Expert</p>
            <p className="text-sm text-gray-600 text-center">
              Veteran real estate professional with deep market knowledge. Provides strategic 
              insights on market trends and verification processes.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              +
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Join Our Team</h3>
            <p className="text-blue-600 font-medium mb-3 text-center">We're Hiring</p>
            <p className="text-sm text-gray-600 text-center">
              Ready to make an impact in African real estate? We're looking for passionate 
              individuals to join our growing team.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Team;
