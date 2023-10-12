import React from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, 
  BiLogoLinkedin, BiLogoSkype} from 'react-icons/bi'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Footer = () => {
  const iconStyle ="bg-black/80 p-[5px] text-white hover:text-black hover:bg-yellow cursor-pointer transition-all ease-in-out duration-500 rounded-sm shadow-md"
  const sectionStyle = "bg-black/90 text-white px-4 sm:px-8 xl:px-24 pt-8 pb-4 border-b border-gray-800 flex gap-4 flex-wrap"

  return (
    <footer className='mt-12'>
       <section className={sectionStyle}>
          <article className='flex-1 w-full sm:w-5/10 w-3/10'>
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

          <article className='flex-1 w-full sm:w-5/10 lg:w-2/10'>
             <h4>Useful Links</h4>
             <ul>
               <li> <span><MdKeyboardArrowRight/></span>Home</li>
             </ul>
          </article>

          <article className='flex-1 w-full sm:w-5/10 lg:w-2/10'>
            hiiii
          </article>

          <article className='flex-1 w-full sm:w-5/10 lg:w-3/10'>
              large
          </article>
       </section>

       <article className='bg-black/100 text-white'>
           <h1>hey there</h1>
       </article>
    </footer>
  )
}

export default Footer
