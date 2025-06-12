import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Marble texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 Q25,15 50,0 T100,0 L100,25 Q75,10 50,25 T0,25 Z' fill='%23000000' opacity='0.1'/%3E%3Cpath d='M0,25 Q25,40 50,25 T100,25 L100,50 Q75,35 50,50 T0,50 Z' fill='%23000000' opacity='0.05'/%3E%3Cpath d='M0,50 Q25,65 50,50 T100,50 L100,75 Q75,60 50,75 T0,75 Z' fill='%23000000' opacity='0.08'/%3E%3Cpath d='M0,75 Q25,90 50,75 T100,75 L100,100 Q75,85 50,100 T0,100 Z' fill='%23000000' opacity='0.03'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Subtle marble veins */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <path d="M0,400 Q300,350 600,400 T1200,400" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-600"/>
          <path d="M0,200 Q400,150 800,200 T1200,200" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-500"/>
          <path d="M0,600 Q200,550 400,600 T1200,600" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gray-400"/>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 relative">
            Contact
            {/* Marble shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </h2>
          <p className="mt-3 text-gray-600 text-base max-w-[600px] mx-auto">
            Get in touch with our marble experts. Visit our showrooms across UAE
            or reach out for a consultation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/50 relative overflow-hidden">
            {/* Marble pattern overlay for form */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(ellipse at top left, rgba(156, 163, 175, 0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(107, 114, 128, 0.2) 0%, transparent 50%)`
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
                Get Free Consultation
              </h3>

              <div className="space-y-5">
                {/* Name & Email */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border-2 border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Project Type
                  </label>
                  <select className="w-full border-2 border-gray-200 rounded-md px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <option>Select Project Type</option>
                    <option>Residential Marble</option>
                    <option>Commercial Marble</option>
                    <option>Marble Renovation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border-2 border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your marble project requirements..."
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-900 hover:to-gray-800 transition-all duration-300 text-white text-sm font-semibold py-3 rounded-md shadow-lg hover:shadow-xl transform hover:scale-[1.02] relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  {/* Marble shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Info + Map */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
              {/* Marble texture for contact info */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)`,
                  backgroundSize: '20px 20px'
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  Get In Touch
                  <div className="w-8 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">
                        Call Us
                      </p>
                      <p className="text-sm text-gray-300">
                        800 MARBLE (627253)
                        <br />
                        Available 24/7
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">
                        Email Us
                      </p>
                      <p className="text-sm text-gray-300">
                        info@marble.ae
                        <br />
                        Quick response guaranteed
                      </p>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">
                        Visit Our Marble Showrooms
                      </p>
                      <p className="text-sm text-gray-300">
                        Dubai • Abu Dhabi • Sharjah
                        <br />
                        Premium marble collections
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden relative w-full h-[230px] bg-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
              <iframe
                title="Marble Showroom Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562518.690751293!2d76.1993554!3d23.6101808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d3268b62b08e1%3A0x7146cf9f7ac8ae78!2sIndia!5e0!3m2!1sen!2sin!4v1718100301646!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 rounded-2xl"
              />

              <div className="absolute bottom-4 left-4 text-white bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md p-3 rounded-lg border border-white/20">
                <h4 className="font-bold text-base sm:text-lg">
                  Visit Our Marble Showrooms
                </h4>
                <p className="text-sm opacity-90">
                  Experience our premium marble collections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;