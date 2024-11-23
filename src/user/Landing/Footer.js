import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const TransparentFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "transparent", // Transparent background
        color: "#fff", // Text color (adjust as needed)
        py: 2, // Padding on top and bottom
        display: "grid", // Flexbox to align items
        justifyContent: "space-between", // Space between text and icons
        position: "fixed", // Change to 'fixed' if you want it fixed at the bottom
        bottom: 0,
        width: "100%",
        boxShadow: "none", // No shadow for the footer
        paddingTop: "10vh",
        alignItems: "center",
        gridTemplateColumns: "10fr 1fr",
      }}
    >
      <Typography variant="body2" sx={{ color: "black", textAlign: "center" }}>
        © 2024 Rent-o-Car. All rights reserved.
      </Typography>
      <Box>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "red" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{ color: "red" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "red" }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TransparentFooter;
