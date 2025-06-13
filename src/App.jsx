import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Product from './containers/Product';
import ProductDetail from './containers/ProductDetail'; // ✅ Import

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} /> {/* ✅ Added dynamic route */}
      </Routes>
    </>
  );
};

export default App;
