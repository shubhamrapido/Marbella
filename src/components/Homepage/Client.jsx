import React, { useState } from 'react';
import { Sparkles, Diamond, ChevronRight, Star, Gem, Mountain, Award, ArrowUpRight, Zap, Shield } from 'lucide-react';

// Mock images - replace with your actual imports
const clientImages = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=300&fit=crop'
];

const clients = [
  {
    image: clientImages[0],
    title: "Sintered Stone - Neolith",
    description: "Ultra-compact surfaces with superior performance and unmatched durability",
    category: "Sintered Stone",
    features: ["Heat Resistant", "Scratch Proof", "Stain Resistant"],
    link: "#",
    linkText: "Explore Neolith",
    premium: true
  },
  {
    image: clientImages[1],
    title: "Sintered Stone - XTone",
    description: "Large format sintered stone slabs for contemporary architecture",
    category: "Sintered Stone",
    features: ["Large Format", "Ultra-Thin", "Lightweight"],
    link: "#",
    linkText: "Explore XTone",
    premium: false
  },
  {
    image: clientImages[2],
    title: "Quartz - Caesarstone",
    description: "Premium engineered quartz surfaces with natural beauty",
    category: "Engineered Quartz",
    features: ["Non-Porous", "Antibacterial", "Consistent Pattern"],
    link: "#",
    linkText: "Explore Caesarstone",
    premium: true
  },
  {
    image: clientImages[3],
    title: "Natural Stone - MarbleX",
    description: "Elegance of natural marble for luxury interiors and exteriors",
    category: "Natural Stone",
    features: ["Natural Veining", "Unique Patterns", "Timeless Appeal"],
    link: "#",
    linkText: "Explore MarbleX",
    premium: false
  },
  {
    image: clientImages[4],
    title: "Granite Surfaces - RockMax",
    description: "Durable granite solutions for countertops and architectural facades",
    category: "Natural Granite",
    features: ["High Durability", "Weather Resistant", "Low Maintenance"],
    link: "#",
    linkText: "Explore RockMax",
    premium: false
  },
  {
    image: clientImages[5],
    title: "Quartzite - StoneEra",
    description: "Premium quartzite slabs combining natural beauty with strength",
    category: "Natural Quartzite",
    features: ["Natural Strength", "Heat Resistant", "Unique Aesthetics"],
    link: "#",
    linkText: "Explore StoneEra",
    premium: true
  }
];

const Client = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Sintered Stone', 'Engineered Quartz', 'Natural Stone', 'Natural Granite', 'Natural Quartzite'];

  const filteredClients = activeFilter === 'All' 
    ? clients 
    : clients.filter(client => client.category === activeFilter);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-20 w-32 h-32 border border-blue-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 border border-cyan-400 rotate-12 animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-20 w-40 h-40 border border-indigo-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8">
            <Diamond className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Premium Stone Collection</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-2xl">
              Engineered Stones
            </span>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-10 h-10 text-cyan-400 animate-spin-slow" />
            </div>
          </h2>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <p className="relative text-blue-100 text-lg leading-relaxed p-6 bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-blue-500/30 shadow-2xl">
              Official distributor of premium engineered surfaces, bringing you the finest collection of stones from renowned global manufacturers.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 border backdrop-blur-lg ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-400/50 shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-blue-200 border-blue-500/30 hover:bg-slate-700/50 hover:border-blue-400/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredClients.map((client, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Premium Badge */}
              {client.premium && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3" />
                    Premium
                  </div>
                </div>
              )}

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Main card */}
              <div className="relative bg-slate-800/70 backdrop-blur-lg border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-700 group-hover:transform group-hover:scale-105">
                
                {/* Image section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={client.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {client.category}
                    </div>
                  </div>

                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30">
                    <Gem className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 transition-all duration-700 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                    {client.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100/80 leading-relaxed text-sm">
                    {client.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {client.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1 bg-blue-600/20 backdrop-blur-sm text-cyan-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">
                        <Shield className="w-3 h-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="group/btn w-full flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600 hover:to-cyan-600 text-blue-300 hover:text-white px-6 py-3 rounded-2xl border border-blue-500/30 hover:border-transparent transition-all duration-300 backdrop-blur-sm">
                      <span className="font-medium">{client.linkText}</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
                    </button>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-700"></div>
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { icon: Award, number: "6+", text: "Premium Brands", color: "from-blue-500 to-cyan-500" },
            { icon: Zap, number: "50+", text: "Surface Options", color: "from-cyan-500 to-blue-500" },
            { icon: Star, number: "UAE's #1", text: "Stone Distributor", color: "from-blue-600 to-cyan-400" }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500`}></div>
              <div className="relative bg-slate-800/80 backdrop-blur-lg border border-blue-400/40 rounded-3xl p-8 text-center group-hover:transform group-hover:scale-110 transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color.replace('to-', 'via-').replace('from-', 'from-').replace('to-cyan-500', 'to-blue-300').replace('to-blue-500', 'to-cyan-300')} mb-2`}>
                  {stat.number}
                </div>
                <p className="text-blue-200 font-medium">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
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

export default Client;