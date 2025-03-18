const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
.then(() => console.log("Conectado ao MongoDB"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Posts',
            version: '1.0.0',
            description: 'Documentação da API para gerenciar posts',
        },
        servers: [
            {
                url: 'http://localhost:4000/api',
            },
        ],
    },
    apis: ['./routes/postRoutes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usando as rotas de posts
app.use('/api', postRoutes);

// Configurando o servidor para escutar em uma porta
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});