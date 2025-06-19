import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

// Import background image
import Quartzite from '../../assets/Images/quartzite.jpg';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { icon: <FaFacebookF />, color: "from-blue-600 to-blue-700", url: "#" },
    { icon: <FaInstagram />, color: "from-pink-500 to-purple-600", url: "#" },
    { icon: <FaWhatsapp />, color: "from-green-500 to-green-600", url: "#" },
    { icon: <FaYoutube />, color: "from-red-600 to-red-700", url: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white px-6 py-10 overflow-hidden">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Quartzite}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-slate-900/30 to-gray-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/25" />
      </div>

      {/* Hexagon Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-1">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
              <polygon points="60,2 120,32 120,72 60,102 0,72 0,32" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-white" />
        </svg>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* About */}
        <div className="space-y-4 text-center md:text-left">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Company"
            className="w-16 h-16 mx-auto md:mx-0 rounded-full object-cover border-2 border-white/20 shadow"
          />
          <h2 className="text-xl font-bold text-white">Al Mezoon Marbles & Granites Ind. LLC</h2>
          <p className="text-gray-300 text-sm">
            Trusted since 2000 for premium marble, granite, and quartz solutions across the UAE.
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className={`w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br ${social.color} text-white hover:scale-110 transition`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links & Contact */}
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Fabrication</li>
              <li className="hover:text-white cursor-pointer">Installation</li>
              <li className="hover:text-white cursor-pointer">Supply</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <HashLink smooth to="/#home" className="hover:text-white">Home</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#about" className="hover:text-white">About</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#services" className="hover:text-white">Services</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#client" className="hover:text-white">Clients</HashLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2">
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-400 mt-0.5" />
                <span>P.O.Box 60720, Sajja Industrial Area, Sharjah, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+97165311778" className="hover:text-white">+971 6 531 1778</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@almezoon-uae.com" className="hover:text-white">info@almezoon-uae.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
        © 2025 <span className="text-white font-medium">Al Mezoon Marbles & Granites Ind. LLC</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
