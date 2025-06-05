import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

import people1 from "../assets/people1.jpg";
import people2 from "../assets/people2.jpg";
import people3 from "../assets/people3.jpg";
import people4 from "../assets/people4.jpg";

const services = [
  {
    title: "Caterings",
    image: people1,
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    title: "Birthdays",
    image: people2,
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    title: "Weddings",
    image: people3,
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    title: "Events",
    image: people4,
    description: "In the new era of technology we look in the future with certainty for life.",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        overflowX: "hidden",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        We also offer unique<br />services for your events
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          mt: 4,
          width: "100%",
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{
              flex: 1,
              minWidth: 0,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={service.image}
              alt={service.title}
              sx={{
                height: 200,
                width: "100%",
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
