
import React from 'react';

const steps = [
  {
    title: "Search Verified Listings",
    description: "Browse properties vetted by trusted verification agents. Every listing goes through our comprehensive verification process to ensure accuracy and legitimacy.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
  },
  {
    title: "Secure Transactions via Escrow",
    description: "Your payment is held securely until the property is verified and all conditions are met. Our escrow service protects both buyers and sellers throughout the transaction.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Connect with Verified Agents",
    description: "Work with pre-screened, licensed agents who have passed our rigorous verification process. Get matched with agents who specialize in your area and property type.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Close with Confidence",
    description: "Complete your transaction knowing every detail has been verified and all parties are protected. Our platform ensures compliance and transparency throughout the entire process.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How Landmaq Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of real estate with our secure, transparent, and efficient platform
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="flex-1 animate-fade-in">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-1 space-y-6 animate-fade-in">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
