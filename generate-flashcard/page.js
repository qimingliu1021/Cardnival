"use client";
import {
  Typography,
  Box,
  CssBaseline,
  TextField,
  Button,
  Card,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../theme";
import { ThemeProvider } from "@emotion/react";
import Footer from "../footpage";
import Nav from "../Nav";

function page() {
  const [message, setMessage] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [generateOrNot, setGenerateOrNot] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch("api/generate", {
      method: "POST",
      body: message,
    });
    const data = await response.json(); // Read and parse the JSON response
    console.log("data is: ", data);
    setGenerateOrNot(true);
    setFlashcards(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Nav />
        <Box
          sx={{
            display: "flex",
            with: "800px",
            flexDirection: { xs: "column", md: "row" },
            mt: "150px",
            color: "#ffffff",
            gap: "30px",
          }}
        >
          <Typography sx={{ width: "400px" }}>
            Write a short description of an object first comes to your mind and
            generate flashcard about it!{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              gap: "20px",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="For example, I'd like to know more topics of fruit to talk about "
              // isRequired="true"
              multiline
              rows={7}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                width: "400px",
                height: "200px",
                "& .MuiOutlinedInput-root": {
                  "& .MuiInputBase-input": {
                    color: "#403D76", // Set the text color here
                  },
                  "& fieldset": {
                    borderColor: "transparent", // No border
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // No border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // No border when focused
                  },
                },
              }}
            />
            <Button
              onClick={handleSubmit}
              sx={{
                width: "200px",
                backgroundColor: "#ffffff",
                color: "#403D76",
                ":hover": { backgroundColor: "#403D76", color: "#ffffff" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            mt: "50px",
            width: { xs: "auto", md: "1000px" },
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)", // 1 column on extra-small screens
              sm: "repeat(2, 1fr)", // 2 columns on small screens
              md: "repeat(3, 1fr)", // 3 columns on medium screens and up
            },
            gap: "10px",
          }}
        >
          {flashcards.map((flashcard, index) =>
            flipped ? (
              <Card
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#403D76",
                  borderRadius: "20px",
                }}
              >
                {" "}
                {flashcard.back}
              </Card>
            ) : (
              <Card sx={{ backgroundColor: "#ffffff", color: "#403D76" }}>
                {flashcard.front}
              </Card>
            )
          )}
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default page;
