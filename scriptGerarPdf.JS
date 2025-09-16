function gerarPDF() {
    const tabela = document.getElementById("tabelaHistorico");
    if (!tabela) return;

    let csvContent = "";

    // Cabeçalho
    const headers = tabela.querySelectorAll("thead th");
    const headerArray = Array.from(headers).map(th => `"${th.innerText}"`);
    csvContent += headerArray.join(",") + "\n";

    // Linhas do corpo
    const rows = tabela.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const cols = row.querySelectorAll("td");
        const rowArray = Array.from(cols).map(td => `"${td.innerText}"`);
        csvContent += rowArray.join(",") + "\n";
    });

    // Criar arquivo para download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "historico_monitoramento.csv";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
