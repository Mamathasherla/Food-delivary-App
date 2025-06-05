import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';


import br1 from '../assets/br1.jpg';
import br2 from '../assets/br2.jpg';
import br3 from '../assets/br3.jpg';
import br4 from '../assets/br4.jpg';
import br5 from '../assets/br5.jpg';
import br6 from '../assets/br6.jpg';
import br7 from '../assets/br7.jpg';
import br8 from '../assets/br8.jpg';


const menuItems = [
  { title: 'Fried Eggs', price: '$ 9.99', image: br1, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  { title: 'Hawaiian Pizza', price: '$ 15.99', image: br2, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  { title: 'Martinez Cocktail', price: '$ 7.25', image: br3, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  { title: 'Butterscotch Cake', price: '$ 20.99', image: br4, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  { title: 'Mint Lemonade', price: '$ 5.89', image: br5, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  { title: 'Chocolate Icecream', price: '$ 18.05', image: br6, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  { title: 'Cheese Burger', price: '$ 12.55', image: br7, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  { title: 'Classic Waffles', price: '$ 12.99', image: br8, description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
];

const MenuPage = () => {
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

      
      <Box sx={{ px: 4, py: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Menu
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          We consider all the drivers of change gives you the components you need to change to create a truly happiness.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {menuItems.slice(0, 4).map((item, index) => (
              <Card key={index} sx={{ width: 250 }}>
                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{item.price}</Typography>
                  <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {menuItems.slice(4, 8).map((item, index) => (
              <Card key={index} sx={{ width: 250 }}>
                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{item.price}</Typography>
                  <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuPage;
