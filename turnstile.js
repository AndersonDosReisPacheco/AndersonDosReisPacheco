// turnstile.js - Integração com Cloudflare Turnstile
// Chaves da sua configuração:
// Site Key: 0x4AAAAAACWbgR9sONMjIP8d
// Secret Key: 0x4AAAAAACWbgR5Z5ZXAXJHJJ6hdH2rmTNk

class TurnstileManager {
  constructor() {
    this.siteKey = "0x4AAAAAACWbgR9sONMjIP8d"; // SUA CHAVE DO SITE
    this.secretKey = "0x4AAAAAACWbgR5Z5ZXAXJHJJ6hdH2rmTNk"; // SUA CHAVE SECRETA
    this.scriptLoaded = false;
    this.isInitialized = false;
    this.widgetId = null;
  }

  async initialize() {
    if (this.isInitialized) return true;

    try {
      // Carrega o script do Turnstile
      await this.loadTurnstileScript();

      // Aguarda o turnstile estar disponível
      await this.waitForTurnstile();

      this.isInitialized = true;
      console.log("✅ Cloudflare Turnstile inicializado com sucesso");
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
        // Aguarda o script carregar
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

  render(containerId = "cf-turnstile-container", callback = null) {
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
        callback:
          callback ||
          function (token) {
            console.log("✅ Turnstile token gerado:", token);

            // Preenche o campo hidden com o token
            const tokenField = document.getElementById("cf-turnstile-response");
            if (tokenField) {
              tokenField.value = token;
            }

            // Ativa o botão de submit
            const submitBtn = document.getElementById("submit-btn");
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.style.opacity = "1";
              submitBtn.style.cursor = "pointer";
            }

            // Mostra notificação
            const status = document.getElementById("form-status");
            if (status) {
              status.textContent =
                "✅ Verificação concluída! Pode enviar sua mensagem.";
              status.className = "form-status success show";
              setTimeout(() => {
                status.className = "form-status";
              }, 3000);
            }
          },
        "error-callback": function () {
          console.warn("⚠️ Erro no Turnstile");
          const submitBtn = document.getElementById("submit-btn");
          if (submitBtn) {
            submitBtn.disabled = true;
          }
        },
        "expired-callback": function () {
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
        theme: "auto", // Segue o tema do sistema
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

    console.warn("⚠️ Token Turnstile não encontrado");
    return null;
  }

  async verifyToken(token) {
    if (!token) return false;

    try {
      // EM PRODUÇÃO: Você deve enviar o token para seu backend
      // e verificar com a API do Cloudflare usando sua secret key

      // Para desenvolvimento, vamos apenas verificar se o token existe
      // Em produção, substitua por:
      /*
        const response = await fetch('/api/verify-turnstile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: token })
        });

        const result = await response.json();
        return result.success === true;
        */

      return token.length > 50; // Token válido geralmente é longo
    } catch (error) {
      console.error("❌ Erro ao verificar token Turnstile:", error);
      return false;
    }
  }

  reset() {
    if (this.widgetId && window.turnstile && window.turnstile.reset) {
      window.turnstile.reset(this.widgetId);
      console.log("🔄 Turnstile resetado");

      // Limpa o token
      const tokenField = document.getElementById("cf-turnstile-response");
      if (tokenField) {
        tokenField.value = "";
      }

      // Desativa o botão
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

  // Verificação simplificada para formulários
  async validateForm() {
    try {
      const token = this.getToken();
      if (!token) {
        return {
          success: false,
          error: "Por favor, complete a verificação de segurança",
        };
      }

      const isValid = await this.verifyToken(token);
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

    // Adiciona estilos para o Turnstile
    const turnstileStyle = document.createElement("style");
    turnstileStyle.textContent = `
        .cf-turnstile-container {
          margin: 1.5rem 0;
          display: flex;
          justify-content: center;
          min-height: 65px;
        }

        .cf-turnstile-notice {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-align: center;
          margin-top: 0.5rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
        }

        .cf-turnstile-notice i {
          color: var(--primary-color);
          font-size: 0.8rem;
        }

        /* Estilos para o widget do Turnstile */
        .cf-turnstile {
          transform: scale(0.9);
          transform-origin: center;
        }

        @media (max-width: 768px) {
          .cf-turnstile {
            transform: scale(0.85);
          }

          .cf-turnstile-container {
            min-height: 60px;
          }
        }

        @media (max-width: 480px) {
          .cf-turnstile {
            transform: scale(0.8);
          }
        }
      `;
    document.head.appendChild(turnstileStyle);

    // Renderiza o Turnstile no formulário
    setTimeout(() => {
      const container = document.getElementById("cf-turnstile-container");
      if (container) {
        turnstileManager.render("cf-turnstile-container");

        // Adiciona nota sobre Turnstile
        const notice = document.createElement("div");
        notice.className = "cf-turnstile-notice";
        notice.innerHTML =
          '<i class="fas fa-shield-alt"></i> Protegido por Cloudflare Turnstile';
        container.parentNode.insertBefore(notice, container.nextSibling);
      }
    }, 1000);
  }
});

// Exporta para uso global
window.turnstileManager = turnstileManager;
