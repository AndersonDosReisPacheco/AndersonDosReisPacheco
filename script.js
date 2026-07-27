/**
 * Landing Page - Anderson Pacheco
 * Interações minimalistas, elegantes e MULTILÍNGUE
 * Utiliza o sistema de tradução unificado.
 */

document.addEventListener("DOMContentLoaded", () => {
  // INICIALIZA TRADUÇÕES PRIMEIRO
  if (typeof loadLanguagePreference === "function") {
    loadLanguagePreference();
  }
  if (typeof updateAllTexts === "function") {
    updateAllTexts();
  }
  if (typeof updateActiveLanguageButton === "function") {
    updateActiveLanguageButton();
  }

  initLanguageSelector();
  initScrollReveal();
  initSmoothScroll();
  initStatCounter();
  console.log("⚡ Landing page inicializada com suporte multilíngue unificado");
});

/* ---------- SELETOR DE IDIOMA ---------- */
function initLanguageSelector() {
  const languageToggle = document.getElementById("landing-language-toggle");
  const languageDropdown = document.getElementById("landing-language-dropdown");

  if (!languageToggle || !languageDropdown) return;

  // Toggle dropdown
  languageToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = languageDropdown.classList.contains("active");
    languageDropdown.classList.toggle("active");
    languageToggle.setAttribute("aria-expanded", !isActive);
  });

  // Selecionar idioma
  document.querySelectorAll(".landing-language-selector .lang-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute("data-lang");

      // Atualiza botão ativo
      document
        .querySelectorAll(".landing-language-selector .lang-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Altera idioma usando a função unificada
      if (typeof window.changeLanguage === "function") {
        window.changeLanguage(lang);
      }

      if (typeof window.updateAllTexts === "function") {
        window.updateAllTexts();
      }

      // Fecha dropdown
      languageDropdown.classList.remove("active");
      languageToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!languageDropdown.contains(e.target)) {
      languageDropdown.classList.remove("active");
      languageToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Fechar com Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && languageDropdown.classList.contains("active")) {
      languageDropdown.classList.remove("active");
      languageToggle.setAttribute("aria-expanded", "false");
      languageToggle.focus();
    }
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatableElements = document.querySelectorAll(
    ".project-card, .stat-card, .contact-card, .about-highlights .highlight-item"
  );

  animatableElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

/* ---------- SMOOTH SCROLL ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* ---------- STAT COUNTER ---------- */
function initStatCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const text = target.textContent;
          const isNumeric = /^\d+$/.test(text);

          if (isNumeric) {
            animateCount(target, parseInt(text));
          } else {
            const num = parseInt(text.match(/\d+/)?.[0] || "0");
            if (num > 0) {
              animateCountWithSuffix(target, num, text.replace(/\d+/, ""));
            }
          }

          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((num) => observer.observe(num));
}

function animateCount(element, target) {
  let current = 0;
  const duration = 1500;
  const step = target / (duration / 16);

  function update() {
    current += step;
    if (current >= target) {
      element.textContent = target;
      return;
    }
    element.textContent = Math.floor(current);
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function animateCountWithSuffix(element, target, suffix) {
  let current = 0;
  const duration = 1500;
  const step = target / (duration / 16);

  function update() {
    current += step;
    if (current >= target) {
      element.textContent = target + suffix;
      return;
    }
    element.textContent = Math.floor(current) + suffix;
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}