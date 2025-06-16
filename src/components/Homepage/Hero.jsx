import React from 'react';
import {
  FaMapMarkerAlt,
  FaLayerGroup,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaCommentDots,
} from 'react-icons/fa';

const socialIcons = [
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaYoutube, label: 'YouTube' },
  { Icon: FaLinkedinIn, label: 'LinkedIn' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Dynamic Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent transform -rotate-6 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-1 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent transform -rotate-2 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-cyan-400/30 rotate-45 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 border-2 border-indigo-400/25 hexagon animate-float"></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-blue-950/40"></div>

      {/* Left Social Panel */}
      <div className="hidden lg:flex absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-6 p-6 bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-blue-500/30 shadow-2xl">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent"></div>
          {socialIcons.map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-blue-400/30 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              <Icon className="text-xl text-blue-300 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          ))}
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"></div>
        </div>
      </div>

      {/* Right Action Panel */}
      <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-6">
          <a 
            href="#" 
            aria-label="WhatsApp" 
            className="group relative bg-gradient-to-br from-emerald-500/90 to-green-600/90 backdrop-blur-sm p-4 rounded-3xl hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/50 border border-emerald-400/40 hover:rotate-12"
          >
            <FaWhatsapp className="text-white text-2xl relative z-10" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
          <a 
            href="#" 
            aria-label="Chat" 
            className="group relative bg-slate-800/60 backdrop-blur-xl p-4 rounded-3xl hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-blue-400/50 border border-blue-400/40 hover:bg-gradient-to-br hover:from-blue-600/40 hover:to-cyan-600/40"
          >
            <FaCommentDots className="text-blue-300 text-2xl relative z-10 group-hover:text-cyan-300 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-40 pb-24">
        {/* Floating Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl border border-blue-400/30 rounded-full px-6 py-3 shadow-lg">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-300 text-sm font-medium">Premium Natural Stones</span>
        </div>

        {/* Main Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
          <div className="relative inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 drop-shadow-2xl animate-pulse">
              Surface Solutions
            </span>
            <div className="absolute -top-4 -right-8 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
          </div>
          <br />
          <div className="relative inline-block">
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 via-indigo-400 to-cyan-500 drop-shadow-2xl animate-pulse"
              style={{ animationDelay: '0.7s' }}
            >
              Designed by Nature
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
          </div>
        </h1>

        <div className="max-w-4xl mx-auto mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
          <p className="relative text-lg sm:text-xl md:text-2xl text-blue-100 font-medium leading-relaxed p-6 bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-blue-500/20 shadow-xl">
            UAE's largest marble importer bringing you premium natural stones, engineered surfaces, and innovative design solutions for over two decades.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-400/50 hover:scale-105 border border-blue-400/40 overflow-hidden">
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button className="group relative border-2 border-cyan-400/60 text-cyan-300 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-400/20 hover:text-white hover:border-cyan-300/80 transition-all duration-500 shadow-xl hover:shadow-cyan-400/50 hover:scale-105 backdrop-blur-sm overflow-hidden">
            <span className="relative z-10">Get Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
          {[
            {
              value: '20+',
              title: 'Years Experience',
              desc: 'Trusted expertise in natural stone industry',
              icon: <FaClock className="text-3xl text-cyan-400" />,
              gradient: 'from-blue-600/20 to-cyan-600/20',
              border: 'border-blue-400/30'
            },
            {
              value: '3',
              title: 'UAE Locations',
              desc: 'Showrooms in Dubai, Abu Dhabi & Sharjah',
              icon: <FaMapMarkerAlt className="text-3xl text-blue-400" />,
              gradient: 'from-cyan-600/20 to-indigo-600/20',
              border: 'border-cyan-400/30'
            },
            {
              value: '1000+',
              title: 'Stone Varieties',
              desc: 'Premium marble, granite & engineered stones',
              icon: <FaLayerGroup className="text-3xl text-indigo-400" />,
              gradient: 'from-indigo-600/20 to-blue-600/20',
              border: 'border-indigo-400/30'
            },
          ].map((card, index) => (
            <div
              key={card.title}
              className={`group relative bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl text-center border ${card.border} hover:scale-110 transition-all duration-700 shadow-2xl hover:shadow-cyan-300/20 overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Effects */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 flex flex-col items-center mb-6">
                <div className={`w-20 h-20 flex items-center justify-center rounded-3xl bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-sm border-2 ${card.border} shadow-inner hover:shadow-cyan-400/50 hover:scale-110 transition-all duration-500 mb-4`}>
                  {card.icon}
                </div>
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-lg">
                  {card.value}
                </span>
              </div>
              
              <h4 className="relative z-10 text-xl font-bold text-white mb-3 tracking-wide">
                {card.title}
              </h4>
              <p className="relative z-10 text-blue-200 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <span className="text-cyan-300 text-sm mb-2 opacity-80">Scroll Down</span>
          <div className="animate-bounce text-cyan-400 text-3xl opacity-80 hover:opacity-100 transition-opacity duration-300">
            ⬇
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-3 h-3 bg-gradient-to-br from-blue-400/60 to-cyan-400/40 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-48 right-32 w-2 h-2 bg-gradient-to-br from-cyan-300/80 to-blue-400/60 rounded-full animate-pulse shadow-md" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-4 h-4 bg-gradient-to-br from-indigo-400/50 to-blue-500/40 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-72 right-24 w-2 h-2 bg-gradient-to-br from-cyan-400/70 to-blue-500/50 rounded-full animate-pulse shadow-md" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-blue-300/80 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-24 right-1/3 w-3 h-3 bg-cyan-300/60 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-indigo-400/70 rounded-full animate-pulse shadow-md" style={{ animationDelay: '4s' }}></div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
};

export default Hero;