import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import React from "react";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import AddIcon from '@mui/icons-material/Add';

function createDataPen(
    nombreMascota,
    edadAnios,
    raza,
    sexo,
    peso
) {
    return { nombreMascota, edadAnios, raza, sexo, peso }
}

const rowsMascotas = [
    createDataPen('Mantequilla', '2', 'Pug', 'Hembra', 7),
    createDataPen('Burbuja', '6', 'Chihuahua', 'Hembra', 5),
    createDataPen('Remi', '1', 'Europeo doméstico', 'Hembra', 7),
]

export function MisMascotas(){
    return (
        <Box sx={{ flexGrow:1, margin:'5vh'}}>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        sx={{mb: 2, marginTop:1}}
                        variant='h6'
                    >
                        Mis mascotas
                    </Typography>
                    <Button variant='outlined' startIcon={<AddIcon/>} sx={{ fontSize: '15px', borderRadius: 4, color:'#5D8C4C', borderColor:'#5D8C4C' }}>Agregar</Button>
                </Box>
                <Grid container spacing={{xs: 2, md: 4}} columns={{ xs: 4, sm: 12, md: 12}}>
                    <Grid size={{xs: 12,sm: 12,md:12}}>
                        <Box
                        sx={{
                            backgroundColor: '#5D8C4C',
                            width: '100%',
                            height: '5vh',
                            borderRadius: '15px',
                            border: 2,
                            borderColor:'#5D8C4C',
                            display: 'flex',
                            alignItems: 'center',
                            px:2,
                            flexWrap: 'wrap',
                            marginBottom: 2
                        }}
                        >
                            <Typography sx={{ fontSize: '16px', color: 'white', flex: 1.2, minWidth: '100px' }}>Nombre</Typography>
                            <Typography sx={{ fontSize: '16px', color: 'white', flex: 1, minWidth: '130px' }}>Edad</Typography>
                            <Typography sx={{ fontSize: '16px', color: 'white', flex: 1, minWidth: '130px' }}>Raza</Typography>
                            <Typography sx={{ fontSize: '16px', color: 'white', flex: 1, minWidth: '100px' }}>Sexo</Typography>
                            <Typography sx={{ fontSize: '16px', color: 'white', flex: 1, minWidth: '100px' }}>Peso</Typography>
                        </Box>
                        {rowsMascotas.map((rowMascotas) => (
                        <Box
                            key={rowMascotas.id} // Usa una clave única si tienes
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
                            marginTop: 0.5
                            }}
                        >
                            <Box>
                            <Avatar 
                                alt={rowMascotas.nombreMascota} 
                                src={`/${rowMascotas.nombreMascota}.jpg`} 
                                sx={{ width: 45, height: 45, marginRight: 1, flex: 1 }} 
                            />
                            </Box>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowMascotas.nombreMascota}</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>{rowMascotas.edadAnios}</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '130px' }}>{rowMascotas.raza}</Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>
                            {rowMascotas.sexo.toLowerCase() === 'hembra' ? (
                                <FemaleIcon sx={{ color: 'pink', ml: 1 }} />
                            ) : (
                                <MaleIcon sx={{ color: 'blue', ml: 1 }} />
                            )}
                            </Typography>
                            <Typography sx={{ fontSize: '16px', flex: 1, minWidth: '100px' }}>{rowMascotas.peso}</Typography>
                        </Box>
                        ))}

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MisMascotas