import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography, Avatar } from '@mui/material';


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

function createDataConf(
    cliente,
    mascota,
    tipoServicio,
    fecha,
    hora,
    calificacion,
) {
    return { cliente, mascota, tipoServicio, fecha, hora, calificacion }
}

const rowsConfirmar = [
    createDataConf('Alberto A', 'Mantequilla', 'Adiestramiento', '30/05/2025', '14:00', 4.9),
    createDataConf('William B.', 'Copo de nieve', 'Adiestramiento', '05/06/2025', '12:00', 5.0),
    createDataConf('Bianca Z.', 'Negro', 'Adiestramiento', '20/05/2025', '09:00', 4.7),
]

function createDataPen(
    cliente,
    tipoServicio,
    fecha,
    hora,
    lugar,
    mascota,
) {
    return { cliente, tipoServicio, fecha, hora, lugar, mascota }
}

const rowsPendiente = [
    createDataPen('Gloria Prats', 'Entrenamiento', '15/05/2025', '14:00', 'A domicilio', 'Pelusa'),
    createDataPen('Luis L.', 'Adiestramiento', '13/05/2025', '09:30', 'A domicilio', 'Pancho'),
    createDataPen('Lucy G.', 'Entrenamiento', '20/05/2025', '10:30', 'A domicilio', 'Jack'),
]


export function Reservas(){
    return (
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
            <Box>
                <Typography
                sx={{mb: 2}}
                variant='h5'
                >
                    Por confirmar
                </Typography>
                <Grid container spacing={{xs: 2, md: 4}} columns={{ xs: 4, sm: 12, md: 12}}>
                    <Grid size={{xs: 12, sm: 12, md:12}}>
                        <Box
                            sx={{
                                bgcolor: '#FFFFFF',
                                width: '100%',
                                height: '5vh',
                                borderRadius: '15px',
                                border:2,
                                borderBlockColor:'black',
                                display: 'flex',
                                alignItems: 'center',
                                px:2,
                                flexWrap: 'wrap'
                            }}
                        >
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Cliente</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Mascota</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>Tipo de servicio</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>Fecha y hora</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Calificación</Typography>
                        </Box>

                        {rowsConfirmar.map((rowConfirmar) => (
                            <Box
                                sx={{
                                    backgroundImage: 'linear-gradient(to right, #969696 1%, #FFFFFF 1%)',
                                    width: '100%',
                                    height: '7vh',
                                    borderRadius: '15px',
                                    border: 2,
                                    borderColor:'#969696',
                                    display: 'flex',
                                    alignItems: 'center',
                                    px:2,
                                    flexWrap: 'wrap',
                                    marginTop:0.5
                                }}
                            >
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowConfirmar.cliente}</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowConfirmar.mascota}</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>{rowConfirmar.tipoServicio}</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>{rowConfirmar.fecha}<br/>{rowConfirmar.hora} hrs.</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>
                                    <img
                                        src='/ranking.png'
                                        alt="ranking"
                                        alignItems='center'
                                        style={{width:'16px', height:'16px', objectFit:'contain', marginLeft:10, marginRight:6}}
                                    />
                                    {rowConfirmar.calificacion}
                                </Typography>
                            </Box>
                        ))}
                        
                    </Grid>
                </Grid>
            </Box>
            
            <Box>
                <Typography
                sx={{mt:6, mb: 2}}
                variant='h5'
                >
                    Pendientes
                </Typography>
                <Grid container spacing={{xs: 2, md: 4}} columns={{ xs: 4, sm: 12, md: 12}}>
                    <Grid size={{xs: 12,sm: 12,md:12}}>
                        <Box
                        sx={{
                            bgcolor: '#FFFFFF',
                            width: '100%',
                            height: '5vh',
                            borderRadius: '15px',
                            border: 2,
                            borderBlockColor:'black',
                            display: 'flex',
                            alignItems: 'center',
                            px:2,
                            flexWrap: 'wrap'
                        }}
                        >
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Cliente</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>Tipo de servicio</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>Fecha y hora</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Lugar</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>Mascota</Typography>
                        </Box>

                        {rowsPendiente.map((rowPendiente) => (
                            <Box
                                sx={{
                                    backgroundImage: 'linear-gradient(to right, #5D8C4C 1%, #FFFFFF 1%)',
                                    width: '100%',
                                    height: '7vh',
                                    borderRadius: '15px',
                                    border: 2,
                                    borderColor:'#5D8C4C',
                                    display: 'flex',
                                    alignItems: 'center',
                                    px:2,
                                    flexWrap: 'wrap',
                                    marginTop:0.5
                                }}
                            >
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowPendiente.cliente}</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>{rowPendiente.tipoServicio}</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>{rowPendiente.fecha}<br/>{rowPendiente.hora} hrs.</Typography>
                                <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowPendiente.lugar}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '100px' }}>
                                    <Avatar 
                                        alt={rowPendiente.mascota} 
                                        src={`/${rowPendiente.mascota}.jpg`} 
                                        sx={{ width: 40, height: 40, marginRight: 1 }} 
                                    />
                                    <Typography sx={{ fontSize: '16px' }}>
                                        {rowPendiente.mascota}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Reservas