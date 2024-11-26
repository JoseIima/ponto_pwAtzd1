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


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome']; 
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE nome = '$nome'"; 
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['senha'])) { 
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
