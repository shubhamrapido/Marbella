import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { clients } from '../../data/clientData';
import { ChevronRight, Building2, Award, Star, Briefcase, CheckCircle, Layers, Calendar, Shield, Sparkles, Crown, Gem, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

const ClientDetail = () => {
  const { id } = useParams();
  const client = clients.find((c) => c.id === parseInt(id));
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="text-center p-8 bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-lg border border-blue-500/30 max-w-md w-full">
          <div className="text-4xl mb-4">🏢</div>
          <h2 className="text-2xl font-semibold text-white mb-2">Client not found</h2>
          <p className="text-blue-200 mb-6">The requested client does not exist in our records.</p>
          <Link 
            to="/clients" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors"
          >
            Back to Clients
          </Link>
        </div>
      </div>
    );
  }

  // Use client.images array if available, otherwise fallback to single image
  const images = client.images || [client.image];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-blue-400 hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-blue-400/50" />
            </li>
            <li>
              <Link to="/clients" className="text-blue-400 hover:text-cyan-400 transition-colors">
                Clients
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-blue-400/50" />
            </li>
            <li className="text-cyan-300 font-medium">
              {client.name}
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-400/30">
              <Gem className="w-3 h-3 mr-1" />
              {client.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-400/30">
              <Crown className="w-3 h-3 mr-1" />
              Premium Partner
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            {client.name}
          </h1>
          <p className="text-lg text-blue-200 max-w-3xl">
            Our strategic partnership with {client.name} delivers exceptional quality and innovation in {client.category.toLowerCase()} solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl group-hover:shadow-cyan-500/20 transition-all duration-500">
              {/* Main Image */}
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={images[currentImageIndex]}
                  alt={`${client.name} ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="h-5 w-5" />
                    </button>
                  </>
                )}
                
                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}
                
                {/* Partner Since Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-white font-medium">Partner Since {client.year || '2018'}</span>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-cyan-400' : 'border-transparent'}`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Details Section (unchanged) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-blue-500/30 shadow-xl p-6 group-hover:shadow-cyan-500/20 transition-all duration-500">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-cyan-400" />
                Partnership Details
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start hover:bg-slate-700/40 rounded-lg p-4 transition-all duration-300">
                  <div className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5">
                    <CheckCircle className="h-full w-full" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-300">Industry</p>
                    <p className="text-sm text-blue-200">{client.category}</p>
                  </div>
                </div>

                <div className="flex items-start hover:bg-slate-700/40 rounded-lg p-4 transition-all duration-300">
                  <div className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5">
                    <Calendar className="h-full w-full" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-300">Partnership Duration</p>
                    <p className="text-sm text-blue-200">{client.years || '5+'} Years</p>
                  </div>
                </div>

                <div className="flex items-start hover:bg-slate-700/40 rounded-lg p-4 transition-all duration-300">
                  <div className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5">
                    <Layers className="h-full w-full" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-300">Projects Completed</p>
                    <p className="text-sm text-blue-200">{client.projects || '25+'}</p>
                  </div>
                </div>

                <div className="flex items-start hover:bg-slate-700/40 rounded-lg p-4 transition-all duration-300">
                  <div className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5">
                    <Shield className="h-full w-full" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-300">Quality Standard</p>
                    <p className="text-sm text-blue-200">Premium Grade Materials</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30">
                Contact Partnership Manager
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* Description Section */}
        <div className="relative group mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-blue-500/30 shadow-xl p-8 group-hover:shadow-cyan-500/20 transition-all duration-500">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Partnership</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-cyan-300 mb-4">Collaboration Highlights</h3>
                <p className="text-blue-200 mb-6">
                  Our strategic alliance with {client.name} represents a shared commitment to excellence in {client.category.toLowerCase()}. 
                  Through this partnership, we've delivered innovative solutions that combine our technical expertise with their 
                  industry knowledge.
                </p>
                <p className="text-blue-200">
                  The relationship has grown over {client.years || '5'} years, resulting in {client.projects || '25+'} successful 
                  projects that showcase the strength of our collaboration and mutual dedication to quality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-cyan-300 mb-4">Key Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5" />
                    <span className="ml-3 text-blue-200">
                      <span className="font-medium text-white">Premium Quality:</span> All materials meet the highest industry standards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5" />
                    <span className="ml-3 text-blue-200">
                      <span className="font-medium text-white">Reliable Execution:</span> 100% on-time project delivery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5" />
                    <span className="ml-3 text-blue-200">
                      <span className="font-medium text-white">Innovative Solutions:</span> Customized approaches for each project
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="flex-shrink-0 h-5 w-5 text-cyan-400 mt-0.5" />
                    <span className="ml-3 text-blue-200">
                      <span className="font-medium text-white">Sustainable Practices:</span> Environmentally responsible methods
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="relative bg-blue-900/30 rounded-xl p-8 border border-blue-500/30 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
            <blockquote className="text-xl font-medium text-white mb-6">
              "Working with {client.name} has been a model partnership. Their professionalism and commitment to quality 
              align perfectly with our values, resulting in exceptional outcomes for our shared clients."
            </blockquote>
            <div className="text-cyan-300 font-medium">— Partnership Team</div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" className="fill-blue-600/30"></path>
        </svg>
      </div>
    </div>
  );
};

export default ClientDetail;