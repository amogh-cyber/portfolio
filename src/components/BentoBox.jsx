import { Trophy, Sparkles, Cpu, Dumbbell, Palette, Radio } from 'lucide-react';

const BentoBox = () => {
  return (
    <section id="extracurriculars" className="py-24 px-6 relative bg-[#050A14] overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white font-syne">
            Life Beyond <span className="text-cyan-400 font-syne">Coding</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px]">
          
          {/* Card 1: Sports (Football) - col-span-4 */}
          <div className="md:col-span-4 glassmorphism rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden relative">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest font-bold uppercase border border-cyan-500/20 px-2 py-0.5 rounded-full">
                Athlete
              </span>
            </div>

            <div>
              <h3 className="text-white font-bold font-syne text-lg mb-2">VTU Football Team</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Represented the institute in VTU sports competitions. Passionate about teamwork, endurance, and strategy on the field.
              </p>
            </div>
          </div>

          {/* Card 2: Innovation (IoT) - col-span-8 */}
          <div className="md:col-span-8 glassmorphism rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden relative">
            <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

            <div className="flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-emerald-400 font-mono tracking-widest font-bold uppercase border border-emerald-500/20 px-2 py-0.5 rounded-full">
                IoT Development
              </span>
            </div>

            <div className="md:max-w-[70%]">
              <h3 className="text-white font-bold font-syne text-lg mb-2">IoT Waste Bin Level Monitor</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Developed an IoT-based smart monitor application during a TEDP workshop. Features telemetry updates and sensor metrics to track fill levels, promoting smart campus environmental management.
              </p>
            </div>
          </div>

          {/* Card 3: Creative (Fashion Team) - col-span-7 */}
          <div className="md:col-span-7 glassmorphism rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden relative">
            <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />

            <div className="flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-purple-400 font-mono tracking-widest font-bold uppercase border border-purple-500/20 px-2 py-0.5 rounded-full">
                Creative Design
              </span>
            </div>

            <div>
              <h3 className="text-white font-bold font-syne text-lg mb-2">Institute Fashion Team Member</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Participated in high-energy inter-college design and style competitions. Explored coordination, aesthetic direction, and presentation logic.
              </p>
            </div>
          </div>

          {/* Card 4: Quick quotes / Mindset - col-span-5 */}
          <div className="md:col-span-5 glassmorphism rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden relative bg-gradient-to-br from-slate-900/40 via-cyan-950/20 to-purple-950/20">
            <div className="flex justify-between items-center text-gray-500 text-xs">
              <span className="font-mono">MOTTO.EXE</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <div className="my-auto">
              <p className="text-white font-syne font-semibold text-base italic leading-relaxed">
                "Striving to bridge the gap between AI theory, systems engineering, and interactive human experiences."
              </p>
            </div>

            <div className="text-right text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Amogh HL
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoBox;
