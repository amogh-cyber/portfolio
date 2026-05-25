import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      value: "amoghlkanth@gmail.com",
      href: "mailto:amoghlkanth@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      tooltip: "Send an Email",
      glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] text-cyan-400",
      tooltipGlow: "text-cyan-400 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.25)]"
    },
    {
      name: "Phone",
      value: "+91 93804 60538",
      href: "tel:+919380460538",
      icon: <Phone className="w-5 h-5" />,
      tooltip: "Call Direct",
      glowColor: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] text-emerald-400",
      tooltipGlow: "text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.25)]"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/amoghlhl",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-5 h-5" />,
      tooltip: "Connect on LinkedIn",
      glowColor: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] text-purple-400",
      tooltipGlow: "text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.25)]"
    },
    {
      name: "GitHub",
      value: "github.com/amogh-hl",
      href: "https://github.com",
      icon: <Github className="w-5 h-5" />,
      tooltip: "View GitHub Repos",
      glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] text-cyan-300",
      tooltipGlow: "text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.25)]"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#050A14] overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white font-syne">
            Get In <span className="text-cyan-400 font-syne">Touch</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        <div className="glassmorphism rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-white/10 hover:border-cyan-500/10 transition-all duration-300">
          <h3 className="text-2xl font-bold font-syne text-white mb-4">
            Let's build something next-gen together
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-10">
            I am actively looking for Software Developer, Full-Stack, and AI Intern roles. If you have an opportunity or want to collaborate, feel free to reach out!
          </p>

          {/* Social Links List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
            {socialLinks.map((item, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-1 ${item.glowColor}`}
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">{item.name}</p>
                    <p className="text-white text-xs font-semibold group-hover:text-white transition-colors truncate max-w-[150px]">
                      {item.value}
                    </p>
                  </div>
                </a>

                {/* Custom Neon Tooltip on Hover */}
                <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-[9px] font-bold bg-[#0B0F19] border rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-25 ${item.tooltipGlow}`}>
                  {item.tooltip}
                </span>
              </div>
            ))}
          </div>

          <a
            href="mailto:amoghlkanth@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#050A14] font-bold text-sm hover:opacity-95 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Send Email Directly
            <Send className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          <p>
            Designed & Built with ❤️ by <span className="text-cyan-400 font-semibold font-syne">Amogh HL</span> · {currentYear}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
