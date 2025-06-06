import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTopBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#333',
  color: '#fff',
  padding: '0.5rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.9rem',
}));

const StyledNavbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: '18px 30px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
}));

const BookButton = styled(Button)(({ theme }) => ({
  padding: '0.5rem 1rem',
  border: '1px solid #000',
  borderRadius: '20px',
  background: 'none',
}));

const MainContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '2rem 1rem',
  backgroundColor: '#f9f9f7',
}));

const MapFormWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  marginTop: '12rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));
//change
const MapImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
  borderTop: '2px solid #ccc',
});

const FormCard = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  background: '#fff',
  width: '90%',
  maxWidth: '600px',
  borderRadius: '10px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const BookTableWithMap = () => {
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
      <StyledTopBar>
        <span>(414) 857 - 0107</span>
        <span>yummy@bistrobliss</span>
      </StyledTopBar>

      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff' }}>
        <StyledNavbar>
          <LogoBox>
            <img src="/japanese-food.png" alt="Logo" width="32" height="32" />
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600, color: '#1f2937' }}>
              Bistro Bliss
            </Typography>
          </LogoBox>

          <NavLinks>
            <Button  onClick={handlehome}color="inherit" sx={{ color: '#555' }}>Home</Button>
            <Button onClick={handleAbout} sx={{ color: '#5f6653', fontWeight: 600 }}>About</Button>
            <Button onClick={handleourmenupage} color="inherit" sx={{ color: '#555' }}>Menu</Button>
            <Button onClick={handleBlogdetails} color="inherit" sx={{ color: '#555' }}>Pages</Button>
            <Button  onclick={handleContact} color="inherit" sx={{ color: '#555' }}>Contact</Button>
          </NavLinks>

          <BookButton variant="outlined">Book A Table</BookButton>
        </StyledNavbar>
      </AppBar>

      <MainContent>
        <Typography variant="h3" gutterBottom>Book A Table</Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, margin: '0 auto 2rem', color: '#666' }}>
          We consider all the drivers of change gives you the components you need
          to change to create a truly happens.
        </Typography>

        <MapFormWrapper>
          <Box sx={{ width: '100%' }}>
            <MapImage src="/images/map.png" alt="Map" />
          </Box>

          <FormCard>
           <Box component="form" sx={{ width: '100%' }}>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <TextField fullWidth type="date" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth type="time" variant="outlined" />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <TextField fullWidth placeholder="Enter your name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth placeholder="x-xxx-xxx-xxxx" type="tel" variant="outlined" />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <Select fullWidth defaultValue="1">
                    <MenuItem value="1">1 Person</MenuItem>
                    <MenuItem value="2">2 People</MenuItem>
                    <MenuItem value="3">3 People</MenuItem>
                    <MenuItem value="4">4 People</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Button onClick={handleBook}
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#9f2626',
                  color: '#fff',
                  padding: '0.75rem',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#7f1d1d' },
                }}
              >
                Book A Table
              </Button>
            </Box>
          </FormCard>
        </MapFormWrapper>
      </MainContent>
    </Box>
  );
};

export default BookTableWithMap;
