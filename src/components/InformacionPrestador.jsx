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
  Checkbox
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const steps = ['Información personal', 'Información del servicio', 'Detalles del servicio', 'Confirmar'];

export default function RegistroDistribuido() {
  const [activeStep, setActiveStep] = React.useState(0);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    }
  }))
  const [selected, setSelected] = React.useState([]);
  const [tipoServicio, setTipoServicio] = React.useState('');
  const [categoria, setCategoria] = React.useState('categoria');
  const handleTipoServicioChange = (event) => {
    setTipoServicio(event.target.value);
  }
  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
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
              sx={{width:'50%', alignSelf:'center', height:'56px'}}>
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
            <Box sx={{display:'flex', gap:2}}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">TIPO DE SERVICIO</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-radio-buttons-group-label'
                  value={tipoServicio}
                  onChange={handleTipoServicioChange}
                  name="tipo-servicio"
                >
                  <Paper sx={{width:'130px', p: 0, marginRight:2}}>
                    <Stack align="center" spacing={0.5}>
                      <FormControlLabel value="servicio" control={<Radio/>}/>
                      <i className="bi bi-shop" style={{fontSize:'18px'}}></i>
                      <Typography variant='h7'>PRESTADOR DE SERVICIO</Typography>
                    </Stack>
                  </Paper>
                  <Paper sx={{width:'130px', p: 0}}>
                    <Stack align="center" spacing={0.5}>
                      <FormControlLabel value="negocio" control={<Radio/>}/>
                      <i className="bi bi-shop" style={{fontSize:'18px'}}></i>
                      <Typography variant='h7'>DUEÑO DE NEGOCIO</Typography>
                    </Stack>
                  </Paper>
                </RadioGroup>
              </FormControl>
            </Box>

            {/* contenido condicional basado en el tipo seleccionado */}
            {tipoServicio === 'servicio' && (
              <Box sx={{display: 'flex', gap:2}}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">CATEGORIAS</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby='demo-radio-buttons-group-label'
                    value={categoria}
                    onChange={handleCategoriaChange}
                    name="categoria"
                  >
                    <Paper sx={{width:'130px', height:'100px', p: 0, marginRight:2, marginBottom:0.5}}>
                      <Stack align="center" spacing={0.5}>
                        <FormControlLabel value="adiestrador" control={<Radio/>}/>
                        <i className="bi bi-shop" style={{fontSize:'14px'}}></i>
                        <Typography variant='h7'>ADIESTRADOR</Typography>
                      </Stack>
                    </Paper>
                    <Paper sx={{width:'130px', height:'100px', p: 0}}>
                      <Stack align="center" spacing={0.5}>
                        <FormControlLabel value="entrenador" control={<Radio/>}/>
                        <i className="bi bi-shop" style={{fontSize:'14px'}}></i>
                        <Typography variant='h7'>ENTRENADOR</Typography>
                      </Stack>
                    </Paper>
                    <Paper sx={{width:'130px', height:'100px', p: 0, marginRight:2}}>
                      <Stack align="center" spacing={0.5}>
                        <FormControlLabel value="paseador" control={<Radio/>}/>
                        <i className="bi bi-shop" style={{fontSize:'14px'}}></i>
                        <Typography variant='h7'>PASEADOR</Typography>
                      </Stack>
                    </Paper>
                    <Paper sx={{width:'130px', height:'100px', p: 0}}>
                      <Stack align="center" spacing={0.5}>
                        <FormControlLabel value="transportista" control={<Radio/>}/>
                        <i className="bi bi-shop" style={{fontSize:'14px'}}></i>
                        <Typography variant='h7'>TRANSPORTISTA</Typography>
                      </Stack>
                    </Paper>
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
            {tipoServicio === 'negocio' && (
              <Box sx={{display: 'flex', gap:2}}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">CATEGORIAS</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby='demo-radio-buttons-group-label'
                    value={categoria}
                    onChange={handleCategoriaChange}
                    name="categoria"
                  >
                    <Paper sx={{width:'130px', height:'100px', p: 0, marginRight:2, marginBottom:0.5}}>
                      <Stack align="center" spacing={0.5}>
                        <FormControlLabel value="veterinaria" control={<Radio/>}/>
                        <i className="bi bi-shop" style={{fontSize:'14px'}}></i>
                        <Typography variant='h7'>VETERINARIA</Typography>
                      </Stack>
                    </Paper>
                    <Paper sx={{width:'130px', height:'100px', p: 0}}>
                      <Stack align="center" spacing={0.5}>
                        <FormControlLabel value="hotel" control={<Radio/>}/>
                        <i className="bi bi-shop" style={{fontSize:'14px'}}></i>
                        <Typography variant='h7'>HOTEL</Typography>
                      </Stack>
                    </Paper>
                    <Paper sx={{width:'130px', height:'100px', p: 0, marginRight:2}}>
                      <Stack align="center" spacing={0.5}>
                        <FormControlLabel value="guarderia" control={<Radio/>}/>
                        <i className="bi bi-shop" style={{fontSize:'14px'}}></i>
                        <Typography variant='h7'>GUARDERíA</Typography>
                      </Stack>
                    </Paper>
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
          </Box>
        );
      case 2:
        return(
          <Box>
            <Typography variant='h6' align='center' sx={{color:'black', marginBottom:3}}>DETALLES DEL SERVICIO</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormLabel>Descripción del servicio</FormLabel>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={6}
                  placeholder="Descripción..."
                  style={{ width: 350, height:22, borderRadius: 3, paddingTop: 8, paddingLeft: 12 }}
                />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormLabel>Días disponibles</FormLabel>
                <ToggleButtonGroup
                  value={selected}
                  onChange={handleDiasChange}
                  aria-label="text formatting"
                >
                    <ToggleButton value="lun" aria-label="Lun">Lun</ToggleButton>
                    <ToggleButton value="mar" aria-label="Mar">Mar</ToggleButton>
                    <ToggleButton value="mie" aria-label="Mie">Mie</ToggleButton>
                    <ToggleButton value="jue" aria-label="Jue">Jue</ToggleButton>
                    <ToggleButton value="vie" aria-label="Vie">Vie</ToggleButton>
                    <ToggleButton value="sab" aria-label="Sab">Sab</ToggleButton>
                    <ToggleButton value="dom" aria-label="Dom">Dom</ToggleButton>
                  </ToggleButtonGroup>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControl>
                  <FormLabel>Horarios</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="uno"
                    name='radio-buttons-group'
                  >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControlLabel
                        value="uno"
                        control={<Radio />}
                        label="0-2 HRS"
                        sx={{ width: '40%', color: 'black' }}
                      />
                      <FormControlLabel
                        value="dos"
                        control={<Radio />}
                        label="2-4 HRS"
                        sx={{ width: '50%', color: 'black' }}
                      />
                      <FormControlLabel
                        value="tres"
                        control={<Radio />}
                        label="4-8 HRS"
                        sx={{ width: '40%', color: 'black' }}
                      />
                      <FormControlLabel
                        value="cuatro"
                        control={<Radio />}
                        label="+8 HRS"
                        sx={{ width: '40%', color: 'black' }}
                      />
                    </Box>
                  </RadioGroup>
                </FormControl>
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
            <Typography variant='body1' align='center' sx={{marginTop:2,color:'gray', fontSize:'15px'}}>Ahora, los dueños de mascotas podrán encontrarte y solicitar tus servicios.</Typography>
            <Typography variant='body1' align='center' sx={{marginTop:3,color:'gray', fontSize:'15px'}}>Puedes gestionar tu perfil y recibir reservas desde tu cuenta.</Typography>
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
      <Grid item xs={12} md={4} sx={{ backgroundColor: '#5d8c4c', p: 3, height: '529px'}}>
        <Typography align='center' variant='h4'>CHAT PET</Typography>
        <Typography variant='h6' sx={{marginBottom:2}}>PRESTADOR DE SERVICIOS</Typography>
        <Stepper 
          activeStep={activeStep} 
          orientation="vertical"
          sx={{
            '& .MuiStepIcon-root': { color: 'lightgray' }, 
            '& .MuiStepIcon-root.Mui-active': { color: orange[500] }, 
            '& .MuiStepIcon-root.Mui-completed': { color: orange[500] }, 
          }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

      </Grid>

      {/* Panel derecho con contenido dinámico */}
      <Grid item xs={12} md={8} sx={{ marginLeft: 0, marginTop:0, border:2, borderColor:'#5d8c4c'}}>
        <Grid sx={{p:2, backgroundColor:'#eaf2e5', height: '465px', width:'375px'}}>
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
