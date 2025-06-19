import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import ClientDetail from './containers/Client'; // ✅ Import
import AboutPage from './containers/AboutPage';
import ServicesPage from './containers/ServicesPage';
import ProductsPage from './containers/ProductsPage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/clients/:id" element={<ClientDetail />} />
      </Routes>
    </>
  );
};

export default App;
