import express from 'express';
import Usuario from '../models/Usuario.js';
import Cliente from '../models/Cliente.js';
import bcrypt from 'bcrypt';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Ruta: POST /api/registro (prestador de servicios)
router.post('/registro', upload.single('selfie'), async (req, res) => {
  try {
    const {
      nombre, apellidos, correo, contrasena, direccion,
      codigoPostal, telefono, identificacion, tipoServicio,
      categoria, descripcion, horario
    } = req.body;

    const diasDisponibles = req.body['diasDisponibles[]'] || [];

    const selfieBuffer = req.file?.buffer;

    const existe = await Usuario.findOne({ correo });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado como usuario' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = new Usuario({
      nombre,
      apellidos,
      correo,
      contrasena: hashedPassword,
      direccion,
      codigoPostal,
      telefono,
      identificacion,
      tipoServicio,
      categoria,
      descripcion,
      horario,
      diasDisponibles: Array.isArray(diasDisponibles) ? diasDisponibles : [diasDisponibles],
      selfie: selfieBuffer
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });

  } catch (error) {
    console.error('Error en /registro:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta: POST /api/cliente
router.post('/cliente', async (req, res) => {
  try {
    const {
      nombre,
      apellidos,
      correo,
      contrasena,
      direccion,
      codigoPostal,
      telefono,
      identificacion,
      nombreMascota,
      pesoMascota,
      tipoMascota,
      tipoServicioPreferente,
      frecuenciaUso
    } = req.body;

    const existe = await Cliente.findOne({ correo });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado como cliente' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const nuevoCliente = new Cliente({
      nombre,
      apellidos,
      correo,
      contrasena: hashedPassword,
      direccion,
      codigoPostal,
      telefono,
      identificacion,
      nombreMascota,
      pesoMascota,
      tipoMascota,
      tipoServicioPreferente,
      frecuenciaUso
    });

    await nuevoCliente.validate();
    await nuevoCliente.save();

    res.status(201).json({ mensaje: 'Cliente registrado exitosamente' });

  } catch (error) {
    console.error('Error en /cliente:', error);
    res.status(500).json({ error: error.message || 'Error al registrar el cliente' });
  }
});

// Ruta: POST /api/login
router.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const match = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!match) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.status(200).json({
      mensaje: 'Login exitoso',
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: 'prestador',
        selfie: usuario.selfie
        ? Buffer.isBuffer(usuario.selfie)
          ? usuario.selfie.toString('base64')
          : Buffer.from(usuario.selfie.data).toString('base64')
        : null,
      }
    });

  } catch (error) {
    console.error('Error en /login:', error);
    res.status(500).json({ error: 'Error en el login' });
  }
});

export default router;