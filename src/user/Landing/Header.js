import React, { useState } from "react";
import {
  AppBar,
  Container,
  Grid2,
  Toolbar,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Button,
} from "@mui/material";
import Logo from "../../assets/Logo.png";
export default function Header(props) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0: Login, 1: Signup

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <>
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
              {props.isLoggedIn == false ? (
                <Grid2 container spacing={2}>
                  <Grid2 item>
                    <Button
                      variant="outlined"
                      color="dark"
                      onClick={() => handleTabChange(0)}
                    >
                      Login
                    </Button>
                  </Grid2>
                  <Grid2 item>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleTabChange(1)}
                    >
                      Signup
                    </Button>
                  </Grid2>
                </Grid2>
              ) : (
                <></>
              )}
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {activeTab === 0 ? (
            <Box>
              <Typography variant="h6" gutterBottom>
                Login
              </Typography>
              <TextField fullWidth label="Email" type="email" margin="normal" />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
              />
            </Box>
          ) : (
            <Box>
              <Typography variant="h6" gutterBottom>
                Signup
              </Typography>
              <TextField fullWidth label="Name" type="text" margin="normal" />
              <TextField fullWidth label="Email" type="email" margin="normal" />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                margin="normal"
              />
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="dark" variant="outlined">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleTabChange(0)}
          >
            {activeTab === 0 ? "Login" : "Signup"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
