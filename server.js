import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // <-- importa cors
import userRoutes from './src/routes/user.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // <-- habilita CORS
app.use(express.json());
app.use('/api', userRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.log('Error de conexión a MongoDB Atlas:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Conexión exitosa a MongoDB Atlas!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
