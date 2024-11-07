import { createTheme as mui} from "@mui/material";

export const theme = mui({
  palette: {
    mode: 'light',
    primary: {
      main: '#6750A4',
    },
    secondary: {
      main: '#625B71',
    },
    error: {
      main: '#B3261E',
    },
    background: {
      default: '#F7F2FA',
    },
  },
});