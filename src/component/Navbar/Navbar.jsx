import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Dropdown from './Dropdown';



const listStlye = 'font-semibold hover:text-yellow transition-all ease-in-out duration-500  focus:text-yellow'
const listStlyeSmallScreen = 'font-semibold py-2 pl-6 hover:bg-yellow transition-all ease-in-out duration-500 focus:bg-yellow'

const Navbar = () => {
 const [bgColor, setBgColor] = useState(false);
 const [showMenu, setShowMenu] = useState(false);
 const [navBg, setNavBg] = useState('transparent');

 useEffect(() => {
  const currentPage = window.location.pathname;
  if (currentPage === '/card') {
    setNavBg('black/80');
  } else {
    setNavBg('transparent');
  }
}, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

 const changeColor = () => {
   if(window.scrollY >= 90){
     setBgColor(true);
   }else{
    setBgColor(false);
   }
 };

 window.addEventListener('scroll', changeColor);

  return (
   <nav className={`bg-${navBg} w-full h-[70px] py-4 px-4 md:px-12 lg:px-24 fixed top-0 left-0 z-10 ${bgColor ? 'bg-black/80' : ''}`} id="top">
    <div className='flex justify-between items-center'>
      <div>
         <h1 className='font-bold text-4xl'>GP <span className='text-yellow'>.</span></h1>
      </div>
      <div>
        <div className='gap-8 hidden lg:flex'>
          <a href='#' className={listStlye} onClick={() => scrollToSection('home')}>Home</a>
          <a href='#' className={listStlye} onClick={() => scrollToSection('about')}>About</a>
          <a href='#' className={listStlye} onClick={() => scrollToSection('services')}>Services</a>
          <a href='#' className={listStlye} onClick={() => scrollToSection('portfolio')}>Portfolio</a>
          <a href='#' className={listStlye} onClick={() => scrollToSection('team')}>Team</a>
          <div><Dropdown/></div>
          <a href='#' className={listStlye} onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      </div>
      <div>
        <button className='border-2 border-yellow py-[6px] px-7 rounded-sm hover:bg-yellow hover:text-black transition-all ease-in-out duration-500'>Get Started</button>
      </div>
      <div className='block lg:hidden' onClick={()=> setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28} />}
        </div>
      </div>
     
      {
        showMenu && (
        <div className='mt-4 block lg:hidden bg-white w-[90vw] h-[86vh] z-20'>
        <div className='gap-2 flex flex-col text-black  mt-4'>
          <a href='#' className={`${listStlyeSmallScreen} mt-4`} onClick={() => scrollToSection('home')}>Home</a>
          <a href='#' className={listStlyeSmallScreen} onClick={() => scrollToSection('about')}>About</a>
          <a href='#' className={listStlyeSmallScreen} onClick={() => scrollToSection('services')}>Services</a>
          <a href='#' className={listStlyeSmallScreen} onClick={() => scrollToSection('portfolio')}>Portfolio</a>
          <a href='#' className={listStlyeSmallScreen} onClick={() => scrollToSection('team')}>Team</a>
          <a href='#' className={listStlyeSmallScreen}>Drop Down</a>
          <a href='#' className={listStlyeSmallScreen} onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        </div>
        )
      }
    </nav>
  )
}

export default Navbar
