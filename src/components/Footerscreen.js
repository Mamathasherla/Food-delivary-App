import React from 'react';
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


import LogoImg from '../assets/japanese-food.png';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';

const FooterSection = styled(Box)({
  backgroundColor: '#474747',
  color: '#ffffff',
  padding: '60px 40px 30px',
  fontFamily: 'Inter, sans-serif',
});

const FooterContainer = styled(Grid)({
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '40px',
});

const FooterLeft = styled(Box)({
  maxWidth: '250px',
});

const FooterLogo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '28px',
  fontWeight: 600,
  marginBottom: '15px',
});

const FooterDesc = styled(Typography)({
  fontSize: '14px',
  lineHeight: 1.6,
  marginBottom: '20px',
  color: '#c7c7c7',
});

const FooterSocials = styled(Box)({
  display: 'flex',
  gap: '12px',
});

const SocialIcon = styled(IconButton)({
  backgroundColor: '#AD343E',
  color: '#FFFFFF',
  borderRadius: '50%',
  padding: '8px',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const FooterTitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: '15px',
});

const FooterListItem = styled(ListItem)({
  fontSize: '14px',
  color: '#c7c7c7',
  padding: 0,
  marginBottom: '10px',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const FooterGallery = styled(Box)({
  maxWidth: '300px',
});

const FooterImages = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
  marginTop: '10px',
});

const FooterBottom = styled(Box)({
  textAlign: 'center',
  borderTop: '1px solid #6b6b6b',
  paddingTop: '20px',
  marginTop: '40px',
  fontSize: '13px',
  color: '#c7c7c7',
});

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer container>
        <Grid item>
          <FooterLeft>
            <FooterLogo>
              <img src={LogoImg} alt="logo" width={32} height={32} />
              <span>Bistro Bliss</span>
            </FooterLogo>
            <FooterDesc>
              In the new era of technology we look at the future with certainty and pride to for our company and.
            </FooterDesc>
            <FooterSocials>
              <SocialIcon><TwitterIcon fontSize="small" /></SocialIcon>
              <SocialIcon><FacebookIcon fontSize="small" /></SocialIcon>
              <SocialIcon><InstagramIcon fontSize="small" /></SocialIcon>
            </FooterSocials>
          </FooterLeft>
        </Grid>

        <Grid item>
          <Grid container spacing={6}>
            <Grid item>
              <FooterTitle>Pages</FooterTitle>
              <List>
                {['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'].map((item, index) => (
                  <FooterListItem key={index}>{item}</FooterListItem>
                ))}
              </List>
            </Grid>
            <Grid item>
              <FooterTitle>Utility Pages</FooterTitle>
              <List>
                {['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'].map((item, index) => (
                  <FooterListItem key={index}>{item}</FooterListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <FooterGallery>
            <FooterTitle>Follow Us On Instagram</FooterTitle>
            <FooterImages>
              {[Img1, Img2, Img3, Img4].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`dish${idx + 1}`}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'cover' }}
                />
              ))}
            </FooterImages>
          </FooterGallery>
        </Grid>
      </FooterContainer>

      <FooterBottom>
        Copyright © 2023 Hashtag Developer. All Rights Reserved
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;
