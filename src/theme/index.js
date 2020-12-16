import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(36, 37, 38)',
    },
    secondary: {
      main: 'rgb(9, 211, 172)',
    },
    background: {
      paper: 'rgb(36, 37, 38)',
      default: 'rgb(24, 25, 26)',
    },
  },
});

export default theme;
