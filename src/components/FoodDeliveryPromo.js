import React from 'react';
import { Grid, Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import chef from '../assets/chef.jpg';
import pan from '../assets/pan.jpg';
import grills from '../assets/grills.jpg';

const features = [
  "Delivery within 30 minutes",
  "Best Offer & Prices",
  "Online Services Available"
];

const FoodDeliveryPromo = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 2, md: 10 },
        py: 4,
        backgroundColor: '#fdfaf6',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Chef image full height */}
            <Box
              component="img"
              src={chef}
              alt="Chef"
              sx={{
                width: '50%',
                height: { xs: 300, md: 450 },
                objectFit: 'cover',
                borderRadius: 2
              }}
            />

            {/* Right side stacked images */}
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: 2 }}>
              <Box
                component="img"
                src={pan}
                alt="Pan"
                sx={{
                  height: { xs: 140, md: 215 },
                  objectFit: 'cover',
                  width: '100%',
                  borderRadius: 2
                }}
              />
              <Box
                component="img"
                src={grills}
                alt="Grills"
                sx={{
                  height: { xs: 140, md: 215 },
                  objectFit: 'cover',
                  width: '100%',
                  borderRadius: 2
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
          >
            Fastest Food Delivery in City
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={3}
            sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            Our visual designer lets you quickly add and drag down your way to customers for both keep desktop.
          </Typography>

          <Stack spacing={1.5}>
            {features.map((text, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle sx={{ color: 'crimson', mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodDeliveryPromo;
