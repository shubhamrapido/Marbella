import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      {/* Background Accent Lines with Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
        {/* Visible Grid Overlay with Maximum Visibility */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 184, 0.7) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            // For debugging: Replace above rgba(148, 163, 184, 0.7) with rgba(255, 0, 0, 0.7) to make grid red if still not visible
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            Contact Us
          </h2>
          <p className="mt-4 text-blue-200 max-w-xl mx-auto text-base">
            Reach out to our marble experts for consultation or visit our showroom in Sharjah.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-slate-800/50 border border-blue-400/20 p-8 rounded-2xl backdrop-blur-md shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl opacity-40 pointer-events-none"></div>

            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-6">
              Get Free Consultation
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="input-field" />
                <input type="email" placeholder="Your Email" className="input-field" />
              </div>

              <input type="tel" placeholder="Phone Number" className="input-field" />

              <select className="input-field text-blue-100">
                <option className="bg-slate-800">Select Project Type</option>
                <option className="bg-slate-800">Residential Marble</option>
                <option className="bg-slate-800">Commercial Marble</option>
                <option className="bg-slate-800">Marble Renovation</option>
              </select>

              <textarea rows="4" placeholder="Tell us about your marble project..." className="input-field resize-none"></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-slate-800/50 border border-blue-400/20 p-8 rounded-2xl backdrop-blur-md shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-40 pointer-events-none"></div>

              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-6">
                Get In Touch
              </h3>

              <ul className="space-y-6 text-blue-100 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1" />
                  <span>
                    <strong>Call Us:</strong><br /> +971 6 531 1778
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1" />
                  <span>
                    <strong>Email:</strong><br /> info@almezoon-uae.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <span>
                    <strong>Visit Us:</strong><br /> Al Sajja Industrial Area, Sharjah, UAE
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-blue-400/20 shadow-md">
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

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(96, 165, 250, 0.2);
          color: #dbeafe;
          outline: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        .input-field::placeholder {
          color: #93c5fd;
          opacity: 0.6;
        }
        .input-field:focus {
          border-color: #22d3ee;
          box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.2);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;