import express from 'express';

const router = express.Router();

// crear usuario
router.post('/users', (req, res) => {
  res.send('create user');
});

export default router;
