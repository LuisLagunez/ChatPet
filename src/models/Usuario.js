const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  correo: { type: String, required: true, unique: true },
  contraseña: String,
  direccion: String,
  codigoPostal: String,
  telefono: String,
  identificacion: String, // o Buffer si subes archivo

  tipoServicio: { type: String, enum: ['servicio', 'negocio'] },
  categoria: String,
  descripcion: String,
  diasDisponibles: [String],
  horario: String,

  terminosAceptados: Boolean,
  privacidadAceptada: Boolean
});
