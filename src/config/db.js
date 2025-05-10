const mongoose = require('mongoose');

//Rodar no render
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
// module.exports