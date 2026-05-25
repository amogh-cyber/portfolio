import { useState } from 'react';
import { Calendar, MapPin, Briefcase, Award, ExternalLink } from 'lucide-react';

const FlipBadge = ({ cert }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-44 perspective-1000 cursor-pointer select-none"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of the badge */}
        <div className="absolute inset-0 backface-hidden glassmorphism rounded-3xl p-6 flex flex-col items-center justify-center border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            {cert.icon}
          </div>
          <h4 className="text-white font-bold text-center text-sm font-syne leading-snug">{cert.name}</h4>
          <span className="text-gray-500 text-[10px] uppercase tracking-widest mt-2">{cert.issuer}</span>
        </div>
        
        {/* Back of the badge */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#0B0F19] to-cyan-950/40 rounded-3xl p-6 flex flex-col items-center justify-center border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <span className="text-[11px] text-cyan-400 font-mono font-bold mb-2">{cert.date}</span>
          <p className="text-gray-300 text-center text-xs leading-relaxed">
            {cert.desc}
          </p>
          <span className="text-[10px] text-gray-500 mt-4 flex items-center gap-1 font-semibold hover:text-cyan-400 transition-colors">
            Credentials Verify
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "SuprMentr Technologies Pvt Ltd / NASSCOM Future Skills",
      role: "Full Stack Web Development (MERN) Intern",
      period: "Feb 2026 - Present",
      location: "Bangalore (Remote)",
      desc: "Gained hands-on experience in building full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented robust backend REST APIs and responsive, intuitive user interfaces.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Mar 2023",
      icon: "☁️",
      desc: "Validated basic knowledge of AWS Cloud platform, covering services like EC2, S3, IAM, security, pricing, and architecture principles."
    },
    {
      name: "Artificial Intelligence",
      issuer: "Smarted",
      date: "Sep 2023",
      icon: "🤖",
      desc: "Focused on core machine learning models, neural networks, supervised/unsupervised algorithms, and AI implementation paradigms."
    },
    {
      name: "Internet of Things (IoT)",
      issuer: "JIT Workshop",
      date: "Feb 2024",
      icon: "🌐",
      desc: "Hands-on implementation of sensors integration, Raspberry Pi/Arduino micro-controllers, network protocols, and telemetry systems."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-[#050A14] overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Experience Left Column (7 cols) */}
          <div className="md:col-span-7">
            {/* Heading */}
            <div className="flex items-center gap-4 mb-14">
              <h2 className="text-3xl font-bold tracking-tight text-white font-syne">
                Work <span className="text-cyan-400 font-syne">Experience</span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Glowing vertical point dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform">
                    <Briefcase className="w-3 h-3 text-cyan-400" />
                  </div>

                  <div className="glassmorphism rounded-3xl p-6 hover:border-cyan-500/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold font-syne text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 text-sm mt-0.5">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.desc}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-gray-300 bg-slate-900/50 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Right Column (5 cols) */}
          <div className="md:col-span-5">
            {/* Heading */}
            <div className="flex items-center gap-4 mb-14">
              <h2 className="text-3xl font-bold tracking-tight text-white font-syne">
                Certifications
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
            </div>

            {/* Badges Flip Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <FlipBadge key={index} cert={cert} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
