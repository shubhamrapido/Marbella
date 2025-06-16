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
    <footer className="relative py-12 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-900">
      {/* Holographic Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.2)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(6,182,212,0.2)_0%,_transparent_50%)]"></div>
      </div>

      {/* Floating Holographic Orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-blue-400 rounded-full blur-sm animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Section - Copyright */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <p className="relative text-sm text-blue-200 font-medium bg-blue-800/50 backdrop-blur-md px-6 py-3 rounded-lg border border-blue-400/30 shadow-lg">
            © 2024{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-bold">
              MARBELLA Granite & Marble.
            </span>{" "}
            All rights reserved.
          </p>
        </div>

        {/* Middle Links - Holographic Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((link, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <a
                href="#"
                className="relative text-sm text-blue-200 font-medium px-5 py-2 bg-blue-900/40 backdrop-blur-sm border border-blue-400/30 rounded-lg hover:text-cyan-300 transition-all duration-300 group-hover:shadow-cyan-500/20"
              >
                {link}
              </a>
            </div>
          ))}
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center gap-4">
          <span className="text-blue-200 text-sm font-medium">Follow Us:</span>
          <div className="flex gap-2">
            {["f", "in", "ig"].map((label, idx) => (
              <div
                key={idx}
                className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-blue-800/50 border border-blue-400/30 backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-blue-700/70 hover:border-cyan-400/50 hover:scale-110 hover:shadow-cyan-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative text-blue-100 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;