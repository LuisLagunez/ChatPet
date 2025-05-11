import express from 'express';
import Usuario from '../models/Usuario.js';
import Cliente from '../models/Cliente.js';

const router = express.Router();

// Ruta: POST /api/registro
router.post('/registro', async (req, res) => {
  try {
    const {
      nombre,
      apellidos,
      correo,
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

    // Verificar que el correo no esté duplicado
    const existe = await Usuario.findOne({ correo });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const nuevoUsuario = new Usuario({
      nombre,
      apellidos,
      correo,
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

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });

  } catch (error) {
    console.error(error);
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

    const nuevoCliente = new Cliente({
      nombre,
      apellidos,
      correo,
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

    await nuevoCliente.save();
    res.status(201).json({ mensaje: 'Cliente registrado exitosamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar el cliente' });
  }
});

export default router;
