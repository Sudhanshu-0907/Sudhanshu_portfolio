import React from 'react';
import Header from "./components/header/Header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Experience from "./components/experience/Experience"
// import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"
// import Testimonial from "./components/testimonial/Testimonial"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import './App.css';

function App(){
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
