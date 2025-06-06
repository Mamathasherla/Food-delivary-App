import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

import bakeryitems from '../assets/bakeryitems.jpg';
import bites from '../assets/bites.jpg';
import cake from '../assets/cake.jpg';
import chapathi from '../assets/chapathi.jpg';
import cooking from '../assets/cooking.jpg';
import fries from '../assets/fries.jpg';
import fryitems from '../assets/fryitems.jpg';
import maggie from '../assets/maggie.jpg';
import meals from '../assets/meals.jpg';
import pizza from '../assets/pizza.jpg';
import utensils from '../assets/utensils.jpg';
import pastry from '../assets/pastry.jpg';

const blogs = [
  { date: 'Jan 5, 2023', title: 'Delicious gluten free sushi', image: cooking },
  { date: 'Jan 5, 2023', title: 'Pastry king baking lessons', image: pastry },
  { date: 'Jan 5, 2023', title: 'Perfect fries in air fryer', image: fries },
  { date: 'Jan 5, 2023', title: 'Delicious chicken tenders', image: chapathi },
  { date: 'Jan 5, 2023', title: 'Time-saving cooking gadgets', image: cake },
  { date: 'Jan 5, 2023', title: 'Burger tips & tricks', image: bites },
  { date: 'Jan 5, 2023', title: 'Cheesecake recipes', image: fryitems },
  { date: 'Jan 5, 2023', title: 'Top pizza spots in town', image: pizza },
  { date: 'Jan 5, 2023', title: 'Top kitchen utensils', image: utensils },
  { date: 'Jan 5, 2023', title: 'Gluten free bakery ideas', image: bakeryitems },
  { date: 'Jan 5, 2023', title: 'Quick desserts for kids', image: meals },
  { date: 'Jan 5, 2023', title: 'Easy Maggie ideas', image: maggie },
];

const BlogGrid = () => {
  return (
    <Box sx={{ width: '100%' }}>
    
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
          <Button sx={{ fontSize: 14, color: '#1f2937' }}>Menu</Button>
          <Button sx={{ fontSize: 14, color: '#1f2937' }}>Pages</Button>
          <Button sx={{ fontSize: 14, color: '#1f2937' }}>Contact</Button>
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

      
      <Box sx={{ px: 4, py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Blog & Articles
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
          We consider all the drivers of change gives you the components you need to create true happiness.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {blogs.map((blog, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: '45%', md: '22%' },
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {blog.date}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  {blog.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogGrid;
