document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para validar o login
    // Por exemplo, checando com localStorage ou um backend.

    // Simulação de autenticação (substitua pela lógica real)
    if (username && password) {
        alert(`Login realizado como: ${username}`);
        
        // Redirecionar para index.html
        window.location.href = 'index.php';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
