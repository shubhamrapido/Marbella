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
    <footer className="relative bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-900 text-blue-100 py-12 px-6 lg:px-20">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-50 group">
          <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/40 via-cyan-400/40 to-blue-600/40 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
          <button
            onClick={scrollToTop}
            className="relative w-14 h-14 flex items-center justify-center rounded-full bg-blue-900/60 backdrop-blur-md border border-blue-400/30 text-blue-200 shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110 hover:bg-blue-800/70 hover:border-cyan-400/50"
          >
            <ArrowUp size={24} className="group-hover:text-cyan-300 transition-colors duration-300" />
          </button>
        </div>
      )}

      {/* Top 4-column grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Logo + About */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=100&h=100&q=80"
              alt="Company"
              className="w-20 h-20 rounded-full object-cover border border-cyan-400 shadow-lg"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs mx-auto">
            Al Mezoon Marbles & Granites Ind. LLC<br />
            Premier fabricator of natural stone surfaces since 2000, serving UAE with excellence in marble, granite & quartz.
          </p>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h4 className="font-semibold text-blue-300 mb-4">SERVICES</h4>
          <ul className="space-y-2 text-sm">
            <li>Kitchen Countertops</li>
            <li>Vanity Tops & Cladding</li>
            <li>Material Supply</li>
            <li>Custom Fabrication</li>
            <li>Installation Services</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h4 className="font-semibold text-blue-300 mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Clients</li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h4 className="font-semibold text-blue-300 mb-4">CONTACT</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-cyan-300 mt-0.5" />
              <span>
                P.O.Box 60720,<br />Sajja Industrial Area,<br />Sharjah, UAE
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-cyan-300" />
              +971 6 531 1778
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-cyan-300" />
              info@almezoon-uae.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 text-center">
        <h4 className="text-white text-sm font-semibold tracking-wider mb-4">
          FOLLOW US
        </h4>
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
      <div className="mt-10 border-t border-blue-500/20 pt-6 text-center text-sm text-blue-400">
        © 2025 Al Mezoon Marbles & Granites Ind. LLC. All rights reserved.
      </div>

      {/* Custom Scroll Button Animations */}
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
