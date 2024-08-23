import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#403D76",
        color: "#ffffff",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Cardnival
            </Typography>
            <Typography variant="body2">
              Generate flashcards with ease and efficiency.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" sx={{ display: "block", mb: 1 }}>
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              Contact
            </Link>
            <Link
              href="/terms"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: qiming1021@outlook.com
            </Typography>
            <Typography variant="body2">Phone: +1 (800) 123-4567</Typography>
            <Typography variant="body2">
              Address: 1234 Flashcard St, Learning City, Edu
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: "1px solid #ffffff",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Cardnival. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
