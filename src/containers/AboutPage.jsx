import React from 'react';
import Header from '../components/Homepage/Header';
import Footer from '../components/Homepage/Footer';
import About from '../components/About/About'; // Adjust path as needed

const AboutPage = () => {
  return (
    <div className="bg-slate-950">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
