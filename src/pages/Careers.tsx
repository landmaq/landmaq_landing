
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Careers at Landmaq</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join a fast-growing PropTech startup transforming the African real estate landscape. 
            Be part of the solution that brings trust and transparency to property transactions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Team collaboration"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mx-auto mb-8"
            />
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Our Culture</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              We're remote-first, agile, and impact-driven. Passionate about solving real problems that affect 
              millions of people across Africa. Our team values innovation, collaboration, and the relentless 
              pursuit of excellence in everything we do.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-8 text-center">Open Roles</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Product Designer</h3>
                    <p className="text-blue-600 font-medium">Remote</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Open</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Design intuitive user experiences for our web and mobile platforms. Help create interfaces 
                  that make real estate transactions simple and trustworthy.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">React Developer</h3>
                    <p className="text-blue-600 font-medium">Contract</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Open</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Build and maintain our frontend applications using React and modern web technologies. 
                  Work on features that directly impact user trust and platform security.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Community Manager</h3>
                    <p className="text-blue-600 font-medium">Lagos-based</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Open</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Build and nurture our community of users, agents, and partners. Drive engagement 
                  and help establish Landmaq as the trusted voice in African real estate.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Ready to Join Us?</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Don't see a perfect match? We're always interested in hearing from talented individuals 
              who share our passion for transforming real estate in Africa.
            </p>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl text-lg"
              onClick={() => window.location.href = 'mailto:careers@landmaq.com.ng'}
            >
              Send CV to careers@landmaq.com.ng
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
