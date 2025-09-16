const form = document.getElementById("forgotForm");
const alertBox = document.getElementById("alertBox");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita recarregar a página

    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alertBox.textContent = "As senhas não coincidem!";
        alertBox.style.backgroundColor = "#FF4C4C"; // vermelho
    } else {
        alertBox.textContent = "Senha redefinida com sucesso!";
        alertBox.style.backgroundColor = "#4BB543"; // verde
    }

    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 3000);

    form.reset();
});
