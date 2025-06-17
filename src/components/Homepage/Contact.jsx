import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900">
      {/* Cosmic Background with Stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(6,182,212,0.3)_0%,_transparent_50%)]"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula Glow Effect */}
      <div className="absolute inset-0 opacity-20 animate-pulse-slow">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-transparent"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 relative">
            Contact
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full blur-lg animate-pulse"></div>
          </h2>
          <p className="mt-4 text-blue-200 text-base max-w-[600px] mx-auto">
            Get in touch with our marble experts. Visit our showrooms across UAE
            or reach out for a consultation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Form */}
          <div className="relative bg-blue-900/40 backdrop-blur-lg p-8 rounded-2xl border border-blue-400/30 shadow-[0_8px_32px_rgba(0,0,255,0.2)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-70 hover:opacity-100 transition-all duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-8">
                Get Free Consultation
              </h3>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-full group">
                    <label className="block text-sm font-medium mb-2 text-blue-200">Name</label>
                    <input
                      type="text"
                      className="w-full border border-blue-400/30 rounded-lg px-4 py-3 text-sm placeholder-blue-300/50 text-blue-100 bg-blue-800/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="w-full group">
                    <label className="block text-sm font-medium mb-2 text-blue-200">Email</label>
                    <input
                      type="email"
                      className="w-full border border-blue-400/30 rounded-lg px-4 py-3 text-sm placeholder-blue-300/50 text-blue-100 bg-blue-800/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-blue-200">Phone</label>
                  <input
                    type="tel"
                    className="w-full border border-blue-400/30 rounded-lg px-4 py-3 text-sm placeholder-blue-300/50 text-blue-100 bg-blue-800/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-blue-200">Project Type</label>
                  <select className="w-full border border-blue-400/30 rounded-lg px-4 py-3 text-sm text-blue-100 bg-blue-800/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300">
                    <option className="bg-blue-900">Select Project Type</option>
                    <option className="bg-blue-900">Residential Marble</option>
                    <option className="bg-blue-900">Commercial Marble</option>
                    <option className="bg-blue-900">Marble Renovation</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-blue-200">Message</label>
                  <textarea
                    rows="4"
                    className="w-full border border-blue-400/30 rounded-lg px-4 py-3 text-sm placeholder-blue-300/50 text-blue-100 bg-blue-800/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your marble project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-white text-sm font-semibold py-3 rounded-lg shadow-lg hover:shadow-cyan-500/40 transform hover:scale-[1.02] relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Info + Map */}
          <div className="flex flex-col gap-8">
            <div className="relative bg-blue-900/50 backdrop-blur-lg p-8 rounded-2xl border border-blue-400/30 shadow-[0_8px_32px_rgba(0,0,255,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-70"></div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-8 flex items-center gap-2">
                  Get In Touch
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-blue-100" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-blue-100">Call Us</p>
                      <p className="text-sm text-blue-200">
                        +971 6 531 1778
                        <br />
                        Sunday to Friday
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-blue-100" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-blue-100">Email Us</p>
                      <p className="text-sm text-blue-200">
                        info@almezoon-uae.com
                        <br />
                        Fast response guaranteed
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-blue-100" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-blue-100">Visit Us</p>
                      <p className="text-sm text-blue-200">
                        Al Sajja Industrial Area,
                        <br />
                        Sharjah, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden w-full h-[230px] bg-blue-800/30 backdrop-blur-sm border border-blue-400/30 shadow-[0_8px_32px_rgba(0,0,255,0.2)]">
              <iframe
                title="Marble Showroom Map"
                src="https://www.google.com/maps?q=Al+Mezoon+Marbles,+Al+Sajja+Industrial+Area,+Sharjah,+UAE&output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-blue-900/80 backdrop-blur-md p-3 rounded-lg border border-blue-400/30">
                <h4 className="font-bold text-base sm:text-lg text-blue-100">Visit Our Showroom</h4>
                <p className="text-sm text-blue-200 opacity-90">
                  Explore premium marble at Al Sajja, Sharjah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
