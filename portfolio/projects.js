/**
 * PROJETOS PRINCIPAIS - ANDERSON PACHECO
 * Projetos de alto valor estratégico
 * Suporte completo a i18n com traduções dinâmicas
 */

const portfolioProjects = [
  {
    id: 1,
    title: "Sentinel Cloud",
    titleKey: "project_sentinelcloud_title",
    description:
      "Plataforma de monitoramento inteligente de infraestrutura em nuvem, fornecendo visibilidade e alertas para manter a saúde de sistemas distribuídos.",
    i18nKey: "project_sentinelcloud_desc",
    image: "fas fa-cloud-upload-alt",
    category: "fullstack",
    links: {
      demo: "https://andersondosreispacheco.github.io/Sentinel-Cloud-System-Web/",
      github: "https://github.com/AndersonDosReisPacheco/Sentinel-Cloud-System-Web",
    },
    details: {
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "React",
        "TypeScript",
        "Docker",
        "PostgreSQL",
        "MongoDB",
      ],
      features: [
        "Painel de monitoramento unificado para múltiplos serviços",
        "Sistema de alertas e notificações inteligentes",
        "Coleta e visualização de métricas em tempo real",
        "Rastreamento de saúde (health checks) de endpoints",
        "Gerenciamento centralizado de configurações",
        "Interface administrativa responsiva e intuitiva",
        "Suporte a deploy em containers com Docker",
      ],
      architecture:
        "Arquitetura de microsserviços com Service Discovery e Config Server centralizado. Front-end em React com painéis dinâmicos. Back-end com Spring Boot, Spring Cloud e bancos de dados PostgreSQL e MongoDB para diferentes finalidades.",
      client: "Projeto Full Stack",
      year: "2026",
    },
  },
  {
    id: 2,
    title: "EventFlow",
    titleKey: "project_eventflow_title",
    description:
      "Sistema de Auditoria & Rastreamento Inteligente com autenticação JWT, dashboards em tempo real e gestão completa de usuários.",
    i18nKey: "project_eventflow_desc",
    image: "fas fa-shield-haltered",
    category: "fullstack",
    links: {
      demo: "https://event-flow-psi.vercel.app/",
      github: "https://github.com/AndersonDosReisPacheco/EventFlow",
    },
    details: {
      technologies: [
        "TypeScript",
        "React.js",
        "Vite",
        "React Router DOM",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "PostgreSQL",
        "JWT",
        "Bcrypt",
        "Zod",
        "Helmet",
        "Morgan",
        "CORS",
        "Chart.js",
        "Framer Motion",
      ],
      features: [
        "Autenticação completa com JWT (Access + Refresh Tokens)",
        "Dashboard administrativo com métricas em tempo real",
        "Sistema de auditoria e rastreamento de ações",
        "Gestão de usuários com controle de permissões",
        "Notificações automáticas e logs de sistema",
        "Interface responsiva com animações fluidas",
        "Validação de dados no front-end e back-end (Zod)",
        "Segurança HTTP com Helmet e CORS configurado",
      ],
      architecture:
        "Arquitetura em camadas com separação clara entre controllers, services e repositories. Front-end com gerenciamento de estado via Context API e LocalStorage.",
      client: "Projeto Full Stack Completo",
      year: "2026",
    },
  },
  {
    id: 3,
    title: "Data Analytics Pulse",
    titleKey: "project_dataanalytics_title",
    description:
      "Plataforma de dashboards analíticos com visualizações em tempo real, filtros avançados e exportação de dados.",
    i18nKey: "project_dataanalytics_desc",
    image: "fas fa-chart-pie",
    category: "fullstack",
    links: {
      demo: "https://data-analytics-pulse.vercel.app/",
      github: "https://github.com/AndersonDosReisPacheco/Data-Analytics-Pulse",
    },
    details: {
      technologies: [
        "React 18",
        "Vite",
        "Zustand",
        "Axios",
        "React Router DOM",
        "CSS Moderno",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "PostgreSQL",
        "JWT Authentication",
        "CORS",
      ],
      features: [
        "Dashboard analítico com gráficos interativos",
        "Atualização dinâmica de dados sem recarregar a página",
        "Filtros avançados por período, categoria e métricas",
        "KPIs dinâmicos com indicadores de desempenho",
        "Exportação de dados e relatórios para CSV",
        "Modo escuro (dark mode) com alternância de tema",
        "Interface responsiva para desktop, tablet e mobile",
        "Estrutura preparada para múltiplas fontes de dados",
      ],
      architecture:
        "Front-end com Zustand para gerenciamento de estado global. Back-end com Prisma ORM para acesso ao banco PostgreSQL. API RESTful documentada.",
      client: "Projeto Full Stack Completo",
      year: "2025",
    },
  },
  {
    id: 4,
    title: "FórumHub",
    titleKey: "project_forumhub_title",
    description:
      "API REST completa com Spring Boot, Spring Security e JWT. Sistema de fórum com tópicos, respostas e categorias.",
    i18nKey: "project_forumhub_desc",
    image: "fas fa-comments",
    category: "backend",
    links: {
      demo: null,
      github:
        "https://github.com/AndersonDosReisPacheco/Challenge-ForumHub-Alura",
    },
    details: {
      technologies: [
        "Java 17",
        "Spring Boot 3",
        "Spring Security",
        "JWT Authentication",
        "PostgreSQL",
        "Flyway Migrations",
        "JPA / Hibernate",
        "Bean Validation",
        "Swagger/OpenAPI",
      ],
      features: [
        "Sistema completo de fórum com tópicos e respostas",
        "Autenticação e autorização com JWT e Spring Security",
        "CRUD completo com validações avançadas",
        "Migrações de banco automatizadas com Flyway",
        "Documentação da API com Swagger/OpenAPI",
        "Arquitetura RESTful seguindo boas práticas",
        "Tratamento de erros com respostas padronizadas",
        "Segurança com proteção de endpoints por roles",
      ],
      architecture:
        "API REST em arquitetura MVC com Spring Boot. Camadas de Controller, Service, Repository bem definidas. Segurança com Spring Security + JWT.",
      client: "Projeto Backend API",
      year: "2025",
    },
  },
  {
    id: 5,
    title: "LiterAlura",
    titleKey: "project_literalura_title",
    description:
      "Aplicação Java com Spring Boot para gestão de biblioteca virtual, integração com API externa e persistência em PostgreSQL.",
    i18nKey: "project_literalura_desc",
    image: "fas fa-book-open",
    category: "backend",
    links: {
      demo: null,
      github: "https://github.com/AndersonDosReisPacheco/ChallengeLiterAlura",
    },
    details: {
      technologies: [
        "Java 17",
        "Spring Boot 3",
        "PostgreSQL",
        "JPA / Hibernate",
        "Jackson",
        "Maven",
        "API externa (Gutendex)",
        "JWT Authentication",
      ],
      features: [
        "Catálogo de livros com busca e filtros",
        "Integração com API externa de livros (Gutendex)",
        "Persistência de dados com JPA e PostgreSQL",
        "Gestão de autores e relacionamentos",
        "Sistema de empréstimos com controle de datas",
        "Validação de dados e tratamento de exceções",
        "Arquitetura em camadas com separação de responsabilidades",
      ],
      architecture:
        "Aplicação console com Spring Boot, JPA/Hibernate para ORM e PostgreSQL como banco. Integração com API externa usando RestTemplate.",
      client: "Projeto Backend",
      year: "2026",
    },
  },
];

// Exporta para uso global
window.portfolioProjects = portfolioProjects;

console.log(`✅ ${portfolioProjects.length} projetos principais carregados`);
console.log(
  `   - Full Stack: ${portfolioProjects.filter((p) => p.category === "fullstack").length}`,
);
console.log(
  `   - Backend: ${portfolioProjects.filter((p) => p.category === "backend").length}`,
);