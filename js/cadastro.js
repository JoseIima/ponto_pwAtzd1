document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const registro = document.getElementById('registro').value;
    const password = document.getElementById('password').value;

    // Lógica de registro (pode ser implementada com localStorage ou backend)
    alert('Cadastro realizado com sucesso!');

    // Limpar os campos do formulário
    document.getElementById('cadastro-form').reset();
});
