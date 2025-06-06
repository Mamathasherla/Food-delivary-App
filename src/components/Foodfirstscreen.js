import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import BannerImage from '../assets/Hero.png'
import logo from '../assets/japanese-food.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  const handleAbout = () =>{
    navigate('/about')
  }
  const handleContact = () =>{
    navigate('/Contact')
  }
  const handleBlog = () =>{
    navigate('/blog')
  }
  const handleBlogdetails = () =>{
    navigate('/blogdetails')
  }
   const handleourmenupage = () =>{
    navigate('/ourmenu')
  }
   const handleBook= () =>{
    navigate('/book')
  }
   const handlehome = () =>{
    navigate('/')
  }
  

  return (
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
          <img src={logo} alt="Logo" style={{ width: 32, height: 32 }} />
          <Typography
            variant="h6"
            sx={{ fontStyle: 'italic', fontWeight: 600, color: '#1f2937' }}
          >
            Bistro Bliss
          </Typography>
        </Box>

       
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button onClick={handlehome} sx={{ fontSize: 14, color: '#1f2937' }}>Home</Button>
          <Button
           onClick={handleAbout}
            sx={{ fontSize: 14, color: '#1f2937' }}
          >
            About
          </Button>
          <Button onClick={handleourmenupage} sx={{ fontSize: 14, color: '#1f2937', '&:hover': { color: '#065f46' } }}>
            Menu
          </Button>
          <Button onClick={handleBlogdetails} sx={{ fontSize: 14, color: '#1f2937', '&:hover': { color: '#065f46' } }}>
            Pages
          </Button>
          <Button onClick={handleContact} sx={{ fontSize: 14, color: '#1f2937', '&:hover': { color: '#065f46' } }}>
            Contact
          </Button>
        </Box>

        
        <Button onClick={handleBook}
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

     
      <Box sx={{ width: '100%', height: '90vh', mt: 0, position: 'relative' }}>
        <img
          src={BannerImage}
          alt="Delicious Food"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
};

export default Header;
