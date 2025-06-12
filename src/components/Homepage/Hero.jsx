import React from 'react';
import MarbleBg from '../../assets/Images/Marble1.jpg';
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
    <section
      className="relative bg-cover bg-center  sm:min-h-screen  text-white overflow-hidden"
      style={{ backgroundImage: `url(${MarbleBg})` }}
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' ...")`,
        }}
      />

      <div className="absolute inset-0 opacity-12">
        {/* Veining Lines */}
        <div className="absolute top-0 left-1/5 w-0.5 h-full bg-gradient-to-b from-transparent via-white/80 to-transparent transform rotate-15 blur-[0.5px]" />
        <div className="absolute top-0 left-2/5 w-px h-full bg-gradient-to-b from-transparent via-white/60 to-transparent transform rotate-8 blur-[0.5px]" />
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-white/70 to-transparent transform -rotate-12 blur-[0.5px]" />
        <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent transform -rotate-6 blur-[0.5px]" />
        <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transform rotate-2 blur-[0.5px]" />
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-1 blur-[0.5px]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent via-white/4 to-white/8 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Social Left */}
      <div className="hidden lg:flex absolute left-6 top-1/3 z-20 flex-col items-center gap-5">
        <div className="w-px h-20 bg-white/40"></div>
        {socialIcons.map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:border-orange-300/50 hover:text-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/30"
          >
            <Icon className="text-lg group-hover:scale-110 transition-transform duration-200" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        ))}
      </div>

      {/* Floating Right Icons */}
      <div className="hidden lg:flex absolute right-6 top-1/3 z-20 flex-col items-center gap-5">
        <a href="#" aria-label="WhatsApp" className="group relative bg-gradient-to-br from-green-500/90 to-green-600/90 backdrop-blur-sm p-3 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/60 border border-green-400/30">
          <FaWhatsapp className="text-white text-xl relative z-10" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a href="#" aria-label="Chat" className="group relative bg-white/10 backdrop-blur-lg p-3 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-white/50 border border-white/20 hover:bg-white/20 hover:border-orange-300/50">
          <FaCommentDots className="text-white text-xl relative z-10 group-hover:text-orange-300 transition-colors duration-200" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-36 pb-20">
        <h1 className="text-[32px] sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
          <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse drop-shadow-lg">Surface Solutions</span>
          <br />
          <span className="inline-block bg-gradient-to-r from-orange-400 via-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>Designed by Nature</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-6 max-w-3xl text-gray-200 font-medium leading-relaxed drop-shadow-md">
          UAE's largest marble importer bringing you premium natural stones, engineered surfaces, and innovative design solutions for over two decades.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-2xl hover:shadow-orange-400/70 hover:scale-105 border border-orange-400/30 overflow-hidden">
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          <button className="group relative border-2 border-white/60 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-white/20 hover:text-white hover:border-orange-300/60 transition-all duration-300 shadow-xl hover:shadow-white/60 hover:scale-105 backdrop-blur-sm overflow-hidden">
            <span className="relative z-10">Get Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 w-full max-w-6xl px-4">
          {[
            {
              value: '20+',
              title: 'Years Experience',
              desc: 'Trusted expertise in natural stone industry',
              icon: <FaClock className="text-2xl text-orange-500" />,
            },
            {
              value: '3',
              title: 'UAE Locations',
              desc: 'Showrooms in Dubai, Abu Dhabi & Sharjah',
              icon: <FaMapMarkerAlt className="text-2xl text-orange-500" />,
            },
            {
              value: '1000+',
              title: 'Stone Varieties',
              desc: 'Premium marble, granite & engineered stones',
              icon: <FaLayerGroup className="text-2xl text-orange-500" />,
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group relative bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-3xl text-center border border-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-orange-300/30 hover:bg-white/15 hover:border-orange-300/40 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-3xl opacity-8" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10 flex flex-col items-center mb-4 gap-2">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/25 backdrop-blur-sm border-2 border-orange-400/60 shadow-inner hover:shadow-orange-400/70 hover:scale-110 transition-all duration-300 hover:bg-white/35 hover:border-orange-300">
                  {card.icon}
                </div>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">{card.value}</span>
              </div>
              <h4 className="relative z-10 text-lg font-bold text-white mb-1 tracking-wide drop-shadow-md">{card.title}</h4>
              <p className="relative z-10 text-sm text-gray-200 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 flex justify-center w-full">
          <div className="animate-bounce text-white text-2xl opacity-80 hover:opacity-100 transition-opacity duration-300">⬇</div>
        </div>
      </div>

      {/* Decorative Floating Dots */}
      <div className="hidden lg:block absolute top-20 left-20 w-3 h-3 bg-gradient-to-br from-white/40 to-white/20 rounded-full animate-pulse shadow-lg" />
      <div className="hidden lg:block absolute top-40 right-32 w-2 h-2 bg-gradient-to-br from-orange-300/60 to-orange-400/40 rounded-full animate-pulse shadow-md" style={{ animationDelay: '1s' }} />
      <div className="hidden lg:block absolute bottom-32 left-32 w-2 h-2 bg-gradient-to-br from-white/50 to-white/30 rounded-full animate-pulse shadow-md" style={{ animationDelay: '2s' }} />
      <div className="hidden lg:block absolute top-60 right-20 w-4 h-4 bg-gradient-to-br from-orange-400/50 to-orange-500/30 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '3s' }} />
      <div className="hidden lg:block absolute top-32 left-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="hidden lg:block absolute bottom-20 right-1/3 w-2 h-2 bg-orange-300/40 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '2.5s' }} />
    </section>
  );
};

export default Hero;
