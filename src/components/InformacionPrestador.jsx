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
  Avatar
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const steps = ['Información personal', 'Información del servicio', 'Detalles del servicio', 'Confirmar'];

export default function RegistroDistribuido() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const renderRightPanelContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant='h6' align='center' sx={{color:'black'}}>INFORMACIÓN PERSONAL</Typography>
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
              sx={{width:'50%', alignSelf:'center', height:'56px'}}>
                Sube una foto
                <input hidden accept="imagen/*" type="file" onChange={() => {}}/>
              </Button>
            </Box>
            <Box mt={2}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Atrás
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
              {activeStep === steps.length && (
                <Box mt={2}>
                  <Typography>¡Completado!</Typography>
                  <Button onClick={handleReset}>Reiniciar</Button>
                </Box>
              )}
            </Box>
          </Box>
        );
      case 1:
        return(
          <Box>
            <Typography variant='h6' align='center' sx={{color:'black'}}>INFORMACIÓN DE SERVICIO</Typography>
            <Box sx={{display:'flex', gap:2}}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">TIPO DE SERVICIO</FormLabel>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='servicio'
                  name="radio-buttons-group"
                >
                  <Paper sx={{width:'140px', p: 2}}>
                    <Stack align="center" spacing={1}>
                      <FormControlLabel value="servicio" control={<Radio/>}/>
                      <i className="bi bi-shop" style={{fontSize:'24px'}}></i>
                      <Typography variant='body1'>PRESTADOR DE SERVICIO</Typography>
                    </Stack>
                  </Paper>
                  <Paper sx={{width:'140px', p: 2}}>
                    <Stack align="center" spacing={1}>
                      <FormControlLabel value="negocio" control={<Radio/>}/>
                      <i className="bi bi-shop" style={{fontSize:'24px'}}></i>
                      <Typography variant='body1'>DUEÑO DE NEGOCIO</Typography>
                    </Stack>
                  </Paper>
                </RadioGroup>
              </FormControl>
            </Box>
            <Box mt={2}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Atrás
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
              {activeStep === steps.length && (
                <Box mt={2}>
                  <Typography>¡Completado!</Typography>
                  <Button onClick={handleReset}>Reiniciar</Button>
                </Box>
              )}
            </Box>
          </Box>
        )
      case 2:
        return <Typography>Formulario: Detalles del servicio</Typography>;
      case 3:
        return <Typography>Confirmación</Typography>;
      default:
        return <Typography>Paso inválido</Typography>;
    }
  };

  return (
    <Grid container>
      {/* Panel izquierdo con stepper */}
      <Grid item xs={12} md={4} sx={{ backgroundColor: '#5d8c4c', p: 3 }}>
        <Typography align='center' variant='h4'><strong>CHAT PET</strong></Typography>
        <Typography variant='h6'>PRESTADOR DE SERVICIOS</Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

      </Grid>

      {/* Panel derecho con contenido dinámico */}
      <Grid item xs={12} md={8} lg={4} sx={{ marginLeft: 2}}>
        {renderRightPanelContent(activeStep)}
      </Grid>
    </Grid>
  );
}
