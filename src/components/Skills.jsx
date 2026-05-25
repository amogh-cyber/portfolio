import { Terminal, Brain, Cloud } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      glowClass: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
      skills: ["Python", "JavaScript", "C", "React.js", "HTML5", "Flask", "Django"],
      borderGlow: "group-hover:text-cyan-400"
    },
    {
      title: "AI/ML & Data",
      icon: <Brain className="w-6 h-6 text-emerald-400" />,
      glowClass: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
      skills: [
        "Generative AI", "NLP", "scikit-learn", "TensorFlow", "FastAPI", 
        "ChatGPT", "Claude", "Power BI", "Tableau", "NumPy", "Pandas", "Matplotlib"
      ],
      borderGlow: "group-hover:text-emerald-400"
    },
    {
      title: "Databases & Cloud",
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      glowClass: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
      skills: ["AWS", "MongoDB", "SQL", "Firebase", "MySQL", "REST APIs"],
      borderGlow: "group-hover:text-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#050A14] overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white font-syne">
            Skills <span className="text-cyan-400 font-syne">Matrix</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        {/* 3 Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`glassmorphism rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 group ${category.glowClass}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold font-syne text-white group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-gray-300 bg-slate-900/50 border border-white/5 hover:border-white/15 hover:text-white hover:bg-slate-900 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative accent footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                <span>{category.skills.length} Technologies</span>
                <span className={`font-semibold uppercase tracking-wider ${category.borderGlow} transition-colors duration-300`}>
                  Expertise
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
