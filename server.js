import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './src/routes/user.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Crear servidor HTTP y socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
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

// Socket.IO
io.on('connection', (socket) => {
  console.log('🔌 Usuario conectado:', socket.id);

  socket.on('mensaje', (data) => {
    console.log('📩 Mensaje recibido:', data);
    io.emit('mensaje', data); // Enviar a todos los clientes conectados
  });

  socket.on('disconnect', () => {
    console.log('❌ Usuario desconectado:', socket.id);
  });
});

// Iniciar servidor
server.listen(port, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${port}`);
});