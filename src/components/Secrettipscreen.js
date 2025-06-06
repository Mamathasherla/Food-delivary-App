import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

const Long = () => {
  const navigate = useNavigate();

  // Navigation Handlers
  const handleNavigation = (path) => navigate(path);

  return (
    <Box>
      {/* Top Bar */}
      <AppBar position="static" color="default" sx={{ py: 1, backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon fontSize="small" />
                    <Typography variant="body2">(414) 857 - 0107</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon fontSize="small" />
                    <Typography variant="body2">happytummy@restaurant.com</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box display="flex" gap={1}>
                <IconButton size="small"><TwitterIcon fontSize="small" /></IconButton>
                <IconButton size="small"><FacebookIcon fontSize="small" /></IconButton>
                <IconButton size="small"><InstagramIcon fontSize="small" /></IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      {/* Main Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box display="flex" alignItems="center" gap={1}>
              <img src="/japanese-food.png" alt="Logo" height="40" />
              <Typography variant="h6" component="div">Bistro Bliss</Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button onClick={() => handleNavigation('/')} sx={{ fontSize: 14, color: '#1f2937' }}>Home</Button>
              <Button onClick={() => handleNavigation('/about')} sx={{ fontSize: 14, color: '#1f2937' }}>About</Button>
              <Button onClick={() => handleNavigation('/ourmenu')} sx={{ fontSize: 14, color: '#1f2937' }}>Menu</Button>
              <Button onClick={() => handleNavigation('/blogdetails')} sx={{ fontSize: 14, color: '#1f2937' }}>Pages</Button>
              <Button onClick={() => handleNavigation('/contact')} sx={{ fontSize: 14, color: '#1f2937' }}>Contact</Button>
            </Box>

            {/* Book Button */}
            <Button
              onClick={() => handleNavigation('/book')}
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
          </Toolbar>
        </Container>
      </AppBar>

      {/* Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
          The secret tips & tricks to prepare a perfect burger & pizza for our customers
        </Typography>

        <Box component="img" src="/images/Mask group (9).png" alt="Noodles and greens" width="100%" my={4} />

        {/* Section 1 */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            What do you need to prepare a home-made burger?
          </Typography>
          <Typography paragraph>
            Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion.
          </Typography>
          <List>
            {[
              "Quality Beef: Use fresh, high-quality ground beef with about 20% fat.",
              "Seasoning: Use salt and pepper just before cooking.",
              "Don’t Overwork the Meat: Be gentle to avoid tough burgers.",
              "Cooking: High heat creates a flavorful crust.",
              "Resting: Rest burgers before serving.",
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <Typography variant="body1">{i + 1}.</Typography>
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Section 2 */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            What are the right ingredients to make it delicious?
          </Typography>
          <Typography paragraph>
            Every ingredient matters, from fresh veggies to perfectly baked buns and sauces.
          </Typography>
          <List>
            {[
              "Fresh vegetables: Crisp lettuce, tomato, onion add crunch and flavor.",
              "Cheese: Choose a cheese that melts well like cheddar or American.",
              "Buns: Toasted brioche buns hold everything together beautifully.",
              "Sauces: Add flavor with mayo, mustard, or house sauce.",
              "Extras: Think bacon, pickles, or grilled mushrooms.",
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <Typography variant="body1">{i + 1}.</Typography>
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box component="img" src="/images/pexels-suzy-hazelwood-2966196 1.png" alt="Salad and fries" width="100%" my={4} />

        {/* Section 3 */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            Final Thoughts
          </Typography>
          <Typography paragraph>
            Mastering burgers and pizzas is about balance and quality. Practice, refine, and serve with love.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Long;