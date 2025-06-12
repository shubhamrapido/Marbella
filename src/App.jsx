import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Required for routing
import Homepage from './containers/Homepage';
import Product from './containers/Product';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
