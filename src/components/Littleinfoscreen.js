import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import aboutchef from '../assets/aboutchef.png';

const Little = () => {
  const stats = [
    { number: '3', label: 'Locations' },
    { number: '1995', label: 'Founded' },
    { number: '65+', label: 'Staff Members' },
    { number: '100%', label: 'Satisfied Customers' },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#F9F9F7',
        px: { xs: 4, md: 10 },
        py: { xs: 6, md: 10 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 6,
      }}
    >
      {/* Left Side Text */}
      <Box sx={{ flex: 1 }}>
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

        {/* Stats Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 180px)' },
            gap: 2,
          }}
        >
          {stats.map((item, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 2,
                border: '1px solid #ccc',
                textAlign: 'center',
                boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
                height: 110,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 1 }}>
                  {item.number}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333' }}>
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Right Side Image */}
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
    </Box>
  );
};

export default Little;
