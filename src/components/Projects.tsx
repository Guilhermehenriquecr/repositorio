"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import {
  ExternalLink,
  Lock,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { useRouter } from "next/navigation";

type Category = "Todos" | "Otimização" | "Dados" | "Full-Stack" | "Análise";
const CATEGORIES: Category[] = ["Todos", "Otimização", "Dados", "Full-Stack", "Análise"];

// ── Card compacto — usado na seção pública ──────────────────────────────────
function CompactProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <motion.div
        className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        style={{ boxShadow: `0 0 30px ${project.color}0d` }}
      >
        {/* Compact header */}
        <div className={`relative bg-gradient-to-br ${project.gradient} px-6 py-5 overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)",
            }}
          />
          <div className="relative z-10 flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">{project.icon}</span>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-base leading-tight">
                {project.title}
              </h3>
              <p className="text-white/55 text-xs mt-0.5 truncate">
                {project.subtitle}
              </p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-black/30 text-white/60 border border-white/10 flex-shrink-0">
              {project.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-slate-500 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectCard({ project, index, inRestrictedArea = false }: { project: Project; index: number; inRestrictedArea?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <motion.div
        className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        style={{
          boxShadow: `0 0 40px ${project.color}10`,
        }}
      >
        {/* Card Header */}
        <div
          className={`relative bg-gradient-to-br ${project.gradient} p-8 overflow-hidden`}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)",
            }}
          />

          <div className="relative z-10 flex items-start justify-between mb-4">
            <span className="text-4xl">{project.icon}</span>
            <div className="flex items-center gap-2">
              {project.isRestricted && !inRestrictedArea && (
                <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-black/30 text-amber-400 border border-amber-400/30">
                  <Lock className="w-3 h-3" />
                  Restrito
                </span>
              )}
              <span className="text-xs px-2 py-1 rounded-full bg-black/30 text-white/70 border border-white/10">
                {project.category}
              </span>
            </div>
          </div>

          <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
          <p className="text-white/60 text-sm">{project.subtitle}</p>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-slate-500 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expand section */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/5 pt-5 mb-5">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.longDescription}
                  </p>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    Destaques Técnicos
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: project.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  Menos detalhes
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  Mais detalhes
                </>
              )}
            </button>

            {project.isRestricted && !inRestrictedArea ? (
              <span className="flex items-center gap-1.5 text-xs text-amber-400/60 border border-amber-400/20 px-3 py-1.5 rounded-lg cursor-not-allowed">
                <Lock className="w-3 h-3" />
                Acesso Restrito
              </span>
            ) : (
              <motion.button
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all"
                style={{
                  borderColor: `${project.color}40`,
                  color: project.color,
                  backgroundColor: `${project.color}10`,
                }}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: `${project.color}20`,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Ver Projeto
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Category>("Todos");
  const router = useRouter();

  const publicProjects = PROJECTS.filter((p) => !p.isRestricted);

  const filteredPublic =
    filter === "Todos"
      ? publicProjects
      : publicProjects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            // projects.forEach()
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Soluções reais desenvolvidas para problemas de dados, otimização e gestão no agronegócio.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <Filter className="w-4 h-4 text-slate-500 mr-1" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Public projects grid — compact cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {filteredPublic.map((project, i) => (
            <CompactProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Restricted section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-950/30 to-orange-950/20">
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(251,191,36,0.1) 20px, rgba(251,191,36,0.1) 40px)",
              }}
            />
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
                      Área Restrita
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Projetos Internos — Boa Safra
                  </h3>
                  <p className="text-slate-400 max-w-lg">
                    Projetos desenvolvidos internamente para a{" "}
                    <strong className="text-white">Boa Safra Sementes</strong>: simulador
                    de preços multi-cultura, painel gerencial de pedidos (SAP + Salesforce)
                    e demais ferramentas proprietárias.
                  </p>
                  <p className="text-amber-400/60 text-sm mt-3">
                    🔒 Acesso disponível mediante senha
                  </p>
                </div>
                <motion.button
                  onClick={() => router.push("/boasafra")}
                  className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400/50 font-semibold text-sm transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Lock className="w-4 h-4" />
                  Acessar Área Boa Safra
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
