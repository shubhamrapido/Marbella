import React from 'react';
import Header from '../components/Homepage/Header';
import Footer from '../components/Homepage/Footer';
import Products from '../components/Products/Products';

const ProductsPage = () => {
  return (
    <div className="bg-slate-950">
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default ProductsPage; 