import React from 'react'
import Header from '../../components/Foodfirstscreen'
import MenuSection from '../../components/MenuSection'
import Moreabout from '../../components/Moreaboutusscreen'
import ServicesSection from '../../components/ServicesSection'
import FoodDeliveryPromo from  '../../components/FoodDeliveryPromo'
import CustomerTestimonials from '../../components/CustomerTestimonials'
import BlogArticles from '../../components/Blogscreen'
import Footer from '../../components/Footerscreen'
 
const HomePage = () => {
  return (
    <div>
      <Header/>
      
      <MenuSection/>
      <Moreabout/>
      <ServicesSection/>
      <FoodDeliveryPromo/>
      <CustomerTestimonials/>
      <BlogArticles/>
      <Footer/>
    </div>
  )
}

export default HomePage
