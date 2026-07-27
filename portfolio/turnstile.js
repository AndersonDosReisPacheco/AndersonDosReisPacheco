/**
 * Cloudflare Turnstile Manager
 * Full Portfolio - Anderson Pacheco
 * Proteção contra bots no formulário de contato
 */

class TurnstileManager {
  constructor() {
    this.siteKey = "0x4AAAAAADByKdojIZiYELl1";
    this.scriptLoaded = false;
    this.isInitialized = false;
    this.widgetId = null;
  }

  async initialize() {
    if (this.isInitialized) return true;

    try {
      await this.loadTurnstileScript();
      await this.waitForTurnstile();
      this.isInitialized = true;
      console.log("✅ Cloudflare Turnstile inicializado");
      return true;
    } catch (error) {
      console.error("❌ Erro ao inicializar Turnstile:", error);
      return false;
    }
  }

  loadTurnstileScript() {
    return new Promise((resolve, reject) => {
      if (window.turnstile) {
        resolve();
        return;
      }

      if (this.scriptLoaded) {
        const checkInterval = setInterval(() => {
          if (window.turnstile) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };

      script.onerror = () => {
        console.warn("⚠️ Falha ao carregar Cloudflare Turnstile");
        reject(new Error("Failed to load Turnstile"));
      };

      document.head.appendChild(script);
    });
  }

  waitForTurnstile() {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 50;

      const checkTurnstile = () => {
        attempts++;

        if (window.turnstile && window.turnstile.render) {
          resolve();
          return;
        }

        if (attempts >= maxAttempts) {
          reject(new Error("Turnstile não carregado"));
          return;
        }

        setTimeout(checkTurnstile, 100);
      };

      checkTurnstile();
    });
  }

  render(containerId = "cf-turnstile-container") {
    if (!this.isInitialized || !window.turnstile) {
      console.error("❌ Turnstile não inicializado");
      return null;
    }

    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`❌ Container #${containerId} não encontrado`);
      return null;
    }

    try {
      this.widgetId = window.turnstile.render(container, {
        sitekey: this.siteKey,
        callback: (token) => {
          console.log("✅ Turnstile token gerado");

          const tokenField = document.getElementById("cf-turnstile-response");
          if (tokenField) {
            tokenField.value = token;
          }

          const submitBtn = document.getElementById("submit-btn");
          if (submitBtn) {
            submitBtn.disabled = false;
          }

          const status = document.getElementById("form-status");
          if (status) {
            status.textContent =
              "✅ Verificação concluída! Pode enviar sua mensagem.";
            status.style.color = "#34d399";
            setTimeout(() => {
              status.textContent = "";
            }, 3000);
          }
        },
        "error-callback": () => {
          console.warn("⚠️ Erro no Turnstile");
          const submitBtn = document.getElementById("submit-btn");
          if (submitBtn) {
            submitBtn.disabled = true;
          }
        },
        "expired-callback": () => {
          console.warn("⚠️ Token Turnstile expirado");
          const tokenField = document.getElementById("cf-turnstile-response");
          if (tokenField) {
            tokenField.value = "";
          }
          const submitBtn = document.getElementById("submit-btn");
          if (submitBtn) {
            submitBtn.disabled = true;
          }
        },
        theme: "dark",
      });

      console.log("✅ Turnstile widget renderizado");
      return this.widgetId;
    } catch (error) {
      console.error("❌ Erro ao renderizar Turnstile:", error);
      return null;
    }
  }

  getToken() {
    const response = document.getElementById("cf-turnstile-response");
    if (response && response.value) {
      return response.value;
    }
    return null;
  }

  reset() {
    if (this.widgetId && window.turnstile && window.turnstile.reset) {
      window.turnstile.reset(this.widgetId);
      console.log("🔄 Turnstile resetado");

      const tokenField = document.getElementById("cf-turnstile-response");
      if (tokenField) {
        tokenField.value = "";
      }

      const submitBtn = document.getElementById("submit-btn");
      if (submitBtn) {
        submitBtn.disabled = true;
      }
    }
  }

  remove() {
    if (this.widgetId && window.turnstile && window.turnstile.remove) {
      window.turnstile.remove(this.widgetId);
      this.widgetId = null;
      console.log("🗑️ Turnstile removido");
    }
  }

  async validateForm() {
    try {
      const token = this.getToken();
      if (!token) {
        return {
          success: false,
          error: "Por favor, complete a verificação de segurança",
        };
      }

      const isValid = token.length > 50;
      if (!isValid) {
        return {
          success: false,
          error: "Verificação de segurança inválida",
        };
      }

      return {
        success: true,
        token: token,
        message: "Verificação concluída com sucesso",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message || "Erro na verificação de segurança",
      };
    }
  }
}

// Instância global
const turnstileManager = new TurnstileManager();

// Inicializa automaticamente
document.addEventListener("DOMContentLoaded", async () => {
  const isInitialized = await turnstileManager.initialize();

  if (isInitialized) {
    console.log(
      "🛡️ Cloudflare Turnstile configurado para proteção contra bots",
    );

    // Renderiza o Turnstile no formulário
    setTimeout(() => {
      const container = document.getElementById("cf-turnstile-container");
      if (container) {
        turnstileManager.render("cf-turnstile-container");
      }
    }, 1000);
  }
});

// Exporta para uso global
window.turnstileManager = turnstileManager;
