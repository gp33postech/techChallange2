# Bem-vindo ao projeto Blog de API!

O repositório contém o código-fonte e a documentação para o Blog de API. 

## Índice

- [Introdução](#introdução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e uso](#instalação-e-uso)
- [Documentação das APIs - Swagger](#documentação-das-apis---swagger)
- [Dependências](#dependências)


## Introdução

Este projeto foi desenvolvido como parte das atividades de da Pós-tech Fase 2, em que precisamos desenvolver o back-end de uma apliação blogging para fornecer uma maneira simples e eficiente de gerenciar e publicar postagens de blog através de uma API. Este projeto é uma API construída com Node.js e Express, utilizando MongoDB como banco de dados. A API permite criar, ler, atualizar e excluir posts, além de buscar posts por palavra-chave.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- GitHub Actions

## Instalação e uso

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/techChallange2.git
   cd techChallange2

2. Inicie a aplicação com Docker:
   Iniciará a aplicação e o MongoDB em contêineres separados. O servidor estará rodando na porta especificada (por padrão, 3000).
   
   ```bash
   docker-compose up -d
   ```

## Descrição dos Diretórios e Arquivos
- **.github/**: Diretório contendo configurações específicas do GitHub.
  - **workflows/**: Diretório contendo os workflows do GitHub Actions.
    - **main.yml**: Arquivo de configuração do workflow de CI/CD para o projeto.
      
- **src/**: Diretório principal do código-fonte da Aplicação.
  - **controllers/**: Contém os controladores que lidam com a lógica das requisições.
    - **postController.js**: Controlador responsável pelas operações relacionadas aos posts, como criação, leitura, atualização e exclusão.
  - **models/**: Contém os modelos de dados da aplicação.
    - **postModel.js**: Modelo de dados para os posts, definindo a estrutura e os tipos de dados armazenados no MongoDB.
  - **routes/**: Contém as definições de rotas da aplicação.
    - **postRoutes.js**: Define as rotas relacionadas aos posts e mapeia essas rotas para os métodos do controlador correspondente.
  - **tests/**: Contém os testes da aplicação.
    - **post.test.js**: Testes para garantir que as funções e rotas da API estejam funcionando corretamente.
  - **app.js**: Arquivo principal da aplicação.

- **.env**: Arquivo de configuração de variáveis de ambiente.

- **package.json**: Arquivo de configuração do npm, contendo as dependências do projeto.
  
- **docker-compose.yml e Dockerfile**: Arquivos para configurar o container.
  
- **README.md**: Arquivo de documentação do projeto, fornecendo uma visão geral da API.

## Documentação das APIs - Swagger
http://localhost:5000/api-docs/#/default/post_posts

## Testando as Rotas da API
Pode usar ferramentas como Insomnia ou Postman para testar as rotas da API desse projeto.

###Listar Todos os Posts###
Retorna uma lista de todos os posts.
GET /posts

Exemplo de Requisição:
```GET http://localhost:3000/posts```

## Dependências
Docker
Docker-compose
```bash
docker-compose up -d
```
MongoDb
Bibliotecas do swagger
```bash
npm install swagger
npm install swagger-ui-express swagger-jsdoc
```
