import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Diamond, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Clients', to: '/#client' },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'backdrop-blur-2xl bg-slate-900/98 shadow-2xl shadow-indigo-900/30 border-b border-slate-700/50'
          : 'backdrop-blur-xl bg-slate-900/95 border-b border-slate-800/30'
      }`}
    >
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 z-0"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 via-cyan-400/40 to-transparent z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 animate-shimmer"></div>
      </div>

      {/* Header content */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative flex items-center">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-400/50 transition-all duration-300">
              <Diamond className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300 tracking-wider">
              AL MEZOON
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map(({ name, to }) => (
            <HashLink
              key={name}
              smooth
              to={to}
              className="relative px-6 py-3 text-slate-300 font-medium text-sm tracking-wide transition-all duration-300 hover:text-white group rounded-xl"
            >
              <span className="relative z-10">{name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/0 to-slate-700/0 group-hover:from-slate-800/60 group-hover:to-slate-700/60 rounded-xl transition-all duration-300 border border-transparent group-hover:border-slate-600/50"></div>
              <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></div>
            </HashLink>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex items-center space-x-6 px-6 py-3 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 group">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="text-slate-200 font-medium text-sm">+971 6 531 1778</span>
            </div>
            <div className="w-px h-4 bg-slate-600"></div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="text-slate-200 font-medium text-sm">UAE</span>
            </div>
          </div>

          {/* ✅ HashLink for Contact Us */}
          <HashLink
            to="/#contact"
            smooth
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm rounded-2xl hover:from-blue-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40"
          >
            Contact Us
          </HashLink>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-3 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transform hover:scale-105 transition-all duration-300 group"
          >
            {isMobileMenuOpen ? (
              <X className="text-slate-300 w-5 h-5 group-hover:text-white transition-colors duration-300" />
            ) : (
              <Menu className="text-slate-300 w-5 h-5 group-hover:text-white transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden relative border-t border-slate-700/50 z-10">
          <div className="absolute inset-0 bg-slate-900/98 backdrop-blur-2xl"></div>
          <div className="relative px-6 py-6 space-y-3">
            {navLinks.map(({ name, to }, index) => (
              <HashLink
                key={name}
                smooth
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 px-5 text-slate-300 font-medium rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/70 hover:text-white transition-all duration-300"
                style={{ animation: `slideIn 0.4s ease-out ${index * 80}ms both` }}
              >
                {name}
              </HashLink>
            ))}

            <div className="pt-4 border-t border-slate-700/50 space-y-4">
              <div className="flex items-center space-x-3 py-4 px-5 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-slate-200 font-medium">+971 6 531 1778</span>
              </div>
              <div className="flex items-center space-x-3 py-4 px-5 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-200 font-medium">United Arab Emirates</span>
              </div>

              {/* ✅ HashLink for Contact Us in Mobile */}
              <HashLink
                to="/#contact"
                smooth
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-4 px-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
              >
                Contact Us
              </HashLink>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent z-10"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
