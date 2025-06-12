import React from "react";
import { ArrowRight } from "lucide-react";

// 📷 Add your actual images here
import MarbleImg from "../../assets/Images/marble.jpg";
import GraniteImg from "../../assets/Images/granite.jpg";
import QuartziteImg from "../../assets/Images/quartzite.jpg";
import OnyxImg from "../../assets/Images/onyx.jpg";
import TravertineImg from "../../assets/Images/travertine.jpg";
import LimestoneImg from "../../assets/Images/limestone.jpg";

const products = [
  {
    id: 1,
    name: "Marble",
    description: "Luxurious natural marble with unique veining patterns",
    image: MarbleImg,
  },
  {
    id: 2,
    name: "Granite",
    description: "Durable and elegant granite for lasting beauty",
    image: GraniteImg,
  },
  {
    id: 3,
    name: "Quartzite",
    description: "Natural quartzite with exceptional strength",
    image: QuartziteImg,
  },
  {
    id: 4,
    name: "Onyx",
    description: "Translucent onyx for dramatic lighting effects",
    image: OnyxImg,
  },
  {
    id: 5,
    name: "Travertine",
    description: "Classic travertine with natural texture",
    image: TravertineImg,
  },
  {
    id: 6,
    name: "Limestone",
    description: "Versatile limestone for timeless appeal",
    image: LimestoneImg,
  },
];

const Product = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Marble texture background */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 Q25,15 50,0 T100,0 L100,25 Q75,10 50,25 T0,25 Z' fill='%23000000' opacity='0.08'/%3E%3Cpath d='M0,25 Q25,40 50,25 T100,25 L100,50 Q75,35 50,50 T0,50 Z' fill='%23000000' opacity='0.04'/%3E%3Cpath d='M0,50 Q25,65 50,50 T100,50 L100,75 Q75,60 50,75 T0,75 Z' fill='%23000000' opacity='0.06'/%3E%3Cpath d='M0,75 Q25,90 50,75 T100,75 L100,100 Q75,85 50,100 T0,100 Z' fill='%23000000' opacity='0.02'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Subtle marble veins */}
      <div className="absolute inset-0 opacity-4">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <path d="M0,300 Q400,250 800,300 T1200,300" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gray-500"/>
          <path d="M0,150 Q300,100 600,150 T1200,150" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-400"/>
          <path d="M0,450 Q500,400 1000,450 T1200,450" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-600"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 relative">
          Natural Stones Collection
          {/* Marble shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse"></div>
        </h2>
        <p className="text-lg text-gray-600 mt-2 mb-10">
          Sourced from the finest quarries worldwide
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden border border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] transform transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 group relative"
            >
              {/* Marble shine overlay on card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 sm:h-56 lg:h-64 object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Marble overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-5 text-left relative z-20">
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
                <div
                  className="inline-flex items-center mt-4 text-gray-700 font-medium group/link hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    View Collection
                    {/* Underline effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 group-hover/link:w-full transition-all duration-300"></div>
                  </span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Subtle marble corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;