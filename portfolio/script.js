/**
 * Full Portfolio - Anderson Pacheco
 * Sistema de tradução completo e funcional
 */

let portfolioFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initNavbar();
    initLanguageSelector();
    initProjects();
    initContactForm();
    initSmoothScroll();
    initCurrentYear();
    
    if (typeof loadLanguagePreference === "function") loadLanguagePreference();
    if (typeof updateAllTexts === "function") updateAllTexts();
    if (typeof updateActiveLanguageButton === "function") updateActiveLanguageButton();
    
    document.addEventListener('languageChanged', () => {
        renderProjects(portfolioFilter);
    });
});

function initThemeToggle() {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;
    if (!themeSwitch) return;
    
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
        body.classList.add("light-theme");
        themeSwitch.checked = false;
    } else if (savedTheme === "dark") {
        body.classList.remove("light-theme");
        themeSwitch.checked = true;
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
            body.classList.remove("light-theme");
            themeSwitch.checked = true;
        } else {
            body.classList.add("light-theme");
            themeSwitch.checked = false;
        }
    }
    
    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.remove("light-theme");
            localStorage.setItem("portfolio-theme", "dark");
        } else {
            body.classList.add("light-theme");
            localStorage.setItem("portfolio-theme", "light");
        }
    });
}

function initLanguageSelector() {
    const languageToggle = document.getElementById("language-toggle");
    const languageDropdown = document.querySelector(".language-dropdown");
    const languageMenu = languageDropdown ? languageDropdown.querySelector(".language-menu") : null;

    if (!languageToggle || !languageDropdown || !languageMenu) return;

    languageToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = languageDropdown.classList.contains("active");
        languageDropdown.classList.toggle("active");
        languageToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = btn.getAttribute("data-lang");

            document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const toggleSpan = languageToggle.querySelector("span");
            if (toggleSpan) {
                toggleSpan.textContent = typeof getLanguageLabel === "function"
                    ? getLanguageLabel(lang)
                    : (lang === "pt-BR" ? "PT" : lang === "en-US" ? "EN" : "UK");
            }

            if (typeof window.changeLanguage === "function") {
                window.changeLanguage(lang);
            }

            if (typeof window.updateAllTexts === "function") {
                window.updateAllTexts();
            }

            renderProjects(portfolioFilter);
            languageDropdown.classList.remove("active");
            languageToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (e) => {
        if (!languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove("active");
            languageToggle.setAttribute("aria-expanded", "false");
        }
    });
}

function initNavbar() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.innerHTML = navLinks.classList.contains("active") 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

function initProjects() {
    const container = document.getElementById("projects-container");
    if (!container || !window.portfolioProjects) return;
    
    renderProjects("all");
    
    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            portfolioFilter = btn.dataset.filter;
            renderProjects(portfolioFilter);
        });
    });
}

function renderProjects(filter) {
    const container = document.getElementById("projects-container");
    if (!container) return;
    
    const projects = filter === "all" 
        ? window.portfolioProjects 
        : window.portfolioProjects.filter((p) => p.category === filter);
    
    const lang = (typeof window.currentLanguage !== "undefined") ? window.currentLanguage : "pt-BR";
    const trad = (typeof translations !== "undefined" && translations[lang]) ? translations[lang] : null;
    
    if (projects.length === 0) {
        const noProj = (trad && trad.no_projects) ? trad.no_projects : "Nenhum projeto encontrado.";
        container.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--text-tertiary);"><i class="fas fa-search" style="font-size:2rem;margin-bottom:1rem;display:block;"></i><span>${noProj}</span></div>`;
        return;
    }
    
    const demoText = (trad && trad.demo) ? trad.demo : "Demo";
    const codeText = (trad && trad.code) ? trad.code : "Código";
    
    container.innerHTML = projects.map((project) => {
        const title = trad && project.titleKey && trad[project.titleKey] ? trad[project.titleKey] : project.title;
        let desc = project.description;
        if (trad && project.i18nKey && trad[project.i18nKey]) {
            desc = trad[project.i18nKey];
        }
        
        return `<article class="project-card">
            <div class="project-icon"><i class="${project.image}"></i></div>
            <div class="project-info">
                <h3>${title}</h3>
                <p>${desc}</p>
                <div class="project-tags">${project.details.technologies.slice(0, 6).map((t) => `<span>${t}</span>`).join("")}</div>
                <div class="project-links">
                    ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> ${demoText}</a>` : ""}
                    ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> ${codeText}</a>` : ""}
                </div>
            </div>
        </article>`;
    }).join("");
}

function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById("submit-btn");
        const status = document.getElementById("form-status");
        const originalText = submitBtn.innerHTML;
        
        const lang = (typeof window.currentLanguage !== "undefined") ? window.currentLanguage : "pt-BR";
        const trad = (typeof translations !== "undefined" && translations[lang]) ? translations[lang] : null;
        const sendingText = (trad && trad.sending) ? trad.sending : "Enviando...";
        
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${sendingText}`;
        submitBtn.disabled = true;
        status.textContent = "";
        
        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });
            
            if (response.ok) {
                status.textContent = (trad && trad.contact_success) ? trad.contact_success : "✅ Mensagem enviada!";
                status.style.color = "var(--accent-success)";
                form.reset();
                if (window.turnstileManager) window.turnstileManager.reset();
            } else {
                throw new Error("Erro");
            }
        } catch (error) {
            status.textContent = (trad && trad.contact_error) ? trad.contact_error : "❌ Erro ao enviar.";
            status.style.color = "#ef4444";
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            setTimeout(() => { status.textContent = ""; }, 5000);
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
            }
        });
    });
}

function initCurrentYear() {
    const el = document.getElementById("current-year");
    if (el) el.textContent = new Date().getFullYear();
}