import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#FF9B33',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#181818',
      default: '#181818',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export default theme;
