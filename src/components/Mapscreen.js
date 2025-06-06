import React, { useState } from 'react';
import logo from '../assets/japanese-food.png';
import Map from '../assets/map.png';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTopBar = styled(Box)({
  backgroundColor: '#333',
  color: '#fff',
  padding: '0.5rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.9rem',
});

const StyledNavbar = styled(Toolbar)({
  justifyContent: 'space-between',
  padding: '18px 30px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const NavLinks = styled(Box)({
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
});

const BookButton = styled(Button)({
  padding: '0.5rem 1rem',
  border: '1px solid #000',
  borderRadius: '20px',
  background: 'none',
});

const MainContent = styled(Box)({
  textAlign: 'center',
  padding: '2rem 1rem',
  backgroundColor: '#f9f9f7',
});

const MapFormWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  marginTop: '12rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

const MapImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
  borderTop: '2px solid #ccc',
});

const FormCard = styled(Paper)({
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
});

const BookTableWithMap = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('1');
  const [isBooked, setIsBooked] = useState(false);

  const handleBook = () => {
    if (date && time && name && phone && people) {
      setIsBooked(true);
    } else {
      alert('Please fill in all details before booking.');
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f9f9f7' }}>
      <StyledTopBar>
        <span>(414) 857 - 0107</span>
        <span>yummy@bistrobliss</span>
      </StyledTopBar>

      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff' }}>
        <StyledNavbar>
          <LogoBox>
            <img src={logo} alt="Logo" height="32" />
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600, color: '#1f2937' }}>
              Bistro Bliss
            </Typography>
          </LogoBox>

          <NavLinks>
            <Button onClick={() => navigate('/')} sx={{ color: '#555' }}>Home</Button>
            <Button onClick={() => navigate('/about')} sx={{ color: '#5f6653', fontWeight: 600 }}>About</Button>
            <Button onClick={() => navigate('/ourmenu')} sx={{ color: '#555' }}>Menu</Button>
            <Button onClick={() => navigate('/blogdetails')} sx={{ color: '#555' }}>Pages</Button>
            <Button onClick={() => navigate('/Contact')} sx={{ color: '#555' }}>Contact</Button>
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
            <MapImage src={Map} alt="mapimage" />
          </Box>

          <FormCard>
            <Box component="form" sx={{ width: '100%' }}>
              {isBooked && (
                <Typography
                  variant="h6"
                  sx={{
                    color: '#2e7d32',
                    mb: 2,
                    fontWeight: 'bold',
                    background: '#e8f5e9',
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}
                >
                  ✅ Table Booked Successfully!
                </Typography>
              )}

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <TextField fullWidth type="date" variant="outlined" value={date} onChange={(e) => setDate(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth type="time" variant="outlined" value={time} onChange={(e) => setTime(e.target.value)} />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <TextField fullWidth placeholder="Enter your name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth placeholder="x-xxx-xxx-xxxx" type="tel" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <Select fullWidth value={people} onChange={(e) => setPeople(e.target.value)}>
                    <MenuItem value="1">1 Person</MenuItem>
                    <MenuItem value="2">2 People</MenuItem>
                    <MenuItem value="3">3 People</MenuItem>
                    <MenuItem value="4">4 People</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Button
                onClick={handleBook}
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
