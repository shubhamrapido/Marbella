import React from 'react';
import Header from '../components/Homepage/Header'; // Adjust path as per your structure
import Hero from '../components/Homepage/Hero';
import About from '../components/Homepage/About';
import Product from '../components/Homepage/Product';
import  Contact  from '../components/Homepage/Contact'; // Adjust path as per your structure
import Footer from '../components/Homepage/Footer';
import Client from '../components/Homepage/Client';


const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <About />
      <Product />
      <Client />
      <Contact/>
      <Footer />
      {/* Other homepage content goes here */}
    </div>
  );
};

export default Homepage;
