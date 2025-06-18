import React, { useState, useEffect, useRef } from "react";
import { Building2, Target, Eye, Clock, Factory, Award, Sparkles, CheckCircle } from "lucide-react";

const aboutSections = [
  {
    refKey: "aboutUsRef",
    title: "About Us",
    content: "Al Mezoon Marbles & Granites Industries LLC has been one of the leading Kitchen countertop fabricator in United Arab Emirates Since 2000. We are a team of professionals with extensive knowledge and experience in Marble & Granite. We specialize in the supply, fabrication and installation of the same all over the UAE.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
    icon: Building2,
    stats: [
      { number: "25+", label: "Years Experience" },
      { number: "UAE", label: "Coverage" },
      { number: "5000", label: "Since" }
    ]
  },
  {
    refKey: "missionRef",
    title: "Our Mission",
    content: "Our mission is to craft exquisite marble, granite, quartz & porcelain kitchen countertops that elevate spaces and inspire lives. With unwavering dedication to quality craftsmanship, innovative design, and personalized service, we aim to transform kitchens into artistic expressions that reflect the unique personality and taste of each homeowner. Through our commitment to excellence, sustainability, and customer satisfaction, we strive to be the foremost choice for those seeking timeless elegance and functionality in their living spaces.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format",
    icon: Target,
    features: [
      "Quality Craftsmanship",
      "Innovative Design",
      "Personalized Service",
      "Customer Satisfaction"
    ]
  },
  {
    refKey: "visionRef",
    title: "Our Vision",
    content: "Our vision is to be a pioneering force in the marble and granite industry, setting new standards of creativity and innovation in kitchen countertop design and fabrication. We envision a future where our countertops are not just functional surfaces, but works of art that capture the essence of each home. By fostering a culture of collaboration, expertise, and continuous improvement, we aspire to lead the way in sustainable practices, technological advancements, and customer-centric solutions. Our ultimate goal is to enrich lives by turning dreams of exceptional kitchens into tangible reality.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format",
    icon: Eye,
    features: [
      "Industry Leadership",
      "Creative Innovation",
      "Sustainable Practices",
      "Technological Advancement"
    ]
  },
  {
    refKey: "historyRef",
    title: "History and Experience",
    content: "Founded in 2000, Al Mezoon Marbles & Granites Industries LLC has over two decades of experience in the stone industry. We have built a solid reputation as a trusted provider of marble, granite, quartz, and porcelain solutions across the UAE. Our journey began with a small team of dedicated professionals, and today, we have grown into a leading company with a vast portfolio of successful projects.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
    icon: Clock,
    timeline: [
      { year: "2000", event: "Company Founded" },
      { year: "2010s", event: "Major Expansion" },
      { year: "2020s", event: "Industry Leader" }
    ]
  },
  {
    refKey: "facilityRef",
    title: "Our Facility",
    content: "We Al Mezoon Marbles & Granites IND.LLC are located in Sharjah, Al Sajja Industrial Area, United Arab Emirates, we hold the 1800 Sqm area for factory & 800 Sqm feeder warehouse. On an average we are producing 2500 kitchen in a year.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop&auto=format",
    icon: Factory,
    facilityStats: [
      { number: "1800", label: "SqM Factory", suffix: "" },
      { number: "800", label: "SqM Warehouse", suffix: "" },
      { number: "2500+", label: "Kitchens/Year", suffix: "" }
    ]
  }
];

export default function About() {
  const refs = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-key");
            setVisible(prev => ({ ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => refs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 py-20 px-6 md:px-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            About Al Mezoon
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 leading-tight">
            Crafting Excellence Since 2000
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            At Al Mezoon Marbles & Granites Ind. LLC, we blend tradition and technology to craft countertops that last a lifetime. 
            Backed by 25+ years of experience, we transform homes and businesses with stonework that speaks elegance and precision.
          </p>
        </div>

        {/* About Sections */}
        <div className="space-y-24">
          {aboutSections.map((section, idx) => {
            const Icon = section.icon;
            const isEven = idx % 2 === 0;
            
            return (
              <section
                key={section.title}
                ref={(el) => (refs.current[idx] = el)}
                data-key={section.refKey}
                className={`transition-all duration-700 ${
                  visible[section.refKey]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col lg:grid-cols-[1fr_auto]'}`}>
                  {/* Image Section */}
                  <div className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      
                      {/* Icon overlay */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                        {section.title}
                      </h2>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </div>

                    {/* Stats for About Us */}
                    {section.stats && (
                      <div className="grid grid-cols-3 gap-6 pt-6">
                        {section.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                              {stat.number}
                            </div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features for Mission/Vision */}
                    {section.features && (
                      <div className="grid grid-cols-2 gap-4 pt-6">
                        {section.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span className="text-blue-200 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Timeline for History */}
                    {section.timeline && (
                      <div className="space-y-4 pt-6">
                        {section.timeline.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <div className="w-16 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                              {item.year}
                            </div>
                            <span className="text-blue-200">{item.event}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Facility Stats */}
                    {section.facilityStats && (
                      <div className="grid grid-cols-3 gap-6 pt-6">
                        {section.facilityStats.map((stat, idx) => (
                          <div key={idx} className="text-center p-4 bg-slate-800/30 rounded-lg border border-blue-500/20">
                            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                              {stat.number}
                            </div>
                            <div className="text-slate-400 text-xs">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                {idx < aboutSections.length - 1 && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mt-16" />
                )}
              </section>
            );
          })}
        </div>

        {/* Closing Section */}
        <div className="text-center mt-24 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <blockquote className="italic text-blue-200 text-xl leading-relaxed">
              "Stone is not just material. It's memory, legacy, and identity — shaped by us, for you."
            </blockquote>
            <div className="mt-4 text-slate-400">— Al Mezoon Team</div>
          </div>
        </div>
      </div>
    </div>
  );
}