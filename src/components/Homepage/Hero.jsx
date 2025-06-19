import React, { useState, useEffect } from 'react';
import {
  FaMapMarkerAlt,
  FaLayerGroup,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

// Import carousel images
import HomepageTop1 from '../../assets/Images/homepage_top_1.webp';
import HomepageTop2 from '../../assets/Images/homepage_top_2.webp';
import HomepageTop3 from '../../assets/Images/homepage_top_3.webp';
import HomepageTop4 from '../../assets/Images/homepage_top_4.webp';

const socialIcons = [
  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/almezoon_2000/' },
  { Icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100063595631081' },
  { Icon: FaYoutube, label: 'YouTube', href: '#' },
];

// Carousel images array
const carouselImages = [
  {
    src: HomepageTop1,
    title: "Premium Stone Craftsmanship",
    description: "Luxury marble installations for elite projects"
  },
  {
    src: HomepageTop2,
    title: "Expert Fabrication",
    description: "State-of-the-art manufacturing facility"
  },
  {
    src: HomepageTop3,
    title: "Professional Installation",
    description: "Precision fitting by skilled craftsmen"
  },
  {
    src: HomepageTop4,
    title: "Quality Assurance",
    description: "25+ years of excellence in UAE"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* 🎠 Background Carousel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Even lighter gradient overlay for maximum image visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-blue-950/30 to-indigo-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/25" />
          </div>
        ))}
      </div>

      {/* 🔳 Visible Grid Overlay */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* 🎯 Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      
      {/* 💡 Light Beams */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent rotate-12 animate-pulse" />
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent -rotate-6 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* 📱 Social Icons */}
      <div className="hidden lg:flex absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-6 p-6 bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-blue-500/30 shadow-2xl">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />
          {socialIcons.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-blue-400/30 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              <Icon className="text-xl text-blue-300 group-hover:text-cyan-300 transition-all duration-300" />
            </a>
          ))}
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent" />
        </div>
      </div>

      {/* 💬 WhatsApp Floating Button */}
      <div className="hidden lg:flex absolute right-8 bottom-32 z-20">
        <a
          href="#"
          aria-label="WhatsApp"
          className="group relative bg-gradient-to-br from-emerald-500/90 to-green-600/90 backdrop-blur-sm p-4 rounded-3xl hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/50 border border-emerald-400/40 hover:rotate-12"
        >
          <FaWhatsapp className="text-white text-2xl relative z-10" />
        </a>
      </div>

      {/* 🧱 Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-40 pb-24">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-xl border border-blue-400/30 rounded-full px-6 py-3 shadow-lg">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-300 text-sm font-medium">Since 2000 – UAE's Trusted Marble Experts</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-10">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 drop-shadow-2xl animate-gradient-slow">
            Stone That Tells a Story
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 drop-shadow-2xl animate-gradient-slow">
            Crafted by Nature. Perfected by Us.
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-2xl blur-xl" />
          <p className="relative text-lg sm:text-xl md:text-2xl text-blue-100 font-medium leading-relaxed p-6 bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-blue-500/20 shadow-xl">
            Al Mezoon Marbles & Granites Industries LLC is a leading UAE-based supplier, fabricator, and installer of marble, granite, quartz, and porcelain. Trusted for over 25 years to deliver timeless stone craftsmanship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
          {[
            {
              value: '25+',
              title: 'Years Experience',
              desc: 'Trusted expertise in the natural stone industry',
              icon: <FaClock className="text-3xl text-cyan-400" />,
              gradient: 'from-blue-600/20 to-cyan-600/20',
              border: 'border-blue-400/30',
            },
            {
              value: '5000+',
              title: 'Kitchens / Year',
              desc: 'Precision crafted with natural elegance',
              icon: <FaLayerGroup className="text-3xl text-indigo-400" />,
              gradient: 'from-indigo-600/20 to-blue-600/20',
              border: 'border-indigo-400/30',
            },
            {
              value: 'Sharjah',
              title: 'Factory Location',
              desc: 'Al Sajja Industrial Area, UAE',
              icon: <FaMapMarkerAlt className="text-3xl text-blue-400" />,
              gradient: 'from-cyan-600/20 to-indigo-600/20',
              border: 'border-cyan-400/30',
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/70 backdrop-blur-xl p-8 rounded-3xl text-center border ${card.border} hover:scale-110 transition-all duration-700 shadow-2xl hover:shadow-cyan-300/20`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative z-10 flex flex-col items-center mb-6">
                <div className={`w-20 h-20 flex items-center justify-center rounded-3xl bg-slate-700/60 border-2 ${card.border} mb-4`}>
                  {card.icon}
                </div>
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">{card.value}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
              <p className="text-blue-200">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ⬇️ Custom Keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
