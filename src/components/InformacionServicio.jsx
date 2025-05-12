import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PetsIcon from '@mui/icons-material/Pets';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles?.('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

function TopBar() {
  return (
    <Grid item size={{xs: 12,sm: 12,md:12}}>
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          width: '100%',
          height: {xs:'8vh',sm:'8vh',md:'6vh'},
          borderRadius: '10px',
          boxShadow: 2,
          display: 'flex',
          alignItems: 'center',
          p: '1vh 4vh',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' fontSize={{xs:'1rem',sm:'1.1rem',md:'1.2rem'}}>DETALLES DEL SERVICIO</Typography>
        <Button variant="outlined" size="small" startIcon={<EditIcon />} sx={{ borderRadius: 3 }}>
          Editar
        </Button>
      </Box>
    </Grid>
  );
}

function BodyInformation() {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          boxShadow: 2,
          padding: 5,
        }}
      >
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}  >
            <Typography variant="body1" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Tipo de servicio</Typography>
            <Typography fontWeight="bold" color="success.main" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Prestador de servicio</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Categoría</Typography>
            <Typography fontWeight="bold" color="success.main" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Adiestrador</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Descripción del servicio</Typography>
            <Typography fontWeight="bold" color="success.main" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>
              ¡Hola! Soy adiestrador de mascotas y me especializo en ayudarte a mejorar la convivencia con tu compañero peludo.
              Trabajo con técnicas de refuerzo positivo para enseñarle a tu mascota desde cachorro.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Días</Typography>
            <Typography fontWeight="bold" color="success.main" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>LUN - MAR - VIER</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Horarios</Typography>
            <Typography fontWeight="bold" color="success.main" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>0–2 HORAS</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Precios y tarifas</Typography>
            <Typography fontWeight="bold" color="success.main" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>
                $250 pesos <Box component="span" fontSize="0.75rem" color={'black'}>/servicio</Box>
            </Typography>

          </Grid>

          <Grid item size={{xs: 12,sm: 12,md:12}}>
            <Typography variant="body1" fontSize={{xs:'1rem',sm:'1.1rem', md:'1.2rem' }}>Preferencias de mascotas</Typography>
            <Box mt={1} display="flex" gap={1}>
              <Chip icon={<PetsIcon />} label="Perros pequeños" color="success" />
              <Chip icon={<PetsIcon />} label="Gatos" variant="outlined" color="success" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export function InformacionServicio() {
  return (
    <Box sx={{ flexGrow: 1, margin: '5vh' }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <TopBar />
        <BodyInformation />
      </Grid>
    </Box>
  );
}

export default InformacionServicio;