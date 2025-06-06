import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import KitchenIcon from '@mui/icons-material/Kitchen';
import SpeedIcon from '@mui/icons-material/Speed';

const Authenticscreen = () => {
  return (
    <Box className="Authenticscreen" sx={{ bgcolor: '#f9f9f7', minHeight: '100vh' }}>
     
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          backgroundImage: 'url(/images/BG.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Feel the authentic & 
        </Typography>
        <Typography variant="h3" gutterBottom >
          original taste from us
        </Typography>

        <IconButton
          aria-label="play"
          sx={{
            mt: 3,
            bgcolor: 'rgba(0,0,0,0.6)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
            color: '#fff',
            width: 64,
            height: 64,
          }}
        >
          <PlayArrowIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      
      <Box sx={{ px: 4, py: 6, bgcolor: '#fff' }}>
        <Grid container spacing={6} justifyContent="center">
        
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <RestaurantMenuIcon sx={{ fontSize: 40, color: '#C70039' }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Multi Cuisine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  In the new era of technology we look in the future with certainty life.
                </Typography>
              </Box>
            </Box>
          </Grid>

         
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <KitchenIcon sx={{ fontSize: 40, color: '#C70039' }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Easy To Order
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  In the new era of technology we look in the future with certainty life.
                </Typography>
              </Box>
            </Box>
          </Grid>

      
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <SpeedIcon sx={{ fontSize: 40, color: '#C70039' }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Fast Delivery
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  In the new era of technology we look in the future with certainty life.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Authenticscreen;
