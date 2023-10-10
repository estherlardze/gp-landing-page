import React from 'react';
import {About, ContactUs, CTA, Footer, Hero, Navbar, Features, Portfolio, 
       Counts, Services, Client, Team, Testimonial} from '../../component/index';
import {hero} from '../../assets/index'

const Home = () => {

 

  return (
    <div>
      <div style={{ backgroundImage: `url(${hero})`, backgroundRepeat:'no-repeat', backgroundPosition:'center',
       backgroundSize:'cover', width:'100%', height:'100vh', backgroundAttachment:'fixed'}} className='text-white'>
        <div className='bg-black/60 w-full h-[100vh]'>
          <Navbar />
          <Hero />
        </div>
      </div>    
      <About />
      <Client />
      <Features />
      <Services />
      <CTA />
      <Portfolio />
      <Counts />
      <Testimonial />
      <Team />
       <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
