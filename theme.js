"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#403D76",
      primary: "#ffffff",
    },
    primary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#403D76",
        },
      },
    },
  },
});

export default theme;
