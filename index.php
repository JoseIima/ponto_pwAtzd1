<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html"); // Redirecionar para a página de login se não estiver logado
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial</title>
    <link rel="stylesheet" href="css/styles.css"> 
</head>
<body>
    <header>
        <h1>Sistema de Controle de Ponto</h1>
        <div id="data-hora"></div>
    </header>
    <main>
        <h2>Registrar Ponto</h2>
        <form id="registro-form">
            <input type="text" id="nome" placeholder="Nome completo" required>
            <input type="text" id="registro" placeholder="Número de Registro" required>
            <select id="tipo-ponto">
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
                <option value="intervalo">Intervalo</option>
            </select>
            <input type="date" id="data" required>
            <input type="time" id="hora" required>
            <input type="text" id="justificativa" placeholder="Justificativa (opcional)">
            <input type="file" id="upload" accept=".pdf,.doc,.docx,.jpg,.png">
            <button type="submit">Registrar</button>
        </form>
        
        <div class="centralizar-botao">
            <button id="ver-relatorio">Ver Relatório</button>
        </div>
        
        <div id="mensagemSucesso" class="mensagem" style="display:none;"></div>
    </main>
    <script src="js/script.js"></script>
</body>
</html>
