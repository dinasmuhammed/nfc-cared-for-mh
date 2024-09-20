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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ContactInfo />
        <AboutMe />
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
