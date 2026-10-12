import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b6f23a",
    },
    background: {
      default: "#101312",
      paper: "#1c2420",
    },
    text: {
      primary: "#f1f5f2",
      secondary: "#a0aaa3",
    },
    divider: "#38443d",
    success: {
      main: "#72d6a0",
    },
  },

  shape: {
    borderRadius: 4,
  },

  typography: {
    fontWeightRegular: 400,
    h1: {
      fontSize: "40px",
    },
    h4: {
      fontWeight: 700,
    },
  },

  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
        },
      },
    },
  },

});
