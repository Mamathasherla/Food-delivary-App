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
        height: '100vh',
        overflow: 'hidden',
        px: { xs: 2, md: 10 },
        py: 4,
        backgroundColor: '#fdfaf6',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Grid container spacing={4} alignItems="center">
       
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="img"
                src={chef}
                alt="Chef"
                sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <Box
                  component="img"
                  src={pan}
                  alt="Pan"
                  sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                />
                <Box
                  component="img"
                  src={grills}
                  alt="Grills"
                  sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        
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
            Our visual designer lets you quickly add and drag down your way to customers for both desktop and mobile.
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
