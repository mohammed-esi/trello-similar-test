import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F70F3',
    },
    secondary: {
      main: '#A0B0C7',
    },
    grey: {
      50: '#F2F4F7',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          color: '#3F70F3',
          borderColor: '#3F70F3',
          borderRadius: 8,
          fontWeight: 600,
          textTransform: 'none',
          backgroundColor: alpha('#3F70F3', 0.1), // Using alpha to make the color matte
          '&:hover': {
            backgroundColor: alpha('#3F70F3', 0.15), // Slightly darker matte on hover
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          color: '#3F70F3',
          border: 'none',
          borderRadius: 12,
          fontWeight: 700,
          textTransform: 'none',
          backgroundColor: alpha('#3F70F3', 0.1), // Using alpha to make the color matte
          '&:hover': {
            backgroundColor: alpha('#3F70F3', 0.15), // Slightly darker matte on hover
          },
        },
      },
    },
  },
});

export default theme;
