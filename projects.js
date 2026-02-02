// ============================================
// PROJETOS REAIS DO ANDERSON PACHECO
// ============================================
// IMPORTANTE: Usar const em vez de var/let para evitar conflitos

const myProjectsData = [
  {
    id: 1,
    title: "Data Analytics Pulse",
    description: "Dashboard de analytics com visualizações de dados em tempo real. Interface moderna para análise de métricas e KPIs.",
    image: "fas fa-chart-line",
    tags: ["web", "analytics", "javascript"],
    category: "web",
    links: {
      demo: "https://data-analytics-pulse.vercel.app/",
      github: "https://github.com/AndersonDosReisPacheco/Data-Analytics-Pulse"
    },
    details: {
      technologies: ["(Frontend)","React 18", "Vite", "Zustand (Gerenciamento de estado)", "Axios (HTTP Client)", "React Router DOM", "CSS Moderno", "Deploy: Vercel", "JavaScript", "HTML5", "(backend)","Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "JWT Authentication", "CORS configurado corretamente", "Deploy: Render"],
      features: [
        "Dashboard analítico completo com visualização de dados em tempo real",

"Gráficos interativos (linhas, barras, áreas, indicadores e comparativos)",

"Atualização dinâmica dos dados sem recarregar a página",

"Filtros avançados por período, categoria, status e métricas personalizadas",

"KPIs dinâmicos com métricas de desempenho e tendências",

"Exportação de dados e relatórios para CSV para análise externa",

"Sistema de visualização responsiva para desktop, tablet e mobile",

"Modo escuro (dark mode) com alternância de tema",

"Interface UI/UX moderna focada em usabilidade e clareza de informações",

"Estrutura preparada para integração com APIs externas e múltiplas fontes de dados",

"Organização de dados para apoio à tomada de decisão baseada em métricas"
      ],
      client: "Projeto Pessoal",
      year: "2026"
    }
  },
  {
    id: 2,
    title: "EventFlow",
    description: "Sistema de Auditoria & Rastreamento Inteligente",
    image: "fas fa-calendar-alt",
    tags: ["web", "management", "javascript", "TypeScript"],
    category: "web",
    links: {
      demo: "https://event-flow-psi.vercel.app/",
      github: "https://github.com/AndersonDosReisPacheco/EventFlow"
    },
    details: {
      technologies: ["(Backend)","TypeScript", "PostgreSQL", "Node.js", "Express.js", "Prisma ORM", "JWT (Access + Refresh Tokens)", "Bcrypt (hash de senhas)", "Zod (validação de dados)", "Helmet (segurança HTTP)", "Morgan (logs)", "CORS", "(Frontend)",  "React.js", "TypeScript", "Vite", "React Router DOM", "Axios / Fetch API", "Chart.js / React-ChartJS-2", "Framer Motion (animações)", "React Hook Form + Zod", "LocalStorage"],
      features: [
        "Agendamento inteligente de eventos com validação avançada de datas, horários e conflitos",

"Gestão completa de participantes (cadastro, edição, exclusão e controle de presença)",

"Controle de status de eventos (ativo, concluído, cancelado)",

"Notificações automáticas por e-mail para confirmação, lembretes e atualizações de eventos",

"Sistema de auditoria e rastreamento de ações (logs de criação, atualização e alterações)",

"Dashboard administrativo para visualização e gerenciamento centralizado",

"Relatórios detalhados de participação, frequência e histórico de eventos",

"Interface moderna, intuitiva e totalmente responsiva",

"Integração front-end e back-end via APIs REST",

"Validações de dados no front-end e back-end para garantir integridade e consistência"
      ],
      client: "Projeto Acadêmico",
      year: "2026"
    }
  },
  {
    id: 3,
    title: "University Stellares",
    description: "Site institucional para universidade com informações acadêmicas e sistema de contato integrado.",
    image: "fas fa-graduation-cap",
    tags: ["web", "education", "htmlcss"],
    category: "web",
    links: {
      demo: "https://andersondosreispacheco.github.io/University-Stellares/",
      github: "https://github.com/AndersonDosReisPacheco/University-Stellares"
    },
    details: {
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      features: [
        "Layout totalmente responsivo",
        "Seções informativas completas sobre cursos",
        "Galeria de imagens interativa",
        "Formulário de contato funcional",
        "Otimização para SEO"
      ],
      client: "Projeto Pessoal",
      year: "2026"
    }
  },
  {
    id: 4,
    title: "Restaurante Mestre Cuca",
    description: "Site para restaurante com cardápio digital, reservas online e informações do estabelecimento.",
    image: "fas fa-utensils",
    tags: ["web", "food", "business"],
    category: "web",
    links: {
      demo: "https://andersondosreispacheco.github.io/Restaurante-Mestre-Cuca/",
      github: "https://github.com/AndersonDosReisPacheco/Restaurante-Mestre-Cuca"
    },
    details: {
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      features: [
        "Cardápio digital com categorias",
        "Sistema de reservas online",
        "Galeria de pratos em alta qualidade",
        "Localização com Google Maps integrado",
        "Design moderno e atrativo"
      ],
      client: "Projeto Comercial Simulado",
      year: "2026"
    }
  },
  {
    id: 5,
    title: "Challenge Liter Alura",
    description: "API REST para sistema de biblioteca virtual com gestão de livros, autores e empréstimos.",
    image: "fas fa-book-open",
    tags: ["java", "api", "backend", "spring"],
    category: "java",
    links: {
      demo: null,
      github: "https://github.com/AndersonDosReisPacheco/ChallengeLiterAlura"
    },
    details: {
      technologies: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "JWT"],
      features: [
        "API RESTful completa com documentação Swagger",
        "Autenticação e autorização com JWT",
        "CRUD completo de livros e autores",
        "Sistema de empréstimos com datas de devolução",
        "Validação avançada de dados"
      ],
      client: "Projeto Acadêmico Alura",
      year: "2026"
    }
  },
  {
    id: 6,
    title: "Challenge Forum Hub",
    description: "API para sistema de fórum de discussões com tópicos, respostas, votos e categorias.",
    image: "fas fa-comments",
    tags: ["java", "api", "backend", "spring"],
    category: "java",
    links: {
      demo: null,
      github: "https://github.com/AndersonDosReisPacheco/Challenge-ForumHub-Alura"
    },
    details: {
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "Spring Security"],
      features: [
        "Sistema completo de fórum com threads e replies",
        "Sistema de votação em posts",
        "Categorias e tags para organização",
        "Migrações de banco automatizadas",
        "API seguindo padrões RESTful"
      ],
      client: "Projeto Acadêmico Alura",
      year: "2026"
    }
  },
  {
    id: 7,
    title: "MedCenter Site",
    description: "Site institucional para clínica médica com informações de serviços, equipe e agendamentos.",
    image: "fas fa-hospital",
    tags: ["web", "health", "institutional"],
    category: "web",
    links: {
      demo: "https://andersondosreispacheco.github.io/MeuProjetoSiteMedCenter/",
      github: "https://github.com/AndersonDosReisPacheco/MeuProjetoSiteMedCenter"
    },
    details: {
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      features: [
        "Design profissional para área da saúde",
        "Informações detalhadas sobre especialidades",
        "Galeria da equipe médica",
        "Formulário de agendamento online",
        "Layout responsivo e acessível"
      ],
      client: "Projeto Institucional Simulado",
      year: "2026"
    }
  },
  {
    id: 8,
    title: "Styles Shop",
    description: "E-commerce de moda com catálogo completo, carrinho de compras e checkout seguro.",
    image: "fas fa-shopping-bag",
    tags: ["web", "ecommerce", "shopping"],
    category: "web",
    links: {
      demo: "https://andersondosreispacheco.github.io/MeuProjetoSiteStylesShop/",
      github: "https://github.com/AndersonDosReisPacheco/MeuProjetoSiteStylesShop"
    },
    details: {
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      features: [
        "Catálogo de produtos com busca e filtros",
        "Carrinho de compras persistente",
        "Simulação de checkout com validação",
        "Galeria de produtos com zoom",
        "Design moderno e responsivo"
      ],
      client: "Projeto Comercial Simulado",
      year: "2026"
    }
  },
  {
    id: 9,
    title: "Conversor de Moedas API",
    description: "API para conversão de moedas em tempo real com suporte a múltiplas currencies.",
    image: "fas fa-money-bill-wave",
    tags: ["java", "api", "backend", "spring"],
    category: "java",
    links: {
      demo: null,
      github: "https://github.com/AndersonDosReisPacheco/ConversorDeMoedas"
    },
    details: {
      technologies: ["Java", "Spring Boot", "External API Integration", "JSON"],
      features: [
        "Conversão entre mais de 150 moedas",
        "Integração com API de cotações em tempo real",
        "Histórico de conversões realizadas",
        "Validação robusta de parâmetros",
        "Endpoint RESTful documentado"
      ],
      client: "Projeto Acadêmico Alura",
      year: "2026"
    }
  },
  {
    id: 10,
    title: "Amigo Secreto Online",
    description: "Aplicação web para sorteio de amigo secreto com interface interativa e animações.",
    image: "fas fa-gift",
    tags: ["web", "game", "javascript"],
    category: "web",
    links: {
      demo: "https://andersondosreispacheco.github.io/Amigo-Secreto/",
      github: "https://github.com/AndersonDosReisPacheco/Amigo-Secreto"
    },
    details: {
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      features: [
        "Sorteio aleatório com algoritmo justo",
        "Cadastro de participantes com validação",
        "Interface interativa com animações",
        "Design temático para festas e eventos",
        "Compartilhamento de resultados"
      ],
      client: "Projeto Acadêmico Alura",
      year: "2026"
    }
  }
];

// ============================================
// EXPORT PARA USO NO SCRIPT PRINCIPAL
// ============================================

// Usa um nome único para evitar conflitos
window.portfolioProjects = myProjectsData;

console.log(`✅ projects.js carregado com ${myProjectsData.length} projetos reais!`);
console.log("📊 Estatísticas:");
console.log(`   - Projetos Web: ${myProjectsData.filter(p => p.category === 'web').length}`);
console.log(`   - Projetos Java/API: ${myProjectsData.filter(p => p.category === 'java').length}`);
console.log(`   - Com demo online: ${myProjectsData.filter(p => p.links.demo).length}`);
console.log(`   - Com código no GitHub: ${myProjectsData.filter(p => p.links.github).length}`);
