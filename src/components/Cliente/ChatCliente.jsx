import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function ChatRecently (){

const chats = [
    { id: 1, name: 'Juan Pérez', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Ana Gómez', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 3, name: 'Carlos Ruiz', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 4, name: 'Laura Martínez', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
];


    return (
            <Grid container size={{md:3}}
            sx={{
                border: '1px solid black',
                width: '100%',
                borderRadius: '10px',
                p: 2,
                display: 'flex',
                flexDirection: 'column', // ← esto es clave
                alignItems:'center',
            }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        mb:'3vh'
                    }}
                >
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
                            width: '100%',
                            flexDirection: { xs: 'row', sm: 'row' },
                            alignItems: 'center',
                            padding: 1,
                            textDecoration: 'none',
                            color: '#FFFFFF', // blanco para contrastar con el naranja
                            border: '2px solid #B65A14', // un tono más oscuro que el fondo naranja
                            borderRadius: '8px',
                            backgroundColor: '#E1832B', // naranja principal
                            mb: 0.5,
                            '&:hover': {
                            backgroundColor: '#CF6E1E', // naranja más oscuro para hover
                            cursor: 'pointer',
                            },
                        }}
                    >
                        <Avatar
                        alt={chat.name}
                        src={chat.avatar}
                        sx={{
                            width: 40,
                            height: 40,
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
            </Grid>
    )
}


function ChatBody() {
  return (
    <Grid
      container
      size={{md:9}}
      direction="column"
      justifyContent="space-between"
      sx={{
        background: 'rgb(241, 185, 111)',
        border: '1px solid black',
        borderRadius: '10px',
        height: '100%', 
        p: 2,
      }}
    >
      {/* Aquí irían los mensajes del chat */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto' , background:'#FFFFFF'}}>
        {/* Mensajes simulados o lista de mensajes */}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mt: 2,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          size='small'
          placeholder="Escribe un mensaje..."
          sx={{
            backgroundColor: '#FFFFFF'
          }}
        />
        <Button
        variant="contained"
        sx={{
            backgroundColor: '#E1832B', // naranja
            color: '#fff',              // texto blanco
            '&:hover': {
            backgroundColor: '#CF6E1E', // naranja oscuro al pasar el mouse
            },
        }}
        >
        Enviar
        </Button>

      </Box>
    </Grid>
  );
}


export function ChatCliente(){



    return(
        <Box
        sx={{
            flexGrow: 1,
            margin: '5vh'
        }}
        >
            <Typography
                        sx={{mb: 2}}
                        variant='h5'
                        >
                            Chats
            </Typography>
            <Grid container
            spacing={{xs: 2, md: 4}}
            columns={{ xs: 4, sm: 12, md: 12}}
            sx={{
                width:'100%',
                height:'75vh',
                backgroundColor:'#FFFFFF',
                borderRadius:'10px',
                boxShadow:2,
                p:5
            }}
            >
                <ChatRecently/>
                <ChatBody/>
            </Grid>
        </Box>
    )
}

export default ChatCliente