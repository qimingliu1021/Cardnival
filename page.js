"use client";
import Image from "next/image";
import React from "react";
import { Box } from "@mui/system";
import { AppBar, Typography, Button } from "@mui/material";
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
// ********************* Other imports in file *********************
import Footer from "./footpage";
import Nav from "./Nav";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: 0,
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {
  const [signIn, setSignIn] = useState(false);
  const [expandedBasic, setExpandedBasic] = useState(false);
  const [expandedPremium, setExpandedPremium] = useState(false);

  const handleExpandClickBasic = () => {
    setExpandedBasic(!expandedBasic);
  };

  const handleExpandClickPremium = () => {
    setExpandedPremium(!expandedPremium);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const userSignIn = () => {
    router.push("/sign-in");
    setSignIn(true);
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
            color: "#ffffff",
            mt: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "64px", fontWeight: 1000 }}>
            Cardnival
          </Typography>
          <Typography
            sx={{ fontSize: "40px", fontWeight: 1000, textAlign: "center" }}
          >
            Generate flashcards with simple commands
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: {
              md: "50px",
              xs: "50px",
            },
            mt: "50px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Button
            sx={{
              backgroundColor: "#ffffff",
              color: "#403D76",
              width: "300px",
              height: "50px",
              ":hover": { backgroundColor: "#000000" },
            }}
            href="/generate-flashcard"
          >
            <Typography sx={{ fontWeight: 800 }}>Getting Started</Typography>
          </Button>
          <Button
            sx={{
              backgroundColor: "#ffffff",
              color: "#403D76",
              width: "150px",
              ":hover": { backgroundColor: "#000000" },
              width: "300px",
              height: "50px",
            }}
          >
            <Typography sx={{ fontWeight: 800 }}>
              Explore your collection
            </Typography>
          </Button>
        </Box>
        <Box sx={{ mt: "50px" }}>
          <Typography
            sx={{ fontSize: "50px", fontWeight: 800, color: "#ffffff" }}
          >
            Choose your plan
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centers the cards horizontally
            alignItems: "flex-start", // Aligns the cards to the top
            gap: "50px", // Adds space between the cards
            mt: "50px",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          <Card sx={{ width: 345 }}>
            <CardHeader
              title="Basic Plan"
              titleTypographyProps={{
                sx: {
                  color: "#403D76",
                  textAlign: "center",
                  fontSize: "40px", // Adjust the font size here
                  fontWeight: 800,
                },
              }}
            />
            <CardContent>
              <Typography
                sx={{
                  variant: "body2",
                  color: "#403D76",
                  fontWeight: 800,
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Starts from free...
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography
                paragraph
                sx={{
                  color: "#403D76",
                  fontWeight: 800,
                  flexGrow: 1,
                  ml: "8px",
                }}
              >
                Click here to learn more...
              </Typography>
              <Box sx={{ display: "flex" }}>
                <ExpandMore
                  expand={expandedBasic}
                  onClick={handleExpandClickBasic}
                  aria-expanded={expandedBasic}
                  aria-label="show more"
                >
                  <ExpandMoreIcon sx={{ mt: "10px" }} />
                </ExpandMore>
              </Box>
            </CardActions>
            <Collapse in={expandedBasic} timeout="auto" unmountOnExit>
              <CardContent>
                <Box sx={{ display: "flex", gap: "15px", mt: "-10px" }}>
                  <DoneAllIcon sx={{ color: "#403D76" }} />
                  <Typography
                    paragraph
                    sx={{ color: "#403D76", fontWeight: 800 }}
                  >
                    Unlimited non-AI Flashcards
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon sx={{ color: "#403D76" }} />
                  <Typography
                    paragraph
                    sx={{ color: "#403D76", fontWeight: 800 }}
                  >
                    5 pages per document
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon color="disabled" />
                  <Typography paragraph>20 exam mode answers</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon color="disabled" />
                  <Typography paragraph color="disabled">
                    answers 20,000 characters per text upload
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon color="disabled" />
                  <Typography paragraph>
                    No exporting Limited new features
                  </Typography>
                </Box>
              </CardContent>
            </Collapse>
          </Card>
          <Card sx={{ width: 345 }}>
            <CardHeader
              title="Premium Plan"
              titleTypographyProps={{
                sx: {
                  color: "#403D76",
                  textAlign: "center",
                  fontSize: "40px", // Adjust the font size here
                  fontWeight: 800,
                },
              }}
            />
            <CardContent>
              <Typography
                sx={{
                  variant: "body2",
                  color: "#403D76",
                  fontWeight: 800,
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Starts from $10/month
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography
                paragraph
                sx={{
                  color: "#403D76",
                  fontWeight: 800,
                  flexGrow: 1,
                  ml: "8px",
                }}
              >
                Click here to learn more...
              </Typography>
              <Box sx={{ display: "flex" }}>
                <ExpandMore
                  expand={expandedPremium}
                  onClick={handleExpandClickPremium}
                  aria-expanded={expandedPremium}
                  aria-label="show more"
                >
                  <ExpandMoreIcon sx={{ mt: "10px" }} />
                </ExpandMore>
              </Box>
            </CardActions>
            <Collapse in={expandedPremium} timeout="auto" unmountOnExit>
              <CardContent>
                <Box sx={{ display: "flex", gap: "15px", mt: "-10px" }}>
                  <DoneAllIcon sx={{ color: "#403D76" }} />
                  <Typography
                    paragraph
                    sx={{ color: "#403D76", fontWeight: 800 }}
                  >
                    Unlimited non-AI Flashcards
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon sx={{ color: "#403D76" }} />
                  <Typography
                    paragraph
                    sx={{ color: "#403D76", fontWeight: 800 }}
                  >
                    5 pages per document
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon sx={{ color: "#403D76" }} />
                  <Typography
                    paragraph
                    sx={{ color: "#403D76", fontWeight: 800 }}
                  >
                    20 exam mode answers
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon sx={{ color: "#403D76" }} />
                  <Typography
                    paragraph
                    sx={{ color: "#403D76", fontWeight: 800 }}
                  >
                    answers 20,000 characters per text upload
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <DoneAllIcon sx={{ color: "#403D76" }} />
                  <Typography
                    paragraph
                    sx={{ color: "#403D76", fontWeight: 800 }}
                  >
                    No exporting Limited new features
                  </Typography>
                </Box>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
