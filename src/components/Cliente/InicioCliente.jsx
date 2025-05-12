import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Icons
import PetsIcon from '@mui/icons-material/Pets';
import ChatIcon from '@mui/icons-material/Chat';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export function InicioCliente() {
  const estadoMascota = []; // Simula que no hay actividad

  const botones = [
    { id: 1, label: 'Realizar reservación', icon: <EventAvailableIcon />, to: '/reservar' },
    { id: 2, label: 'Ver chat', icon: <ChatIcon />, to: '/chat' },
    { id: 3, label: 'Mis mascotas', icon: <PetsIcon />, to: '/mascotas' },
  ];

  const recomendaciones = [
    'Asegúrate de que tu mascota tome agua hoy',
    'Recuerda cepillar su pelaje',
    'Una caminata de 20 minutos le hará bien',
  ];

  function ButtonAction({ data }) {
    return (
      <Grid container spacing={4} sx={{ justifyContent: 'flex-start', mb: 4 , width:'100%'}} size={{xs:12,sm:12,md:12}}>
        {data.map((btn) => (
          <Grid item key={btn.id}>
            <Button
              fullWidth
              variant="outlined"
              color="black"
              startIcon={btn.icon}
              component={Link}
              to={btn.to}
              sx={{ height: 60, fontSize: '1rem', fontWeight: 'bold' }}
            >
              {btn.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  }

  function Recommendations() {
    return (
      <Grid item size={{xs:12,sm:4,md:4}}>
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: '10px',
            boxShadow: 2,
            padding: 3,
            border:'1px solid black'
          }}
        >
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }}>
            RECOMENDACIONES
          </Typography>
          {recomendaciones.map((rec, index) => (
            <Card key={index} sx={{ mb: 2, backgroundColor: '#f5f5f5' , border:'1px solid black'}}>
              <CardContent>
                <Typography>{rec}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
    );
  }

  function PetState() {
    return (
      <Grid item size={{xs:12,sm:8,md:8}}>
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: '10px',
            boxShadow: 2,
            padding: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border:'1px solid black'
          }}
        >
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }}>
            ESTADO DE LA MASCOTA
          </Typography>
          <Box
          sx={{
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
          >
            {estadoMascota.length === 0 ? (
            <Typography
              variant="h5"
              sx={{ textAlign: 'center', color: '#999', justifyContent:'center' }}
            >
              HOY NO TIENES ACTIVIDADES
            </Typography>
          ) : (
            estadoMascota.map((item, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1">
                    Actividad: {item.actividad}
                  </Typography>
                  <Typography variant="body2">
                    Hora: {item.hora}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
          </Box>
        </Box>
      </Grid>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, margin: '5vh' }}>
      <Grid container spacing={2}>
        <ButtonAction data={botones} />
        <Recommendations />
        <PetState />
      </Grid>
    </Box>
  );
}

export default InicioCliente;
