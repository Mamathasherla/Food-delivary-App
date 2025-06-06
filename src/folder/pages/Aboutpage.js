import React from 'react'
import HeaderSection from '../../components/Foodsecondscreen'
import Authenticscreen from '../../components/Feeltheauthenticscreen'
import Little from '../../components/Littleinfoscreen'
import CustomerTestimonials from '../../components/CustomerTestimonials'
import Footer from '../../components/Footerscreen'

const Aboutpage = () => {
    return(
        <div>
            <HeaderSection/>
            <Authenticscreen/>
            <Little/>
            <CustomerTestimonials/>
            <Footer/>
          
        </div>
    )
}
export default Aboutpage;

