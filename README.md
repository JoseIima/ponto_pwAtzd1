# Sistema de Controle de Ponto

Este projeto é um sistema de controle de ponto desenvolvido em PHP, HTML, CSS e JavaScript. O objetivo é permitir que os usuários registrem suas entradas e saídas, além de gerar relatórios de ponto.

## Funcionalidades

### 1. Registro de Usuário
- Os novos usuários podem se cadastrar fornecendo informações como nome, registro e senha.
- O sistema armazena essas informações em um banco de dados MySQL.

### 2. Login
- Usuários já cadastrados podem fazer login usando seu nome de usuário e senha.
- Após o login bem-sucedido, o usuário é redirecionado para a página de relatórios.

### 3. Registro de Ponto
- Na página inicial (`index.php`), os usuários podem registrar suas entradas e saídas.
- O sistema valida se o usuário está logado antes de permitir o registro de ponto.

### 4. Relatórios
- Os usuários podem acessar a página de relatórios (`relatorio.php`), onde podem visualizar suas entradas e saídas registradas.
- Há uma opção para filtrar os registros por nome, registro e data.

### 5. Geração de Arquivo TXT
- Os usuários podem gerar um arquivo TXT contendo os registros filtrados, facilitando a exportação de dados.

### 6. Responsividade
- O design do site é responsivo, garantindo uma boa experiência de uso em dispositivos móveis e desktop.

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Banco de Dados**: MySQL

## Estrutura do Projeto
- `index.php`: Página inicial do sistema, onde os usuários registram suas entradas e saídas.
- `login.php`: Página de login para autenticação de usuários.
- `cadastro.php`: Página para registro de novos usuários.
- `relatorio.php`: Página que exibe os registros de ponto dos usuários.
- `css/`: Diretório contendo os arquivos CSS para estilização.
- `js/`: Diretório contendo os arquivos JavaScript para funcionalidades interativas.
- `login.php`: Script PHP para autenticar usuários.
- `cadastro.php`: Script PHP para registrar novos usuários.

## Como Usar
1. Clone este repositório em seu ambiente local.
2. Configure seu banco de dados MySQL e importe as tabelas necessárias.
3. Abra o arquivo `index.php` em um servidor local (ex: XAMPP).
4. Registre-se como um novo usuário ou faça login se já tiver uma conta.

## Contribuições
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

