
import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import WaitlistModal from './WaitlistModal';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <NavBar onJoinWaitlist={openModal} />
      <main>{children}</main>
      <Footer onJoinWaitlist={openModal} />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PageLayout;
