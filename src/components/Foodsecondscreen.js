import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  CardMedia,
  IconButton,
  Button,
} from '@mui/material';
import {
  Phone,
  Email,
  Twitter,
  Facebook,
  Instagram,
  LocationOn,
} from '@mui/icons-material';

const HeaderSection = () => {
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
    <Box sx={{ backgroundColor: '#f9f9f7' }}>
    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1f2937',
          color: 'white',
          px: 4,
          py: 1,
          fontSize: 14,
        }}
      >
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Phone fontSize="small" />
            <span>(414) 857 - 0107</span>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Email fontSize="small" />
            <span>happytummy@restaurant.com</span>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" sx={{ color: 'white' }}>
            <Twitter fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'white' }}>
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'white' }}>
            <Instagram fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          py: 2,
          backgroundColor: 'white',
          boxShadow: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src="/japanese-food.png" alt="Logo" width={32} height={32} />
          <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600 }}>
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
          variant="outlined"
          sx={{
            borderRadius: 9999,
            textTransform: 'none',
            fontWeight: 500,
            px: 3,
            py: 1,
            borderColor: '#1f2937',
            color: '#1f2937',
            '&:hover': {
              backgroundColor: '#f3f4f6',
            },
          }}
        >
          Book A Table
        </Button>
      </Box>

      
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
       
        <Box sx={{ position: 'relative', width: 460, minWidth: 320 }}>
          <CardMedia
            component="img"
            image="/images/image.png"
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
          <Typography variant="body2" color="text.secondary">
            At place, we believe that dining is not just about food, but also about the overall experience.
            Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSection;