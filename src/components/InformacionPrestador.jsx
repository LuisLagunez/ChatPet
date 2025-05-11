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
  Popover
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const steps = ['INFORMACIÓN PERSONAL', 'INFORMACIÓN DEL SERVICIO', 'DETALLES DEL SERVICIO', 'CONFIRMAR'];

export default function PrestadorPersonal() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const ColorButton = styled(Button)(({}) => ({
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: '#5d8c4c',
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
  // Datos personales
  const [nombre, setNombre] = React.useState('');
  const [apellidos, setApellidos] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [codigoPostal, setCodigoPostal] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [identificacion, setIdentificacion] = React.useState('');

  // Detalles del servicio
  const [descripcion, setDescripcion] = React.useState('');
  const [horario, setHorario] = React.useState('');

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleFinalizar = async () => {
    // Depuración
    console.log("Enviando datos al backend...");
    const datos = {
      nombre,
      apellidos,
      correo,
      direccion,
      codigoPostal,
      telefono,
      identificacion,
      tipoServicio,
      categoria,
      descripcion,
      diasDisponibles: selected,
      horario,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/registro', datos);
      console.log('Usuario registrado:', res.data);
      setActiveStep((prev) => prev + 1); // ir al paso final
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopOverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);


  const renderRightPanelContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
              <Typography variant='h6' align='center' sx={{ color: 'black', marginTop: 2 }}>INFORMACIÓN PERSONAL</Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  margin="normal"
                  sx={{ width: '50%' }}
                />
                <TextField
                  fullWidth
                  label="Apellidos"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                  margin="normal"
                  sx={{ width: '50%' }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Identificación"
                  value={identificacion}
                  onChange={(e) => {
                    setIdentificacion(e.target.value);
                    handlePopoverClose();
                  }}
                  margin="normal"
                  sx={{ width: '50%' }}
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopOverOpen}
                  onMouseLeave={handlePopoverClose}
                  onFocus={handlePopoverClose}
                />
                <Popover
                disablePortal={true}
                id="mouse-over-popover"
                sx={{ pointerEvents: 'none'}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                PaperProps={{
                  sx: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    padding: 0,
                  }
                }}
              >
                <Typography sx={{ color: 'black' }}>Introduzca su clave de lector.</Typography>
              </Popover>
                <Button
                  variant='outlined'
                  startIcon={<PhotoCamera />}
                  component="label"
                  sx={{ width: '50%', alignSelf: 'center', height: '56px', marginTop: 1 }}
                >
                  Selfie
                  <input hidden accept="imagen/*" type="file" onChange={() => { }} />
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  label="Correo electrónico"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  margin="normal"
                  sx={{ width: '50%' }}
                />
                <TextField
                  label="Contraseña"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  margin="normal"
                  sx={{ width: '50%' }}
                />
              </Box>

              <Box>
                <TextField
                  fullWidth
                  label="Dirección"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  margin="normal"
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Código postal"
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                  margin="normal"
                  sx={{ width: '50%' }}
                />
                <TextField
                  fullWidth
                  label="Número telefónico"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  margin="normal"
                  sx={{ width: '50%' }}
                />
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
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  style={{ width: 350, height: 22, borderRadius: 3, paddingTop: 8, paddingLeft: 12 }}
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
                    name="radio-buttons-group"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                  >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControlLabel
                        value="0-2 HRS"
                        control={<Radio />}
                        label="0-2 HRS"
                        sx={{ width: '40%', color: 'black' }}
                      />
                      <FormControlLabel
                        value="2-4 HRS"
                        control={<Radio />}
                        label="2-4 HRS"
                        sx={{ width: '50%', color: 'black' }}
                      />
                      <FormControlLabel
                        value="4-8 HRS"
                        control={<Radio />}
                        label="4-8 HRS"
                        sx={{ width: '40%', color: 'black' }}
                      />
                      <FormControlLabel
                        value="+8 HRS"
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
      <Grid 
        item 
        xs={12} 
        md={4} 
        sx={{ 
          position: 'relative',
          height: '529px',
          width: '320px',
          backgroundImage: 'url(/info-gatito.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          color: 'fff',
          p: '3',
          borderTopLeftRadius: '30px',
          borderBottomLeftRadius: '30px',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(93, 140, 76, 0.90)',
            zIndex: 1,
          }}
        >
          {/* contenido encima de... */}
          <Box sx={{ position:'relative', zIndex:2, p:3 }}>
            <Typography align='center' variant='h4'>CHAT PET</Typography>
            <Typography variant='h6' align='center' sx={{ marginBottom:2, color:'#a6d993', fontSize:'14px' }}>PRESTADOR DE SERVICIOS</Typography>
            <Stepper 
              activeStep={activeStep} 
              orientation="vertical"
              sx={{
                '& .MuiStepIcon-root': { color: 'lightgray' }, 
                '& .MuiStepIcon-root.Mui-active': { color: orange[500] }, 
                '& .MuiStepIcon-root.Mui-completed': { color: orange[500] },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>

      </Grid>

      {/* Panel derecho con contenido dinámico */}
      <Grid 
        item 
        xs={12} 
        md={8} 
        sx={{ 
            marginLeft: 0, 
            marginTop:0, 
            border:2, 
            borderColor:'#5d8c4c',
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
            overflow: 'hidden'
          }}>
        <Grid sx={{p:2, backgroundColor:'#eaf2e5', height: '465px', width:'375px'}}>
          {renderRightPanelContent(activeStep)}
        </Grid>
        <Grid sx={{p:2, backgroundColor:'white', height: '60px', width:'350px'}}>
          <Box>
            <Button
              variant='outlined'
              onClick={() => {
                if (activeStep === 0){
                  navigate('/tipo');
                } else {
                  handleBack();
                }
              }}
              sx={{ mr: 17, color:'gray', borderColor:'gray', borderRadius:2 }}
            >
              Atrás
            </Button>

            <ColorButton 
              variant="contained" 
              onClick={() => {
                console.log('Paso actual:', activeStep); // para confirmar
                if (activeStep >= steps.length - 1) {
                  handleFinalizar();
                } else {
                  handleNext();
                }
              }}
              sx={{ borderRadius: 2 }}
              disabled={activeStep === 3 && (!acceptedTerms || !acceptedPrivacy)}
            >
              {activeStep >= steps.length - 1 ? 'Finalizar' : 'Siguiente'}
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
