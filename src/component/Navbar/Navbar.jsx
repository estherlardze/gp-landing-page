import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
 const [bgColor, setBgColor] = useState(false);
 const [showMenu, setShowMenu] = useState(false);

 const changeColor = () => {
   if(window.scrollY >= 90){
     setBgColor(true);
   }else{
    setBgColor(false);
   }
 };

 window.addEventListener('scroll', changeColor);

  return (
   <nav className={`w-full py-4 px-4 md:px-12 lg:px-24 fixed top-0 left-0 z-10 ${bgColor ? 'bg-black/80' : ''}`}>
    <div className='flex justify-between items-center'>
      <div>
         <h1 className='font-bold text-4xl'>GP <span className='text-yellow'>.</span></h1>
      </div>
      <div>
        <ul className='gap-8 hidden lg:flex'>
          <li className='font-semibold cursor-pointer hover:text-yellow transition-all ease-in-out duration-500 focus:text-blue-500'>Home</li>
          <li className='font-semibold cursor-pointer hover:text-yellow transition-all ease-in-out duration-500 focus:text-blue-500'>About</li>
          <li className='font-semibold cursor-pointer hover:text-yellow transition-all ease-in-out duration-500 focus:text-blue-500'>Services</li>
          <li className='font-semibold cursor-pointer hover:text-yellow transition-all ease-in-out duration-500 focus:text-blue-500'>Portfolio</li>
          <li className='font-semibold cursor-pointer hover:text-yellow transition-all ease-in-out duration-500 focus:text-blue-500'>Team</li>
          <li className='font-semibold cursor-pointer hover:text-yellow transition-all ease-in-out duration-500 focus:text-blue-500'>Drop Down</li>
          <li className='font-semibold cursor-pointer hover:text-yellow transition-all ease-in-out duration-500 focus:text-blue-500'>Contact</li>
        </ul>
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
        <ul className='gap-2 flex flex-col text-black  mt-4'>
          <li className='font-semibold cursor-pointer  mt-4 py-2 pl-6 hover:bg-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>Home</li>
          <li className='font-semibold cursor-pointer py-2 pl-6 hover:bg-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>About</li>
          <li className='font-semibold cursor-pointer py-2 pl-6 hover:bg-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>Services</li>
          <li className='font-semibold cursor-pointer py-2 pl-6 hover:bg-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>Portfolio</li>
          <li className='font-semibold cursor-pointer py-2 pl-6 hover:bg-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>Team</li>
          <li className='font-semibold cursor-pointer py-2 pl-6 hover:bg-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>Drop Down</li>
          <li className='font-semibold cursor-pointer py-2 pl-6 hover:bg-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>Contact</li>
        </ul>
        </div>
        )
      }
    </nav>
  )
}

export default Navbar
