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
  Button
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    }
  }))

  return (
    <Container
      maxWidth="xlg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={2}>
        {/* Recuadro de formulario */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, height: '100%' }}>
            <Typography sx={{fontFamily:'Baloo2', textAlign: 'center'}}>
              <h2 style={{color:'#5d8c4c'}}>Chat Pet</h2>
            </Typography>
            <Typography sx={{fontFamily:'Baloo2', textAlign: 'center'}}>
              ¡Conecta con expertos y encuentra a los mejores servicios para tu mascota!
            </Typography>
            <Stack spacing={2} mt={1}>
              <TextField label="Usuario" variant="outlined" fullWidth />
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
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
              <ColorButton variant="contained" fullWidth sx={{color:'#fff'}}>
                Iniciar sesión
              </ColorButton>
            </Stack>
          </Paper>
        </Grid>

        {/* Recuadro imagen */}
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
              border: '#a4aaa1'
            }}
          >
            <Typography variant="body1">Powitos</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
