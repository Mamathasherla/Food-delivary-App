import React from 'react';
import { CssBaseline } from '@mui/material';
import BlogGrid from './assets/Blog/BlogGrid';
import MenuSection from './components/MenuSection';
import ContactUs from './folder/pages/ContactUs';
import MenuPage from './Menu/MenuPage';
import AppOrderingSection from './orders/AppOrderingSection';
import FoodDeliveryPromo from './sections/FoodDeliveryPromo';
import ServicesSection from './service/ServicesSection';
import CustomerTestimonials from './customer/CustomerTestimonials';



function App() {
  return (
    <>
      <CssBaseline />

      <FoodDeliveryPromo/>
    </>
  ); 
}

export default App;
