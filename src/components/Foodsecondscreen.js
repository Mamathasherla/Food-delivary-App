import React from 'react';
import logo from '../assets/japanese-food.png';
import ImageAsset from '../assets/Image.png';

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

import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

const Moreabout = () => {
  const navigate = useNavigate();

  const handleAbout = () => navigate('/about');
  const handleContact = () => navigate('/Contact');
  const handleBlogdetails = () => navigate('/blogdetails');
  const handleourmenupage = () => navigate('/ourmenu');
  const handleBook = () => navigate('/book');
  const handlehome = () => navigate('/');

  return (
    <Box sx={{ width: '100%', fontFamily: 'sans-serif' }}>
      {/* Top Contact Bar */}
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
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
        </Box>
      </Box>

      {/* Header Navigation Bar */}
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
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <img src={logo} alt="Logo" style={{ width: 32, height: 32 }} />
          <Typography
            variant="h6"
            sx={{ fontStyle: 'italic', fontWeight: 600, color: '#1f2937' }}
          >
            Bistro Bliss
          </Typography>
        </Box>

        {/* Nav Menu */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button onClick={handlehome} sx={{ fontSize: 14, color: '#1f2937' }}>Home</Button>
          <Button onClick={handleAbout} sx={{ fontSize: 14, color: '#1f2937' }}>About</Button>
          <Button onClick={handleourmenupage} sx={{ fontSize: 14, color: '#1f2937' }}>Menu</Button>
          <Button onClick={handleBlogdetails} sx={{ fontSize: 14, color: '#1f2937' }}>Pages</Button>
          <Button onClick={handleContact} sx={{ fontSize: 14, color: '#1f2937' }}>Contact</Button>
        </Box>

        {/* Book A Table Button */}
        <Button
          onClick={handleBook}
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

      {/* Main About Section */}
      <Box sx={{ backgroundColor: '#f9f9f7' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: { xs: 4, md: 12 },
            gap: 8,
          }}
        >
          {/* Left Side Image with Card */}
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

          {/* Right Side Text */}
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
    </Box>
  );
};

export default Moreabout;
