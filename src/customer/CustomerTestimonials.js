import React from "react";
import {
  Box,
  Typography,
  Card,
  Avatar,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const testimonials = [
  {
    title: "“The best restaurant”",
    content:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    image: img1,
  },
  {
    title: "“Simply delicious”",
    content:
      "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    name: "Matt Cannon",
    location: "San Diego, CA",
    image: img2,
  },
  {
    title: "“One of a kind restaurant”",
    content:
      "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    location: "San Francisco, CA",
    image: img3,
  },
];

const CustomerTestimonials = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 8,
        backgroundColor: "#fefefe",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        What Our Customers Say
      </Typography>

      <Grid
        container
        spacing={3}
        mt={4}
        wrap="wrap"
        justifyContent="center"
      >
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                backgroundColor: "#f9f9f9",
                borderRadius: 3,
                height: "100%",
              }}
              elevation={0}
            >
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {testimonial.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  {testimonial.content}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box display="flex" alignItems="center">
                  <Avatar src={testimonial.image} alt={testimonial.name} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerTestimonials;
