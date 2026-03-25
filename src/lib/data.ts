export const PROFILE = {
  name: "Guilherme Henrique Cardoso",
  role: "Engenheiro de Produção | IA, Dados & Decisão Estratégica",
  roleEn: "AI, Data & Decision Intelligence Professional",
  tagline:
    "Engenheiro de Produção, mestrando em Otimização e MBA em andamento em Pesquisa Operacional e Tomada de Decisão (Universidade Estadual do Vale do Acaraú - UVA). Há 6+ anos aplico modelos matemáticos, estatísticos e de otimização para resolver problemas complexos em escala com IA, automação e suporte à decisão.",
  location: "Brasil",
  email: "guicardoso9@gmail.com",
  github: "https://github.com/guilherme-resende",
  linkedin: "https://linkedin.com/in/guihenrique",
};

export type Tag =
  | "Python"
  | "Streamlit"
  | "FastAPI"
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Otimização"
  | "VRP"
  | "OR-Tools"
  | "Dados"
  | "Séries Temporais"
  | "Machine Learning"
  | "SQL"
  | "Docker"
  | "Node.js"
  | "OpenAI"
  | "Playwright"
  | "Selenium"
  | "RPA";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  longDescription: string;
  tags: Tag[];
  icon: string;
  color: string;
  gradient: string;
  highlights: string[];
  isRestricted: boolean;
  category: "Otimização" | "Dados" | "Full-Stack" | "Análise" | "Automação";
};

export const PROJECTS: Project[] = [
  {
    id: "vrp-optimizer",
    title: "Roteirizador — Metaheurístico",
    subtitle: "Sistema full-stack de roteirização logística com múltiplos solvers",
    summary:
      "Sistema full-stack que lê dados brutos do SAP, geocodifica endereços automaticamente, otimiza rotas de entrega com OR-Tools e metaheurísticas (ACO, PSO, GA) e gera o template de importação de volta ao SAP — reduzindo custos de frete em até 30%.",
    description:
      "Pipeline automatizado de roteirização: entrada via exportação SAP → geocodificação com fallback multi-provedor → otimização VRP com comparação de solvers → saída em template SAP pronto para importação. Arquitetura SaaS com frontend Next.js, API NestJS, worker Python e fila Redis.",
    longDescription:
      "O ponto de partida é um arquivo exportado do SAP com os pedidos de entrega. O sistema geocodifica automaticamente todos os endereços (ViaCEP + Google Routes API + fallbacks OSRM/TomTom), executa múltiplos solvers em paralelo — OR-Tools, ACO, PSO e Algoritmo Genético — e seleciona a melhor solução. O resultado sai como um template Excel pronto para reimportação no SAP, fechando o ciclo sem intervenção manual. A arquitetura SaaS suporta múltiplas bases (filiais) simultâneas com fila Redis gerenciando os jobs de otimização.",
    tags: ["Python", "OR-Tools", "NestJS", "Next.js", "Otimização", "SAP"],
    icon: "🗺️",
    color: "#2E7D32",
    gradient: "from-green-900 to-green-700",
    highlights: [
      "Integração ponta a ponta com SAP: leitura de pedidos e geração de template de importação",
      "4 solvers comparados automaticamente: OR-Tools, ACO, PSO e Algoritmo Genético",
      "Geocodificação com fallback em cadeia: ViaCEP → Google Routes → OSRM → TomTom",
      "Arquitetura SaaS: Next.js + NestJS + worker Python + Redis + Postgres",
      "Suporte a múltiplas filiais com restrições de capacidade por veículo",
    ],
    isRestricted: false,
    category: "Otimização",
  },
  {
    id: "eficiencia-producao",
    title: "Plataforma de Forecast & Performance Comercial",
    subtitle: "Sistema web full-stack de gestão de forecast para o agronegócio",
    summary:
      "Plataforma full-stack que desdobra metas comerciais por praça de RTV com base em dados de mercado, balanceando o mix de cultivares de forma estratégica. Inclui motor de scoring, simulador de cenários, mapa interativo e pipeline ETL — substituindo integralmente planilhas manuais.",
    description:
      "Sistema de desdobramento de metas por praça de RTV: usa dados de mercado para distribuir cotas por cultivar/cidade de forma balanceada, acompanha o realizado vs. planejado e classifica automaticamente cada representante por hit rate, aderência ao mix e desvio de portfólio.",
    longDescription:
      "Sistema inteligente que substitui planilhas manuais para definir e acompanhar metas de vendas de forma automática e justa, considerando o potencial de cada região. A plataforma distribui objetivos para cada representante, avalia o desempenho com indicadores claros (mostrando se está bom, médio ou ruim), permite simular mudanças de metas e ver o impacto nos resultados em tempo real, além de exibir um mapa com o progresso por município e verificar se os dados utilizados estão corretos.",
    tags: ["Next.js", "TypeScript", "Python", "Docker", "Dados", "ETL"],
    icon: "📈",
    color: "#6A1B9A",
    gradient: "from-purple-900 to-purple-700",
    highlights: [
      "Motor de scoring proprietário: hit rate, aderência ao mix e desvio de portfólio por RTV",
      "Simulador de cenários com recálculo instantâneo de volume e market share",
      "Pipeline Python de ETL com normalização de nomes e regras de negócio",
      "Mapa Leaflet interativo com atingimento e volumes por município",
      "Módulo de diagnóstico de qualidade dos dados com alertas de inconsistências",
    ],
    isRestricted: false,
    category: "Análise",
  },
  {
    id: "soja-clima",
    title: "Soja Clima — Gestão de Carteira",
    subtitle: "Plataforma de carteira comercial com previsão climática",
    summary:
      "Aplicação web full-stack com mapa interativo (Leaflet), integração com API climática e análise inteligente via OpenAI. Backend Express + SQLite, frontend React.",
    description:
      "Sistema full-stack React + Express com mapa interativo (Leaflet), integração OpenAI e previsão de chuva para gestão da carteira de vendas de soja.",
    longDescription:
      "Aplicação web completa com backend Express + SQLite e frontend React. Incorpora mapas interativos com Leaflet para visualização geoespacial da carteira, integração com OpenAI para análise inteligente de dados e previsão climática para auxílio na tomada de decisão comercial.",
    tags: ["React", "Node.js", "OpenAI", "Dados", "Docker"],
    icon: "🌦️",
    color: "#00838F",
    gradient: "from-cyan-900 to-cyan-700",
    highlights: [
      "Mapas interativos com Leaflet para carteira de clientes",
      "Integração com OpenAI para insights automatizados",
      "Previsão de chuva integrada ao planejamento comercial",
      "Deploy em Docker para produção",
      "Autenticação JWT e segurança com Helmet",
    ],
    isRestricted: false,
    category: "Full-Stack",
  },
  {
    id: "rpa-cargas-agendamento",
    title: "Automação de Agendamento de Cargas",
    subtitle: "RPA full-stack integrando ERP Safra Control e Portal Boa Safra",
    summary:
      "Aplicação web full-stack de automação robótica (RPA) que realiza login automático em dois sistemas, navega pelas interfaces, extrai cargas com 'Agendamento Pendente' e consolida tudo em uma interface responsiva — eliminando um processo inteiramente manual.",
    description:
      "Sistema RPA com Next.js + Playwright que automatiza o fluxo completo entre o ERP interno Safra Control e o Portal Boa Safra: login headless, navegação, extração de dados e consolidação em UI com feedback visual em tempo real.",
    longDescription:
      "A ferramenta substitui um processo manual de extração e cruzamento de dados entre dois sistemas distintos: o ERP interno Safra Control e o Portal Boa Safra. O sistema autentica automaticamente em ambos os portais, navega por suas interfaces, filtra as cargas com status 'Agendamento Pendente' e consolida os resultados em uma interface clara e responsiva. Internamente, sessões Playwright persistem entre requisições HTTP para evitar re-login desnecessário. O fluxo opera em duas etapas (listar → selecionar → extrair) com race conditions resolvidas via Promise.all + waitForURL. A interface exibe indicadores de progresso animados, duplo bloco de credenciais e glassmorphism — tudo em Next.js 16 App Router + TypeScript no mesmo projeto, sem backend separado.",
    tags: ["Next.js", "TypeScript", "Playwright", "RPA"],
    icon: "🚛",
    color: "#01579B",
    gradient: "from-sky-950 to-sky-800",
    highlights: [
      "Sessões Playwright reutilizáveis entre requisições HTTP — sem re-login desnecessário",
      "Login automático e navegação headless em dois sistemas distintos (ERP + Portal)",
      "Extração de cargas com status 'Agendamento Pendente' com fluxo em duas etapas",
      "Race conditions resolvidas via Promise.all + waitForURL",
      "UI com glassmorphism, animações e indicadores de progresso em tempo real",
    ],
    isRestricted: true,
    category: "Automação",
  },
  // PROJETOS RESTRITOS — Boa Safra
  {
    id: "atenas-boasafra",
    title: "Atenas — Plataforma de Gestão",
    subtitle: "Central de inteligência para carteira e royalties",
    summary:
      "App multi-módulo para análise de coerência de dados de pedidos, verificação de campos obrigatórios e confronto entre sistemas.",
    description:
      "App Streamlit multi-módulo para análise de coerência da carteira de pedidos (Royalties, TSI, Germoplasma), verificação de campos nulos no ZSD 072 e confronto de dados entre sistemas.",
    longDescription:
      "Sistema desenvolvido em Streamlit com três módulos integrados: Gestão de Pedidos da Carteira (análise de coerência de Royalties, TSI e Germoplasma), Verificação de Nulos (identificação de campos obrigatórios ausentes no relatório ZSD 072) e Confronto de Dados (cruzamento entre bases). Inclui análise de royalties e cálculo de juros sobre pedidos.",
    tags: ["Python", "Streamlit", "Dados", "SQL"],
    icon: "🏛️",
    color: "#7B1FA2",
    gradient: "from-violet-900 to-violet-700",
    highlights: [
      "Análise automática de coerência de Royalties, TSI e Germoplasma",
      "Identificação de campos nulos no relatório ZSD 072",
      "Confronto de dados entre bases de pedidos",
      "Cálculo de juros sobre royalties em atraso",
      "Interface multi-módulo com navegação integrada por páginas",
    ],
    isRestricted: true,
    category: "Dados",
  },
  {
    id: "colheita-bs",
    title: "Colheita BS — Dashboard Logístico",
    subtitle: "Pipeline automatizado de monitoramento de safra",
    summary:
      "Pipeline ETL agendado com dashboard de monitoramento de safra, cálculo de distâncias campo-unidade com cache geoespacial e atualização automática programada.",
    description:
      "Dashboard logístico de colheita com pipeline ETL automatizado, análise de produtividade estimada por município, cálculo de distâncias campo-unidade e agendamento automático de atualizações.",
    longDescription:
      "Sistema Streamlit de monitoramento da safra 25/26 com pipeline ETL que processa dados reais de previsão de colheita. Calcula produtividade estimada (kg) por cultivar e município, determina distâncias entre campos e unidades de beneficiamento com cache geoespacial, e executa automaticamente 2× por dia (06h e 18h) e às segundas 08h via Agendador de Tarefas / cron.",
    tags: ["Python", "Streamlit", "Dados", "Séries Temporais"],
    icon: "🌾",
    color: "#F57F17",
    gradient: "from-yellow-900 to-amber-800",
    highlights: [
      "Pipeline ETL agendado automaticamente às 06h, 18h e segunda-feira às 08h",
      "Análise de produtividade estimada (kg) por cultivar e município",
      "Cálculo de distâncias campo → unidade de beneficiamento com cache",
      "Dashboard de logística com visualização geoespacial de safra",
      "Dados reais da safra 25/26 com atualização incremental",
    ],
    isRestricted: true,
    category: "Dados",
  },
  {
    id: "simulador-preco",
    title: "Simulador de Preço — Boa Safra",
    subtitle: "Plataforma de precificação de sementes multi-cultura",
    summary:
      "Sistema full-stack de simulação de preços multi-cultura com motor de cálculo para germoplasma, TSI, frete CIF/FOB e royalties por cultivar e região.",
    description:
      "Sistema full-stack (FastAPI + React/Vite) para simulação de preços de sementes com cálculo de germoplasma, TSI, frete CIF/FOB e royalties por cultivar e região.",
    longDescription:
      "Simulador de precificação completo para 6 culturas (Soja, Milho, Sorgo, Feijão, Trigo, Arroz). Backend FastAPI com banco SQLite, frontend React+Vite. Calcula preço final integrando tabelas de germoplasma por escritório, tabelas TSI, frete CIF (por faixa de distância) ou FOB (retirada em CD), e royalties por cultivar/região com matching inteligente.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "SQL", "Dados"],
    icon: "💰",
    color: "#E65100",
    gradient: "from-orange-900 to-orange-700",
    highlights: [
      "6 culturas: Soja, Milho, Sorgo, Feijão, Trigo, Arroz",
      "Cálculo automático de royalties por cultivar/região",
      "Frete CIF/FOB com tabelas reais de distância",
      "Matching inteligente de cultivares para royalties",
      "API RESTful com FastAPI e React frontend",
    ],
    isRestricted: true,
    category: "Full-Stack",
  },
  {
    id: "painel-pedidos",
    title: "Painel Gerencial de Pedidos",
    subtitle: "Integração Salesforce + SAP para gestão de carteira",
    summary:
      "Ferramenta de BI para análise de saúde da carteira com integração automática de relatórios, cálculo de volumes e geração de relatório Excel executivo multi-aba.",
    description:
      "Dashboard Streamlit para análise de saúde da carteira de pedidos integrando Salesforce e SAP, com alertas automatizados e relatórios Excel executivos.",
    longDescription:
      "Ferramenta de Business Intelligence que processa dois arquivos (relatório Salesforce + exportação SAP), realiza merge automático, calcula volumes (Bag/Saco com conversão por embalagem), identifica alertas (perdidos com OV, fases desatualizadas, cadastro incompleto) e gera relatório Excel premium com abas de resumo executivo, dados detalhados e alertas.",
    tags: ["Python", "Streamlit", "Dados", "SQL"],
    icon: "📊",
    color: "#1B5E20",
    gradient: "from-green-950 to-green-800",
    highlights: [
      "Integração Salesforce + SAP em um clique",
      "Detecção automática de inconsistências na carteira",
      "Relatório Excel premium com 5 abas estruturadas",
      "KPIs: volume Bag/Saco, valor total, funil por fase",
      "Alertas: pedidos perdidos com OV, fases desatualizadas",
    ],
    isRestricted: true,
    category: "Dados",
  },
  {
    id: "rpa-agendamento",
    title: "RPA — Automação de Agendamento",
    subtitle: "Automação robótica de cadastro em lote no Portal Boa Safra",
    summary:
      "Sistema RPA que elimina o cadastro manual de grades de agendamento no portal: o operador monta a lista de tarefas na interface web e o sistema preenche tudo automaticamente com feedback em tempo real.",
    description:
      "Ferramenta de automação robótica (RPA) com interface web (Next.js + FastAPI) que automatiza o cadastro em lote de grades de agendamento no Portal Boa Safra — transformando horas de trabalho manual repetitivo em minutos.",
    longDescription:
      "O cadastro manual de grades de agendamento no portal exigia preencher campo a campo para cada grade, um processo extremamente repetitivo e propenso a erros. O sistema resolve isso em duas camadas: uma interface web moderna onde o operador faz login e monta a fila de tarefas (centro, datas, posições, prazo de eliminação), e um backend Python que abre um navegador automatizado, realiza login, navega até a página de agendamento e preenche cada grade em sequência com logs em tempo real via streaming. Usa Undetected ChromeDriver para contornar proteções anti-bot, preenchimento de datas via clipboard com fallbacks, e tratamento inteligente de falhas com retentativas automáticas e screenshots de debug.",
    tags: ["Python", "FastAPI", "Selenium", "Next.js", "TypeScript", "RPA"],
    icon: "⚙️",
    color: "#0277BD",
    gradient: "from-blue-950 to-blue-800",
    highlights: [
      "Undetected ChromeDriver para contornar proteções anti-bot do portal",
      "Execução em lote com fila de tarefas e progresso em tempo real via SSE",
      "Preenchimento robusto de datas via clipboard com múltiplos fallbacks",
      "Retentativas automáticas e screenshots de debug em caso de falha",
      "Interface web (Next.js) + versão desktop (Tkinter) — dois modos de uso",
    ],
    isRestricted: true,
    category: "Automação",
  },
];

export const SKILLS = [
  {
    category: "Linguagens & Frameworks",
    icon: "💻",
    items: [
      { name: "Python", level: 88 },
      { name: "TypeScript / JavaScript", level: 67 },
      { name: "SQL", level: 72 },
    ],
  },
  {
    category: "Dados & Analytics",
    icon: "📊",
    items: [
      { name: "Pandas / NumPy", level: 86 },
      { name: "Séries Temporais", level: 77 },
      { name: "Dashboards (Tableau, Power BI, Streamlit)", level: 79 },
      { name: "ETL / Pipelines de Dados", level: 82 },
    ],
  },
  {
    category: "Otimização & IA",
    icon: "🧮",
    items: [
      { name: "Google OR-Tools (VRP/CP-SAT)", level: 85 },
      { name: "Metaheurísticas (ACO, PSO, GA, LNS)", level: 82 },
      { name: "PuLP / Programação Linear (LP/MIP)", level: 78 },
      { name: "Otimização Multi-objetivo (NSGA-II / Pareto)", level: 71 },
      { name: "Programação Dinâmica", level: 74 },
      { name: "Otimização Estocástica & Robusta", level: 67 },
      { name: "Machine Learning Aplicado", level: 73 },
    ],
  },
  {
    category: "Matemática & Estatística",
    icon: "📐",
    items: [
      { name: "Cálculo Diferencial e Integral", level: 71 },
      { name: "Álgebra Linear", level: 74 },
      { name: "Pesquisa Operacional", level: 85 },
      { name: "Estatística & Testes de Hipóteses", level: 78 },
      { name: "Probabilidade & Inferência", level: 73 },
    ],
  },
  {
    category: "Web & Cloud",
    icon: "☁️",
    items: [
      { name: "FastAPI / Node.js", level: 62 },
      { name: "React / Next.js", level: 58 },
      { name: "Docker / Deploy", level: 60 },
    ],
  },
];

export const STATS = [
  { label: "Projetos Entregues", value: "20+", icon: "🚀" },
  { label: "Anos de Experiência", value: "6+", icon: "📅" },
  { label: "Frentes de Especialidade", value: "4", icon: "🧭" },
  { label: "Projetos com IA & Automação", value: "10+", icon: "🔁" },
];
