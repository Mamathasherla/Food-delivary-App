import React from 'react';
import {
  Box,
  Typography,
  Paper,
  CardMedia,
  Button,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

import ImageAsset from '../assets/Image.png'; // Capital "I"


const Moreabout = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f7' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f9f9f7',
          py: 10,
          px: { xs: 4, md: 12 },
          gap: 8,
        }}
      >
        {/* Left: Image + Info Card */}
        <Box sx={{ position: 'relative', width: 460, minWidth: 320 }}>
          <CardMedia
            component="img"
            image={ImageAsset}
            alt="Dish"
            sx={{ borderRadius: 3, width: '100%' }}
          />
          <Paper
            elevation={3}
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              backgroundColor: '#2c2c2c',
              color: '#ffffff',
              padding: 3,
              borderRadius: 3,
              width: 300,
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Come and visit us
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">(414) 857 - 0107</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Email fontSize="small" />
              <Typography variant="body2">happytummy@restaurant.com</Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" gap={1}>
              <LocationOn fontSize="small" sx={{ mt: '2px' }} />
              <Typography variant="body2">
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Right: Text Content + Button */}
        <Box sx={{ flex: 1, minWidth: 320 }}>
          <Typography
            variant="h3"
            fontWeight={600}
            mb={3}
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, lineHeight: 1.3 }}
          >
            We provide healthy food for your family.
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Our story began with a vision to create a unique dining experience that merges fine dining,
            exceptional service, and a vibrant ambiance. Rooted in city’s rich culinary culture, we aim
            to honor our local roots while infusing a global palate.
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            At place, we believe that dining is not just about food, but also about the overall experience.
            Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '9999px',
              textTransform: 'none',
              fontWeight: 500,
              px: 3,
              py: 1,
              color: '#1f2937',
              borderColor: '#1f2937',
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            More About Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Moreabout;
