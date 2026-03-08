"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cpu, Globe, TrendingUp } from "lucide-react";

const ABOUT_HIGHLIGHTS = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "Engenharia de Dados",
    desc: "Pipelines de dados robustos integrando sistemas ERP (SAP), CRM (Salesforce) e fontes externas com Python e SQL.",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Otimização & Pesquisa Operacional",
    desc: "Engenheiro de Produção, mestrando em Otimização e MBA em andamento em Pesquisa Operacional, com aplicação prática em logística, planejamento e operações.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Analytics & BI",
    desc: "Dashboards executivos, análise de séries temporais, previsão de demanda e geração de relatórios automatizados.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Sistemas de Suporte à Decisão",
    desc: "Simuladores paramétricos, dashboards executivos com KPIs e modelos preditivos integrados diretamente aos fluxos de decisão do negócio.",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
];

function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="sobre" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3 block">
              // about.me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              <span className="text-white font-medium">Engenheiro de Produção pela Universidade de Brasília (UnB)</span>,
              <span className="text-violet-400 font-medium"> mestrando em Inteligência Artificial e Otimização pela Universidade de Brasília</span> e
              com <span className="text-sky-400 font-medium">MBA em andamento em Pesquisa Operacional e Tomada de Decisão</span>
              {" "}pela <span className="text-white font-medium">Universidade Estadual do Vale do Acaraú (UVA)</span>.
            </p>
            <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
              Profissional com <span className="text-emerald-400 font-medium">mais de 6 anos de experiência</span> em análise de dados, ciência de dados, modelagem matemática, estatística, pesquisa operacional e otimização, atuando no desenvolvimento de <span className="text-sky-400 font-medium">soluções escaláveis</span> com inteligência artificial, automação e suporte à decisão.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Text */}
          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                Transformo problemas operacionais complexos em{" "}
                <span className="text-sky-400 font-medium">soluções quantitativas</span>{" "}
                que reduzem custos, aumentam eficiência e orientam{" "}
                <span className="text-emerald-400 font-medium">decisões estratégicas com dados</span>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Atuo na interseção entre{" "}
                <strong className="text-white">Pesquisa Operacional</strong>,{" "}
                <strong className="text-white">Ciência de Dados</strong> e{" "}
                <strong className="text-white">IA aplicada</strong>, desenvolvendo modelos de otimização
                (<strong className="text-white">LP</strong>, <strong className="text-white">MILP</strong>,
                heurísticas, metaheurísticas e métodos estocásticos) para desafios reais
                como metas comerciais, roteirização logística, alocação de recursos,
                planejamento operacional e supply chain.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Também construo soluções com <strong className="text-white">LLMs</strong> e{" "}
                <strong className="text-white">RAG</strong> integradas a bases corporativas
                para converter dados não estruturados em insights acionáveis — da análise
                avançada ao suporte à decisão — além de automações end-to-end integradas a{" "}
                <strong className="text-white">ERPs</strong>,{" "}
                <strong className="text-white">CRMs</strong> e APIs para eliminar
                tarefas manuais e gargalos operacionais.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Minha stack é centrada em <strong className="text-white">Python</strong>,
                com foco em levar modelos analíticos para{" "}
                <span className="text-violet-400 font-medium">produção</span>{" "}
                e gerar <span className="text-sky-400 font-medium">impacto mensurável no negócio</span>.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Python", "IA Aplicada", "OR-Tools", "PuLP", "RAG", "LLMs",
                  "n8n", "Selenium", "FastAPI", "SQL", "Docker",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-400 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Visual card */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="glass rounded-2xl p-8 glow-blue">
                {/* Code snippet decoration */}
                <div className="font-mono text-xs text-slate-500 mb-6 space-y-1">
                  <div>
                    <span className="text-violet-400">def</span>{" "}
                    <span className="text-sky-400">solve_problem</span>
                    <span className="text-white">(data):</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600"># Analyze → Optimize → Deliver</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">result</span>{" "}
                    <span className="text-white">= </span>
                    <span className="text-sky-400">pipeline</span>
                    <span className="text-white">(</span>
                    <span className="text-orange-400">data</span>
                    <span className="text-white">)</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-violet-400">return</span>{" "}
                    <span className="text-emerald-400">result</span>
                    <span className="text-sky-400">.impact</span>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Projetos entregues", value: "20+", color: "text-sky-400" },
                    { label: "Formação", value: "Eng. Produção • Mestrado + MBA em andamento", color: "text-violet-400" },
                    { label: "Experiência", value: "6+ anos", color: "text-emerald-400" },
                    { label: "IA & Automação", value: "10+", color: "text-orange-400" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/3 rounded-xl p-3 border border-white/5"
                    >
                      <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                      <div className="text-xs text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-violet-500/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-sky-500/10 blur-2xl" />
            </div>
          </FadeIn>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_HIGHLIGHTS.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.1}>
              <motion.div
                className={`glass rounded-2xl p-6 border ${item.bg} h-full`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${item.color} mb-4`}>{item.icon}</div>
                <h3 className={`font-semibold text-white text-sm mb-2`}>{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
