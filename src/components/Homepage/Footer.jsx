import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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

  return (
    <footer className="relative py-8 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Marble Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-900/5"></div>
      
      {/* Marble veining */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent transform -rotate-6"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent transform rotate-3"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-300/15 to-transparent transform skew-x-12"></div>
      </div>

      <div className="relative max-w-[1200px] mx-auto flex flex-col sm:flex-wrap lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
        {/* Left Section */}
        <p className="text-sm text-gray-300">
          © 2024 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white font-bold">MARBLE Granite & Marble.</span> All rights reserved.
        </p>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:text-amber-200">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:text-amber-200">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:text-amber-200">Sitemap</a>
        </div>

        {/* Right Section - Social */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="text-gray-300">Follow Us:</span>
          {["f", "in", "ig"].map((label, idx) => (
            <div
              key={idx}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-800 text-white text-xs font-medium hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/25 transform hover:scale-110"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
{showScrollTop && (
  <div className="fixed bottom-6 right-6 z-50 group">
    {/* Glowing background ring */}
    <div className="absolute -inset-1 bg-gradient-to-br from-white/30 via-amber-300/30 to-stone-400/30 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse" />

    <button
      onClick={scrollToTop}
      className="relative w-12 h-12 flex items-center justify-center rounded-full
        bg-gradient-to-br from-white via-slate-200 to-amber-100
        text-stone-700 shadow-xl hover:shadow-amber-400/40
        border border-white/50 backdrop-blur-sm
        transition-all duration-300 transform hover:scale-110"
    >
      <ArrowUp size={22} />
    </button>
  </div>
)}

    </footer>
  );
};

export default Footer;