import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#646464"
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            ':hover': { backgroundColor: '#e29933', color: 'white' },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            ':hover': { backgroundColor: '#e29933', color: 'white' },
          },
        },
      ],
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#e29933',
      contrastText: 'white',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});

export default theme;
