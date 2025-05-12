import * as React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { Avatar, Badge, Button, Divider, IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



import { Account } from '@toolpad/core/Account';
import { useSession } from '@toolpad/core/useSession';
import { UserOrg } from './UserOrg';
import Inicio from './Inicio'
import InformacionServicio from './InformacionServicio';
import Reservas from './Reservas';
import Chats from './Chats';
import HistorialServicio from './HistorialServicio';
import PagosFacturacion from './PagosFacturacion';
import ResenasOpiniones from './ReseniasOpiniones';
import Configuracion from './Configuracion';


// Icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';


// const NAVIGATION = [
//   {
//     kind: 'divider', // solo espacio
//   },
//   {
//     segment: 'inicio',
//     title: 'Inicio',
//     icon: <HomeIcon />
//   },
//   {
//     segment: 'informacion-servicio',
//     title: 'Información del servicio',
//     icon: <InfoIcon />,
//   },
//   {
//     segment: 'reservas',
//     title: 'Reservas',
//     icon: <CalendarMonthIcon />,
//   },
//   {
//     segment: 'chats',
//     title: 'Chats',
//     icon: <ChatIcon />,
//   },
//   {
//     segment: 'historia-servicio',
//     title: 'Historial del servicio',
//     icon: <HistoryIcon />,
//   },
//   {
//     segment: 'pagos-facturacion',
//     title: 'Pagos y facturación',
//     icon: <CreditCardIcon />,
//   },
//   {
//     segment: 'resenas-opiniones',
//     title: 'Reseñas y opiniones',
//     icon: <StarIcon />,
//   },
//   {
//     segment: 'configuracion',
//     title: 'Configuracion',
//     icon: <SettingsIcon />,
//   },

// ];

const demoTheme = createTheme({
  // cssVariables: {
  //   colorSchemeSelector: 'data-toolpad-color-scheme',
  // },
  // colorSchemes: { light: true, dark: true },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 600,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },

  palette: {
    mode : 'light',
    primary: {
      main: '#4D724D'
    },
    secondary: {
      main: '#A64D79'
    },
    background: {
      default: '#F9F1F0',
      paper: '#FFFFFF'
    }, text: {
      primary: '#2D2D2D',
      secondary: '#4D724D'
    },
  },
  components: {
    MuiDrawer:{
      styleOverrides: {
        paper:{
          backgroundColor: '#4D724D',
          color: '#FFFFFF'
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#D9EAD3',
            color: '#2D2D2D',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#cde2c6', // tono un poco más oscuro o similar al seleccionado
          },
          '&:hover': {
            backgroundColor: '#6b996b', // para botones no seleccionados
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: 'none',                 // fuerza quitar línea
        },
      },
    },
  }
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
    case  '/inicio':
      return <Inicio/>
    case '/informacion-servicio':
      return <InformacionServicio/>
    case '/reservas':
      return <Reservas/>
    case '/chats':
      return <Chats/>
    case '/historia-servicio':
      return <HistorialServicio/>
    case '/pagos-facturacion':
      return <PagosFacturacion/>
    case '/resenas-opiniones':
      return <ResenasOpiniones/>
    case '/configuracion':
      return <Configuracion/>
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

      <Badge color="success" badgeContent={1} max={999} variant="dot">
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


function Dashboard(props) {
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

  const router = useDemoRouter('/dashboard');
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
              segment: 'inicio',
              title: 'Inicio',
              icon: <HomeIcon />
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'informacion-servicio',
              title: 'Información del servicio',
              icon: <InfoIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'reservas',
              title: 'Reservas',
              icon: <CalendarMonthIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'chats',
              title: 'Chats',
              icon: <ChatIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'historia-servicio',
              title: 'Historial del servicio',
              icon: <HistoryIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'pagos-facturacion',
              title: 'Pagos y facturación',
              icon: <CreditCardIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'resenas-opiniones',
              title: 'Reseñas y opiniones',
              icon: <StarIcon />,
            },
            {
              kind: 'divider', // solo espacio
            },
            {
              segment: 'configuracion',
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

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
