import React from "react";
import {
  AppBar,
  Container,
  Grid2,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Logo from "../../assets/Logo.png";
export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black", // To change the text/icon color
        boxShadow: "none",
        paddingTop: "5px",
      }}
    >
      <Toolbar disableGutters>
        <Grid2
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Grid2 item>
            <img src={Logo} alt="logo" className="Logo" />
          </Grid2>
          <Grid2 item>
            <Grid2 container spacing={2}>
              <Grid2 item>
                <Button variant="outlined" color="dark">
                  Login
                </Button>
              </Grid2>
              <Grid2 item>
                <Button variant="outlined" color="error">
                  Signup
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
}
