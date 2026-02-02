// ============================================
// ARQUIVO PRINCIPAL DO PORTFÓLIO - ANDERSON PACHECO
// ============================================

// Variável local para armazenar projetos
let portfolioProjects = [];

// ============================================
// FUNÇÕES DE INICIALIZAÇÃO
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Iniciando portfólio...");

  // Inicializa componentes básicos primeiro
  initLoader();
  initNavbar();
  initThemeToggle();
  initBackToTop();
  initCurrentYear();
  initCursor();

  // Inicializa link do desenvolvedor no rodapé
  initDeveloperLink();

  // Configura os projetos IMEDIATAMENTE
  setTimeout(() => {
    setupProjects();
  }, 100);

  // Inicializa o resto
  initScrollEffects();
  initContactForm();
  initNewsletter();
  initScrollAnimations();
  loadProfilePhoto();
  updateContactInfo();
  initFormValidation();

  // Inicializa email links
  initEmailLinks();

  // Inicializa botão de certificações
  initCertificationsButton();

  // Inicializa animações de habilidades
  initSkillsAnimation();

  // Inicializa contador de estatísticas
  initStatsCounter();

  // Inicializa os níveis de habilidade corrigidos
  updateSkillLevels();

  console.log("✅ Portfólio inicializado!");
});

// ============================================
// 1. CONFIGURAÇÃO DOS PROJETOS
// ============================================

function setupProjects() {
  console.log("🔧 Configurando projetos...");

  if (window.portfolioProjects && window.portfolioProjects.length > 0) {
    portfolioProjects = window.portfolioProjects;
    console.log(
      `📊 ${portfolioProjects.length} projetos carregados do arquivo externo`,
    );
  } else {
    console.error("⚠️ Nenhum projeto encontrado no window.portfolioProjects");
    loadLocalProjects();
  }

  initProjectsSection();
  initProjectModal();
}

function loadLocalProjects() {
  console.log("📂 Carregando projetos locais...");
  const myProjectsData = [
    {
      id: 1,
      title: "Data Analytics Pulse",
      description:
        "Dashboard de analytics com visualizações de dados em tempo real. Interface moderna para análise de métricas e KPIs.",
      image: "fas fa-chart-line",
      tags: ["web", "analytics", "javascript"],
      category: "web",
      links: {
        demo: "https://data-analytics-pulse.vercel.app/",
        github:
          "https://github.com/AndersonDosReisPacheco/Data-Analytics-Pulse",
      },
      details: {
        technologies: [
          "(Frontend)",
          "React 18",
          "Vite",
          "Zustand (Gerenciamento de estado)",
          "Axios (HTTP Client)",
          "React Router DOM",
          "CSS Moderno",
          "Deploy: Vercel",
          "JavaScript",
          "HTML5",
          "(backend)",
          "Node.js",
          "Express.js",
          "Prisma ORM",
          "PostgreSQL",
          "JWT Authentication",
          "CORS configurado corretamente",
          "Deploy: Render",
        ],
        features: [
          "Gráficos interativos atualizados em tempo real",
          "Dashboard responsivo para todos os dispositivos",
          "Filtros dinâmicos por período e categoria",
          "Exportação de dados para CSV",
          "UI/UX moderna com modo escuro",
        ],
        client: "Projeto Pessoal",
        year: "2026",
      },
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
        github: "https://github.com/AndersonDosReisPacheco/EventFlow",
      },
      details: {
        technologies: [
          "(Backend)",
          "TypeScript",
          "PostgreSQL",
          "Node.js",
          "Express.js",
          "Prisma ORM",
          "JWT (Access + Refresh Tokens)",
          "Bcrypt (hash de senhas)",
          "Zod (validação de dados)",
          "Helmet (segurança HTTP)",
          "Morgan (logs)",
          "CORS",
          "(Frontend)",
          "React.js",
          "TypeScript",
          "Vite",
          "React Router DOM",
          "Axios / Fetch API",
          "Chart.js / React-ChartJS-2",
          "Framer Motion (animações)",
          "React Hook Form + Zod",
          "LocalStorage",
        ],
        features: [
          "Agendamento de eventos com validação de datas",
          "Gestão completa de participantes",
          "Notificações automáticas por email",
          "Interface intuitiva e responsiva",
          "Relatórios de participação",
        ],
        client: "Projeto Acadêmico",
        year: "2026",
      },
    },
    {
      id: 3,
      title: "University Stellares",
      description:
        "Site institucional para universidade com informações acadêmicas e sistema de contato integrado.",
      image: "fas fa-graduation-cap",
      tags: ["web", "education", "htmlcss"],
      category: "web",
      links: {
        demo: "https://andersondosreispacheco.github.io/University-Stellares/",
        github:
          "https://github.com/AndersonDosReisPacheco/University-Stellares",
      },
      details: {
        technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        features: [
          "Layout totalmente responsivo",
          "Seções informativas completas sobre cursos",
          "Galeria de imagens interativa",
          "Formulário de contato funcional",
          "Otimização para SEO",
        ],
        client: "Projeto Pessoal",
        year: "2026",
      },
    },
    {
      id: 4,
      title: "Restaurante Mestre Cuca",
      description:
        "Site para restaurante com cardápio digital, reservas online e informações do estabelecimento.",
      image: "fas fa-utensils",
      tags: ["web", "food", "business"],
      category: "web",
      links: {
        demo: "https://andersondosreispacheco.github.io/Restaurante-Mestre-Cuca/",
        github:
          "https://github.com/AndersonDosReisPacheco/Restaurante-Mestre-Cuca",
      },
      details: {
        technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        features: [
          "Cardápio digital com categorias",
          "Sistema de reservas online",
          "Galeria de pratos em alta qualidade",
          "Localização com Google Maps integrado",
          "Design moderno e atrativo",
        ],
        client: "Projeto Comercial Simulado",
        year: "2026",
      },
    },
    {
      id: 5,
      title: "Challenge Liter Alura",
      description:
        "API REST para sistema de biblioteca virtual com gestão de livros, autores e empréstimos.",
      image: "fas fa-book-open",
      tags: ["java", "api", "backend", "spring"],
      category: "java",
      links: {
        demo: null,
        github: "https://github.com/AndersonDosReisPacheco/ChallengeLiterAlura",
      },
      details: {
        technologies: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "JWT"],
        features: [
          "API RESTful completa com documentação Swagger",
          "Autenticação e autorização com JWT",
          "CRUD completo de livros e autores",
          "Sistema de empréstimos com datas de devolução",
          "Validação avançada de dados",
        ],
        client: "Projeto Acadêmico Alura",
        year: "2026",
      },
    },
    {
      id: 6,
      title: "Challenge Forum Hub",
      description:
        "API para sistema de fórum de discussões com tópicos, respostas, votos e categorias.",
      image: "fas fa-comments",
      tags: ["java", "api", "backend", "spring"],
      category: "java",
      links: {
        demo: null,
        github:
          "https://github.com/AndersonDosReisPacheco/Challenge-ForumHub-Alura",
      },
      details: {
        technologies: [
          "Java",
          "Spring Boot",
          "PostgreSQL",
          "Flyway",
          "Spring Security",
        ],
        features: [
          "Sistema completo de fórum com threads e replies",
          "Sistema de votação em posts",
          "Categorias e tags para organização",
          "Migrações de banco automatizadas",
          "API seguindo padrões RESTful",
        ],
        client: "Projeto Acadêmico Alura",
        year: "2026",
      },
    },
    {
      id: 7,
      title: "MedCenter Site",
      description:
        "Site institucional para clínica médica com informações de serviços, equipe e agendamentos.",
      image: "fas fa-hospital",
      tags: ["web", "health", "institutional"],
      category: "web",
      links: {
        demo: "https://andersondosreispacheco.github.io/MeuProjetoSiteMedCenter/",
        github:
          "https://github.com/AndersonDosReisPacheco/MeuProjetoSiteMedCenter",
      },
      details: {
        technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        features: [
          "Design profissional para área da saúde",
          "Informações detalhadas sobre especialidades",
          "Galeria da equipe médica",
          "Formulário de agendamento online",
          "Layout responsivo e acessível",
        ],
        client: "Projeto Institucional Simulado",
        year: "2026",
      },
    },
    {
      id: 8,
      title: "Styles Shop",
      description:
        "E-commerce de moda com catálogo completo, carrinho de compras e checkout seguro.",
      image: "fas fa-shopping-bag",
      tags: ["web", "ecommerce", "shopping"],
      category: "web",
      links: {
        demo: "https://andersondosreispacheco.github.io/MeuProjetoSiteStylesShop/",
        github:
          "https://github.com/AndersonDosReisPacheco/MeuProjetoSiteStylesShop",
      },
      details: {
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        features: [
          "Catálogo de produtos com busca e filtros",
          "Carrinho de compras persistente",
          "Simulação de checkout com validação",
          "Galeria de produtos com zoom",
          "Design moderno e responsivo",
        ],
        client: "Projeto Comercial Simulado",
        year: "2026",
      },
    },
    {
      id: 9,
      title: "Conversor de Moedas API",
      description:
        "API para conversão de moedas em tempo real com suporte a múltiplas currencies.",
      image: "fas fa-money-bill-wave",
      tags: ["java", "api", "backend", "spring"],
      category: "java",
      links: {
        demo: null,
        github: "https://github.com/AndersonDosReisPacheco/ConversorDeMoedas",
      },
      details: {
        technologies: [
          "Java",
          "Spring Boot",
          "External API Integration",
          "JSON",
        ],
        features: [
          "Conversão entre mais de 150 moedas",
          "Integração com API de cotações em tempo real",
          "Histórico de conversões realizadas",
          "Validação robusta de parâmetros",
          "Endpoint RESTful documentado",
        ],
        client: "Projeto Acadêmico Alura",
        year: "2026",
      },
    },
    {
      id: 10,
      title: "Amigo Secreto Online",
      description:
        "Aplicação web para sorteio de amigo secreto com interface interativa e animações.",
      image: "fas fa-gift",
      tags: ["web", "game", "javascript"],
      category: "web",
      links: {
        demo: "https://andersondosreispacheco.github.io/Amigo-Secreto/",
        github: "https://github.com/AndersonDosReisPacheco/Amigo-Secreto",
      },
      details: {
        technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        features: [
          "Sorteio aleatório com algoritmo justo",
          "Cadastro de participantes com validação",
          "Interface interativa com animações",
          "Design temático para festas e eventos",
          "Compartilhamento de resultados",
        ],
        client: "Projeto Acadêmico Alura",
        year: "2026",
      },
    },
  ];

  portfolioProjects = myProjectsData;
}

function initProjectsSection() {
  const projectsContainer = document.getElementById("projects-container");

  if (!projectsContainer) {
    console.error("❌ Elemento #projects-container não encontrado!");
    return;
  }

  projectsContainer.innerHTML =
    '<div class="no-projects"><i class="fas fa-spinner fa-spin"></i><h3>Carregando projetos...</h3></div>';

  setTimeout(() => {
    renderAllProjects();
    setupFilterButtons();
    console.log("✅ Seção de projetos configurada com sucesso!");
  }, 300);
}

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      filterProjects(filter);
    });
  });
}

function renderAllProjects() {
  renderProjects(portfolioProjects, "all");
}

function filterProjects(filter) {
  let filteredProjects;

  if (filter === "all") {
    filteredProjects = portfolioProjects;
  } else {
    filteredProjects = portfolioProjects.filter(
      (project) => project.category === filter || project.tags.includes(filter),
    );
  }

  renderProjects(filteredProjects, filter);
}

function renderProjects(projects, currentFilter) {
  const container = document.getElementById("projects-container");

  if (!container) {
    console.error("❌ Container de projetos não encontrado!");
    return;
  }

  container.innerHTML = "";

  if (!projects || projects.length === 0) {
    container.innerHTML = `
      <div class="no-projects">
        <i class="fas fa-search"></i>
        <h3>Nenhum projeto encontrado</h3>
        <p>Tente selecionar outra categoria.</p>
      </div>
    `;
    return;
  }

  if (currentFilter === "all") {
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
      allButton.textContent = `Todos (${projects.length})`;
    }
  }

  projects.forEach((project, index) => {
    const projectElement = createProjectElement(project, index);
    container.appendChild(projectElement);
  });

  setTimeout(() => {
    document.querySelectorAll(".view-details").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const projectId = parseInt(this.getAttribute("data-id"));
        openProjectModal(projectId);
      });
    });
  }, 100);
}

function createProjectElement(project, index) {
  const demoLink = project.links.demo
    ? `<a href="${project.links.demo}" target="_blank" class="project-link" title="Ver demonstração">
        <i class="fas fa-external-link-alt"></i> Demo
       </a>`
    : `<span class="project-link disabled" title="Sem demonstração disponível">
        <i class="fas fa-external-link-alt"></i> Demo
       </span>`;

  const githubLink = project.links.github
    ? `<a href="${project.links.github}" target="_blank" class="project-link" title="Ver código fonte">
        <i class="fab fa-github"></i> Código
       </a>`
    : "";

  const tagsHTML = project.tags
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join("");

  const projectElement = document.createElement("div");
  projectElement.className = "project-card";
  projectElement.style.setProperty("--i", index);
  projectElement.innerHTML = `
    <div class="project-image">
      <i class="${project.image}"></i>
      <div class="project-tags">${tagsHTML}</div>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        ${demoLink}
        ${githubLink}
        <button class="project-link view-details" data-id="${project.id}" title="Ver detalhes">
          <i class="fas fa-info-circle"></i> Detalhes
        </button>
      </div>
    </div>
  `;

  return projectElement;
}

// ============================================
// 2. MODAL DE PROJETOS
// ============================================

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  if (!modal || !modalBody) return;

  const project = portfolioProjects.find((p) => p.id === projectId);
  if (!project) {
    console.error(`❌ Projeto com ID ${projectId} não encontrado`);
    return;
  }

  const featuresHTML = project.details.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  const technologiesHTML = project.details.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  modalBody.innerHTML = `
    <div class="modal-project">
      <div class="modal-project-header">
        <h2>${project.title}</h2>
        <div class="modal-project-meta">
          <span><i class="fas fa-user"></i> ${project.details.client}</span>
          <span><i class="fas fa-calendar"></i> ${project.details.year}</span>
          <span><i class="fas fa-tag"></i> ${project.category}</span>
        </div>
      </div>

      <div class="modal-project-image">
        <i class="${project.image}"></i>
      </div>

      <div class="modal-project-content">
        <h3>Descrição</h3>
        <p>${project.description}</p>

        <h3>Tecnologias</h3>
        <div class="modal-technologies">${technologiesHTML}</div>

        <h3>Funcionalidades</h3>
        <ul class="modal-features">${featuresHTML}</ul>

        <div class="modal-links">
          ${
            project.links.demo
              ? `<a href="${project.links.demo}" target="_blank" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i> Ver Demo
            </a>`
              : `<button class="btn btn-primary disabled" disabled>
              <i class="fas fa-external-link-alt"></i> Sem Demo
            </button>`
          }
          ${
            project.links.github
              ? `<a href="${project.links.github}" target="_blank" class="btn btn-secondary">
              <i class="fab fa-github"></i> Ver Código
            </a>`
              : ""
          }
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ============================================
// 3. FUNÇÕES BÁSICAS DO PORTFÓLIO
// ============================================

function initLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1500);
}

function initNavbar() {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-link");

  if (!header || !menuToggle || !navLinks) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const isExpanded = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
    menuToggle.innerHTML = isExpanded
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Fechar menu ao pressionar Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function initThemeToggle() {
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  if (!themeSwitch) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("portfolio-theme", "dark");
      showNotification("Tema escuro ativado", "success");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("portfolio-theme", "light");
      showNotification("Tema claro ativado", "success");
    }
  });
}

function initBackToTop() {
  const backToTop = document.getElementById("back-to-top");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 300);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function initCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  if (!cursor || !cursorFollower || "ontouchstart" in window) {
    if (cursor) cursor.style.display = "none";
    if (cursorFollower) cursorFollower.style.display = "none";
    return;
  }

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 100);
  });

  // Efeito hover em elementos interativos
  const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .skill-category, .contact-item, .nav-link",
  );

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      cursorFollower.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      cursorFollower.classList.remove("hover");
    });
  });
}

function initScrollEffects() {
  const stats = document.querySelectorAll(".stat-number");

  const animateStats = () => {
    stats.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-count")) || 0;
      const current = parseInt(stat.textContent) || 0;
      const increment = Math.max(target / 50, 1);

      if (current < target) {
        stat.textContent = Math.min(Math.ceil(current + increment), target);
        setTimeout(animateStats, 20);
      } else {
        stat.textContent = target;
      }
    });
  };

  const animateSkillBars = () => {
    document.querySelectorAll(".skill-level").forEach((bar) => {
      const width = bar.getAttribute("data-level") + "%";
      bar.style.width = width;
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "about") animateStats();
          if (entry.target.id === "skills") animateSkillBars();
          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.3 },
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

// ============================================
// 4. FUNÇÃO PARA INICIALIZAR BOTÃO DE CERTIFICAÇÕES
// ============================================

function initCertificationsButton() {
  const certificationsBtn = document.getElementById("certifications-btn");

  if (certificationsBtn) {
    certificationsBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // URL do seu arquivo PDF - MUDAR AQUI!
      const pdfUrl = "certificacoes_anderson_pacheco.pdf";

      // Verificar se o PDF existe
      fetch(pdfUrl, { method: "HEAD" })
        .then((response) => {
          if (response.ok) {
            // PDF existe, abrir em nova aba
            window.open(pdfUrl, "_blank");

            // Mostrar notificação de sucesso
            showNotification("📄 PDF de certificações aberto!", "success");

            // Análise do clique (opcional)
            console.log("✅ Certificações abertas com sucesso");
          } else {
            throw new Error("Arquivo não encontrado");
          }
        })
        .catch((error) => {
          console.error("❌ Erro ao carregar certificações:", error);

          // Mostrar notificação de erro
          showNotification(
            "⚠️ Arquivo de certificações não encontrado",
            "error",
          );

          // Oferecer alternativa
          setTimeout(() => {
            const confirmDownload = confirm(
              "O arquivo de certificações não está disponível.\n\nDeseja:\n1. Enviar email para solicitar as certificações\n2. Visualizar certificações online\n3. Cancelar",
            );

            if (confirmDownload) {
              const choice = prompt(
                "Digite 1 para email ou 2 para visualização online:",
              );

              if (choice === "1") {
                // Opção 1: Enviar email
                window.location.href =
                  "mailto:andersonpachecodeveloper@gmail.com?subject=Solicitação de Certificações - Portfólio&body=Prezado Anderson,%0D%0A%0D%0AGostaria de solicitar suas certificações profissionais.%0D%0A%0D%0AAtenciosamente,";
              } else if (choice === "2") {
                // Opção 2: Link para visualização online (substitua com seu link real)
                window.open(
                  "https://drive.google.com/file/d/1qfGXsKkRGh2wx4a5zdARG4-W-zBeEJF0/view?usp=sharing",
                  "_blank",
                );
              }
            }
          }, 1000);
        });
    });

    // Adicionar efeito hover
    certificationsBtn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)";
    });

    certificationsBtn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    console.log("✅ Botão de certificações configurado");
  } else {
    console.warn("⚠️ Botão de certificações não encontrado");
  }
}

// ============================================
// 5. VALIDAÇÃO E ENVIO DO FORMULÁRIO COM TURNSTILE
// ============================================

function initFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input);
    });

    input.addEventListener("input", () => {
      clearValidation(input);
    });
  });
}

function validateField(field) {
  const errorElement = document.getElementById(`${field.id}-error`);
  if (!errorElement) return;

  clearValidation(field);

  if (field.validity.valid) {
    return true;
  }

  let message = "";

  if (field.validity.valueMissing) {
    message = "Este campo é obrigatório";
  } else if (field.validity.typeMismatch) {
    if (field.type === "email") {
      message = "Por favor, insira um email válido";
    }
  } else if (field.validity.tooShort) {
    message = `Mínimo ${field.minLength} caracteres`;
  } else if (field.validity.tooLong) {
    message = `Máximo ${field.maxLength} caracteres`;
  } else if (field.validity.patternMismatch) {
    if (field.type === "email") {
      message = "Formato de email inválido";
    }
  }

  if (message) {
    errorElement.textContent = message;
    errorElement.classList.add("show");
    field.classList.add("shake");
    setTimeout(() => field.classList.remove("shake"), 500);
    return false;
  }

  return true;
}

function clearValidation(field) {
  const errorElement = document.getElementById(`${field.id}-error`);
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.remove("show");
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Verifica se o Turnstile está disponível
    if (!window.turnstileManager) {
      console.error("❌ Turnstile não disponível");
      showNotification(
        "Erro na verificação de segurança. Recarregue a página.",
        "error",
      );
      return;
    }

    const fields = ["name", "email", "subject", "message"];
    let isValid = true;

    fields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      showNotification("Por favor, corrija os erros no formulário", "error");
      return;
    }

    // Verificar token do Turnstile
    const turnstileTokenField = document.getElementById(
      "cf-turnstile-response",
    );
    if (!turnstileTokenField || !turnstileTokenField.value) {
      showNotification(
        "Por favor, complete a verificação de segurança",
        "error",
      );
      return;
    }

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      _replyto: formData.get("email"),
      _subject: `Portfólio - ${formData.get("subject")}`,
      _cc: "andersonpachecodeveloper@gmail.com",
      _format: "plain",
      "cf-turnstile-response": turnstileTokenField.value,
    };

    const replyToField = document.getElementById("reply-to-email");
    if (replyToField) {
      replyToField.value = data.email;
    }

    const submitBtn = document.getElementById("submit-btn");
    const originalText = submitBtn.innerHTML;
    const formStatus = document.getElementById("form-status");

    // Verificação Turnstile
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Verificando...';
    submitBtn.disabled = true;
    formStatus.textContent = "Verificando segurança...";
    formStatus.className = "form-status loading show";

    try {
      // Continua com o envio
      formStatus.textContent = "Enviando sua mensagem...";

      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        formStatus.textContent =
          "✅ Mensagem enviada com sucesso! Responderei em breve.";
        formStatus.className = "form-status success show";

        // Mostrar notificação customizada
        showCustomSuccessNotification(data);

        // Resetar Turnstile
        if (
          window.turnstileManager &&
          typeof window.turnstileManager.reset === "function"
        ) {
          window.turnstileManager.reset();
        }

        // Resetar token
        if (turnstileTokenField) {
          turnstileTokenField.value = "";
        }

        setTimeout(() => {
          form.reset();
          formStatus.className = "form-status";

          // Reativar botão
          submitBtn.disabled = true;
          submitBtn.innerHTML = originalText;
        }, 2000);
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (error) {
      console.error("❌ Erro:", error);

      formStatus.textContent =
        "❌ Erro ao enviar. Tente novamente ou use o WhatsApp abaixo.";
      formStatus.className = "form-status error show";

      showNotification(
        "Erro ao enviar. Use o WhatsApp para contato direto.",
        "error",
      );
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      setTimeout(() => {
        formStatus.className = "form-status";
      }, 5000);
    }
  });
}

// ============================================
// 6. NEWSLETTER
// ============================================

function initNewsletter() {
  const submitBtn = document.getElementById("newsletter-submit");
  const emailInput = document.getElementById("newsletter-email");

  if (!submitBtn || !emailInput) return;

  submitBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!email) {
      showNotification("Digite seu email", "warning");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showNotification("Email inválido", "error");
      return;
    }

    // Simular envio (substituir por sua API real)
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    setTimeout(() => {
      showNotification("✅ Inscrição realizada com sucesso!", "success");
      emailInput.value = "";
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
      submitBtn.disabled = false;
    }, 1500);
  });
}

// ============================================
// 7. ANIMAÇÕES DE SCROLL
// ============================================

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(
      ".hero-text, .skill-category, .competency-category, .project-card",
    )
    .forEach((el) => {
      observer.observe(el);
    });
}

// ============================================
// 8. FUNÇÕES AUXILIARES
// ============================================

function loadProfilePhoto() {
  const profileImages = document.querySelectorAll(
    "#profile-image, #about-profile-image",
  );

  profileImages.forEach((container) => {
    container.innerHTML = "";

    const img = document.createElement("img");
    img.className = "profile-photo";
    img.alt = "Anderson Pacheco - Desenvolvedor Full Stack";
    img.src = "./assets/Foto_Para_Portfolio.jpeg";

    img.onload = () => {
      console.log("✅ Foto de perfil carregada com sucesso");
    };

    img.onerror = () => {
      console.log("⚠️ Foto de perfil não encontrada, usando ícone padrão");
      img.style.display = "none";
      const icon = document.createElement("i");
      icon.className = "fas fa-user";
      icon.style.fontSize = "3rem";
      icon.style.color = "white";
      container.appendChild(icon);
      container.style.background = "var(--gradient-primary)";
      container.style.display = "flex";
      container.style.justifyContent = "center";
      container.style.alignItems = "center";
    };

    container.appendChild(img);
  });
}

function updateContactInfo() {
  document.querySelectorAll(".email-contact").forEach((el) => {
    el.textContent = "andersonpachecodeveloper@gmail.com";
  });

  document.querySelectorAll(".phone-contact").forEach((el) => {
    el.textContent = "+55 22 99814-8876";
  });

  document.querySelectorAll(".location-contact").forEach((el) => {
    el.textContent = "Madre De Deus, Bahia, Brasil";
  });
}

function initEmailLinks() {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

  emailLinks.forEach((link) => {
    // Remover target="_blank" se existir
    if (link.getAttribute("target") === "_blank") {
      link.removeAttribute("target");
    }

    // Garantir que não tenha classes de abertura em nova aba
    link.classList.remove("external-link");

    // Adicionar classe para identificar links de email
    link.classList.add("email-action-link");

    // Adicionar evento de clique para mostrar feedback
    link.addEventListener("click", function (e) {
      console.log("📧 Email link clicado:", this.href);
      showNotification("Abrindo cliente de email...", "info");
      return true;
    });
  });
}

// ============================================
// 9. ANIMAÇÕES DE HABILIDADES
// ============================================

function initSkillsAnimation() {
  const skillBars = document.querySelectorAll(".skill-level");

  skillBars.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    if (level) {
      bar.style.setProperty("--level", `${level}%`);
    }
  });
}

// ============================================
// 10. CONTADOR DE ESTATÍSTICAS
// ============================================

function initStatsCounter() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stats = entry.target.querySelectorAll(".stat-number");
          stats.forEach((stat) => {
            const target = parseInt(stat.getAttribute("data-count")) || 0;
            animateCounter(stat, target);
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  const aboutSection = document.getElementById("about");
  if (aboutSection) observer.observe(aboutSection);
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

// ============================================
// 11. FUNÇÃO PARA ATUALIZAR OS NÍVEIS DE HABILIDADE
// ============================================

function updateSkillLevels() {
  // Esta função garante que os níveis de habilidade sejam aplicados corretamente
  setTimeout(() => {
    const skillLevels = document.querySelectorAll(".skill-level");
    skillLevels.forEach((skill) => {
      const level = skill.getAttribute("data-level");
      if (level) {
        skill.style.width = `${level}%`;
      }
    });
  }, 500);
}

// ============================================
// 12. FUNÇÃO PARA INICIALIZAR LINK DO DESENVOLVEDOR
// ============================================

function initDeveloperLink() {
  const developerLink = document.getElementById("developer-link");
  if (developerLink) {
    developerLink.addEventListener("click", function (e) {
      e.preventDefault();

      // Alterna entre email e WhatsApp baseado no tema atual
      const isDarkTheme = document.body.classList.contains("dark-theme");

      if (isDarkTheme) {
        // Tema escuro: redireciona para WhatsApp
        const message = encodeURIComponent(
          "Olá Anderson! 👋\n\nVi seu portfólio e gostaria de conversar sobre oportunidades de colaboração.\n\nAtenciosamente,",
        );
        window.open(`https://wa.me/5522998148876?text=${message}`, "_blank");

        showNotification("💬 Abrindo WhatsApp para contato...", "info");
      } else {
        // Tema claro: redireciona para email
        const subject = encodeURIComponent("Contato via Portfólio");
        const body = encodeURIComponent(
          "Olá Anderson,\n\nVi seu portfólio e gostaria de conversar sobre oportunidades de colaboração.\n\nAtenciosamente,",
        );
        window.location.href = `mailto:andersonpachecodeveloper@gmail.com?subject=${subject}&body=${body}`;

        showNotification("📧 Abrindo cliente de email...", "info");
      }
    });

    console.log("✅ Link do desenvolvedor configurado");
  }
}

// ============================================
// 13. NOTIFICAÇÃO CUSTOMIZADA - SUPER ESTILIZADA
// ============================================

function showCustomSuccessNotification(data) {
  document
    .querySelectorAll(".custom-notification")
    .forEach((el) => el.remove());

  const notification = document.createElement("div");
  notification.className = "custom-notification";

  notification.innerHTML = `
    <div class="notification-container">
      <div class="notification-progress"></div>

      <div class="notification-confetti" id="confetti-container"></div>

      <div class="notification-header">
        <div class="notification-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <div class="notification-title">
          <h3>🚀 Mensagem Enviada!</h3>
          <p>Sucesso total no envio</p>
        </div>
        <button class="notification-close" id="notification-close">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="notification-body">
        <p>
          <strong>✅ Tudo certo, ${data.name}!</strong><br>
          Sua mensagem foi <strong>enviada com sucesso</strong> para meu email.<br>
          Vou analisar seu contato sobre <em>"${data.subject}"</em> e te respondo o mais breve possível!
        </p>
      </div>

      <div class="notification-actions">
        <button class="notification-btn notification-btn-primary" id="whatsapp-btn">
          <i class="fab fa-whatsapp"></i> Falar no WhatsApp
        </button>
        <button class="notification-btn notification-btn-secondary" id="close-btn">
          <i class="fas fa-check"></i> Entendi
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  createConfetti();

  const closeBtn = document.getElementById("close-btn");
  const notificationClose = document.getElementById("notification-close");
  const whatsappBtn = document.getElementById("whatsapp-btn");

  const closeNotification = () => {
    notification.style.animation = "slideOutNotification 0.5s ease forwards";
    setTimeout(() => notification.remove(), 500);
  };

  closeBtn.addEventListener("click", closeNotification);
  notificationClose.addEventListener("click", closeNotification);

  whatsappBtn.addEventListener("click", () => {
    const whatsappMessage = encodeURIComponent(
      `📋 *CONTATO DO PORTFÓLIO*\n\n` +
        `👤 *Nome:* ${data.name}\n` +
        `📧 *Email:* ${data.email}\n` +
        `🎯 *Assunto:* ${data.subject}\n` +
        `💬 *Mensagem:*\n${data.message}\n\n` +
        `_Enviado via formulário do site_`,
    );

    window.open(
      `https://wa.me/5522998148876?text=${whatsappMessage}`,
      "_blank",
    );
    closeNotification();
  });

  setTimeout(closeNotification, 8000);
}

function createConfetti() {
  const container = document.getElementById("confetti-container");
  if (!container) return;

  const colors = [
    "#3b82f6",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#06b6d4",
  ];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";

    const left = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const duration = 1 + Math.random() * 1;
    const color = colors[Math.floor(Math.random() * colors.length)];

    confetti.style.cssText = `
      left: ${left}%;
      background: ${color};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `;

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1500);
  }
}

// ============================================
// 14. NOTIFICAÇÕES SIMPLES
// ============================================

function showNotification(message, type = "info") {
  document.querySelectorAll(".notification").forEach((n) => n.remove());

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas fa-${
      type === "success"
        ? "check-circle"
        : type === "error"
        ? "exclamation-circle"
        : "info-circle"
    }"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ============================================
// 15. DEBUG E FUNÇÕES DE TESTE
// ============================================

window.debugPortfolio = {
  reloadProjects: () => {
    portfolioProjects = window.portfolioProjects || [];
    renderAllProjects();
    console.log("🔄 Projetos recarregados:", portfolioProjects.length);
    showNotification(
      `Projetos recarregados: ${portfolioProjects.length}`,
      "success",
    );
  },

  showAllProjects: () => {
    renderAllProjects();
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector('.filter-btn[data-filter="all"]')
      .classList.add("active");
    showNotification("Mostrando todos os projetos", "info");
  },

  filterByCategory: (category) => {
    filterProjects(category);
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    const btn = document.querySelector(
      `.filter-btn[data-filter="${category}"]`,
    );
    if (btn) btn.classList.add("active");
    showNotification(`Filtrado por: ${category}`, "info");
  },

  getProjectsCount: () => portfolioProjects.length,

  getProjectsData: () => portfolioProjects,

  testForm: () => {
    document.getElementById("name").value = "Teste Silva";
    document.getElementById("email").value = "teste@exemplo.com";
    document.getElementById("subject").value = "Teste de formulário";
    document.getElementById("message").value =
      "Esta é uma mensagem de teste do formulário do portfólio.";

    showNotification("Formulário preenchido para teste", "success");
    console.log("✅ Formulário preenchido para teste");
  },

  testCertifications: () => {
    const btn = document.getElementById("certifications-btn");
    if (btn) btn.click();
  },

  testNotification: (type = "success") => {
    const messages = {
      success: "✅ Esta é uma notificação de sucesso!",
      error: "❌ Esta é uma notificação de erro!",
      warning: "⚠️ Esta é uma notificação de aviso!",
      info: "ℹ️ Esta é uma notificação informativa!",
    };
    showNotification(messages[type] || messages.success, type);
  },

  testCustomNotification: () => {
    const testData = {
      name: "João Silva",
      email: "joao@exemplo.com",
      subject: "Proposta de Projeto Teste",
      message: "Olá Anderson, tenho um projeto interessante para discutir!",
    };
    showCustomSuccessNotification(testData);
  },

  testTurnstile: () => {
    if (window.turnstileManager) {
      const token = window.turnstileManager.getToken();
      if (token) {
        showNotification(
          "✅ Turnstile funcionando! Token: " + token.substring(0, 20) + "...",
          "success",
        );
      } else {
        showNotification("❌ Turnstile não gerou token", "error");
      }
    } else {
      showNotification("❌ Turnstile não disponível", "error");
    }
  },

  checkAllFunctions: () => {
    console.log("🔍 Verificando funções do portfólio:");
    console.log(`- Projetos carregados: ${portfolioProjects.length}`);
    console.log(
      `- Tema atual: ${
        document.body.classList.contains("dark-theme") ? "Escuro" : "Claro"
      }`,
    );
    console.log(`- Idioma atual: ${window.currentLanguage || "pt-BR"}`);
    console.log(
      `- Botão de certificações: ${
        document.getElementById("certifications-btn") ? "OK" : "Não encontrado"
      }`,
    );
    console.log(
      `- Formulário de contato: ${
        document.getElementById("contact-form") ? "OK" : "Não encontrado"
      }`,
    );
    console.log(
      `- Link do desenvolvedor: ${
        document.getElementById("developer-link") ? "OK" : "Não encontrado"
      }`,
    );
    console.log(
      `- Turnstile disponível: ${window.turnstileManager ? "Sim" : "Não"}`,
    );
    showNotification("Verificação completa - veja o console", "success");
  },
};

// ============================================
// 16. INICIALIZAÇÃO DE EVENTOS GLOBAIS
// ============================================

// Prevenir comportamentos padrão indesejados
document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

// Melhorar performance de animações
let resizeTimer;
window.addEventListener("resize", function () {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Suporte offline
window.addEventListener("offline", () => {
  showNotification(
    "⚠️ Você está offline. Algumas funcionalidades podem não estar disponíveis.",
    "warning",
  );
});

window.addEventListener("online", () => {
  showNotification("✅ Conexão restabelecida!", "success");
});

// Log de erros
window.addEventListener("error", function (e) {
  console.error("❌ Erro capturado:", e.error);
});

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================

console.log(
  "%c👨‍💻 PORTFÓLIO ANDERSON PACHECO",
  "font-size: 20px; font-weight: bold; color: #2563eb;",
);
console.log(
  "%c🔧 Use debugPortfolio para testar funcionalidades",
  "font-size: 14px; color: #7c3aed;",
);
console.log(
  "%c🛡️ Cloudflare Turnstile configurado para proteção contra bots",
  "font-size: 12px; color: #10b981;",
);
console.log(
  "%c👤 Habilidades atualizadas com níveis realistas",
  "font-size: 12px; color: #f59e0b;",
);
console.log(
  "%c📧 Contato: andersonpachecodeveloper@gmail.com",
  "font-size: 12px; color: #10b981;",
);
console.log("============================================");
