# Projeto CRUD de Livraria com React e Node.js

Este projeto é uma aplicação completa para gerenciar uma livraria, utilizando **React** no front-end e **Node.js** com **Express** e **MongoDB** no back-end. Inclui operações de **CRUD** (Create, Read, Update, Delete) para livros e utiliza componentes e modais estilizados com **React-Bootstrap**.

## Funcionalidades
- **Listagem de Livros**: Exibe todos os livros cadastrados com suas informações.
- **Adicionar Livro**: Modal interativo para adicionar um novo livro.
- **Editar Livro**: Permite atualizar as informações de um livro existente.
- **Excluir Livro**: Opção de remover um livro do acervo.
- **Interface Moderna**: Estilizada com React-Bootstrap e tema visual agradável.

## Tecnologias Utilizadas
- **Front-end**: React, React-Bootstrap, CSS.
- **Back-end**: Node.js, Express, MongoDB.
- **Bibliotecas Auxiliares**: React-Router-Dom para roteamento e Bootstrap para componentes visuais.

## Estrutura de Arquivos

```bash
.
├── public/                  # Arquivos estáticos do React
├── src/                     # Código-fonte do React
│   ├── components/          # Componentes React
│   │   ├── Home.js          # Página inicial do projeto
│   │   ├── Book_List.js     # Lista de livros e funcionalidades de CRUD
│   │   ├── Add_Book.js      # Função para adicionar livro
│   │   ├── Edit_Book.js     # Função para editar livro
│   │   └── Delete_Book.js   # Função para deletar livro
│   ├── App.js               # Configuração das rotas e Navbar
│   ├── index.js             # Ponto de entrada do React
│   └── App.css              # Arquivo de estilo personalizado
├── .gitignore               # Arquivos a serem ignorados pelo Git
├── README.md                # Documentação do projeto
└── package.json             # Dependências e scripts do projeto React

```
## Instalação do Projeto

### 1. Clonar o Repositório
Primeiro, clone o repositório do projeto para a sua máquina local:
```bash

git clone https://github.com/usuario/projeto-livraria.git
```
###2. Instalar Dependências
Navegue até o diretório do projeto e instale as dependências do front-end e do back-end:

```bash

cd projeto-livraria
npm install
```
###3. Configuração do Banco de Dados
Crie um arquivo .env na raiz do diretório do back-end com as seguintes variáveis de ambiente:

```bash

DB_CONNECTION_STRING=mongodb+srv://<usuario>:<senha>@<cluster>/<database>?retryWrites=true&w=majority&appName=<appName>
Substitua <usuario>, <senha>, <cluster> e <database> pelas suas credenciais e informações do MongoDB.
```
###4. Iniciar o Servidor Back-end
Navegue até o diretório do servidor e inicie o servidor back-end:

```
npm run dev
```
O servidor estará disponível em http://localhost:3000.

###5. Iniciar o Front-end
Abra um novo terminal e inicie o projeto React:

```
npm start
```
O front-end estará disponível em http://localhost:3001.

## Endpoints da API
Esses são os endpoints disponíveis para o gerenciamento de livros:

GET /livros: 
Lista todos os livros cadastrados.

GET /livros/:id: 
Retorna as informações de um livro específico.

POST /livros: 
Adiciona um novo livro.


PUT /livros/:id: 
Atualiza um livro existente.

DELETE /livros/:id: 
Exclui um livro do acervo.

No Front-End, estamos utilizando todos menos o GET por id



## Detalhamento dos Componentes

### App.js
Configura as rotas principais (Home e Lista de livros) e define a Navbar para navegação.
Utiliza React-Router-Dom para gerenciamento de navegação e React-Bootstrap para componentes estilizados.


### Home.js
Página inicial do projeto com uma breve introdução e um botão de navegação para a lista de livros.
Usa Card e Button do React-Bootstrap para o layout.



### Book_List.js
Componente principal que exibe a lista de livros e gerencia as operações de adicionar, editar e excluir.
Inclui um modal interativo que alterna entre os modos de Adicionar e Editar livro.
A tabela de livros é estilizada com cores e botões interativos para cada ação.


### Add_Book.js
Função para adicionar um novo livro no banco de dados, utilizando fetch para realizar a requisição POST.


### Edit_Book.js
Função para editar um livro existente, enviando uma requisição PUT com as novas informações.


### Delete_Book.js
Função para deletar um livro do banco de dados, enviando uma requisição DELETE com o ID correspondente.
