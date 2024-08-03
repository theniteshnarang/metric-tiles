import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#119F97',
    },
    secondary: {
      main: '#FF5D39',
    },
    text: {
      primary: '#09295E',
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            textTransform: 'capitalize',
            width: '8rem',
            paddingTop: '0.3rem',
            paddingBottom: '0.3rem',
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            textTransform: 'capitalize',
            width: '8rem',
            paddingTop: '0.3rem',
            paddingBottom: '0.3rem',
            backgroundColor: 'rgba(255, 93, 57, 0.1)',
            border: 0,
          },
        },
      ],
    },
  },
});

export default appTheme;
