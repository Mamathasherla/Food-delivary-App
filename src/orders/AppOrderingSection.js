import React from 'react';
import { Box, Grid, Typography, Paper, Container } from '@mui/material';

const appBrands = [
  { name: 'Uber Eats', color: '#06C167' },
  { name: 'GRUBHUB', color: '#E21737' },
  { name: 'Postmates', color: '#000000' },
  { name: 'DOORDASH', color: '#EB1700' },
  { name: 'foodpanda', color: '#D70F64' },
  { name: 'deliveroo', color: '#00CDBC' },
  { name: 'instacart', color: '#43B02A' },
  { name: 'JUST EAT', color: '#FA5000' },
  { name: 'DiDi Food', color: '#F77900' },
];

const AppOrderingSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f7', py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
         
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                You can order<br />through apps
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
              </Typography>
            </Box>
          </Grid>

         
          <Grid item xs={12} md={8}>
            <Box
              display="grid"
              gridTemplateColumns={{ xs: '1fr', sm: 'repeat(3, 1fr)' }}
              gap={3}
            >
              {appBrands.map((app, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 64,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: app.color }}>
                    {app.name}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppOrderingSection;
