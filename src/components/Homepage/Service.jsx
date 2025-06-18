import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Zap,
  Layers3,
  HardHat,
  Truck,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Fabrication",
    description:
      "Custom cutting and shaping of stones with high-precision finishes, including kitchen countertops, vanity tops, and wall cladding.",
    icon: <HardHat className="w-12 h-12 text-cyan-400" />, // Fabrication icon
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    name: "Installation",
    description:
      "On-site expert installation of marble, granite, quartz, and porcelain with full project management for perfect finish.",
    icon: <Layers3 className="w-12 h-12 text-indigo-400" />,
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: 3,
    name: "Material Supply",
    description:
      "Premium stones sourced from top global quarries, including marble, granite, quartz, and porcelain in bulk quantities.",
    icon: <Truck className="w-12 h-12 text-blue-400" />,
    color: "from-cyan-500 to-blue-500",
  },
];

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-8 py-3 mb-8">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/60 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col gap-4 text-center items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-700/60 border border-blue-400/30">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  {service.name}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
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