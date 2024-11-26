document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const registro = document.getElementById('registro').value;
    const password = document.getElementById('password').value;

    alert('Cadastro realizado com sucesso!');

    document.getElementById('cadastro-form').reset();
});
