"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contato" className="py-28 px-6 relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            // contact.send()
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="gradient-text">Conversar</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Aberto para oportunidades, colaborações e projetos desafiadores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="glass rounded-2xl p-6 space-y-5">
              <h3 className="text-white font-semibold">Informações de Contato</h3>

              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:border-sky-400/40 transition-colors">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">E-mail</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    {PROFILE.email}
                  </p>
                </div>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-400/40 transition-colors">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    Guilherme Henrique Cardoso
                  </p>
                </div>
              </a>

<div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Localização</p>
                  <p className="text-sm text-slate-300">Brasília - DF, Brasil</p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <p className="text-sm text-white font-medium">Disponível</p>
                  <p className="text-xs text-slate-500">
                    Para projetos freelance e oportunidades
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-6 h-full">
              <div className="space-y-4 h-full flex flex-col justify-center">
                <h3 className="text-white font-semibold mb-2 text-center">Contato Rápido</h3>
                <p className="text-slate-400 text-sm text-center">
                  Fale comigo direto no WhatsApp para conversarmos sobre projetos e oportunidades.
                </p>
                <motion.a
                  href="https://wa.me/5561992429950?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </motion.a>
                <p className="text-xs text-center text-slate-600">
                  Número: +55 61 99242-9950
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-400">Guilherme Henrique Cardoso</span>
            {" "}· Construído com{" "}
            <span className="text-sky-400">Next.js</span>,{" "}
            <span className="text-violet-400">TypeScript</span> &{" "}
            <span className="text-emerald-400">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
