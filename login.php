<?php
session_start();
$servername = "localhost"; // ou seu servidor de banco de dados
$username = "root"; // seu nome de usuário do MySQL
$password = ""; // sua senha do MySQL
$dbname = "sistema_controle_ponto";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['username']; // Mudar aqui para 'nome'
    $password = $_POST['password'];

    // Buscar usuário no banco de dados
    $sql = "SELECT * FROM usuarios WHERE nome = '$nome'"; // Alterado para 'nome'
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verificar a senha
        if (password_verify($password, $user['senha'])) { // Alterado para 'senha'
            // Senha correta, iniciar sessão
            $_SESSION['username'] = $nome; // Alterado para 'nome'
            $_SESSION['registro'] = $user['registro']; // Armazenar registro se necessário
            header("Location: index.php"); // Redirecionar para a página inicial
            exit();
        } else {
            echo "Usuário ou senha incorretos!";
        }
    } else {
        echo "Usuário não encontrado!";
    }
}

$conn->close();
?>
