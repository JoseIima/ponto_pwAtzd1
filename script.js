document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const registro = document.getElementById('registro').value;
    const tipoPonto = document.getElementById('tipo-ponto').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const justificativa = document.getElementById('justificativa').value;

    // Verificar a data
    const dataSelecionada = new Date(data);
    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0); // Para comparação

    if (dataSelecionada > dataAtual) {
        alert("Não é possível registrar ponto em uma data futura.");
        return; // Sair da função se a data for inválida
    }

    // Criar um objeto para armazenar o registro
    const registroPonto = {
        nome: nome,
        registro: registro,
        tipoPonto: tipoPonto,
        data: data,
        hora: hora,
        justificativa: justificativa
    };

    // Obter registros existentes ou criar um novo array
    let registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(registroPonto); // Adicionar o novo registro

    // Salvar no LocalStorage
    localStorage.setItem('registros', JSON.stringify(registros));

    // Redirecionar para a página de relatório
    window.location.href = 'relatorio.html';
});

// Evento para o botão "Ver Relatório"
document.getElementById('ver-relatorio').addEventListener('click', function() {
    // Redirecionar diretamente para a página de relatório
    window.location.href = 'relatorio.html';
});

// Exibir data e hora atual
setInterval(() => {
    const agora = new Date();
    document.getElementById('data-hora').innerText = agora.toLocaleString();
}, 1000);
