import React from 'react';
import ProductDetailComponent from '../components/ProductDetail/ProductDetail'; // ✅ Rename the import
import Header from '../components/Homepage/Header'; // Assuming you have a Header component
const ProductDetail = () => {
  return (
    <div>
      <Header/>
      <ProductDetailComponent /> {/* ✅ Use the renamed import */}
    </div>
  );
};

export default ProductDetail;
