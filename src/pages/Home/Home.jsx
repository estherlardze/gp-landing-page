import React from 'react';
import {About, ContactUs, CTA, Footer, Header, Navbar, OurWork, Portfolio, 
  Projects, Services, Sponsor, Team, Testimonial} from '../../component/index'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Sponsor />
      <OurWork />
      <Services />
      <CTA />
      <Portfolio />
      <Projects />
      <Testimonial />
      <Team />
       <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
