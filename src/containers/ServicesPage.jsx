import React from 'react';
import Header from '../components/Homepage/Header';
import Footer from '../components/Homepage/Footer';
import Services from '../components/Services/Services'; // Adjust path if needed

const ServicesPage = () => {
  return (
    <div className="bg-slate-950">
      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
