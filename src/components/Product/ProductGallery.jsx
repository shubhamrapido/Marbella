import React from 'react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const ProductGallery = () => {
  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Decorative blurred circles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/30 to-amber-300/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
            <span className="text-gray-500 text-sm font-medium">Home</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            <span className="text-gray-900 text-sm font-semibold">All Products</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Stone Gallery
          </h2>
          <p className="text-xl text-gray-600 font-light mt-6 max-w-3xl mx-auto">
            Explore Our Natural & Engineered Surfaces
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-gray-50/50 to-white/70 backdrop-blur-sm rounded-3xl rotate-1 group-hover:rotate-0 transition duration-500"></div>

              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 border border-white/30 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-orange-600 text-white text-xs px-4 py-1 rounded-full font-semibold shadow backdrop-blur-sm">
                    Premium
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 z-10 flex items-end justify-center pb-6">
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition">
                      View Details
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center relative">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-orange-600 transition">
                    {product.name}
                  </h3>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <div className="w-8 h-px bg-orange-400"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-8 h-px bg-orange-400"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
