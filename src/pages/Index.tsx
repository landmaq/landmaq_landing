
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroCarousel from '@/components/HeroCarousel';
import HowItWorksSection from '@/components/HowItWorksSection';
import CalloutShowcase from '@/components/CalloutShowcase';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <NavBar onJoinWaitlist={openModal} />
      <HeroCarousel onJoinWaitlist={openModal} />
      <HowItWorksSection />
      <CalloutShowcase onJoinWaitlist={openModal} />
      <Footer onJoinWaitlist={openModal} />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
