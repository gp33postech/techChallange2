const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const connectDB = require('./config/db'); // Importando a função de conexão

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ Configuração de CORS com origem permitida
const allowedOrigins = [
  'http://localhost:5173', // desenvolvimento
  'https://techchallenge-front.onrender.com' // produção no Render
];

app.use(cors({
  origin: function (origin, callback) {
    // Permite chamadas sem origin (como do Swagger local) e chamadas da lista
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Conectar ao banco de dados
connectDB();

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
        url: `http://localhost:${process.env.PORT}/api`,
      },
    ],
  },
  apis: ['./src/routes/postRoutes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usando as rotas de posts
app.use('/api', postRoutes);

// Configurando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
