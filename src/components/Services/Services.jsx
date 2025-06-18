import React from 'react';
import { Settings, Home, Truck, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Supply',
    subtitle: '01',
    description:
      'We offer an extensive selection of marble, granite, quartz, and porcelain materials, sourced from top quarries around the world. Our wide range ensures that our clients have access to the finest stones for their projects.',
    features: ['Premium Materials', 'Global Sourcing', 'Quality Assurance'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Fabrication',
    subtitle: '02',
    description:
      'Our state of the art fabrication facility allows us to custom cut and shape stones to meet the specific design requirements of our clients. Whether it\'s a kitchen countertop, vanity top, or wall cladding, we ensure precision and excellence in every piece we create.',
    features: ['Custom Cutting', 'Precision Shaping', 'Advanced Technology'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Installation',
    subtitle: '03',
    description:
      'Our professional installation team guarantees a perfect fit and finish for every project. We manage the entire installation process, ensuring that the final product not only meets but exceeds client expectations.',
    features: ['Expert Team', 'Perfect Finish', 'Full Management'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
  }
];

const Services = () => {
  return (
    <section className="px-6 py-24 bg-[#0f172a] text-white relative overflow-hidden">
      {/* ✅ Grid Pattern Background */}
<div
  className="absolute inset-0 z-0 pointer-events-none"
  style={{
    backgroundColor: '#0f172a',
    backgroundImage: `
      linear-gradient(to right, rgba(100, 116, 139, 0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(100, 116, 139, 0.25) 1px, transparent 1px)
    `,
    backgroundSize: '32px 32px' // Tighter grid spacing for visibility
  }}
/>


      {/* Background Blobs (optional for depth) */}
      <div className="absolute top-32 right-16 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-16 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 leading-tight mb-6">
            Premium Stone Solutions
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            From supply to installation, we deliver exceptional marble, granite, quartz, and porcelain solutions 
            with over two decades of expertise in the UAE market.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-10 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/50 to-transparent" />
                {/* Order Pill */}
                <div className="absolute top-4 right-4 bg-slate-900/70 px-3 py-1 text-xs rounded-full border border-slate-600 text-blue-300 font-semibold">
                  {service.subtitle}
                </div>
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl shadow-md shadow-cyan-800/20 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-blue-200 group-hover:text-white transition-colors duration-300">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">25+</div>
            <p className="text-slate-400 text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">5000+</div>
            <p className="text-slate-400 text-sm mt-1">Kitchens/Year</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">1800</div>
            <p className="text-slate-400 text-sm mt-1">SqM Facility</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">UAE</div>
            <p className="text-slate-400 text-sm mt-1">Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
