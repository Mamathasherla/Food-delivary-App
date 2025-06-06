import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider
} from '@mui/material';

const testimonials = [
  {
    quote: '“The best restaurant”',
    text: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
    name: 'Sophie Robson',
    location: 'Los Angeles, CA',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: '“Simply delicious”',
    text: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
    name: 'Matt Cannon',
    location: 'San Diego, CA',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    quote: '“One of a kind restaurant”',
    text: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
    name: 'Andy Smith',
    location: 'San Francisco, CA',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
];

const CustomerTestimonials = () => {
  return (
    <Box sx={{ backgroundColor: '#fdfaf6', py: 10, px: 4 }}>
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 600, mb: 6, color: '#1a1a1a' }}
      >
        What Our Customers Say
      </Typography>

      {/* Horizontal Cards */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'nowrap', // prevents wrapping
          overflowX: 'auto',   // enables horizontal scroll on smaller screens
        }}
      >
        {testimonials.map((item, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              width: 300,
              p: 3,
              backgroundColor: '#fff',
              borderRadius: 2,
              border: '1px solid #eee',
              flexShrink: 0, // ensures all cards stay same width
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: '#b00020', mb: 2 }}
              >
                {item.quote}
              </Typography>

              <Typography variant="body2" sx={{ color: '#444', mb: 4 }}>
                {item.text}
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={item.image} alt={item.name} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.location}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerTestimonials;
