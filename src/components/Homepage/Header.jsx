import React, { useState } from 'react';
import { Search, Menu, X, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-100 opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-gray-200/30"></div>

      {/* Marble veins */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-400/40 to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-500/30 to-transparent transform skew-x-6 animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300/50 to-transparent transform -skew-x-3 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 via-white to-gray-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 tracking-wider flex items-center">
            <Sparkles className="w-6 h-6 text-amber-500 mr-2 animate-pulse" />
            MARBLE
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <Link to="/" className="relative py-2 px-4 transition-all duration-300 hover:text-slate-900 group">
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-lg opacity-0 group-hover:opacity-80 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>

          <Link to="/about" className="relative py-2 px-4 transition-all duration-300 hover:text-slate-900 group">
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-lg opacity-0 group-hover:opacity-80 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>

          <Link to="/products" className="relative py-2 px-4 transition-all duration-300 hover:text-slate-900 group">
            <span className="relative z-10">Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-lg opacity-0 group-hover:opacity-80 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>

          <Link to="/client" className="relative py-2 px-4 transition-all duration-300 hover:text-slate-900 group">
            <span className="relative z-10">Client</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-lg opacity-0 group-hover:opacity-80 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
            <Phone className="w-4 h-4 text-amber-600 group-hover:animate-bounce" />
            <span className="text-gray-800 font-semibold">800 45293</span>
          </div>
          <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Search className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden -mr-4">
          <button onClick={toggleMenu} className="p-3 bg-gradient-to-br from-gray-200 to-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
            {isMobileMenuOpen ? (
              <X className="text-gray-800 w-6 h-6 transform rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="text-gray-800 w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-98"></div>
          <div className="relative px-6 py-6 space-y-4">
            {[
              { name: 'Home', to: '/' },
              { name: 'About', to: '/about' },
              { name: 'Products', to: '/products' },
              { name: 'Client', to: '/client' },
            ].map(({ name, to }, index) => (
              <Link
                key={name}
                to={to}
                className="block py-3 px-4 text-gray-800 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 py-3 px-4 bg-gradient-to-r from-gray-100 to-white rounded-lg mb-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <span className="text-gray-800 font-semibold">800 45293</span>
              </div>
              <div className="flex justify-center">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full shadow-lg">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </header>
  );
};

export default Header;
