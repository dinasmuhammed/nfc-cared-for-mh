import React from 'react';
import Header from '../components/Header';
import ContactInfo from '../components/ContactInfo';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import SocialMedia from '../components/SocialMedia';
import Consultation from '../components/Consultation';
import DigitalBusinessCard from '../components/DigitalBusinessCard';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <AboutMe />
        </div>
        <Portfolio />
        <SocialMedia />
        <Consultation />
        <DigitalBusinessCard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
