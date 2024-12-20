import React from "react";
import {
  Container,
  Grid2,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import "./Landing.css";
import BgImg from "../../assets/Background.svg";
import { useNavigate } from "react-router";
import TransparentFooter from "./Footer";
import Header from "./Header";

export default function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to a new page when the image is clicked
    navigate("/booking"); // Replace '/target-page' with the route you want to navigate to
  };

  return (
    <>
      <Container sx={{ height: "100vh" }} maxWidth="xl">
        <Container maxWidth="xl">
          <Header isLoggedIn={false} />
        </Container>
        <Container
          maxWidth="xl"
          sx={{
            backgroundSize: "cover", // To cover the entire container
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent image from repeating
            display: "block", // Flexbox to center content
          }}
        >
          <Grid2 container spacing={2} sx={{ marginTop: "20vh" }}>
            <Grid2 size={6} sx={{ padding: "1vw" }}>
              <Card
                sx={{
                  border: "none", // Removes the border
                  boxShadow: "none", // Removes the default shadow
                  padding: 2, // Adds padding inside the card
                  borderRadius: 2, // Optional: Adds rounded corners to the card
                }}
              >
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Book Your Car with Rent-o-Car
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ marginTop: "4vh" }}
                  >
                    Rent-o-Car offers a variety of cars available for rent at
                    affordable rates. Choose from economy, premium, and luxury
                    cars. Enjoy the convenience of booking a car for a few
                    hours, a day, or even a week, all from the comfort of your
                    home!
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Simply browse through our selection, choose your desired
                    car, and confirm your booking. We ensure fast and easy
                    bookings with real-time availability and flexible payment
                    options.
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{ marginTop: "5vh" }}
                    onClick={handleClick}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 spacing={2} size={5}>
              <img src={BgImg} className="car-bg-img" alt="car" />
            </Grid2>
          </Grid2>
        </Container>
      </Container>
      <TransparentFooter />
    </>
  );
}
