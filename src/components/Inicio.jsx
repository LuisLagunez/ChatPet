import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


//Icons
import DoorbellIcon from '@mui/icons-material/Doorbell';
import StarIcon from '@mui/icons-material/Star';
import PaidIcon from '@mui/icons-material/Paid';
import MessageIcon from '@mui/icons-material/Message';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


// const Estadisticas = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//     }),
//   }));



export function Inicio(){

        const stats = [
        {
            id: 1,
            icon: <DoorbellIcon sx={{fontSize:45}}/>,
            label: "Reservas activas",
            value: 3
        },
        {
            id: 2,
            icon: <StarIcon sx={{fontSize:45}}/>,
            label: "Calificación promedio",
            value: "4,8"
        },
        {
            id: 3,
            icon: <PaidIcon sx={{fontSize:45}}/>,
            label: "Ingreso de la semana",
            value: "3,500"
        },
        {
            id: 4,
            icon: <MessageIcon sx={{fontSize:45}}/>,
            label: "Nuevos mensajes",
            value: 2
        },
    ]


function StatCards({ data }) {
  return (
    <Grid container spacing={2}  sx={{
      justifyContent : {
        xs: 'center',
        sm: 'center',
        md : 'flex-start',
      }
    }}>
      {data.map((stats) => (
        <Grid item xs={12} sm={6} md={3} key={stats.id}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '10vh',
              width: '26vh',
              borderRadius: '10px',
              bgcolor:'rgb(233, 239, 229)',
              border:'2px solid rgb(122, 163, 107)',
            }}
          >
            <Box>{stats.icon}</Box>
            <Box sx={{ ml: 2, textAlign: 'left' }}>
              <Typography variant="h5">{stats.value}</Typography>
              <Typography variant="body2" color="text.secondary">{stats.label}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

function CalendarStats({  }) {
  return (
    <Grid size={{xs: 12, sm: 8, md: 8}}>
      <Box
      sx={{
        bgcolor: '#FFFFFF',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        boxShadow: 2,
        padding:2,
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
      >
        <Typography variant='h4' sx={{
          textAlign: 'center',
          mb: 10
        }}>
          CALENDARIO
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{ height: '100%' }} readOnly />
        </LocalizationProvider>
      </Box>
    </Grid>
  )
}

function ChatsLasts () {

  const chats = [
    { id: 1, name: 'Juan Pérez', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Ana Gómez', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 3, name: 'Carlos Ruiz', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 4, name: 'Laura Martínez', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  ];

  return (
    <Grid size={{xs: 12,sm: 4,md:4}}>
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          width: '100%',
          height: '60vh',
          borderRadius: '10px',
          boxShadow: 2,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
      <Typography variant='h5' sx={{textAlign:'center', mb:3}}>
          CHATS RECIENTES
      </Typography>
      <List>
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            component={Link}
            to={`/perfil/${chat.id}`}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'row' },
              alignItems: 'center',
              padding: 1.5,
              textDecoration: 'none',
              color: 'inherit',
              border: '2px solid rgb(122, 163, 107)',
              borderRadius: '8px',
              backgroundColor: 'rgb(233, 239, 229)',
              mb: 1.5,
              '&:hover': {
                backgroundColor: '#C8E6C9',
                cursor: 'pointer',
              },
            }}
          >
            <Avatar
              alt={chat.name}
              src={chat.avatar}
              sx={{
                width: 50,
                height: 50,
                marginRight: 2,
              }}
            />
            <ListItemText
              primary={chat.name}
              sx={{
                display: { xs: 'block', sm: 'block' },
              }}
            />
          </ListItem>
        ))}
      </List>
      </Box>
    </Grid>
  )
}


    return (
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
            <Typography
            sx={{mb: 2, mt:2}}
            variant='h4'
            >
                Inicio
            </Typography>
            <Grid container spacing={4} columns={{ xs: 4, sm: 12, md: 12}}>
                <StatCards data={stats}/>
                <CalendarStats/>
                <ChatsLasts/>
            </Grid>
        </Box>
    )
}

export default Inicio