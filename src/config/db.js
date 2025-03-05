const mongoose = require('mongoose');

// Função para conectar ao MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://mongo:27017/api-blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1); // Encerra o processo caso haja erro de conexão
    }
};

module.exports = connectDB;
