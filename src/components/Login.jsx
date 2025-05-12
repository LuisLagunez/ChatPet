import * as React from 'react';
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Container,
  Stack,
  Paper,
  Typography,
  Button,
  Avatar,
  Divider,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [correo, setCorreo] = React.useState('');
  const [contrasena, setContrasena] = React.useState('');
  const [error, setError] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    }
  }));

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        correo,
        contrasena
      });
      localStorage.setItem('usuario', JSON.stringify(res.data.usuario));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(error.response?.data?.error || 'Error desconocido');
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={2}>
        {/* Formulario */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, height: '100%' }}>
            <Typography sx={{ fontFamily: 'Baloo2', textAlign: 'center' }}>
              <h2 style={{ color: '#5d8c4c' }}>Chat Pet</h2>
            </Typography>
            <Typography sx={{ fontFamily: 'Baloo2', textAlign: 'center' }}>
              ¡Conecta con expertos y encuentra a los mejores servicios para tu mascota!
            </Typography>

            <Stack spacing={2} mt={1}>
              <TextField
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Contraseña"
                />
              </FormControl>

              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}

              <Typography
                align="right"
                sx={{
                  fontSize: "13px",
                  color: "#5d8c4c",
                  textDecoration: "none",
                  cursor: "pointer",
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                ¿Olvidaste tu contraseña?
              </Typography>

              <ColorButton variant="contained" fullWidth sx={{ color: '#fff' }} onClick={handleLogin}>
                Iniciar sesión
              </ColorButton>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 3 }}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography>o continúa con</Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton>
                <Avatar alt="Google" src="/google-icon.png" sx={{ width: 40, height: 40 }} />
              </IconButton>
              <IconButton>
                <Avatar alt="Apple" src="/apple-icon.png" sx={{ width: 40, height: 40 }} />
              </IconButton>
              <IconButton>
                <Avatar alt="Facebook" src="/facebook-icon.png" sx={{ width: 40, height: 40 }} />
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={1} textAlign="center">
              <Typography>¿No tienes cuenta?</Typography>
              <Typography
                onClick={() => navigate('/tipo')}
                sx={{
                  color: "#1e88e5",
                  textDecoration: "none",
                  cursor: "pointer",
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                Regístrate
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        {/* Imagen lateral */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              padding: 4,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#eaf2e5',
              backgroundImage: `url('/huellitas.png'), url('/huellitas.png')`,
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundPosition: 'top left, bottom right',
              backgroundSize: '40px, 60px',
              border: '#a4aaa1',
              position: 'relative'
            }}
          >
            <Avatar src="/gatito1.jpg" alt="gatito1" sx={{ width: 140, height: 140, position: 'absolute', top: 16, left: 16 }} />
            <Avatar src="/huron1.jpg" alt="huron1" sx={{ width: 135, height: 135, position: 'absolute', top: 16, right: 16 }} />
            <Stack direction="column" alignItems="center" spacing={2}>
              <Avatar alt="powito1" src="/powito1.jpeg" sx={{ width: 256, height: 256 }} />
              <Typography align="center">
                Tu mascota merece lo mejor, en <strong>Chat Pet</strong> te ayudamos a encontrarlo
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
