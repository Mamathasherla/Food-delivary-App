import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh' }}>
      
      
      <Box sx={{ width: '100%', fontFamily: 'sans-serif' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#1f2937',
            color: 'white',
            px: 4,
            py: 1.5,
            fontSize: 14,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaPhoneAlt />
              <Typography variant="body2">(414) 857 - 0107</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaEnvelope />
              <Typography variant="body2">happytummy@restaurant.com</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, cursor: 'pointer' }}>
            <FaTwitter style={{ transition: 'color 0.3s' }} />
            <FaFacebookF style={{ transition: 'color 0.3s' }} />
            <FaInstagram style={{ transition: 'color 0.3s' }} />
          </Box>
        </Box>

      
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 4,
            py: 2,
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
         
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <img src="/japanese-food.png" alt="Logo" style={{ width: 32, height: 32 }} />
            <Typography
              variant="h6"
              sx={{ fontStyle: 'italic', fontWeight: 600, color: '#1f2937' }}
            >
              Bistro Bliss
            </Typography>
          </Box>

    
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button sx={{ fontSize: 14, color: '#1f2937' }}>Home</Button>
            <Button
              sx={{
                fontSize: 14,
                color: '#065f46',
                backgroundColor: '#e5e7eb',
                px: 1.5,
                py: 0.5,
                borderRadius: '9999px',
                fontWeight: 500,
                '&:hover': { backgroundColor: '#d1d5db' },
              }}
            >
              About
            </Button>
            <Button sx={{ fontSize: 14, color: '#1f2937', '&:hover': { color: '#065f46' } }}>
              Menu
            </Button>
            <Button sx={{ fontSize: 14, color: '#1f2937', '&:hover': { color: '#065f46' } }}>
              Pages
            </Button>
            <Button sx={{ fontSize: 14, color: '#1f2937', '&:hover': { color: '#065f46' } }}>
              Contact
            </Button>
          </Box>

         
          <Button
            sx={{
              border: '1px solid #1f2937',
              borderRadius: '9999px',
              px: 2,
              py: 1,
              fontSize: 14,
              fontWeight: 500,
              backgroundColor: 'transparent',
              color: '#1f2937',
              '&:hover': { backgroundColor: '#f3f4f6' },
            }}
          >
            Book A Table
          </Button>
        </Box>
      </Box>

     
      <Box sx={{ py: 8, px: 2 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={600} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We consider all the drivers of change gives you the components <br />
            you need to change to create a truly happyness.
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    minRows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#B73E3E',
                      color: '#fff',
                      borderRadius: '999px',
                      paddingY: 1.2,
                      fontWeight: 600,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: '#a33232',
                      },
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        
        <Grid container justifyContent="center" spacing={4} mt={6} textAlign="center">
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Call Us:
            </Typography>
            <Typography variant="h6" color="#B73E3E">
              +1 234-567-8900
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Hours:
            </Typography>
            <Typography>Mon-Fri: 11am - 8pm</Typography>
            <Typography>Sat, Sun: 9am - 11pm</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Our Location:
            </Typography>
            <Typography>123 Bridge Street</Typography>
            <Typography>Newarkland Town, LA 12345</Typography>
            <Typography>United States</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
