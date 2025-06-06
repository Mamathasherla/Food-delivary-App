import React, { useState } from 'react';
import logo from '../assets/japanese-food.png'
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleAbout = () => navigate('/about');
  const handleContact = () => navigate('/Contact');
  const handleBlogdetails = () => navigate('/blogdetails');
  const handleourmenupage = () => navigate('/ourmenu');
  const handleBook = () => navigate('/book');
  const handlehome = () => navigate('/');


  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh' }}>
    
      <Box>
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
            <img  src={logo} alt="Logo" style={{ width: 32, height: 32 }} />
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600, color: '#1f2937' }}>
              Bistro Bliss
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={handlehome} sx={{ fontSize: 14, color: '#1f2937' }}>Home</Button>
            <Button onClick={handleAbout} sx={{ fontSize: 14, color: '#065f46' }}>About</Button>
            <Button onClick={handleourmenupage} sx={{ fontSize: 14, color: '#1f2937' }}>Menu</Button>
            <Button onClick={handleBlogdetails} sx={{ fontSize: 14, color: '#1f2937' }}>Pages</Button>
            <Button onClick={handleContact} sx={{ fontSize: 14, color: '#1f2937' }}>Contact</Button>
          </Box>
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
      </Box>

     
      <Box sx={{ py: 8, px: 2 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={600} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We consider all the drivers of change gives you the components <br />
            you need to change to create a truly happyness.
          </Typography>
        </Box>

   
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4, backgroundColor: '#fff' }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
              
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Name</Typography>
                    <TextField
                      fullWidth
                      placeholder="Enter your name"
                      variant="outlined"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      InputProps={{
                        sx: {
                          borderRadius: '999px',
                          backgroundColor: 'white',
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Email</Typography>
                    <TextField
                      fullWidth
                      placeholder="Enter email address"
                      variant="outlined"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      InputProps={{
                        sx: {
                          borderRadius: '999px',
                          backgroundColor: 'white',
                        },
                      }}
                    />
                  </Grid>

             
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Subject</Typography>
                    <TextField
                      fullWidth
                      placeholder="Write a subject"
                      variant="outlined"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      error={Boolean(errors.subject)}
                      helperText={errors.subject}
                      InputProps={{
                        sx: {
                          borderRadius: '999px',
                          backgroundColor: 'white',
                        },
                      }}
                    />
                  </Grid>

             
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Message</Typography>
                    <TextField
                      fullWidth
                      placeholder="Write your message"
                      variant="outlined"
                      multiline
                      minRows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      InputProps={{
                        sx: {
                          borderRadius: '16px',
                          backgroundColor: 'white',
                        },
                      }}
                    />
                  </Grid>

               
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: '#B73E3E',
                        color: '#fff',
                        borderRadius: '999px',
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: '1rem',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#a33232',
                        },
                      }}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

      
        <Snackbar
          open={success}
          autoHideDuration={4000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Message sent successfully!
          </Alert>
        </Snackbar>

      
        <Grid container justifyContent="center" spacing={4} mt={6} textAlign="center">
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Call Us:</Typography>
            <Typography variant="h6" color="#B73E3E">+1 234-567-8900</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Hours:</Typography>
            <Typography>Mon-Fri: 11am - 8pm</Typography>
            <Typography>Sat, Sun: 9am - 11pm</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Our Location:</Typography>
            <Typography>123 Bridge Street</Typography>
            <Typography>Newarkland Town, LA 12345</Typography>
            <Typography>United States</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
