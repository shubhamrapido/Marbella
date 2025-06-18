import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: <FaFacebookF />, color: "bg-blue-600", url: "#" },
    { icon: <FaInstagram />, color: "bg-pink-500", url: "#" },
    { icon: <FaWhatsapp />, color: "bg-green-500", url: "#" },
    { icon: <FaYoutube />, color: "bg-red-600", url: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-blue-100 py-10 px-6 lg:px-20 overflow-hidden">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-50 group">
          <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/40 via-cyan-400/40 to-blue-600/40 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
          <button
            onClick={scrollToTop}
            className="relative w-14 h-14 flex items-center justify-center rounded-full bg-slate-800/70 backdrop-blur-lg border border-blue-400/30 text-blue-200 shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={24} className="group-hover:text-cyan-300 transition-colors duration-300" />
          </button>
        </div>
      )}

      {/* Footer Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-blue-500/10 pb-10">
        {/* About */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=100&h=100&q=80"
              alt="Company"
              className="w-20 h-20 rounded-full object-cover border border-cyan-400 shadow-lg"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 text-blue-200">
            Al Mezoon Marbles & Granites Ind. LLC<br />
            Trusted since 2000 for premium marble, granite, and quartz solutions across the UAE.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-blue-300 text-lg mb-4">SERVICES</h4>
          <ul className="space-y-3 text-sm text-blue-200">
            <li>Fabrication</li>
            <li>Installation</li>
            <li>Supply</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-blue-300 text-lg mb-4">COMPANY</h4>
          <ul className="space-y-3 text-sm text-blue-200">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#clients" className="hover:underline">Clients</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-blue-300 text-lg mb-4">CONTACT</h4>
          <ul className="space-y-5 text-sm text-blue-200">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-300 mt-0.5" />
              <span>
                P.O.Box 60720<br />
                Sajja Industrial Area<br />
                Sharjah, UAE
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-300" />
              <a href="tel:+97165311778" className="hover:underline">+971 6 531 1778</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-300" />
              <a href="mailto:info@almezoon-uae.com" className="hover:underline">info@almezoon-uae.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-10 text-center">
        <h4 className="text-sm font-semibold tracking-wider text-white mb-4">FOLLOW US</h4>
        <div className="flex justify-center gap-4">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={`w-9 h-9 flex items-center justify-center rounded-full ${social.color} text-white hover:scale-110 hover:opacity-90 transition-all duration-300`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pt-6 text-center text-sm text-blue-400">
        © 2025 Al Mezoon Marbles & Granites Ind. LLC. All rights reserved.
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
