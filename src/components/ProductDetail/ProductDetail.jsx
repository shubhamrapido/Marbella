import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Award, Star } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Effect for handling mouse movement and initial load animation
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Effect to scroll to the top of the page after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Delay of 100ms to ensure DOM is rendered and animation starts

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []); // Empty dependency array ensures this runs only on mount

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="text-center p-6 sm:p-8 md:p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4">💎</div>
          <div className="text-lg sm:text-xl md:text-2xl text-red-600 font-light">Product not found</div>
        </div>
      </div>
    );
  }

  const images = [
    product.image,
    product.image, // Placeholder for future images
    product.image,
  ];

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen relative overflow-auto">
      {/* Animated marble background */}
      <div
        className="fixed inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(255,255,255,0.8) 0%, transparent 50%),
            linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: '100% 100%, 100% 100%, 40px 40px',
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-white to-orange-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content with proper padding to offset fixed header */}
      <div
        className={`relative z-10 pt-12 sm:pt-14 md:pt-16 transition-all duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 sm:translate-y-6 md:translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 -mb-24 sm:-mb-36 md:-mb-48">
          {/* Breadcrumb with enhanced glass effect */}
          <nav className="text-gray-600 text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 flex flex-wrap items-center space-x-2 backdrop-blur-md bg-white/30 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-fit border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Link
              to="/"
              className="hover:text-orange-600 cursor-pointer transition-all duration-300 hover:scale-105 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-orange-400" />
            <Link
              to="/products"
              className="hover:text-orange-600 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              All Products
            </Link>
            <ChevronRight className="w-3 h-3 text-orange-400" />
            <span className="hover:text-orange-600 cursor-pointer transition-all duration-300 hover:scale-105">
              {product.type}
            </span>
            <ChevronRight className="w-3 h-3 text-orange-400" />
            <span className="text-orange-600 font-medium flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {product.name}
            </span>
          </nav>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Image Section with enhanced marble frame effect */}
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 scale-110 animate-pulse"></div>

              {/* Main container */}
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/60 backdrop-blur-sm group-hover:shadow-3xl transition-all duration-500">
                {/* Main image container */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-6 relative group-hover:scale-[1.02] transition-all duration-500 shadow-xl">
                  <img
                    src={images[activeImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5"></div>

                  {/* Premium badge */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold flex items-center gap-1 sm:gap-2 shadow-xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300">
                    <Award className="w-3 sm:w-4 h-3 sm:h-4" />
                    Premium Natural Stone
                  </div>

                  {/* Image counter */}
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    {activeImageIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Enhanced thumbnails */}
                <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative w-16 sm:w-20 md:w-24 h-12 sm:h-14 md:h-18 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                        activeImageIndex === index
                          ? 'ring-4 ring-orange-400 shadow-2xl scale-110 -translate-y-1'
                          : 'hover:shadow-xl ring-2 ring-transparent hover:ring-orange-200'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
                      {activeImageIndex === index && (
                        <div className="absolute inset-0 bg-orange-400/15 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Enhanced navigation arrows */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-6 sm:left-8 md:left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white/90 to-gray-50/90 hover:from-orange-50 hover:to-orange-100 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-x-1 border border-white/60 backdrop-blur-sm group/btn"
                >
                  <ChevronLeft className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-700 group-hover/btn:text-orange-600 transition-colors" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-6 sm:right-8 md:right-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white/90 to-gray-50/90 hover:from-orange-50 hover:to-orange-100 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:translate-x-1 border border-white/60 backdrop-blur-sm group/btn"
                >
                  <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-700 group-hover/btn:text-orange-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Enhanced Details Section */}
            <div className="flex flex-col relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/30 rounded-3xl backdrop-blur-sm border border-white/40 shadow-xl"></div>

              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                {/* Product Title with animation */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 sm:mb-8 tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight">
                  {product.name}
                </h1>

                {/* Product details with enhanced styling */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  <div className="flex items-start group hover:bg-white/50 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:shadow-lg">
                    <span className="text-gray-600 font-semibold w-32 sm:w-40 flex items-center gap-2 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      Type :
                    </span>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">{product.type}</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/50 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:shadow-lg">
                    <span className="text-gray-600 font-semibold w-32 sm:w-40 flex items-center gap-2 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      Available Sizes :
                    </span>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">2cm / 3cm Thick Polished Slabs</span>
                  </div>
                </div>

                {/* Enhanced CTA button */}
                <button className="group relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 hover:scale-105 mb-6 sm:mb-8 w-fit overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-2 sm:gap-3">
                    <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform duration-300" />
                    ENQUIRE ABOUT THIS PRODUCT
                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                {/* Enhanced disclaimer */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 sm:p-6 shadow-lg">
                  <p className="text-amber-800 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[10px] sm:text-xs font-bold">!</span>
                    </div>
                    This is a representative sample of natural product, doesn't guarantee to match fully with final product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Description Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 relative">
            <div className="bg-gradient-to-r from-white/60 to-gray-50/40 rounded-3xl backdrop-blur-sm border border-white/40 shadow-xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                Description
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-light tracking-wide">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;