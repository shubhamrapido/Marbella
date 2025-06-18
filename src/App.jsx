import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Product from './containers/Product';
import ProductDetail from './containers/ProductDetail'; // ✅ Import
import ClientDetail from './containers/Client'; // ✅ Import
import AboutPage from './containers/AboutPage';
import ServicesPage from './containers/ServicesPage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/clients/:id" element={<ClientDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} /> {/* ✅ Added dynamic route */}
      </Routes>
    </>
  );
};

export default App;
