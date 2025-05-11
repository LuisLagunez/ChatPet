import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  correo: String,
  direccion: String,
  codigoPostal: String,
  telefono: String,
  identificacion: String,
  nombreMascota: String,
  pesoMascota: String,
  tipoMascota: String,
  tipoServicioPreferente: String,
  frecuenciaUso: String,
}, { timestamps: true });

export default mongoose.model('Cliente', clienteSchema);
