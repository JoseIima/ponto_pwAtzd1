document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Login realizado como: ${username}`);
        
        window.location.href = 'index.php';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
