import React, { useState } from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, 
  BiLogoLinkedin, BiLogoSkype} from 'react-icons/bi'
import { links, services } from './List'


const Footer = () => {
  const [email, setEmail] =  useState('')

  const iconStyle ="bg-black/80 p-[5px] text-white hover:text-black hover:bg-yellow cursor-pointer transition-all ease-in-out duration-500 rounded-sm shadow-md"
  const sectionStyle = "bg-black/90 text-white px-4 sm:px-8 xl:px-24 pt-8 pb-4 border-b border-gray-800 flex gap-8 grid grid-cols-9 2xl:px-[15%]"
  const listStyle = "hover:text-yellow cursor-pointer transition-all ease-in-out duration-500 mb-3"
 
  return (
    <footer className='mt-12 '>
       <section className={sectionStyle}>

          <article className='col-span-9 sm:col-span-5 lg:col-span-2' data-aos="fade-right">
              <h1 className='text-3xl font-sans font-bold'>GP
              <span className='text-yellow'>.</span>
              </h1>
              <p className='my-4'>A108 Adam Street <br />NY 535022, USA</p>
              <p><span className='font-semibold'>Phone:</span> +1 5589 55488 55</p>
              <p><span className='font-semibold'>Email:</span> info@example.com</p>
              <div className='flex gap-2 mt-4'>
                <BiLogoTwitter size={35} className={iconStyle}/>
                <BiLogoFacebook size={35} className={iconStyle}/>
                <BiLogoInstagram size={35} className={iconStyle}/>
                <BiLogoSkype size={35} className={iconStyle}/>
                <BiLogoLinkedin size={35} className={iconStyle}/>
              </div>
           </article>

          <article className='col-span-9 sm:col-span-4 lg:col-span-2' data-aos="fade-left">
             <h4 className='text-lg font-semibold mb-3'>Useful Links</h4>
             <ul>
              {links.map((link, index) => (
                 <li className='flex items-center' key={index}>
                   <span className='text-yellow mb-2'>{link.icon}</span>
                   <span className={listStyle}>{link.text}</span>
                 </li>
              ))}
              </ul>
          </article>

          <article className='col-span-9 sm:col-span-4 lg:col-span-2' data-aos="fade-right">
             <h4 className='text-lg font-semibold mb-3'>Our Services</h4>
             <ul>
                {services.map((service, i) => (
                   <li className='flex items-center' key={i}>
                    <span className='text-yellow mb-2'>{service.icon}</span>
                    <span className={listStyle}>{service.text}</span>
                   </li>
                ))}                   
              </ul>
           </article>

          <article className='col-span-9 sm:col-span-4 lg:col-span-3' data-aos="fade-left">
              <h3 className='text-lg font-semibold mb-3'>Our Newsletter</h3>
              <p className='mb-6'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form className='text-black flex'>
                <input 
                   type="email" 
                   placeholder='Your Email' 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   className='outline-none border px-2 py-1 rounded-sm w-[50%] sm:w-auto'/>
      
                <button type="submit" className='bg-yellow p-2 hover:bg-yellow/80 transition-all ease-in-out duration-300'>
                  Subscribe
                </button>
              </form>
          </article>
       </section>

       <article className='bg-black text-white py-8 text-center' data-aos="fade-up">
           <p className='mb-2'>© Copyright <span className='font-semibold'>Gp</span>. All Rights Reserved</p>
           <p className='text-sm'>Designed by <span className='text-yellow'>BootstrapMade</span> </p>
       </article>
    </footer>
  )
}

export default Footer
