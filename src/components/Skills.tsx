"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/data";

function SkillTag({
  name,
  delay,
}: {
  name: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.span
      ref={ref}
      className="px-3 py-1.5 rounded-lg text-xs font-medium border bg-white/5 border-white/10 text-slate-400 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const TECH_STACK = [
  { name: "Python", color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
  { name: "TypeScript", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
  { name: "SQL", color: "bg-orange-500/10 border-orange-500/30 text-orange-400" },
  { name: "FastAPI", color: "bg-teal-500/10 border-teal-500/30 text-teal-400" },
  { name: "React", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
  { name: "Next.js", color: "bg-white/5 border-white/20 text-white" },
  { name: "Streamlit", color: "bg-red-500/10 border-red-500/30 text-red-400" },
  { name: "OR-Tools", color: "bg-violet-500/10 border-violet-500/30 text-violet-400" },
  { name: "Docker", color: "bg-blue-600/10 border-blue-600/30 text-blue-300" },
  { name: "Azure", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
  { name: "Pandas", color: "bg-green-500/10 border-green-500/30 text-green-400" },
  { name: "NumPy", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
  { name: "Plotly", color: "bg-pink-500/10 border-pink-500/30 text-pink-400" },
  { name: "PostgreSQL", color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" },
  { name: "Redis", color: "bg-red-600/10 border-red-600/30 text-red-300" },
  { name: "OpenAI", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-3 block">
              // skills.map()
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Habilidades &{" "}
              <span className="gradient-text">Tecnologias</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Stack técnico construído ao longo de projetos reais com impacto mensurável.
            </p>
          </div>
        </FadeIn>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {SKILLS.map((group, gi) => (
            <FadeIn key={group.category} delay={0.1 + gi * 0.1}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, si) => (
                    <SkillTag
                      key={skill.name}
                      name={skill.name}
                      delay={0.2 + gi * 0.1 + si * 0.08}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech cloud */}
        <FadeIn delay={0.3}>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-slate-400 mb-5 text-center uppercase tracking-widest">
              Todas as Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {TECH_STACK.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${tech.color} cursor-default`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -1 }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
