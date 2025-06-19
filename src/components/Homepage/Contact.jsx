import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

// Import background image
import PremiumMaterial2 from '../../assets/Images/premium_material_2_13_11zon.webp';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 lg:px-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
    >
      {/* Fixed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={PremiumMaterial2}
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-blue-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/25" />
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent">
          <div className="absolute left-1/4 -top-1 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
          <div className="absolute right-1/3 -top-1 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 mb-6 tracking-tight">
            Contact Us
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to our marble experts for consultation or visit our showroom in Sharjah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-8">
                Get Free Consultation
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">Your Name</label>
                    <input type="text" placeholder="Enter your name" className="form-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">Your Email</label>
                    <input type="email" placeholder="your.email@example.com" className="form-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">Phone Number</label>
                  <input type="tel" placeholder="+971 XX XXX XXXX" className="form-input" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">Project Type</label>
                  <select className="form-input">
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential Marble</option>
                    <option value="commercial">Commercial Marble</option>
                    <option value="renovation">Marble Renovation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">Project Details</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your marble project..." 
                    className="form-input resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Cards */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-8">
                  Get In Touch
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-5 p-5 bg-slate-800/60 rounded-2xl border border-slate-700/30">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">Call Us</h4>
                      <a href="tel:+97165311778" className="text-blue-300 hover:text-blue-200 font-medium text-lg transition-colors">
                        +971 6 531 1778
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-5 bg-slate-800/60 rounded-2xl border border-slate-700/30">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">Email Us</h4>
                      <a href="mailto:info@almezoon-uae.com" className="text-cyan-300 hover:text-cyan-200 font-medium transition-colors break-all">
                        info@almezoon-uae.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-5 bg-slate-800/60 rounded-2xl border border-slate-700/30">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">Visit Our Showroom</h4>
                      <p className="text-green-300 font-medium">
                        Al Sajja Industrial Area<br />
                        Sharjah, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <MapPin className="w-7 h-7 text-blue-400" />
                    Our Location
                  </h3>
                </div>
                <div className="h-72">
                  <iframe
                    title="Al Mezoon Location"
                    src="https://www.google.com/maps?q=Al+Mezoon+Marbles,+Al+Sajja+Industrial+Area,+Sharjah,+UAE&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Input Styling */}
      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 0.75rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(71, 85, 105, 0.5);
          color: #f1f5f9;
          outline: none;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .form-input::placeholder {
          color: #94a3b8;
          opacity: 0.7;
        }
        .form-input:focus {
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
          background: rgba(15, 23, 42, 0.9);
        }
        select.form-input option {
          background: #0f172a;
          color: #f1f5f9;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
