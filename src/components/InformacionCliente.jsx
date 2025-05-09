import * as React from 'react';
import {
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Stack,
  Radio,
  TextareaAutosize,
  ToggleButtonGroup,
  ToggleButton,
  Checkbox,
  InputAdornment,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const steps = ['INFORMACIÓN PERSONAL', 'INFORMACIÓN DE LA MASCOTA', 'PREFERENCIAS DEL SERVICIO', 'CONFIRMAR'];

export default function ClientePersonal() {
  const [activeStep, setActiveStep] = React.useState(0);
  const ColorButton = styled(Button)(({}) => ({
    backgroundColor: '#5d8c4c',
    '&:hover': {
      backgroundColor: orange[700],
    }
  }))
  const [selected, setSelected] = React.useState([]);
  const [tipoMascota, setTipoMascota] = React.useState('');
  const handleTipoMascotaChange = (event) => {
    setTipoMascota(event.target.value);
  }
  const handleDiasChange = (event, newSelection) => {
    setSelected(newSelection);
  }
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = React.useState(false);
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderRightPanelContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant='h6' align='center' sx={{color:'black', marginBottom:2, marginTop:2}}>INFORMACIÓN PERSONAL</Typography>
            <Box sx={{display:'flex', gap:2}}>
              <TextField fullWidth label="Nombre" margin="normal" sx={{ width:'50%' }} />
              <TextField fullWidth label="Apellidos" margin="normal" sx={{ width:'50%' }} />
            </Box>
            <Box>
              <TextField fullWidth label="Correo electrónico" margin="normal"/>
            </Box>
            <Box sx={{display:'flex', gap:2}}>
              <TextField fullWidth label="Número telefónico" margin="normal" sx={{ width:'50%' }} />
              <TextField fullWidth label="Código postal" margin="normal" sx={{ width:'50%' }} />
            </Box>
            <Box sx={{display:'flex', gap:2}}>
              <TextField fullWidth label="Identificación" margin="normal" sx={{ width:'50%' }} />
              <Button 
              variant='outlined' 
              startIcon={<PhotoCamera/>} 
              component="label"
              sx={{width:'50%', alignSelf:'center', height:'56px', marginTop:1}}>
                Sube una foto
                <input hidden accept="imagen/*" type="file" onChange={() => {}}/>
              </Button>
            </Box>
          </Box>
        );
      case 1:
        return(
            <Box>
                <Typography variant='h6' align='center' sx={{color:'black', marginBottom:3}}>INFORMACIÓN DE SERVICIO</Typography>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='subtitle1' color='#5c5653'>Foto de mascota</Typography>
                    <Button 
                    variant='outlined' 
                    startIcon={<PhotoCamera/>} 
                    component="label"
                    sx={{width:'100%', alignSelf:'center', height:'75px', marginTop:1}}>
                        Sube una foto
                        <input hidden accept="imagen/*" type="file" onChange={() => {}}/>
                    </Button>
                </Box>
                <Box sx={{display:'flex', gap:2, marginTop:1}}>
                    <FormControl>
                        <Typography variant='subtitle1' color='#5c5653'>Tipo de mascota</Typography>
                        <RadioGroup
                        row
                        aria-labelledby='demo-radio-buttons-group-label'
                        value={tipoMascota}
                        onChange={handleTipoMascotaChange}
                        name="tipo-mascota"
                        >
                        <Paper sx={{width:'163px', p: 0, marginRight:2}}>
                            <Stack align="center" spacing={0.5}>
                                <FormControlLabel value="perro" control={<Radio/>}/>
                                <img
                                    src='/perrito.png'
                                    alt="Perro"
                                    style={{width:'50px', height:'50px', objectFit:'contain', margin:2, marginLeft:'48px'}}
                                />
                                <Typography variant='h7'>PERRO</Typography>
                            </Stack>
                        </Paper>
                        <Paper sx={{width:'162px', p: 0}}>
                            <Stack align="center" spacing={0.5}>
                                <FormControlLabel value="gato" control={<Radio/>}/>
                                <img
                                    src='/gatito.png'
                                    alt="Gato"
                                    style={{width:'50px', height:'50px', objectFit:'contain', margin:2, marginLeft:'48px'}}
                                />
                                <Typography variant='h7'>GATO</Typography>
                            </Stack>
                        </Paper>
                        </RadioGroup>
                    </FormControl>
                </Box>

                {/* contenido condicional basado en el tipo seleccionado */}
                {tipoMascota === 'perro' && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:1}}>
                        <Typography variant="subtitle1" color="#5c5653">Datos de tu perrito</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <TextField fullWidth label="Nombre" margin="normal" sx={{ width: '50%' }} />
                            <TextField
                            fullWidth
                            label="Peso"
                            margin="normal"
                            sx={{ width: '50%' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>
                            }}
                            />
                        </Box>
                    </Box>
                )}
                {tipoMascota === 'gato' && (
                <Box sx={{display: 'flex', gap:2}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:1}}>
                        <Typography variant="subtitle1" color="#5c5653">Datos de tu gatito</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <TextField fullWidth label="Nombre" margin="normal" sx={{ width: '50%' }} />
                            <TextField
                            fullWidth
                            label="Peso"
                            margin="normal"
                            sx={{ width: '50%' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>
                            }}
                            />
                        </Box>
                    </Box>
                </Box>
                )}
           </Box>
        );
      case 2:
        return(
          <Box>
            <Typography variant='h6' align='center' sx={{color:'black', marginBottom:3}}>PREFERENCIAS DEL SERVICIO</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <FormLabel>Tipo de servicios que busca:</FormLabel>
                </Box>
            </Box>
          </Box>
        );
      case 3:
        return(
          <Box>
            <Typography variant='h6' align='center' sx={{color:'black'}}>CONFIRMAR</Typography>
            <Typography variant='body1' align='center' sx={{marginTop:5,color:'black'}}>VERIFICA TU INFORMACIÓN ANTES DE CONTINUAR</Typography>
            <Typography variant='body1' align='center' sx={{marginTop:2,color:'gray', fontSize:'15px'}}>Revisa los datos que ingresaste para asegurarte de que sean correctos. Una vez registrado, podrás editar tu perfil en la configuración.</Typography>
            <Box sx={{marginTop:18}}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={acceptedTerms} 
                    onChange={(e) => setAcceptedTerms(e.target.checked)} 
                  />
                }
                label={
                  <Typography variant="body2" sx={{color:'black'}}>
                    Acepto los <strong>Términos y Condiciones</strong>
                  </Typography>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox 
                    checked={acceptedPrivacy} 
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)} 
                  />
                }
                label={
                  <Typography variant="body2" sx={{color:'black'}}>
                    Acepto la <strong>Política de privacidad</strong>
                  </Typography>
                }
              />
            </Box>
            
          </Box>
        );
      default:
        return(
          <Box>
            <Typography variant='h4' align='center' sx={{color:'black'}}>Bienvenido a la familia de CHAT PET</Typography>
            <Typography variant='body1' align='center' sx={{marginTop:5,color:'black'}}>HEMOS RECIBIDO TU INFORMACIÓN</Typography>
            <Typography variant='body1' align='center' sx={{marginTop:2,color:'gray', fontSize:'15px'}}>Ahora puedes encontrar los mejores servicios para tu mascota en{' '} <span style={{color:'#eb5d1e', fontWeight:'bold'}}>CHAT PET</span>.</Typography>
            <Typography variant='body1' align='center' sx={{marginTop:3,color:'gray', fontSize:'15px'}}>Explora prestadores cerca de ti, reserva servicios y disfruta de la tranquilidad de saber que tu mascota está en buenas manos.</Typography>
            <Typography variant='body1' align='center' sx={{marginTop:3,color:'gray', fontSize:'15px'}}>Presiona el botón de <strong>FINALIZAR</strong> para ir a tu perfil.</Typography>
          </Box>
        );
    }
  };

  return (
    <Grid 
      maxWidth="xlg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      {/* Panel izquierdo con stepper */}
      <Grid item xs={12} md={4} sx={{ backgroundColor: '#eb5d1e', p: 3, height: '529px'}}>
        <Typography align='center' variant='h4'>CHAT PET</Typography>
        <Typography variant='h6' align='center' sx={{marginBottom:2, color:'#ffc0a4', fontSize:'14px'}}>DUEÑO DE MASCOTA</Typography>
        <Stepper 
          activeStep={activeStep} 
          orientation="vertical"
          sx={{
            '& .MuiStepIcon-root': { color: 'lightgray' }, 
            '& .MuiStepIcon-root.Mui-active': { color: '#5d8c4c' }, 
            '& .MuiStepIcon-root.Mui-completed': { color: '#5d8c4c' }, 
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

      </Grid>

      {/* Panel derecho con contenido dinámico */}
      <Grid item xs={12} md={8} sx={{ marginLeft: 0, marginTop:0, border:2, borderColor:'#eb5d1e'}}>
        <Grid sx={{p:2, backgroundColor:'#e6d7d0', height: '465px', width:'375px'}}>
          {renderRightPanelContent(activeStep)}
        </Grid>
        <Grid sx={{p:2, backgroundColor:'white', height: '60px', width:'350px'}}>
          <Box >
            <Button
              variant='outlined'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 17, color:'gray', borderColor:'gray', borderRadius:2 }}
            >
              Atrás
            </Button>
            <ColorButton 
              variant="contained" 
              onClick={handleNext} 
              sx={{borderRadius:2}}
              disabled={activeStep === steps.length - 1 && (!acceptedTerms || !acceptedPrivacy)}
            >
                {activeStep === steps.length ? 'Finalizar' : 'Siguiente'}
            </ColorButton>
              {activeStep === steps.length && (
                <Box mt={2}>
                  <Typography>¡Completado!</Typography>
                </Box>
              )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
