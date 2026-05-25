import { GraduationCap, Award, Brain, Code } from 'lucide-react';

const About = () => {
  // CGPA is 7.5/10.0, which translates to 75% progress on a circle
  const cgpaPercentage = 75;
  const strokeDashoffset = 440 - (440 * cgpaPercentage) / 100;

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#050A14]">
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white font-syne">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Bio Description (8 cols on desktop) */}
          <div className="md:col-span-8 flex flex-col justify-between glassmorphism rounded-3xl p-8 hover:border-cyan-500/20 transition-all duration-300">
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-syne text-white">
                Computer Science & Engineering Student
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                I am a passionate undergraduate pursuing my Bachelor of Engineering in Computer Science & Engineering at 
                <span className="text-white font-semibold"> Jyothy Institute of Technology</span>. With a deep curiosity 
                for technology, I specialize in building next-generation AI/ML algorithms and full-stack web applications.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                My goals center on developing scalable, highly intelligent products using cloud architectures, 
                advanced machine learning pipelines, and responsive interfaces. I enjoy exploring cutting-edge 
                generative models and cloud microservices.
              </p>
            </div>

            {/* Micro details grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs">AI/ML Dev</h4>
                  <p className="text-gray-500 text-xs mt-0.5">NLP & Computer Vision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 mt-0.5">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs">Full Stack</h4>
                  <p className="text-gray-500 text-xs mt-0.5">MERN & Python Ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Card / CGPA Circle (4 cols on desktop) */}
          <div className="md:col-span-4 flex flex-col justify-center items-center text-center glassmorphism rounded-3xl p-8 hover:border-emerald-500/20 transition-all duration-300 group">
            <h4 className="text-gray-400 text-sm font-semibold font-syne tracking-wider uppercase mb-6">
              Academic Record
            </h4>
            
            {/* Radial gauge */}
            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
              {/* Glow filter definition */}
              <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="stroke-slate-800"
                  strokeWidth="10"
                  fill="transparent"
                />
                {/* Foreground Fill */}
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="stroke-emerald-400 transition-all duration-1000 ease-out group-hover:stroke-emerald-300"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="440"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))"
                  }}
                />
              </svg>
              {/* Central Text */}
              <div className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-white tracking-tight font-syne">7.5</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">CGPA</span>
              </div>
            </div>

            {/* Extra Info */}
            <div className="w-full space-y-1">
              <p className="text-white font-bold text-sm">B.E. in CSE</p>
              <p className="text-gray-500 text-xs">Jyothy Institute of Technology</p>
              <p className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mt-4 inline-block">
                Graduating: Feb 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
