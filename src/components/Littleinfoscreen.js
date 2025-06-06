import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import aboutchef from '../assets/aboutchef.png'

const Little = () => {
  const stats = [
    { number: '3', label: 'Locations' },
    { number: '1995', label: 'Founded' },
    { number: '65+', label: 'Staff Members' },
    { number: '100%', label: 'Satisfied Customers' },
  ];

  return (
    <Box sx={{ bgcolor: '#F9F9F7', px: { xs: 4, md: 10 }, py: { xs: 6, md: 10 } }}>
      <Grid container spacing={6} alignItems="flex-start">
      
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                color: '#1A1A1A',
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              A little information <br /> for our valuable guest
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 16,
                color: '#555',
                maxWidth: 500,
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              At place, we believe that dining is not just about food, but also about the
              overall experience. Our staff, renowned for their warmth and dedication,
              strives to make every visit an unforgettable event.
            </Typography>
          </Box>

        
          <Grid container spacing={3}>
            {stats.map((item, index) => (
              <Grid
                item
                xs={6}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  sx={{
                    width: 180,
                    height: 110,
                    borderRadius: 2,
                    border: '1px solid #ccc',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  <CardContent
                    sx={{
                      padding: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      flexGrow: 1,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 1 }}>
                      {item.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Side Image */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src={aboutchef}
            alt="Chef preparing vegetables"
            sx={{
              width: '100%',
              maxWidth: 400,
              borderRadius: 2,
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Little;
