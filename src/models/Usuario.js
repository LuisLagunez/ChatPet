import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String },
  correo: { type: String, required: true, unique: true },
  direccion: { type: String },
  codigoPostal: { type: String },
  telefono: { type: String },
  identificacion: { type: String },
  tipoServicio: { type: String },
  categoria: { type: String },
  descripcion: { type: String },
  diasDisponibles: { type: [String] },
  horario: { type: String },
}, {
  timestamps: true
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;
