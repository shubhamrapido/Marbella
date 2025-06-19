import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Zap,
  Layers3,
  HardHat,
  Truck,
  ArrowRight
} from "lucide-react";

// Import service showcase images
import Product1 from '../../assets/Images/Product_1.webp';
import Product2 from '../../assets/Images/Product_2.webp';
import Product3 from '../../assets/Images/Product_3.webp';
import Product4 from '../../assets/Images/Product_4.webp';
import Product5 from '../../assets/Images/Product_5.webp';
import Product6 from '../../assets/Images/Product_6.webp';
import About1 from '../../assets/Images/About1.jpg';
import About2 from '../../assets/Images/About2.jpg';
import About3 from '../../assets/Images/About3.jpg';
import Granite from '../../assets/Images/granite.jpg';

const services = [
  {
    id: 1,
    name: "Fabrication",
    description:
      "Custom cutting and shaping of stones with high-precision finishes, including kitchen countertops, vanity tops, and wall cladding.",
    icon: <HardHat className="w-12 h-12 text-cyan-400" />,
    color: "from-blue-500 to-cyan-400",
    images: [Product1, Product2, Product3], // Fabrication showcase
  },
  {
    id: 2,
    name: "Installation",
    description:
      "On-site expert installation of marble, granite, quartz, and porcelain with full project management for perfect finish.",
    icon: <Layers3 className="w-12 h-12 text-indigo-400" />,
    color: "from-indigo-500 to-blue-400",
    images: [About1, About2, About3], // Installation showcase
  },
  {
    id: 3,
    name: "Material Supply",
    description:
      "Premium stones sourced from top global quarries, including marble, granite, quartz, and porcelain in bulk quantities.",
    icon: <Truck className="w-12 h-12 text-blue-400" />,
    color: "from-cyan-500 to-blue-500",
    images: [Product4, Product5, Product6], // Material showcase
  },
];

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Fixed Background Image */}
      <div className="absolute inset-0">
        <img
          src={Granite}
          alt="Services background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-950/30 to-indigo-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/25" />
      </div>

      {/* Visible Grid Overlay */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundColor: "transparent",
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-8 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <span className="text-cyan-300 font-semibold tracking-wide">
              CORE SERVICES
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-2xl">
            WHAT WE DO
          </h2>
        </div>

        {/* Enhanced Services Grid with Images */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Service Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="group relative bg-slate-800/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-700/60 border border-blue-400/30">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                          {service.name}
                        </h3>
                        <div className={`w-16 h-1 bg-gradient-to-r ${service.color} rounded-full mt-2`}></div>
                      </div>
                    </div>
                    <p className="text-blue-200 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Service Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.name === 'Fabrication' && 
                        ['Custom Cutting', 'Precision Finish', 'Quality Control'].map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                            {feature}
                          </span>
                        ))
                      }
                      {service.name === 'Installation' && 
                        ['Expert Team', 'Project Management', 'Perfect Finish'].map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
                            {feature}
                          </span>
                        ))
                      }
                      {service.name === 'Material Supply' && 
                        ['Global Sourcing', 'Premium Quality', 'Bulk Supply'].map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                            {feature}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Images */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="grid grid-cols-2 gap-4">
                  {service.images.slice(0, 3).map((imageSrc, imgIndex) => (
                    <div key={imgIndex} className={`group relative ${imgIndex === 0 ? 'col-span-2' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                      <div className={`relative ${imgIndex === 0 ? 'aspect-[2/1]' : 'aspect-square'} rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl group-hover:shadow-cyan-500/20 transition-all duration-500`}>
                        <img
                          src={imageSrc}
                          alt={`${service.name} showcase ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className={`text-xs font-medium ${
                            service.name === 'Fabrication' ? 'text-cyan-300' :
                            service.name === 'Installation' ? 'text-indigo-300' :
                            'text-blue-300'
                          }`}>
                            {service.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-lg border border-blue-400/40 rounded-3xl p-8 text-center group-hover:scale-110 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <HardHat className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-2">1800</div>
              <p className="text-blue-200 font-medium">SqM Facility</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-lg border border-cyan-400/40 rounded-3xl p-8 text-center group-hover:scale-110 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Layers3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-2">5000+</div>
              <p className="text-blue-200 font-medium">Projects Annually</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-lg border border-blue-400/40 rounded-3xl p-8 text-center group-hover:scale-110 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-2">25+</div>
              <p className="text-blue-200 font-medium">Years Experience</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            <button className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 rounded-2xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-4 group">
              <Sparkles className="w-6 h-6 group-hover:animate-spin transition-transform duration-300" />
              <span className="text-lg">Explore Our Work</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;