<?php
session_start();
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "sistema_controle_ponto";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome']; 
    $password = $_POST['password'];

    // Buscar usuário no banco de dados
    $sql = "SELECT * FROM usuarios WHERE nome = '$nome'"; 
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verificar a senha
        if (password_verify($password, $user['senha'])) { 
            // Senha correta, iniciar sessão
            $_SESSION['username'] = $nome; 
            $_SESSION['registro'] = $user['registro']; 
            header("Location: index.php"); 
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
