import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Diamond, MapPin } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/95 shadow-2xl shadow-blue-900/20' : 'backdrop-blur-lg bg-slate-900/80'
    }`}>
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 via-slate-900/50 to-indigo-950/50"></div>
      
      {/* Refined Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Header Content */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Professional Logo */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <Diamond className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wide">
                AL MEZOON
              </div>
            </div>
          </div>
        </div>

        {/* Professional Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Clients', href: '#client' }
          ].map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="relative px-6 py-3 text-blue-100 font-medium text-sm tracking-wide transition-all duration-300 hover:text-white group"
            >
              <span className="relative z-10">{name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/20 group-hover:to-cyan-600/20 rounded-lg transition-all duration-300"></div>
              <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/2 transform group-hover:-translate-x-1/2"></div>
            </a>
          ))}
        </nav>

        {/* Contact Information */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
            <Phone className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
            <span className="text-blue-200 font-medium text-sm">+971 6 531 1778</span>
          </div>
          
          <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
            <MapPin className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
            <span className="text-blue-200 font-medium text-sm">UAE</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-3 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-400/40 transform hover:scale-105 transition-all duration-300 group"
          >
            {isMobileMenuOpen ? (
              <X className="text-blue-200 w-5 h-5 group-hover:text-white transition-colors duration-300" />
            ) : (
              <Menu className="text-blue-200 w-5 h-5 group-hover:text-white transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Professional Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden relative border-t border-blue-500/20">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"></div>
          <div className="relative px-6 py-6 space-y-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Clients', href: '#client' }
            ].map(({ name, href }, index) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-blue-200 font-medium rounded-xl bg-slate-800/40 backdrop-blur-sm border border-blue-500/20 hover:bg-slate-700/50 hover:border-blue-400/40 hover:text-white transition-all duration-300"
                style={{ 
                  animation: `slideIn 0.3s ease-out ${index * 50}ms both`,
                }}
              >
                {name}
              </a>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-blue-500/20 space-y-3">
              <div className="flex items-center space-x-3 py-3 px-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-blue-500/20">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 font-medium">+971 6 531 1778</span>
              </div>
              
              <div className="flex items-center space-x-3 py-3 px-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-blue-500/20">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 font-medium">United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>

      {/* Professional Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;