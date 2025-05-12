import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Divider, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';



const reseñas = [
  {
    nombre: 'Juan A.',
    foto: 'https://randomuser.me/api/portraits/men/1.jpg',
    tipo: 'A domicilio',
    fecha: '30/04/2025',
    texto: 'Adiestrar a mi mascota fue una de las mejores decisiones. Aunque es pequeña, con paciencia y refuerzos positivos aprendió rápido...'
  },
  {
    nombre: 'María L.',
    foto: 'https://randomuser.me/api/portraits/women/2.jpg',
    tipo: 'Presencial',
    fecha: '25/03/2025',
    texto: 'Mi perrito era muy inquieto, pero con ayuda del adiestrador logró controlar su energía y ahora obedece órdenes básicas.'
  },
  {
    nombre: 'Carlos M.',
    foto: 'https://randomuser.me/api/portraits/men/3.jpg',
    tipo: 'A domicilio',
    fecha: '10/05/2025',
    texto: 'Muy buen servicio, puntualidad y trato amable. Mi gato aprendió a no morder los cables.'
  },
  {
    nombre: 'Lucía R.',
    foto: 'https://randomuser.me/api/portraits/women/4.jpg',
    tipo: 'Presencial',
    fecha: '02/04/2025',
    texto: 'Gracias al curso, mi perro dejó de ladrar excesivamente. ¡Muy recomendado!'
  },
  {
    nombre: 'Pedro T.',
    foto: 'https://randomuser.me/api/portraits/men/5.jpg',
    tipo: 'A domicilio',
    fecha: '18/04/2025',
    texto: 'El servicio fue excelente, muy profesional y atento a las necesidades de mi mascota.'
  },
  {
    nombre: 'Ana G.',
    foto: 'https://randomuser.me/api/portraits/women/6.jpg',
    tipo: 'Presencial',
    fecha: '05/03/2025',
    texto: 'Me encantó la forma en que trataron a mi gato, con mucho cariño y respeto.'
  },
  {
    nombre: 'Ricardo B.',
    foto: 'https://randomuser.me/api/portraits/men/7.jpg',
    tipo: 'A domicilio',
    fecha: '12/05/2025',
    texto: 'Muy buena experiencia, aprendimos técnicas nuevas para educar a nuestro perro sin estrés.'
  },
  {
    nombre: 'Sofía Z.',
    foto: 'https://randomuser.me/api/portraits/women/8.jpg',
    tipo: 'Presencial',
    fecha: '08/04/2025',
    texto: '¡Increíble! Mi cachorro aprendió a ir al baño en el lugar correcto en poco tiempo.'
  },
  {
    nombre: 'Ana G.',
    foto: 'https://randomuser.me/api/portraits/women/6.jpg',
    tipo: 'Presencial',
    fecha: '05/03/2025',
    texto: 'Me encantó la forma en que trataron a mi gato, con mucho cariño y respeto.'
  },
  {
    nombre: 'Ricardo B.',
    foto: 'https://randomuser.me/api/portraits/men/7.jpg',
    tipo: 'A domicilio',
    fecha: '12/05/2025',
    texto: 'Muy buena experiencia, aprendimos técnicas nuevas para educar a nuestro perro sin estrés.'
  },
  {
    nombre: 'Sofía Z.',
    foto: 'https://randomuser.me/api/portraits/women/8.jpg',
    tipo: 'Presencial',
    fecha: '08/04/2025',
    texto: '¡Increíble! Mi cachorro aprendió a ir al baño en el lugar correcto en poco tiempo.'
  },
  {
    nombre: 'Ana G.',
    foto: 'https://randomuser.me/api/portraits/women/6.jpg',
    tipo: 'Presencial',
    fecha: '05/03/2025',
    texto: 'Me encantó la forma en que trataron a mi gato, con mucho cariño y respeto.'
  },
  {
    nombre: 'Ricardo B.',
    foto: 'https://randomuser.me/api/portraits/men/7.jpg',
    tipo: 'A domicilio',
    fecha: '12/05/2025',
    texto: 'Muy buena experiencia, aprendimos técnicas nuevas para educar a nuestro perro sin estrés.'
  },
  {
    nombre: 'Sofía Z.',
    foto: 'https://randomuser.me/api/portraits/women/8.jpg',
    tipo: 'Presencial',
    fecha: '08/04/2025',
    texto: '¡Increíble! Mi cachorro aprendió a ir al baño en el lugar correcto en poco tiempo.'
  }
];

function ResenasBody() {
  return (
    <Grid item xs={12}>
      <Typography sx={{ mb: 2 }} variant='h5'>
        RESEÑAS
      </Typography>
      <hr />

      <Grid
        container
        spacing={2}
        sx={{
          mt: 2,
          maxHeight: '65vh', 
          overflowY: 'auto',
          pr: 1
        }}
      >
        {reseñas.map((resena, index) => (
          <Grid item key={index} size={{xs:12,sm:12,md:6}}>
            <Box
              sx={{
                display: 'flex',
                backgroundColor: 'rgb(232, 243, 225)',
                borderRadius: 2,
                p: 2,
                boxShadow: 3,
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3 }}>
                <Avatar
                  alt={resena.nombre}
                  src={resena.foto}
                  sx={{ width: 70, height: 70, mb: 1 }}
                />
                <Typography fontWeight="bold">{resena.nombre}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <HomeIcon fontSize="small" />
                  <Typography variant="body2" ml={0.5}>{resena.tipo}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                  <CalendarTodayIcon fontSize="small" />
                  <Typography variant="body2" ml={0.5}>{resena.fecha}</Typography>
                </Box>
              </Box>

              <hr style={{ border: '1px solid rgba(153, 150, 150, 0.2)'}} />


              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ml:3 }}>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {resena.texto}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ alignSelf: 'flex-end', backgroundColor: 'rgb(51, 104, 45)', color: 'white' }}
                >
                  Leer más
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}


export function ResenasOpiniones(){
    return (
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
            <Grid container  columns={{ xs: 12, sm: 12, md: 12}}
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                p:6,
                // alignContent: 'center',
                // textAlign: 'center',
                bgcolor:'#FFFFFF'
            }}
            >
                <ResenasBody/>
            </Grid>
        </Box>
    )
}

export default ResenasOpiniones