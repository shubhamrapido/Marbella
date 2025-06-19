import React from 'react';
import { Sparkles, Star, Diamond, Gem } from 'lucide-react';

// Import product images
import Product1 from '../../assets/Images/Product_1.webp';
import Product2 from '../../assets/Images/Product_2.webp';
import Product3 from '../../assets/Images/Product_3.webp';
import Product4 from '../../assets/Images/Product_4.webp';
import Product5 from '../../assets/Images/Product_5.webp';
import Product6 from '../../assets/Images/Product_6.webp';
import Granite from '../../assets/Images/granite.jpg';
import Marble from '../../assets/Images/marble.jpg';
import Limestone from '../../assets/Images/limestone.jpg';
import Quartzite from '../../assets/Images/quartzite.jpg';

const products = [
  {
    id: 1,
    name: 'Carrara White Marble',
    type: 'Premium Marble',
    image: Product1,
    price: 'From AED 180/sqm',
    description: 'Classic white marble with elegant veining, perfect for luxury countertops and flooring.',
    features: ['Heat Resistant', 'Polished Finish', 'Natural Veining'],
    rating: 4.9,
    availability: 'In Stock'
  },
  {
    id: 2,
    name: 'Black Galaxy Granite',
    type: 'Premium Granite',
    image: Product2,
    price: 'From AED 150/sqm',
    description: 'Stunning black granite with golden speckles, ideal for modern kitchen countertops.',
    features: ['Scratch Resistant', 'Polished Surface', 'Uniform Pattern'],
    rating: 4.8,
    availability: 'In Stock'
  },
  {
    id: 3,
    name: 'Emperador Brown Marble',
    type: 'Luxury Marble',
    image: Product3,
    price: 'From AED 200/sqm',
    description: 'Rich brown marble with distinctive veining, perfect for elegant interior applications.',
    features: ['Natural Beauty', 'Durable', 'Unique Patterns'],
    rating: 4.7,
    availability: 'Limited Stock'
  },
  {
    id: 4,
    name: 'Calacatta Gold Marble',
    type: 'Premium Marble',
    image: Product4,
    price: 'From AED 250/sqm',
    description: 'Luxurious white marble with bold gold veining, the epitome of elegance.',
    features: ['Gold Veining', 'High Polish', 'Premium Quality'],
    rating: 5.0,
    availability: 'In Stock'
  },
  {
    id: 5,
    name: 'Kashmir White Granite',
    type: 'Premium Granite',
    image: Product5,
    price: 'From AED 140/sqm',
    description: 'Light colored granite with subtle patterns, perfect for bright modern spaces.',
    features: ['Light Tone', 'Easy Maintenance', 'Versatile Design'],
    rating: 4.6,
    availability: 'In Stock'
  },
  {
    id: 6,
    name: 'Verde Guatemala Marble',
    type: 'Exotic Marble',
    image: Product6,
    price: 'From AED 220/sqm',
    description: 'Striking green marble with white veining, perfect for statement pieces.',
    features: ['Unique Color', 'Natural Veining', 'Premium Grade'],
    rating: 4.8,
    availability: 'In Stock'
  },
  {
    id: 7,
    name: 'Red Dragon Granite',
    type: 'Premium Granite',
    image: Granite,
    price: 'From AED 160/sqm',
    description: 'Bold red granite with dynamic patterns, ideal for creating dramatic spaces.',
    features: ['Bold Color', 'Dynamic Patterns', 'High Durability'],
    rating: 4.7,
    availability: 'In Stock'
  },
  {
    id: 8,
    name: 'Travertine Classic',
    type: 'Natural Stone',
    image: Marble,
    price: 'From AED 120/sqm',
    description: 'Classic travertine with natural texture, perfect for traditional and modern designs.',
    features: ['Natural Texture', 'Versatile', 'Eco-Friendly'],
    rating: 4.5,
    availability: 'In Stock'
  },
  {
    id: 9,
    name: 'Silver Creek Limestone',
    type: 'Natural Limestone',
    image: Limestone,
    price: 'From AED 110/sqm',
    description: 'Elegant limestone with subtle gray tones, ideal for contemporary applications.',
    features: ['Subtle Tones', 'Smooth Finish', 'Weather Resistant'],
    rating: 4.4,
    availability: 'In Stock'
  },
  {
    id: 10,
    name: 'Crystal Blue Quartzite',
    type: 'Premium Quartzite',
    image: Quartzite,
    price: 'From AED 190/sqm',
    description: 'Stunning blue quartzite with crystalline structure, perfect for luxury applications.',
    features: ['Crystal Structure', 'Unique Blue Tones', 'Ultra Durable'],
    rating: 4.9,
    availability: 'Limited Stock'
  }
];

const Products = () => {
  return (
    <section className="px-6 py-24 bg-[#0f172a] text-white relative overflow-hidden min-h-screen">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: '#0f172a',
          backgroundImage: `
            linear-gradient(to right, rgba(100, 116, 139, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Background Blobs */}
      <div className="absolute top-32 right-16 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-16 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-4">
            <Diamond className="w-4 h-4" />
            Our Products
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 leading-tight mb-6">
            Premium Stone Collection
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Discover our exquisite collection of premium marble, granite, and natural stones. 
            Each piece is carefully selected for its beauty, durability, and unique characteristics.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Availability Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-full font-medium ${
                  product.availability === 'In Stock' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                }`}>
                  {product.availability}
                </div>

                {/* Rating */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-slate-900/70 px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-white font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 space-y-3">
                {/* Product Type */}
                <div className="text-xs text-cyan-400 font-medium uppercase tracking-wide">
                  {product.type}
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full border border-blue-500/20">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full border border-slate-600/30">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="pt-3 border-t border-slate-700/50">
                  <div className="text-cyan-400 font-bold text-sm">
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gem className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Custom Solutions Available</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Don't see what you're looking for?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We offer custom stone solutions and have access to hundreds of additional varieties. 
            Contact us to discuss your specific requirements.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products; 