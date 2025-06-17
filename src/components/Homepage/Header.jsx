import React, { useState } from 'react';
import { Search, Menu, X, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-transparent to-blue-600/20 animate-pulse-slow"></div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <line x1="10%" y1="0" x2="90%" y2="100%" stroke="cyan" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" />
          <line x1="90%" y1="0" x2="10%" y2="100%" stroke="blue" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>

      {/* Header Content */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
          <div className="relative text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wider flex items-center">
            <Sparkles className="w-6 h-6 text-cyan-400 mr-2 animate-spin-slow" />
            AL MEZOON
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-blue-200 font-semibold">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Client", path: "/client" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="relative py-2 px-4 transition-all duration-300 hover:text-cyan-300 group"
            >
              <span className="relative z-10">{name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
            </Link>
          ))}
        </nav>

        {/* Contact and Search */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 px-4 py-2 bg-blue-800/50 backdrop-blur-sm rounded-full border border-blue-400/30 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group">
            <Phone className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
            <span className="text-blue-200 font-semibold">+971 6 531 1778</span>
          </div>
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Search className="w-5 h-5 text-blue-100 group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden -mr-4">
          <button
            onClick={toggleMenu}
            className="p-3 bg-blue-800/50 backdrop-blur-sm rounded-full border border-blue-400/30 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="text-blue-200 w-6 h-6 transform rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="text-blue-200 w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 opacity-98"></div>
          <div className="relative px-6 py-6 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Client", path: "/client" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }, index) => (
              <Link
                key={name}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-blue-200 font-semibold rounded-lg bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 hover:bg-blue-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {name}
              </Link>
            ))}

            <div className="pt-4 border-t border-blue-400/30">
              <div className="flex items-center space-x-3 py-3 px-4 bg-blue-800/50 backdrop-blur-sm rounded-lg border border-blue-400/30 mb-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-blue-200 font-semibold">+971 6 531 1778</span>
              </div>
              <div className="flex justify-center">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full shadow-lg hover:shadow-cyan-500/40">
                  <Search className="w-5 h-5 text-blue-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

      {/* Styles */}
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 20;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-dash {
          animation: dash 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
