import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Diamond, 
  Layers3, 
  Zap, 
  Crown,
  Star,
  ChevronDown,
  Play,
  Volume2
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Marble",
    description: "Luxurious natural marble with unique veining patterns that tell stories of time",
    premium: true,
    rarity: "Legendary",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    name: "Granite",
    description: "Durable and elegant granite forged by volcanic forces for lasting beauty",
    premium: true,
    rarity: "Epic",
    color: "from-indigo-400 to-blue-400"
  },
  {
    id: 3,
    name: "Quartzite",
    description: "Natural quartzite with exceptional strength and crystalline beauty",
    premium: false,
    rarity: "Rare",
    color: "from-cyan-400 to-teal-400"
  },
  {
    id: 4,
    name: "Onyx",
    description: "Translucent onyx that creates dramatic lighting effects and ethereal ambiance",
    premium: true,
    rarity: "Mythical",
    color: "from-purple-400 to-blue-500"
  },
  {
    id: 5,
    name: "Travertine",
    description: "Classic travertine with natural texture formed by ancient thermal springs",
    premium: false,
    rarity: "Common",
    color: "from-blue-300 to-cyan-400"
  },
  {
    id: 6,
    name: "Limestone",
    description: "Versatile limestone with timeless appeal and sedimentary character",
    premium: false,
    rarity: "Common",
    color: "from-slate-400 to-blue-400"
  },
];

const FloatingParticle = ({ delay, size, left, top }) => (
  <div 
    className={`absolute w-${size} h-${size} bg-blue-400/20 rounded-full blur-sm animate-float`}
    style={{
      left: `${left}%`,
      top: `${top}%`,
      animationDelay: `${delay}s`,
      animationDuration: '6s'
    }}
  />
);

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'Mythical': return 'text-purple-400 border-purple-400/30 bg-purple-500/10';
      case 'Legendary': return 'text-yellow-400 border-yellow-400/30 bg-yellow-500/10';
      case 'Epic': return 'text-blue-400 border-blue-400/30 bg-blue-500/10';
      case 'Rare': return 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
                 radial-gradient(circle at 75% 75%, blue 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle 
          key={i}
          delay={i * 0.5}
          size={Math.random() > 0.5 ? '2' : '3'}
          left={Math.random() * 100}
          top={Math.random() * 100}
        />
      ))}

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line 
            key={i}
            x1={`${i * 15}%`} 
            y1="0%" 
            x2={`${100 - i * 10}%`} 
            y2="100%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-8 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <span className="text-cyan-300 font-semibold tracking-wide">PREMIUM COLLECTION ACTIVE</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-2xl tracking-tight">
              NATURAL STONES
            </span>
            <div className="absolute -top-6 -right-6 animate-bounce">
              <Crown className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
            </div>
          </h2>
          
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <p className="relative text-blue-100 text-xl leading-relaxed p-8 bg-slate-800/60 backdrop-blur-lg rounded-2xl border border-blue-500/40 shadow-2xl">
              <Zap className="inline w-6 h-6 text-yellow-400 mr-2" />
              Sourced from the finest quarries across dimensions, engineered for perfection
            </p>
          </div>
        </div>

        {/* Stats HUD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Active Products", value: "06", icon: Layers3 },
            { label: "Premium Items", value: "04", icon: Star },
            { label: "Quarries", value: "12", icon: Diamond },
            { label: "Quality Score", value: "99", icon: Crown }
          ].map((stat, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/70 backdrop-blur-lg border border-blue-500/30 rounded-xl p-6 text-center group-hover:transform group-hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-1">
                  {stat.value}
                </div>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={item.id}
              className={`group relative transition-all duration-700 hover:z-20 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setSelectedProduct(item.id)}
              onMouseLeave={() => setSelectedProduct(null)}
            >
              {/* Holographic Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 p-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-full h-full bg-slate-900 rounded-3xl"></div>
              </div>
              
              {/* Main Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-lg border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:transform group-hover:scale-105">
                
                {/* Premium Badge */}
                {item.premium && (
                  <div className="absolute top-4 left-4 z-30">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-3 py-1">
                      <Crown className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-300 text-xs font-bold">PREMIUM</span>
                    </div>
                  </div>
                )}

                {/* Rarity Badge */}
                <div className="absolute top-4 right-4 z-30">
                  <div className={`px-3 py-1 rounded-full border text-xs font-bold ${getRarityColor(item.rarity)}`}>
                    {item.rarity}
                  </div>
                </div>

                {/* Image Placeholder with Holographic Effect */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-20`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 mix-blend-multiply"></div>
                  
                  {/* Scanning Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></div>
                  </div>
                  
                  {/* Stone Type Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Diamond className="w-16 h-16 text-blue-400/50 group-hover:text-blue-300 transition-all duration-500 group-hover:scale-125" />
                  </div>

                  {/* Audio Visualizer */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{ 
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                    <Volume2 className="w-4 h-4 text-cyan-400 ml-2" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* HUD Lines */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wide">
                      {item.name.toUpperCase()}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-mono">ONLINE</span>
                    </div>
                  </div>

                  <p className="text-blue-200 leading-relaxed mb-6 group-hover:text-blue-100 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 group/btn relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover/btn:opacity-60 transition-all duration-300"></div>
                      <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 group-hover/btn:transform group-hover/btn:scale-105">
                        <Play className="w-4 h-4" />
                        <span>Explore</span>
                      </div>
                    </button>
                    
                    <button className="group/btn relative p-3 bg-slate-700/50 hover:bg-slate-600/50 border border-blue-500/30 rounded-xl transition-all duration-300 group-hover/btn:border-cyan-400/50">
                      <ChevronDown className="w-5 h-5 text-blue-400 group-hover/btn:text-cyan-300 transition-colors duration-300" />
                    </button>
                  </div>

                  {/* Specs */}
                  <div className="mt-6 pt-6 border-t border-blue-500/20">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-400 font-mono">Origin:</span>
                        <span className="text-blue-200 ml-2">Global</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-mono">Grade:</span>
                        <span className="text-blue-200 ml-2">A+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            <button className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 rounded-2xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-4 group">
              <Sparkles className="w-8 h-8 group-hover:animate-spin transition-transform duration-300" />
              <span className="text-xl">Discover Full Collection</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Product;