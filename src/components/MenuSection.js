import React from 'react';
import {
  Box,
  Card,
  Typography,
  Button,
  Avatar,
  Stack,
} from '@mui/material';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import CakeIcon from '@mui/icons-material/Cake';

const menuItems = [
  {
    title: 'Breakfast',
    icon: <FreeBreakfastIcon fontSize="medium" />,
    description: 'In the new era of technology we look in the future with certainty and pride.',
  },
  {
    title: 'Main Dishes',
    icon: <RamenDiningIcon fontSize="medium" />,
    description: 'In the new era of technology we look in the future with certainty and pride.',
  },
  {
    title: 'Drinks',
    icon: <LocalDrinkIcon fontSize="medium" />,
    description: 'In the new era of technology we look in the future with certainty and pride.',
  },
  {
    title: 'Desserts',
    icon: <CakeIcon fontSize="medium" />,
    description: 'In the new era of technology we look in the future with certainty and pride.',
  },
];

const MenuSection = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        textAlign: 'center',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Browse Our Menu
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        sx={{ flexWrap: 'nowrap' }}
      >
        {menuItems.map((item, index) => (
          <Card
            key={index}
            elevation={1}
            sx={{
              width: 200,
              p: 2,
              borderRadius: 2,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Avatar sx={{ bgcolor: '#f1f1ed', mb: 1, width: 60, height: 60 }}>
              {item.icon}
            </Avatar>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {item.title}
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
              {item.description}
            </Typography>

            <Button
              variant="text"
              size="small"
              sx={{ color: '#C73E2F', fontWeight: 'bold', mt: 'auto' }}
            >
              Explore
            </Button>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default MenuSection;
