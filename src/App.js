// import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Programs from './Component/Programs/Programs';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testmonial from './Component/Testimonial/Testmonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
// import Viideo from './Component/Video_player/Viideo';
function App() {
  // const [playState,setPlayState] =useState(false);
  
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
<div className='container'> 
       <Title subtitle='Our Program' title='WHAT WE OFFER'/>
        <Programs/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='WHAT Student Says'/>
        <Testmonial/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
</div>    
{/* <Viideo/> */}


    </div>
  );
}

export default App;
