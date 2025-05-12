import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  direccion: { type: String },
  codigoPostal: { type: String },
  telefono: { type: String },
  identificacion: { type: String },
  nombreMascota: { type: String },
  pesoMascota: { type: String },
  tipoMascota: { type: String },
  tipoServicioPreferente: { type: String },
  frecuenciaUso: { type: String },
}, {
  timestamps: true
});

export default mongoose.model('Cliente', clienteSchema);
