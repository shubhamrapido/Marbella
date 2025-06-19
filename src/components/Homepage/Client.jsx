import React, { useState } from 'react';
import {
  ChevronRight,
  Building2,
  Users,
  Award,
  Diamond,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { clients } from '../../data/clientData';

// Import background image
import PremiumMaterial1 from '../../assets/Images/premium_material_1.jpg';

const ClientsSection = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  return (
    <section
      id="client" // ✅ Important for HashLink to work
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden py-20"
    >
      {/* Fixed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={PremiumMaterial1}
          alt="Clients background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-blue-950/30 to-indigo-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/25" />
      </div>

      {/* Decorative background */}
      <div className="absolute inset-0 z-1">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundColor: 'transparent',
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8">
            <Diamond className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Trusted Partners</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-2xl">
              Our Clients
            </span>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-10 h-10 text-cyan-400 animate-spin-slow" />
            </div>
          </h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <p className="relative text-blue-100 text-lg leading-relaxed p-6 bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-blue-500/30 shadow-2xl">
              We partner with industry leaders to deliver exceptional stone solutions across diverse sectors and premium projects.
            </p>
          </div>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {clients.map((client, i) => (
            <div
              key={client.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredClient(i)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative bg-slate-800/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-all duration-700">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={client.images[0]}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {client.category}
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 transition-all duration-700 ${
                      hoveredClient === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 mb-4">
                    {client.name}
                  </h3>

                  <Link
                    to={`/clients/${client.id}`}
                    className="group/btn w-full flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600 hover:to-cyan-600 text-blue-300 hover:text-white px-6 py-3 rounded-2xl border border-blue-500/30 hover:border-transparent transition-all duration-300 backdrop-blur-sm"
                  >
                    <span className="font-semibold tracking-wide uppercase">
                      View Details
                    </span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Building2, number: '6+', text: 'Partner Companies', color: 'from-blue-500 to-cyan-500' },
            { icon: Award, number: '50+', text: 'Projects Completed', color: 'from-cyan-500 to-blue-500' },
            { icon: Users, number: '100%', text: 'Client Satisfaction', color: 'from-blue-600 to-cyan-400' },
          ].map((stat, idx) => (
            <div key={idx} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500`}
              />
              <div className="relative bg-slate-800/90 backdrop-blur-lg border border-blue-400/40 rounded-3xl p-8 text-center group-hover:scale-110 transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <p className="text-blue-200 font-medium">{stat.text}</p>
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default ClientsSection;
