import React from "react";
import { Box } from "@mui/system";
import { AppBar, Typography, Button } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

export default function Nav() {
  const [signIn, setSignIn] = useState(false);

  const userSignIn = () => {
    router.push("/sign-in");
    setSignIn(true);
  };
  const router = useRouter();

  return (
    <AppBar
      sx={{
        color: "#403D76",
        display: "flex",
        flexDirection: "row",
        padding: "5px",
        borderRadius: "10px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "24px",
          flexGrow: 1,
          ml: "10px",
        }}
      >
        Cardnival
      </Typography>
      <Box sx={{ justifyContent: "flex-end", mr: "20px" }}>
        <SignedIn>
          <Box sx={{ mt: "5px" }}>
            <UserButton />
          </Box>
        </SignedIn>
        <SignedOut>
          <Button
            onClick={userSignIn}
            sx={{
              backgroundColor: "#403D76",
              ":hover": { backgroundColor: "#000000" },
              width: "200px",
            }}
          >
            Log in/Sign up
          </Button>
        </SignedOut>
      </Box>
    </AppBar>
  );
}
