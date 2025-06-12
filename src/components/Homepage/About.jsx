import React from "react";
import { Sparkles, Award, Crown, Star } from "lucide-react";
import Img1 from "../../assets/Images/About1.jpg";
import Img2 from "../../assets/Images/About2.jpg";
import Img3 from "../../assets/Images/About3.jpg";
import Img4 from "../../assets/Images/About4.jpg";

const About = () => {
  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Marble Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/20 via-transparent to-gray-200/30"></div>
      
      {/* Animated marble veins */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent transform -rotate-12"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent transform rotate-6"></div>
        <div className="absolute top-1/2 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-400/30 to-transparent transform skew-x-12"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent transform -skew-x-6"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top Heading with luxury styling */}
        <div className="text-center mb-16">
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 mb-6 tracking-wide">
              About
              <Sparkles className="inline-block w-8 h-8 ml-3 text-amber-500 animate-pulse" />
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-2xl blur-sm"></div>
            <p className="relative text-gray-700 text-lg sm:text-xl leading-relaxed font-medium px-6 py-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
              MARBLE has remained a renowned brand in the natural stone industry for over two decades,
              shaping quality and customer satisfaction through premium materials.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 via-white to-gray-300 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <h3 className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-900 flex items-center">
                <Crown className="w-8 h-8 text-amber-600 mr-3" />
                Our Story
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative p-6 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">
                  Through maintaining relationships with the best quarries around the globe,
                  MARBLE has acquired the ability to source premium materials. We found our niche
                  in the competitive Middle East market by proving our product continues to be superior.
                </p>
              </div>
              
              <div className="relative p-6 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">
                  We believe in both the right sourcing and the right pricing. At MARBLE, we consider
                  natural stones to be precious, their beauty to be marvelled at for generations to come.
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="group flex-1 min-w-[160px] relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50 shadow-xl rounded-2xl px-8 py-6 text-center transform group-hover:scale-105 transition-all duration-300">
                  <Award className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 block">20+</span>
                  <p className="text-sm font-semibold text-gray-600 mt-1">Years of Excellence</p>
                </div>
              </div>
              
              <div className="group flex-1 min-w-[160px] relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50 shadow-xl rounded-2xl px-8 py-6 text-center transform group-hover:scale-105 transition-all duration-300">
                  <Star className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 block">UAE's #1</span>
                  <p className="text-sm font-semibold text-gray-600 mt-1">Marble Importer</p>
                </div>
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="relative inline-block group mt-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button className="relative bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Discover More</span>
                <Sparkles className="w-5 h-5 animate-spin" />
              </button>
            </div>
          </div>

          {/* Right - Enhanced Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {[Img1, Img2, Img3, Img4].map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Image with marble overlay effects */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={img}
                      alt={`about-img-${i}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Marble pattern overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent transform rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover overlay with golden glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/30 transition-all duration-500"></div>
                  
                  {/* Luxury corner accent */}
                  <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
    </section>
  );
};

export default About;