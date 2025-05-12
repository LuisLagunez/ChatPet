import * as React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { Avatar, Badge, Button, Divider, IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



import { Account } from '@toolpad/core/Account';


import { UserOrg } from './UserOrg';
import InicioCliente from './InicioCliente';
import MisMascotas from './MisMascotas';
import ServiciosDisponibles from './ServiciosDisponibles';
import MisReservas from './MisReservas';
import ChatCliente from './ChatCliente';
import PagosCliente from './PagosCliente';
import ReseniasCliente from './ReseniasCliente';
import ConfiguracionCliente from './ConfiguracionCliente';


// Icons
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';




const demoTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E1832B', // naranja vibrante del sidebar
    },
    secondary: {
      main: '#D94E1F', // tono más oscuro para resaltar
    },
    background: {
      default: '#FAF3F0', // fondo general muy claro
      paper: '#FFFFFF', // fondo de tarjetas o paneles
    },
    text: {
      primary: '#2D2D2D', // texto oscuro para buena lectura
      secondary: '#5A5A5A', // texto secundario
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#E1832B', // naranja del sidebar
          color: '#FFFFFF', // texto blanco en el drawer
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#FCEBDD', // fondo claro cuando está seleccionado
            color: '#2D2D2D', // texto oscuro
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#f8dac7',
          },
          '&:hover': {
            backgroundColor: '#F5A872', // naranja claro al pasar el mouse
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: 'none',
        },
      },
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

function RenderPage ( { pathname }){
  switch (pathname){
    case  '/dashboard-cliente':
      return <InicioCliente/>
    case '/mis-mascotas':
      return <MisMascotas/>
    case '/servicios-disponibles':
      return <ServiciosDisponibles/>
    case '/mis-reservas':
      return <MisReservas/>
    case '/chat-cliente':
      return <ChatCliente/>
    case '/pagos-cliente':
      return <PagosCliente/>
    case '/resenias-cliente':
      return <ReseniasCliente/>
    case '/configuracion-cliente':
      return <ConfiguracionCliente/>
    default:
      return <Typography sx={{margin : '30px'}}>Ruta no encontrada: {pathname}</Typography>
  }
}


DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={{xs:0, sm:0, md:5}} sx={{ml:"3vh"}}>
      <Avatar alt="Logo" src="/logo.png" sx={{ width:{xs:0, sm: 40, md: 56}, height: {xs:0, sm: 40, md: 56} }} />
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
       CHAT PET
      </Typography>
  </Stack>
  );
}

function ToolbarActionsSearch() {
  const theme = useTheme();
  // Mostrar solo el ícono en pantallas md o más pequeñas
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction="row" spacing={4} alignItems="center" sx={{ mr: '2vh' }}>
      {isSmallScreen ? (
        <IconButton
          size="small"
          sx={{
            backgroundColor: '#4D724D',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#3d5f3d',
            },
            borderRadius: '50%',
            width: 40,
            height: 40,
          }}
        >
          <SearchIcon />
        </IconButton>
      ) : (
        <TextField
          label="Buscar"
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      )}

      <Badge color="primary" badgeContent={1} max={999} variant="dot">
        <NotificationsIcon />
      </Badge>

      <Account slots={{ popoverContent: UserOrg }} />
    </Stack>
  );
}


function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? '© CHATPET' : `© ${new Date().getFullYear()} Made by CHAT PET`}
    </Typography>
  );
}


function DashboardCliente(props) {
  const { window } = props;

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter('/dashboard-cliente');
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={
        [
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'dashboard-cliente',
              title: 'Inicio',
              icon: <HomeIcon />
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'mis-mascotas',
              title: 'Mis mascotas',
              icon: <PetsIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'servicios-disponibles',
              title: 'Servicios disponibles',
              icon: <ShoppingCartIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'mis-reservas',
              title: 'Mis reservas',
              icon: <CalendarMonthIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'chat-cliente',
              title: 'Chat y comunicación',
              icon: <ChatIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'pagos-cliente',
              title: 'Pagos y facturación',
              icon: <CreditCardIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'resenias-cliente',
              title: 'Reseñas y opiniones',
              icon: <StarIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'configuracion-cliente',
              title: 'Configuracion',
              icon: <SettingsIcon />,
            },
        ]
      }
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarAccount: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter
        }}
      >
        <RenderPage pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardCliente.propTypes = {
  window: PropTypes.func,
};

export default DashboardCliente;
