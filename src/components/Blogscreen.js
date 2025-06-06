import React from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Container,
} from '@mui/material';

const sideArticles = [
  {
    img: '/images/Mask group (5).png',
    title: 'How to prepare the perfect french fries in an air fryer',
  },
  {
    img: '/images/Mask group (6).png',
    title: 'How to prepare delicious chicken tenders',
  },
  {
    img: '/images/Mask group (7).png',
    title: '7 delicious cheesecake recipes you can prepare',
  },
  {
    img: '/images/Mask group (8).png',
    title: '5 great pizza restaurants you should visit this city',
  },
];

const BlogArticles = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f9', py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Our Blog & Articles
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#a63838',
              borderRadius: '24px',
              textTransform: 'none',
              px: 3,
              py: 1,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#8a2f2f',
              },
            }}
          >
            Read All Articles
          </Button>
        </Box>

      
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
         
          <Paper
            elevation={1}
            sx={{
              flex: 1,
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <Box
              component="img"
              src="/images/Mask group (4).png"
              alt="Burger"
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
              }}
            />
            <Box sx={{ p: 3 }}>
              <Typography variant="body2" sx={{ color: '#888', mb: 1 }}>
                January 3, 2023
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                The secret tips & tricks to prepare a perfect burger & pizza for our customers
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Gravida cras enim quis nibh varius.
              </Typography>
            </Box>
          </Paper>

        
          <Box
            sx={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
            }}
          >
            {sideArticles.map((article, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                }}
              >
                <Box
                  component="img"
                  src={article.img}
                  alt={article.title}
                  sx={{ width: '100%', height: 100, objectFit: 'cover' }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2" sx={{ color: '#888', mb: 0.5 }}>
                    January 3, 2023
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {article.title}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogArticles;
