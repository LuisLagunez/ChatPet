import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Avatar } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
}));

function createDataHistorial(
    cliente,
    fecha,
    hora,
    lugar,
    mascota,
    pago
) {
    return {cliente, fecha, hora, lugar, mascota, pago};
}

const rowsHistorial = [
    createDataHistorial('Alberto-Dalesio', '30/04/2025', '14:00', 'A domicilio', 'Pugberto', 250),
    createDataHistorial('Lisa', '28/04/2025', '13:00', 'A domicilio', 'Love', 450)
]

export function HistorialServicio(){
    return (
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
            <Typography
            sx={{mb: 2}}
            variant='h5'
            >
                Historial de servicios
            </Typography>
            <Grid container spacing={{xs: 2, md: 4}} columns={{ xs: 4, sm: 12, md: 12}}>
                <Grid size={{xs: 12,sm: 12,md:12}}>
                    <Box
                        sx={{
                            bgcolor: '#FFFFFF',
                            width: '100%',
                            height: '75vh',
                            borderRadius: '10px',
                            boxShadow: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start', 
                            pt: 2,
                            paddingLeft:4
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: '#FFFFFF',
                                width: '95%',
                                height: '5vh',
                                borderRadius: '10px',
                                border: 2,
                                borderColor: 'black',
                                display: 'flex',
                                alignItems: 'center',
                                px: 2,
                                flexWrap: 'wrap',
                                marginBottom:2
                            }}
                        >
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>Cliente</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>Fecha y hora</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Lugar</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Mascota</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Pago</Typography>
                        </Box>

                        {rowsHistorial.map((rowHistorial) => (
                            <Box
                                sx={{
                                    backgroundImage: 'linear-gradient(to right, #969696 1%, #FFFFFF 1%)',
                                    width: '95%',
                                    height: '10vh',
                                    borderRadius: '15px',
                                    border: 2,
                                    borderColor:'#969696',
                                    display: 'flex',
                                    alignItems: 'center',
                                    px:2,
                                    flexWrap: 'wrap',
                                    marginTop: 1
                                }}
                            >
                                <Box sx={{ position: 'relative', display: 'inline-block', marginRight: 1, marginRight:'13%'}}>
                                    {/* Avatar grande */}
                                    <Avatar 
                                        alt={rowHistorial.cliente} 
                                        src={`/${rowHistorial.cliente}.jpg`} 
                                        sx={{ width: 70, height: 70 }} 
                                    />

                                    {/* Avatar pequeño superpuesto */}
                                    <Avatar 
                                        alt={rowHistorial.mascota} 
                                        src={`/${rowHistorial.mascota}.jpg`} 
                                        sx={{ 
                                        width: 35, 
                                        height: 35, 
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        }} 
                                    />
                                </Box>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>{rowHistorial.fecha}<br/>{rowHistorial.hora} hrs.</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowHistorial.lugar}</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowHistorial.mascota}</Typography>
                                <Typography sx={{ 
                                    fontSize: '35px', 
                                    flex: 1, 
                                    minWidth: '100px',
                                    color: '#A6D993',
                                    WebkitTextStroke: '1px #5D8C4C',
                                    fontWeight: 'bold',
                                    }}
                                >
                                    ${rowHistorial.pago}
                                </Typography>
                            </Box>
                        ))}

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HistorialServicio