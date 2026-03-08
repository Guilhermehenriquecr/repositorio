"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Sparkles } from "lucide-react";
import { PROFILE, STATS } from "@/lib/data";

const TYPED_WORDS = [
  "Decisão Orientada a Dados",
  "Cientista de Dados",
  "Mestrando em Inteligência Artificial",
  "Engenheiro de Produção",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Floating particles
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-sky-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(TYPED_WORDS);

  const scrollToProjects = () => {
    document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <Particles />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/5 text-sky-400 text-xs font-medium mb-8"
        >
          <Sparkles className="w-3 h-3" />
          Mestrando em Otimização — Pesquisa Operacional Aplicada
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-white">Guilherme</span>{" "}
          <br className="md:hidden" />
          <span className="gradient-text">Henrique</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-10 mb-6"
        >
          <span className="text-xl md:text-2xl font-light text-slate-300">
            {typed}
            <span className="text-sky-400 animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {PROFILE.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all shadow-lg shadow-sky-500/25"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Ver Soluções
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </motion.button>

          <motion.a
            href="https://wa.me/5561992429950?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle className="w-4 h-4" />
            Entrar em Contato
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              className="glass rounded-xl px-4 py-4 text-center"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-600 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
