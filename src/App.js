import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './folder/pages/HomePage';
import ContactPage from './folder/pages/ContactPage';
import Aboutpage from './folder/pages/Aboutpage';
import Blogpage from './folder/pages/Blogpage';
import Bookpage from './folder/pages/Bookpage';
import OurMenuPage from './folder/pages/OurMenuPage';
import Blogdetailspage from './folder/pages/Blogdetailspage';



function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/blog' element={<Blogpage/>}/>
      <Route path='/book' element={<Bookpage/>}/>
      <Route path='/ourmenu'element={<OurMenuPage/>}/>
      <Route path='/blogdetails'element={<Blogdetailspage/>}/>

    </Routes>
   </Router>
  ); 
}

export default App;
