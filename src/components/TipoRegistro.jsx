import * as React from 'react';
import {
  Grid,
  Container,
  Paper,
  Typography,
  Stack,
  Avatar,
  Button,
  Card,
  CardActionArea,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';

export default function TipoRegistro() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xlg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eaf2e5',
        border: '#a4aaa1',
        backgroundImage: 'url(/huellitas.png)',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('/huellitas.png'), url('/huellitas.png')`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'top left, bottom right',
        backgroundSize: '80px, 70px',
        borderRadius:'15px',
        border: 3.5,
        borderColor:'#5D8C4C'
      }}
      >
        <Stack spacing={2}>
          {/* Título centrado arriba */}
          <Typography variant="h4" align="center" sx={{color:'black', paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5}}>
            <strong>Selecciona tu tipo de servicio</strong>
          </Typography>

          {/* Grids con los recuadros */}
          <Grid container spacing={2} sx={{paddingLeft:5, paddingRight:5}}>
            {/* Recuadro de prestador de servicio */}
            <Card item xs={12} md={6} sx={{border:2, borderColor:'#cfddca', borderRadius:5}}>
              <CardActionArea onClick={() => navigate('/info-prestador')}>
                <Paper sx={{ padding: 2, height: '100%', maxWidth:350, margin: 'auto', borderColor:'#cfddca', borderRadius:5 }}>
                  <Stack direction="column" alignItems="center" spacing={2}>
                      <Avatar
                        alt="prestador"
                        src="/prestador.jpg"
                        sx={{ width: 200, height: 200,}}
                      />
                      <Typography variant="h6" align="center">
                        <strong>Prestador de servicios</strong>
                      </Typography>
                      <Typography>
                        Ofrece paseos, hospedaje y más servicios para mascotas.
                      </Typography>
                      <List dense sx={{paddingTop:0, paddingBottom:0}}>
                        <ListItem>
                          <ListItemIcon>
                            <PetsIcon sx={{color:'black'}} />
                          </ListItemIcon>
                          <ListItemText primary="Publica y gestiona tus servicios."/>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <PetsIcon sx={{color:'black'}} />
                          </ListItemIcon>
                          <ListItemText primary="Recibe reservas y notificaciones."/>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <PetsIcon sx={{color:'black'}} />
                          </ListItemIcon>
                          <ListItemText primary="Conéctate con clientes en tiempo real."/>
                        </ListItem>
                      </List>
                    </Stack>
                  </Paper>
              </CardActionArea>
              
            </Card>

            {/* Recuadro de dueño de mascota */}
            <Card item xs={12} md={6} marginRight={5}sx={{border:2, borderColor:'#f9cfbc', borderRadius:5}}>
              <CardActionArea onClick={() => navigate('/info-dueño')}>
                <Paper sx={{ padding: 2, height: '100%', maxWidth:350, margin: 'auto'  }}>
                  <Stack direction="column" alignItems="center" spacing={2}>
                    <Avatar
                      alt="dueño"
                      src="/dueña.jpg"
                      sx={{ width: 200, height: 200 }}
                    />
                    <Typography variant="h6" align="center">
                      <strong>Dueño de mascota</strong>
                    </Typography>
                    <Typography>
                      Encuentra y reserva los mejores servicios para tu mascota.
                    </Typography>
                    <List dense sx={{paddingTop:0, paddingBottom:0}}>
                        <ListItem>
                          <ListItemIcon>
                            <PetsIcon sx={{color:'black'}} />
                          </ListItemIcon>
                          <ListItemText primary="Busca prestadores cerca de ti."/>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <PetsIcon sx={{color:'black'}} />
                          </ListItemIcon>
                          <ListItemText primary="Reserva y recibe confirmaciones."/>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <PetsIcon sx={{color:'black'}} />
                          </ListItemIcon>
                          <ListItemText primary="Chatea con los prestadores fácilmente."/>
                        </ListItem>
                      </List>
                  </Stack>
                </Paper>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid spacing={2} sx={{paddingBottom:2}}>
            <Button 
            onClick={() => navigate('/login')}
            variant='outlined'
            size='small'
            sx={{
              alignSelf:'flex-start',
              marginLeft:2,
              fontSize:'0.8rem',
              paddingX: 2,
              paddingY:0.5,
            }}
          >
              Regresar
            </Button>
          </Grid>
          
        </Stack>
      </Grid>
      
    </Container>
  );
}