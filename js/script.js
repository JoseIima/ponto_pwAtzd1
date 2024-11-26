document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const registro = document.getElementById('registro').value;
    const tipoPonto = document.getElementById('tipo-ponto').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const justificativa = document.getElementById('justificativa').value;

    const dataSelecionada = new Date(data);
    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);

    if (dataSelecionada > dataAtual) {
        alert("Não é possível registrar ponto em uma data futura.");
        return; 
    }

    const registroPonto = {
        nome: nome,
        registro: registro,
        tipoPonto: tipoPonto,
        data: data,
        hora: hora,
        justificativa: justificativa
    };

    let registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(registroPonto); 
   
    localStorage.setItem('registros', JSON.stringify(registros));

    window.location.href = 'relatorio.html';
});

document.getElementById('ver-relatorio').addEventListener('click', function() {
    
    window.location.href = 'relatorio.html';
});

setInterval(() => {
    const agora = new Date();
    document.getElementById('data-hora').innerText = agora.toLocaleString();
}, 1000);
