import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#20232a',
    },
    secondary: {
      main: 'rgb(9, 211, 172)',
    },
    background: {
      paper: '#20232a',
      default: 'rgb(40, 44, 52)',
    },
  },
});

export default theme;
