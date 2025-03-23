# Bem-vindo ao projeto TechChallenge 2 - API do Blog!

O repositório contém o código-fonte e a documentação para a API do Blog. 


## Índice

- [Introdução](#introdução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e uso](#instalação-e-uso)
- [Endpoints da API](#endpoints-da-api)
- [Documentação das APIs - Swagger](#documentação-das-apis---swagger)
- [Dependências](#dependências)
- [Relatos e desafios no desenvolvimento](#relatos-e-desafios-no-desenvolvimento)


## Introdução

Este projeto foi desenvolvido como parte das atividades de da Pós-tech Fase 2, em que precisamos desenvolver o back-end de uma apliação blogging para fornecer uma maneira simples e eficiente dos docentes gerenciarem e publicar postagens de blog e que os alunos consigam acessar e ler os posts. Este projeto é uma API construída com Node.js e Express, utilizando MongoDB como banco de dados e o Docker para a containerização. A API permite criar, ler, atualizar e excluir posts, além de buscar posts por palavra-chave.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- GitHub Actions
- Swagger

## Instalação e uso

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/techChallange2.git
   cd techChallange2

2. Inicie a aplicação com Docker:
   Iniciará a aplicação e o MongoDB em contêineres separados. O servidor estará rodando na porta especificada.
   
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

Está sendo utilizada uma arquitetura em camadas, que permite o desenvolvimento e testes de forma mais independente e facilita a manutenção e escalabilidade do projeto.

## Endpoints da API

### 1. GET /posts - Listar Todos os Posts 
Retorna uma lista com todos os posts disponiveis

Exemplo de Requisição:
```GET http://localhost:5000/api/posts/```

### 2. GET /posts/:id - Buscar um Post pelo ID específico
Retorna o post cujo ID foi especificado no endpoint, permitirá a leitura do post 

Exemplo de Requisição:
```GET http://localhost:5000/api/posts/605c72ef1f1b2c001f8e4e1a```

### 3. POST /posts - Criação de Postagens:
Permite que os docentes criem postagens 
Exemplo de Requisição:
```
POST http://localhost:5000/api/posts/
Content-Type: application/json

{
    "title": "Novo Post",
    "description": "Descrição do novo post.",
    "image": "string da imagem",
    "author": "Autor do Post"
}
```
### 4. PUT /posts/:id - Edição de Post
Permite que o docente edite uma postagem passando o ID do post e os campos atualizados.

Exemplo de Requisição:
```
PUT http://localhost:5000/api/posts/605c72ef1f1b2c001f8e4e1b
Content-Type: application/json

{
    "title": "Post Atualizado",
    "description": "Descrição atualizada do post."
}
```

### 5. DELETE /posts/:id - Exclusão de Postagens
Permite que os docentes excluam algum post específico passando o ID como parâmetro

Exemplo de requisição:
```DELETE http://localhost:5000/api/posts/605c72ef1f1b2c001f8e4e1b```

### 6. GET /posts/search - Busca de Posts usando palavra-chave
Endpoint que permite a busca de postagens utilizando palavras-chave. O usuário passa uma string de busca e a API retorna uma lista de posts que contêm o termo pesquisado.
GET /posts/search?query=keyword

Exemplo de Requisição:
```GET http://localhost:5000/api/posts/search?query=primeiro```

## Documentação das APIs - Swagger
````http://localhost:5000/api-docs/#/default/post_posts````

OU

````https://techchallange2.onrender.com/api-docs/````

## Dependências
        "cors": "^2.8.5",
        "cross-env": "^7.0.3",
        "dotenv": "^16.4.7",
        "express": "^4.21.2",
        "mongoose": "^8.12.1",
        "multer": "^1.4.5-lts.1",
        "swagger": "^0.7.5",
        "swagger-jsdoc": "^6.2.8",
        "swagger-ui-express": "^5.0.1"



## Relatos e desafios no desenvolvimento
Alguns dos desafios encontrados pela equipe durante o desenvolvimento foram a configuração do ambiente, familiarização com as ferramentas apresentadas em aula e integração de todo o conteúdo teórico com a abordagem prática exigida no desafio em grupo.

## GRUPO 33
#### ADRIANO BATISTA DE ARAÚJO - RM: 360317
#### FILIPE ARAÚJO DA COSTA - RM: 360594
#### GABRIELA MIDORI AFUSO - RM: 360009 
#### PEDRO CARVALHO CALLEJAS - RM: 360449