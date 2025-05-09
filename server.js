import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// Cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Conectar a MongoDB Atlas sin las opciones de deprecated
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Conectado a MongoDB Atlas');
})
.catch((err) => {
  console.log('Error de conexión a MongoDB Atlas:', err);
});

// Ruta de prueba para verificar la conexión
app.get('/', (req, res) => {
  res.send('¡Conexión exitosa a MongoDB Atlas!');
});

// Ruta adicional para asegurarte de que todo funciona
app.get('/status', (req, res) => {
  res.json({ status: 'Conectado a MongoDB Atlas' });
});

// Escuchar en el puerto
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
