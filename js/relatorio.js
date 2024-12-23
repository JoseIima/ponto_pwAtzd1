function exibirRegistros(registrosFiltrados) {
    const registros = registrosFiltrados || JSON.parse(localStorage.getItem('registros')) || [];
    const relatorioDiv = document.getElementById('relatorio');

    if (registros.length === 0) {
        relatorioDiv.innerHTML = '<p>Nenhum registro encontrado.</p>';
        return;
    }

    relatorioDiv.innerHTML = ''; 
    registros.forEach((registro, index) => {
        const registroDiv = document.createElement('div');
        registroDiv.classList.add('registro');
        
        registroDiv.innerHTML = `
            <strong>${registro.nome}</strong>
            <button class="editar" data-index="${index}">Editar</button>
            <button class="excluir" data-index="${index}">Excluir</button>
        `;

        registroDiv.addEventListener('click', () => mostrarDetalhes(registro));
        relatorioDiv.appendChild(registroDiv);
    });

    document.querySelectorAll('.editar').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const index = btn.dataset.index;
            editarRegistro(index);
        });
    });

    document.querySelectorAll('.excluir').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const index = btn.dataset.index;
            excluirRegistro(index);
        });
    });
}

function aplicarFiltro() {
    const nomeFiltro = document.getElementById('filtro-nome').value.toLowerCase();
    const registroFiltro = document.getElementById('filtro-registro').value.toLowerCase();
    const dataFiltro = document.getElementById('filtro-data').value;

    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    const registrosFiltrados = registros.filter(registro => {
        const nomeMatch = registro.nome.toLowerCase().includes(nomeFiltro);
        const registroMatch = registro.registro.toLowerCase().includes(registroFiltro);
        const dataMatch = dataFiltro ? registro.data === dataFiltro : true;
        return nomeMatch && registroMatch && dataMatch;
    });

    exibirRegistros(registrosFiltrados); 
}

function mostrarDetalhes(registro) {
    const detalhesDiv = document.getElementById('detalhes');
    detalhesDiv.innerHTML = `
        <div><strong>Nome:</strong> ${registro.nome}</div>
        <div><strong>Número de Registro:</strong> ${registro.registro}</div>
        <div><strong>Tipo de Ponto:</strong> ${registro.tipoPonto}</div>
        <div><strong>Data:</strong> ${registro.data}</div>
        <div><strong>Hora:</strong> ${registro.hora}</div>
        <div><strong>Justificativa:</strong> ${registro.justificativa}</div>
    `;
    document.getElementById('myModal').style.display = 'flex'; 
}
function editarRegistro(index) {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    const registro = registros[index];
    
    const form = document.createElement('form');
    form.innerHTML = `
        <label>Nome: <input type="text" value="${registro.nome}" required></label><br>
        <label>Número de Registro: <input type="text" value="${registro.registro}" required></label><br>
        <label>Tipo de Ponto: <input type="text" value="${registro.tipoPonto}" required></label><br>
        <label>Data: <input type="date" value="${registro.data}" required></label><br>
        <label>Hora: <input type="time" value="${registro.hora}" required></label><br>
        <label>Justificativa: <input type="text" value="${registro.justificativa}"></label><br>
        <button type="submit">Salvar</button>
    `;

    form.onsubmit = function(event) {
        event.preventDefault();

        const novaData = new Date(form[3].value);
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        if (novaData > hoje) {
            alert('A data não pode ser no futuro.');
            return;
        }

        const updatedRegistro = {
            nome: form[0].value,
            registro: form[1].value,
            tipoPonto: form[2].value,
            data: form[3].value,
            hora: form[4].value,
            justificativa: form[5].value,
        };
        registros[index] = updatedRegistro;
        localStorage.setItem('registros', JSON.stringify(registros));
        exibirRegistros();
        document.getElementById('myModal').style.display = 'none';
    };

    const detalhesDiv = document.getElementById('detalhes');
    detalhesDiv.innerHTML = '';
    detalhesDiv.appendChild(form);
    document.getElementById('myModal').style.display = 'flex'; 
}
function excluirRegistro(index) {
    if (confirm('Você tem certeza que deseja excluir este registro?')) {
        const registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.splice(index, 1); 
        localStorage.setItem('registros', JSON.stringify(registros));
        exibirRegistros();
    }
}

function gerarArquivoTXT() {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    if (registros.length === 0) {
        alert('Nenhum registro disponível para gerar o arquivo TXT.');
        return;
    }

    let texto = 'Relatório de Ponto\n\n';
    registros.forEach((registro, index) => {
        texto += `Registro ${index + 1}:\n`;
        texto += `Nome: ${registro.nome}\n`;
        texto += `Número de Registro: ${registro.registro}\n`;
        texto += `Tipo de Ponto: ${registro.tipoPonto}\n`;
        texto += `Data: ${registro.data}\n`;
        texto += `Hora: ${registro.hora}\n`;
        texto += `Justificativa: ${registro.justificativa}\n`;
        texto += '-----------------------------\n';
    });

    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'relatorio.txt';
    document.body.appendChild(a);
    a.click(); 
    document.body.removeChild(a);
    URL.revokeObjectURL(url); 
}

document.getElementById('gerar-txt').addEventListener('click', gerarArquivoTXT);

document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}

document.getElementById('filtrar').addEventListener('click', () => {
    const opcoesFiltro = document.getElementById('filtro-opcoes');
    opcoesFiltro.style.display = opcoesFiltro.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('aplicar-filtro').addEventListener('click', aplicarFiltro);

window.onload = exibirRegistros;

document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'index.php'; 
});
