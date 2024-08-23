"use client";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import Link from "next/link";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import theme from "../../theme";
import { ThemeProvider } from "@emotion/react";

export default function SignInPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignIn
          signUpUrl="/sign-up"
          appearance={{
            variables: {
              colorPrimary: "#403D76",
              colorInputBackground: "#403D76",
              colorInputText: "#ffffff",
              colorText: "#403D76",
              bold: 400,
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
