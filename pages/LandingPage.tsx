import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Masters } from '../components/Masters';
import { FAQPlaceholder } from '../components/FAQPlaceholder';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';
import { ModalBooking } from '../components/ModalBooking';
import { Preloader } from '../components/Preloader';
import { ModalState } from '../types';

export const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    preselectedService: '',
    preselectedMaster: '',
  });

  const openBooking = (service?: string, master?: string) => {
    setModalState({
      isOpen: true,
      preselectedService: service || '',
      preselectedMaster: master || '',
    });
  };

  const closeBooking = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50 overflow-x-hidden">
          <Header onBook={() => openBooking()} />
          
          <main className="flex-grow">
            <Hero onBook={() => openBooking()} />
            <Benefits />
            <About />
            <Services onBook={(service) => openBooking(service)} />
            <Masters onBook={(service, master) => openBooking(service, master)} />
            <FAQPlaceholder />
            <ContactCTA onBook={() => openBooking()} />
          </main>

          <Footer />
          
          <ModalBooking 
            isOpen={modalState.isOpen} 
            onClose={closeBooking} 
            initialState={modalState}
          />
        </div>
      )}
    </>
  );
};