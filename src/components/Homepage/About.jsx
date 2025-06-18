import React from "react";
import { Sparkles, Award, Crown, Star, Waves, Gem, Mountain } from "lucide-react";

const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-20 w-32 h-32 border border-blue-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 border border-cyan-400 rotate-12 animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-20 w-40 h-40 border border-indigo-400 rounded-full animate-pulse"></div>
        </div>

        {/* Visible Grid Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8">
            <Gem className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Leading Kitchen Countertop Fabricator in UAE Since 2000
            </span>
          </div>

          <h2 className="text-7xl md:text-8xl font-black mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-2xl">
              About
            </span>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-12 h-12 text-cyan-400 animate-spin-slow" />
            </div>
          </h2>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <p className="relative text-blue-100 text-xl leading-relaxed p-8 bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-blue-500/30 shadow-2xl">
              Al Mezoon Marbles & Granites Industries LLC has been a leading kitchen countertop fabricator in the UAE since 2000. 
              We are a team of professionals with deep expertise in marble, granite, quartz, and porcelain — specializing in supply, 
              fabrication, and installation across the region.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Our Story
              </h3>
            </div>

            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-slate-800/70 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 shadow-xl">
                  <div className="absolute top-4 right-4">
                    <Mountain className="w-6 h-6 text-cyan-400 opacity-50" />
                  </div>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Founded in 2000, Al Mezoon began with a small team and has grown into a trusted name with over two decades 
                    of experience. Today, we’re known for premium-quality stones and exceptional craftsmanship across the UAE.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-slate-800/70 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 shadow-xl">
                  <div className="absolute top-4 right-4">
                    <Waves className="w-6 h-6 text-blue-400 opacity-50" />
                  </div>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Our state-of-the-art 1800 sqm facility and 800 sqm warehouse allow us to produce 2500+ kitchens annually, 
                    meeting every client's unique style and needs through precision fabrication and flawless installation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-lg border border-blue-400/40 rounded-3xl p-8 text-center group-hover:transform group-hover:scale-110 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-2">20+</div>
                  <p className="text-blue-200 font-medium">Years of Excellence</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-lg border border-cyan-400/40 rounded-3xl p-8 text-center group-hover:transform group-hover:scale-110 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-2">2500+</div>
                  <p className="text-blue-200 font-medium">Kitchens Annually</p>
                </div>
              </div>
            </div>

            <div className="relative inline-block group mt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <button className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 group">
                <span className="text-lg">Explore Our Journey</span>
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              </button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {images.map((src, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-700">
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-gradient-to-r from-blue-600 to-cyan-600">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" className="fill-blue-600/30"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;