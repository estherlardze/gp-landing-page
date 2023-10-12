import React from 'react';
import {About, Contact, CTA, Footer, Hero, Navbar, Features, Portfolio, 
       Counts, Services, Client, Team, Testimonial} from '../../component/index';



const Home = () => {

 

  return (
    <div className='flex flex-col 3xl:justify-center 3xl:items-center 3xl:mx-auto'>

      <div className='bg-hero bg-no-repeat bg-center bg-cover bg-fixed text-white h-fit w-full lg:h-[100vh]'>
        <div className='bg-black/60 w-full h-fit lg:h-[100vh] pb-12'>
          <Navbar />
          <Hero />
        </div>
      </div>  

      <About />
     {/*} <Client />*/}
      <Features />
      <Services />

      <div className='bg-calltoaction bg-no-repeat bg-center bg-cover bg-fixed h-fit w-full lg:h-[50vh]'>
        <div className='bg-black/60 w-full h-fit lg:h-[50vh]'>
         <CTA />
        </div>
      </div>
     {/*} <Portfolio />*/}
      <Counts />
      {/*<Testimonial />*/}
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
