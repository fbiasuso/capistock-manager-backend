import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
      
      const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/capistock-manager';
  
      // Conexión a MongoDB
      await mongoose.connect(MONGO_URI);
  
      console.log('Conexión exitosa a la base de datos 🎉');
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error.message);
      process.exit(1); 
    }
  };
  
  export default connectDB;