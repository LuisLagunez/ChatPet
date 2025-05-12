import express from 'express';
import Usuario from '../models/Usuario.js';
import Cliente from '../models/Cliente.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Ruta: POST /api/registro
router.post('/registro', async (req, res) => {
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
      tipoServicio,
      categoria,
      descripcion,
      diasDisponibles,
      horario
    } = req.body;

    const existe = await Usuario.findOne({ correo });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
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
      diasDisponibles,
      horario
    });

    await nuevoUsuario.validate();
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });

  } catch (error) {
    console.error('Error en /registro:', error);
    res.status(500).json({ error: error.message || 'Error al registrar el usuario' });
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

export default router;
