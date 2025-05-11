const mongoose = require('mongoose');

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb://localhost:27017/api-blog'; // Local como fallback

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🟢 Conectado ao MongoDB');
  } catch (error) {
    console.error('🔴 Erro ao conectar ao MongoDB', error);
  }
};

module.exports = connectDB;
