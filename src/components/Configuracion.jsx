import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Avatar, Button } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

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

function createDataInformacion(
    nombre,
    apellido,
    tipoServicio,
    ciudad,
    estado,
    correo,
    numero,
    codigoPostal,
    ID
) {
    return { nombre, apellido, tipoServicio, ciudad, estado, correo, numero, codigoPostal, ID }
}

const rowsInformacion = [
    createDataInformacion( 'Remi', 'Remiosa', 'Adiestramiento', 'Playa del Carmen', 'Quintana Roo', 'remi.remiosa31@gmail.com', '+52 984 120 3140', 77710, 1030102 ),
]

export function Configuracion(){
    return (
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
            <Typography
            sx={{mb: 2, fontWeight:'bold'}}
            variant='h5'
            >
                Configuracion
            </Typography>
            <Grid container spacing={{xs: 2, md: 4}} columns={{ xs: 4, sm: 12, md: 12}}>
            <Grid size={{xs: 12,sm: 12,md:12}}>
                {rowsInformacion.map((rowInformacion) =>(
                    <Box
                    sx={{
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        minHeight: '10vh',
                        borderRadius: '10px',
                        boxShadow: 2,
                        padding: 2,
                        border: 1,
                        display: 'flex',
                        flexWrap: 'wrap', // Permite que los hijos se ajusten en pantallas pequeñas
                        alignItems: 'center',
                        gap: 2, // Espacio entre elementos
                    }}
                    >
                        
                        <Avatar
                            alt={rowInformacion.nombre}
                            src={`/${rowInformacion.nombre}.jpg`}
                            sx={{ width: 50, height: 50 }} 
                        />
                        <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold', flex: 1 }}>{rowInformacion.nombre} {rowInformacion.apellido}</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', md: '20px' }, flex: 1 }}>{rowInformacion.tipoServicio}</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', md: '20px' }, flex: 2 }}>{rowInformacion.ciudad}, {rowInformacion.estado}</Typography>
                        <Button variant='outlined' endIcon={<EditOutlinedIcon/>} sx={{ fontSize: '14px', borderRadius: 4, alignSelf: { xs: 'flex-start', md: 'center' },}}>
                            Editar
                        </Button>
                    </Box>
                ))}
                    
                </Grid>
                <Grid size={{xs: 12,sm: 12,md:12}}>
                    <Box
                        sx={{
                            bgcolor: '#FFFFFF',
                            width: '100%',
                            height: ' 28vh',
                            borderRadius: '10px',
                            boxShadow: 2,
                            padding: 2,
                            border: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.5
                        }}
                        >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography
                                sx={{mb: 2}}
                                variant='h6'
                            >
                                Información personal
                            </Typography>
                            <Button variant='outlined' endIcon={<EditOutlinedIcon/>} sx={{ fontSize: '15px', borderRadius: 4 }}>Editar</Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                            <Typography sx={{ flex: 1, fontSize: '18px', color: '#848484' }}>Nombre</Typography>
                            <Typography sx={{ flex: 1, fontSize: '18px', color: '#848484' }}>Apellido</Typography>
                            <Typography sx={{ flex: 1, fontSize: '18px', color: '#848484' }}>Servicio</Typography>
                        </Box>
                        {rowsInformacion.map((rowInformacion) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ flex:1, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.nombre}</Typography>
                                <Typography sx={{ flex:1, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.apellido}</Typography>
                                <Typography sx={{ flex:1, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.tipoServicio}</Typography>
                            </Box>
                        ))}

                        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                            <Typography sx={{ flex: 1, fontSize: '18px', color: '#848484' }}>Correo</Typography>
                            <Typography sx={{ flex: 2, fontSize: '18px', color: '#848484' }}>Número</Typography>
                        </Box>
                        {rowsInformacion.map((rowInformacion) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ flex:1, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.correo}</Typography>
                                <Typography sx={{ flex:2, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.numero}</Typography>
                            </Box>
                        ))}
                        
                    </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 12,md:12}}>
                <Box
                    sx={{
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        height: '25vh',
                        borderRadius: '10px',
                        boxShadow: 2,
                        padding: 2,
                        border: 1,
                        gap: 0.5,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                            <Typography
                            sx={{mb: 2}}
                            variant='h6'
                            >
                                Dirección
                            </Typography>
                            <Button variant='outlined' endIcon={<EditOutlinedIcon/>} sx={{ fontSize: '15px', borderRadius: 4 }}>Editar</Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                            <Typography sx={{ flex: 1, fontSize: '18px', color: '#848484' }}>Ciudad</Typography>
                            <Typography sx={{ flex: 2, fontSize: '18px', color: '#848484' }}>Estado</Typography>
                        </Box>
                        {rowsInformacion.map((rowInformacion) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ flex:1, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.ciudad}</Typography>
                                <Typography sx={{ flex:2, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.estado}</Typography>
                            </Box>
                        ))}

                        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                            <Typography sx={{ flex: 1, fontSize: '18px', color: '#848484' }}>Código postal</Typography>
                            <Typography sx={{ flex: 2, fontSize: '18px', color: '#848484' }}>ID</Typography>
                        </Box>
                        {rowsInformacion.map((rowInformacion) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ flex:1, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.codigoPostal}</Typography>
                                <Typography sx={{ flex:2, fontSize: '18px', fontWeight: 'bold' }}>{rowInformacion.ID}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Configuracion