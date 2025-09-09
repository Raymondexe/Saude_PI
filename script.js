/* BEGIN DARK/LIGHT MODE*/
const toggleTheme = document.getElementById("toggle-theme");

// Função para definir tema
function setTheme(theme) {
  if(theme === "dark") {
    document.body.classList.add("dark-mode");
    toggleTheme.textContent = "☀️ Modo Claro";
  } else {
    document.body.classList.remove("dark-mode");
    toggleTheme.textContent = "🌙 Modo Escuro";
  }
  localStorage.setItem("theme", theme);
}

// Carregar preferência salva
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Alternar tema ao clicar
toggleTheme.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});


const configBtn = document.getElementById("config-btn");
const dropdown = document.querySelector(".config-menu .dropdown");

// Alternar visibilidade do menu ao clicar na engrenagem
configBtn.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  dropdown.style.flexDirection = "column";
});

// Fechar dropdown ao clicar fora
document.addEventListener("click", (e) => {
  if (!e.target.closest(".config-menu")) {
    dropdown.style.display = "none";
  }
});

/* END DARK/LIGHT MODE*/

/*  TRADUÇÃO BÁSICA */

const langBtn = document.getElementById("change-lang");

const translations = {
    pt: {
        home: "Home",
        monitoring: "Monitoramento",
        history: "Histórico",
        services: "Serviços",
        about: "Quem somos",
        darkMode: "🌙 Modo Escuro",
        lightMode: "☀️ Modo Claro",
        accessibility: "♿ Acessibilidade",
        changeLang: "🌎 Trocar Idioma"
    },
    en: {
        home: "Home",
        monitoring: "Monitoring",
        history: "History",
        services: "Services",
        about: "About Us",
        darkMode: "🌙 Dark Mode",
        lightMode: "☀️ Light Mode",
        accessibility: "♿ Accessibility",
        changeLang: "🌎 Change Language"
    }
};

// Carregar preferência do idioma
let currentLang = localStorage.getItem("lang") || "pt";
applyLanguage(currentLang);

// Função para aplicar o idioma
function applyLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[lang][key];
    });

    // Atualizar textos dos botões do dropdown
    toggleTheme.textContent = document.body.classList.contains("dark-mode") 
        ? translations[lang].lightMode 
        : translations[lang].darkMode;
    document.getElementById("accessibility").textContent = translations[lang].accessibility;
    langBtn.textContent = translations[lang].changeLang;

    localStorage.setItem("lang", lang);
}

// Alternar idioma ao clicar
langBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    applyLanguage(currentLang);
});






/* LOGIN */

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Simulação de login
    if(email === "usuario@exemplo.com" && senha === "123456") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar para o dashboard
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Email ou senha incorretos!";
    }
});


















