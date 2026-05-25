import { Bot, Eye, Gamepad2, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Virtual Interviewer",
      date: "Sep 2025 - Jan 2026",
      desc: "An AI-driven system automating recruitment evaluation. Uses NLP to analyze candidate responses and communication skills.",
      tags: ["Python", "NLP", "Machine Learning", "AI"],
      icon: <Bot className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
      codeUrl: "https://github.com",
      demoUrl: "https://github.com"
    },
    {
      title: "Object Detection System - Weapon Detection Model",
      date: "Aug 2024 - Dec 2024",
      desc: "An AI-based security model using YOLO and OpenCV. Improved real-time detection accuracy by 18% through strategic dataset augmentation and hyperparameter tuning.",
      tags: ["Python", "YOLO", "OpenCV", "AI/ML"],
      icon: <Eye className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
      codeUrl: "https://github.com",
      demoUrl: "https://github.com"
    },
    {
      title: "AI-Driven Game Development",
      date: "Sep 2024 - Oct 2024",
      desc: "An interactive game integrating advanced AI techniques to enhance gameplay logic, intelligent behaviors, and user engagement. Built with HTML, CSS, JavaScript, and AI concepts.",
      tags: ["HTML", "CSS", "JavaScript", "AI"],
      icon: <Gamepad2 className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
      codeUrl: "https://github.com",
      demoUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#050A14] overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white font-syne">
            Academic <span className="text-cyan-400 font-syne">Projects</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glassmorphism rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group ${project.glowColor}`}
            >
              <div>
                {/* Header & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {project.date.split(" - ")[1] || project.date.split(" – ")[1] || "2026"}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold font-syne text-white mb-2 leading-snug group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-[11px] text-cyan-400 font-mono block mb-4">{project.date}</span>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mb-4 group-hover:mb-16 transition-all duration-300">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-gray-300 bg-slate-900/40 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Slider Action Bar */}
                <div className="absolute bottom-6 inset-x-6 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
