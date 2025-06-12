import React from 'react';
import ProductImage from '../../assets/Images/Product_2.webp';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const ProductIntroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex"
      style={{ backgroundImage: `url(${ProductImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-40" />

      {/* Left Social Icons */}
      <div className="z-10 flex flex-col justify-center items-center pl-6 space-y-6">
        <div className="border-l border-white h-40"></div>
        <FaInstagram className="text-white text-xl hover:scale-110 transition-transform" />
        <FaFacebookF className="text-white text-xl hover:scale-110 transition-transform" />
        <FaYoutube className="text-white text-xl hover:scale-110 transition-transform" />
        <FaLinkedinIn className="text-white text-xl hover:scale-110 transition-transform" />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col justify-center items-start pl-20 pr-10 text-white w-full max-w-7xl mx-auto">
        <h1 className="text-5xl font-semibold mb-4">All Products</h1>
        <p className="max-w-2xl text-lg leading-8">
          It took nature millions of years to create natural stones. We at Glaze will continue to bring them
          from different parts of the world to enhance the aesthetic appeal of your spaces. Uncompromising on
          quality, Glaze will continue to deliver one of Mother Nature’s greatest gifts to mankind.
        </p>
      </div>
    </section>
  );
};

export default ProductIntroSection;
