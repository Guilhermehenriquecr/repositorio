"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowLeft, Filter, CheckCircle2, ShieldCheck } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/Projects";
import Link from "next/link";

type Category = "Todos" | "Otimização" | "Dados" | "Full-Stack" | "Análise";
const CATEGORIES: Category[] = ["Todos", "Otimização", "Dados", "Full-Stack", "Análise"];

const SECRET = "boasafra2026";

export default function BoaSafraPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [filter, setFilter] = useState<Category>("Todos");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("boasafra_unlocked") === "true") {
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  const tryUnlock = () => {
    if (password === SECRET) {
      setUnlocked(true);
      sessionStorage.setItem("boasafra_unlocked", "true");
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const filtered =
    filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Background */}
      <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-600/4 blur-[120px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!unlocked ? (
          /* ── GATE DE SENHA ── */
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen flex items-center justify-center p-6"
          >
            <Link
              href="/"
              className="absolute top-6 left-6 flex items-center gap-2 text-sm text-slate-600 hover:text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao portfólio
            </Link>

            <motion.div
              animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-md"
            >
              <div className="glass rounded-2xl border border-white/10 p-10 text-center shadow-2xl">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mx-auto mb-7">
                  <Lock className="w-9 h-9 text-amber-400" />
                </div>

                <h1 className="text-2xl font-bold text-white mb-1">Área Restrita</h1>
                <p className="text-slate-500 text-sm mb-1">Projetos Internos</p>
                <p className="text-amber-400 font-semibold text-sm mb-8">
                  🌱 Boa Safra Sementes
                </p>

                <div className="flex gap-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
                    placeholder="Senha de acesso..."
                    autoFocus
                    className={`flex-1 px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-slate-600 outline-none focus:ring-1 transition-all ${
                      error
                        ? "border-red-500/50 focus:ring-red-500/30"
                        : "border-white/10 focus:border-amber-500/50 focus:ring-amber-500/20"
                    }`}
                  />
                  <motion.button
                    onClick={tryUnlock}
                    className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Entrar
                  </motion.button>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-3"
                    >
                      Senha incorreta. Tente novamente.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* ── PÁGINA DE PROJETOS ── */
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative py-16 px-6"
          >
            <div className="max-w-6xl mx-auto">
              {/* Back link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao portfólio
              </Link>

              {/* Header */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-mono tracking-widest uppercase">
                    // acesso_concedido
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  Projetos{" "}
                  <span className="text-amber-400">Boa Safra</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl">
                  Todos os projetos desenvolvidos internamente para a Boa Safra Sementes
                  — de otimização logística a ferramentas de gestão comercial.
                </p>
              </div>

              {/* Filter */}
              <div className="flex flex-wrap items-center gap-2 mb-10">
                <Filter className="w-4 h-4 text-slate-500 mr-1" />
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      filter === cat
                        ? "bg-amber-500 text-black shadow-lg shadow-amber-500/25"
                        : "bg-white/5 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                <span className="ml-auto text-slate-600 text-xs">
                  {filtered.length} projeto{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Projects grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {filtered.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    inRestrictedArea
                  />
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-16 flex items-center justify-center gap-2 text-slate-700 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Sessão autenticada · Boa Safra Sementes — Área Interna
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
