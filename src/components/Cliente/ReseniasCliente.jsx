import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Divider, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function createDataInformacion(
    nombre,
    apellido,
    fecha,
    tipo,
    reseniaTexto,
) {
    return {nombre, apellido, fecha, tipo, reseniaTexto}
}

const rowsInformacion = [
    createDataInformacion('Peter', 'Pettigrew', '30/04/2025', 'A domicilio', 'Adiestrar a mi mascota fue una de las mejores decisiones. Aunque es pequeña, con paciencia y esfuerzos positivos aprendió rápido...'),
    createDataInformacion('Peter', 'Pettigrew', '08/05/2025', 'A domicilio', 'Ha sido lo mejor que he podido hacer. Recomiendo altamente a este adiestrador.'),
    createDataInformacion('Peter', 'Pettigrew', '08/05/2025', 'A domicilio', 'Ha sido perfecto, a mi mascota le encantó.'),
]

export function ResenasBody() {
  return (
    <Grid item xs={12}>
      <Typography sx={{ mb: 2, fontWeight: 'bold' }} variant='h5'>
        Reseñas
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
        {rowsInformacion.map((rowInformacion) => (
          <Grid item size={{ xs: 12, sm: 12, md:6 }}>
            <Box
              sx={{
                display: 'flex',
                backgroundColor: '#E6D7D0',
                borderRadius: 2,
                p: 2,
                boxShadow: 2,
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3 }}>
                <Avatar
                  alt={rowInformacion.nombre}
                  src={`/${rowInformacion.nombre}.jpg`}
                  sx={{ width: 70, height: 70, mb: 1 }}
                />
                <Typography fontWeight="bold">{rowInformacion.nombre} {rowInformacion.apellido}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <HomeIcon fontSize="medium" />
                  <Typography variant="body2" ml={0.5}>{rowInformacion.tipo}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                  <CalendarTodayIcon fontSize="small" />
                  <Typography variant="body2" ml={0.5}>{rowInformacion.fecha}</Typography>
                </Box>
              </Box>

              <hr style={{ border: '1px solid rgba(153, 150, 150, 0.2)'}} />


              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ml:3 }}>
                <Typography variant="body1" sx={{ mb: 2, marginRight:1 }}>
                  {rowInformacion.reseniaTexto}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ alignSelf: 'flex-end', backgroundColor: '#EB5D1E', color: 'white' }}
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

export function ReseniasCliente(){
    return(
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
        <Grid container  columns={{ xs: 12, sm: 12, md: 12}}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            p:6,
            bgcolor:'#FFFFFF'
            }}
        >
          <ResenasBody/>
        </Grid>
      </Box>
    )
}

export default ReseniasCliente