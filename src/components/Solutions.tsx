"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Solution = {
  icon: string;
  title: string;
  tagline: string;
  deliverables: string[];
  tags: string[];
  color: string;
  gradient: string;
  accentFrom: string;
};

const SOLUTIONS: Solution[] = [
  {
    icon: "✨",
    title: "Agentes de IA & Workflows",
    tagline: "Sistemas autônomos que raciocinam, lembram e executam tarefas com mínima intervenção humana",
    deliverables: [
      "Agentes conversacionais com memória de longo prazo, perfil dinâmico e base de conhecimento (RAG)",
      "Sistemas de Digital Twin para simulação de cenários e suporte à decisão via IA",
      "Automação de fluxos complexos com N8N: integração entre APIs, gatilhos, agendamento e lógica condicional",
      "Processamento multimodal: documentos, planilhas, PDFs e imagens como entrada para agentes",
    ],
    tags: ["OpenAI", "RAG", "N8N", "LangChain", "Node.js", "Agentes", "Automação"],
    color: "#F472B6",
    gradient: "from-pink-950 via-rose-900 to-pink-900",
    accentFrom: "from-pink-500",
  },
  {
    icon: "📊",
    title: "Ciência de Dados & BI",
    tagline: "Dados brutos transformados em visão estratégica para decisão",
    deliverables: [
      "Dashboards analíticos interativos com filtros, drill-down e KPIs (Power BI, Tableau, Streamlit)",
      "Análises estatísticas, testes de hipóteses e validação de resultados",
      "Modelos de séries temporais e Machine Learning para previsão de demanda",
      "Visualização geoespacial por município, região e território",
    ],
    tags: ["Python", "Power BI", "Tableau", "SQL", "DAX", "Séries Temporais", "Estatística", "Machine Learning", "Deep Learning"],
    color: "#C084FC",
    gradient: "from-purple-950 via-purple-900 to-violet-900",
    accentFrom: "from-purple-500",
  },
  {
    icon: "🎯",
    title: "Sistemas de Suporte à Decisão",
    tagline: "Ferramentas que transformam dados em decisões mais rápidas e fundamentadas",
    deliverables: [
      "Simuladores paramétricos para avaliação de cenários operacionais",
      "Dashboards executivos com KPIs, metas e alertas automáticos",
      "Modelos preditivos integrados a fluxos de decisão do negócio",
      "Plataformas interativas para planejamento comercial e operacional",
    ],
    tags: ["Python", "SQL", "Power BI", "Modelagem Preditiva", "Simulação", "Otimização"],
    color: "#A78BFA",
    gradient: "from-violet-950 via-violet-900 to-purple-900",
    accentFrom: "from-violet-500",
  },
  {
    icon: "🧮",
    title: "Otimização & Pesquisa Operacional",
    tagline: "Modelagem e resolução de problemas complexos de supply chain — do planejamento ao nível de serviço",
    deliverables: [
      "Programação linear e inteira (LP/MIP) para alocação, planejamento e scheduling",
      "Otimização de supply chain no geral (exceto compras): planejamento de malha, políticas de estoque, capacidade, alocação de frota e roteirização (VRP) com restrições de capacidade, janela de tempo, múltiplos depósitos e níveis de serviço",
      "Metaheurísticas: ACO, LNS, PSO, GA — para problemas NP-difíceis em larga escala",
      "Otimização combinatória para planejamento de produção, distribuição, carteira e operações",
    ],
    tags: ["Python", "OR-Tools", "PuLP", "VRP", "MIP", "Metaheurísticas", "Geoespacial"],
    color: "#4ADE80",
    gradient: "from-green-950 via-green-900 to-emerald-900",
    accentFrom: "from-green-500",
  },
  {
    icon: "🔗",
    title: "Automação & Integração",
    tagline: "Processos manuais eliminados e sistemas conectados com precisão",
    deliverables: [
      "Integração entre sistemas (SAP, Salesforce, ERPs e APIs externas)",
      "Geração automática de relatórios executivos visando tomada de decisão",
      "Automação via RPA (RPAS) para processos repetitivos e extração de dados",
      "Scripts de ETL, processamento em lote e agendamento automático",
    ],
    tags: ["Python", "SQL", "RPAS", "APIs", "SAP", "ETL", "Automação"],
    color: "#34D399",
    gradient: "from-cyan-950 via-teal-900 to-cyan-900",
    accentFrom: "from-teal-500",
  },
  {
    icon: "⚡",
    title: "Plataformas Web Full-Stack",
    tagline: "Prototipação rápida de aplicações e automações com desenvolvimento assistido por IA",
    deliverables: [
      "Protótipos funcionais em React / Next.js para validar fluxos de negócio rapidamente",
      "Integração de APIs e backend leve para MVPs e ferramentas internas",
      "Automação de processos e orquestração de tarefas com suporte de IA",
      "Publicação e operação básica com Docker para ambientes controlados",
    ],
    tags: ["React", "Next.js", "Node.js", "FastAPI", "Docker", "MVP"],
    color: "#60A5FA",
    gradient: "from-blue-950 via-blue-900 to-sky-900",
    accentFrom: "from-blue-500",
  },
];

function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className={`h-full glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300`}
        style={{ boxShadow: `0 0 40px ${solution.color}08` }}
      >
        {/* Accent bar */}
        <div className={`h-0.5 bg-gradient-to-r ${solution.accentFrom} to-transparent`} />

        {/* Header */}
        <div className={`relative bg-gradient-to-br ${solution.gradient} p-7 overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <span className="text-4xl block mb-5">{solution.icon}</span>
            <h3 className="text-white font-bold text-xl mb-2 leading-tight">
              {solution.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {solution.tagline}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-5">
          {/* Deliverables */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: solution.color }}
            >
              O que entrego
            </p>
            <ul className="space-y-2.5">
              {solution.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400 leading-snug">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80"
                    style={{ color: solution.color }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
            {solution.tags.map((tag) => (
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

export default function Solutions() {
  const router = useRouter();

  return (
    <section id="solucoes" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-sky-500/4 blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            // o_que_entrego()
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Áreas de atuação com entregas concretas — do problema ao produto final.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.title} solution={s} index={i} />
          ))}
        </div>

        {/* Boa Safra CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-950/30 to-orange-950/20">
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
                      Projetos Internos
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Portfólio Boa Safra
                  </h3>
                  <p className="text-slate-400 max-w-lg">
                    Todas as soluções aplicadas em contexto real na{" "}
                    <strong className="text-white">Boa Safra Sementes</strong> —
                    com detalhes técnicos, dados e resultados de cada projeto.
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
                  Ver Projetos Boa Safra
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
