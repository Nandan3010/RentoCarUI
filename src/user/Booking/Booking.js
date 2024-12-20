import "./Booking.css";
import React, { useEffect, useState } from "react";
import Car from "../../assets/MoveCar.png";
import Header from "../Landing/Header";
import { Button, Container, Grid2, Card, CardContent } from "@mui/material";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import carbackground from "../../assets/carbackground.jpg";
import cars from "./cars";

export default function Booking() {
  const [animate, setAnimate] = useState(false);
  const [showForm, setshowForm] = useState(false);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  useEffect(() => {
    // Trigger the animation when the component is mounted
    setAnimate(true);

    setTimeout(() => {
      setshowForm(true);
    }, 1400);
  }, [animate]);
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    // Delay of 3000ms (3 seconds)
    const timer = setTimeout(() => {
      setShowImage(true); // Show the image after the delay
    }, 1400);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  const styles = {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      width: "300px",
      margin: "0 auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "40%",
      margin: "auto",
      marginTop: "15vh",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      fontSize: "14px",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    },
    button: {
      borderRadius: "25px",
      float: "right",
    },
  };
  return (
    <>
      <div className="background-image">
        <Container sx={{ height: "80vh" }} maxWidth="xl">
          <div className="image-contai>ner">
            <img
              src={Car}
              alt="Animated"
              className={`image ${animate ? "move-up" : ""}`}
            />
          </div>
          {showForm ? (
            <>
              <Header isLoggedIn={true} />
              <Container disableGutters sx={{ paddingTop: "2vh" }}>
                <Card>
                  <CardContent>
                    <Grid2 container spacing={2}>
                      <Grid2 size={2}>
                        <DateField
                          label="from"
                          variant="outlined"
                          size="small"
                          value={from}
                          onChange={setFrom}
                        ></DateField>
                      </Grid2>
                      <Grid2 size={2}>
                        <DateField
                          label="to"
                          variant="outlined"
                          size="small"
                          value={to}
                          onChange={setTo}
                        ></DateField>
                      </Grid2>

                      <Grid2 size={3}>
                        <Button
                          variant="contained"
                          color="error"
                          size="large"
                          sx={{
                            position: "relative",

                            width: "90%",
                            margin: "auto",
                          }}
                        >
                          Search for Vehicals
                        </Button>
                      </Grid2>
                      <Grid2 size={3}></Grid2>
                    </Grid2>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    marginTop: 5,
                  }}
                >
                  <Grid2
                    container
                    spacing={2}
                    sx={{
                      height: "400px",
                      overflow: "auto",
                    }}
                  >
                    {cars.map((car, index) => (
                      <Grid2
                        size={3}
                        key={index}
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                          padding: "16px",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src={car.image}
                          alt={car.name}
                          style={{
                            width: "100%",
                            height: "150px",
                            borderRadius: "8px",
                          }}
                        />
                        <h3>{car.name}</h3>
                        <p>Type: {car.type}</p>
                        <p>Rent: ₹{car.perDayRent} / day</p>
                        <Button variant="contained" color="error" size="large">
                          Book now
                        </Button>
                      </Grid2>
                    ))}
                  </Grid2>
                </Card>
              </Container>
            </>
          ) : (
            <></>
          )}
        </Container>
      </div>
    </>
  );
}
