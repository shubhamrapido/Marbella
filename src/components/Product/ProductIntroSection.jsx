import React from 'react';
import ProductImage from '../../assets/Images/Product_1.webp';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

const ProductIntroSection = () => {
  return (
    <section
      className="relative w-full h-[100vh] md:h-[85vh] bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${ProductImage})` }}
    >
      {/* Overlays & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/70" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-gray-300/20 transform rotate-12" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-white/15 via-transparent to-gray-200/25 transform -rotate-12" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500" />
      </div>

      {/* Background Lines */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,200 Q300,100 600,200 T1000,250 L1000,0 L0,0 Z" fill="url(#marbleGradient1)" className="animate-pulse" />
          <path d="M0,800 Q400,700 800,800 T1000,850 L1000,600 Q600,700 200,600 T0,650 Z" fill="url(#marbleGradient2)" className="animate-pulse delay-700" />
          <defs>
            <linearGradient id="marbleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#f3f4f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="marbleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f9fafb" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Left Vertical Social Icons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 hidden sm:flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/80 rounded-full" />
        </div>

        <div className="flex flex-col space-y-6">
          {[FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn].map((Icon, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              <Icon className="relative text-white text-2xl cursor-pointer p-3 w-12 h-12 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Responsive Flex Direction */}
      <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap md:items-start md:justify-center lg:justify-between w-full px-6 sm:px-12 lg:px-28 space-y-8 md:space-y-6 lg:space-y-0 md:space-x-4">
        {/* Heading */}
        <div className="relative text-center md:text-left mb-4 md:mb-0 md:w-full lg:w-auto">
          <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-2xl transform -rotate-1 hidden sm:block" />
          <h1 className="relative text-white text-3xl sm:text-4xl md:text-4xl font-bold tracking-wide md:leading-snug">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              All Products
            </span>
            <div className="hidden sm:block absolute -bottom-4 left-8 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
          </h1>
        </div>

        {/* Paragraph */}
        <div className="relative max-w-full md:max-w-3xl text-center md:text-left md:mt-4">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl transform rotate-1 hidden sm:block" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-6 lg:p-8 border border-white/20">
            <p className="text-white text-sm sm:text-base md:text-base lg:text-lg leading-relaxed font-light">
              <span className="text-orange-300 font-semibold">It took nature millions of years</span> to create natural stones.
              We at <span className="text-orange-200 font-semibold">Glaze</span> will continue to bring them from different parts of the world to enhance the aesthetic appeal of your spaces.
              <span className="block mt-2 sm:mt-4 text-gray-200">
                Uncompromising on quality, Glaze will continue to deliver one of Mother Nature's greatest gifts to mankind.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-8 right-6 z-20 hidden md:flex flex-col items-center space-y-4">
        {[{ icon: FaWhatsapp, color: 'green-600', ping: true }, { icon: BsChatDotsFill, color: 'gray-800', ping: false }].map(({ icon: Icon, color, ping }, i) => (
          <div key={i} className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-${color}/40 to-${color}/60 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
            <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl hover:shadow-md cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1">
              <Icon className={`text-${color} text-2xl sm:text-3xl`} />
            </div>
            {ping && <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping" />}
          </div>
        ))}
        <div className="w-px h-12 bg-gradient-to-b from-white/60 via-white/30 to-transparent" />
      </div>

      {/* Bottom & Corner Decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-tl from-orange-300/20 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default ProductIntroSection;
