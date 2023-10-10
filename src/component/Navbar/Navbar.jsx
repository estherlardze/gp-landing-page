import React, {useState} from 'react'

const Navbar = () => {
 const [bgColor, setBgColor] = useState(false);

 const changeColor = () => {
  console.log(window.scrollY)
   if(window.scrollY >= 90){
     setBgColor(true);
   }else{
    setBgColor(false);
   }
 };

 window.addEventListener('scroll', changeColor);

  return (
  
   <nav className={`w-full py-4 px-24 fixed top-0 left-0 z-10 ${bgColor ? 'bg-black/80' : ''}`}>
    <div className='flex justify-between items-center'>
      <div>
         <h1 className='font-bold text-4xl'>GP <span className='text-yellow-500'>.</span></h1>
      </div>

      <div>
        <ul className='flex gap-8'>
          <li className='font-semibold cursor-pointer hover:text-yellow-500 transition-all ease-in-out duration-500 focus:text-blue-500'>Home</li>
          <li className='font-semibold hover:text-yellow-500 transition-all ease-in-out duration-500'>About</li>
          <li className='font-semibold hover:text-yellow-500 transition-all ease-in-out duration-500'>Services</li>
          <li className='font-semibold hover:text-yellow-500 transition-all ease-in-out duration-500'>Portfolio</li>
          <li className='font-semibold hover:text-yellow-500 transition-all ease-in-out duration-500'>Team</li>
          <li className='font-semibold hover:text-yellow-500 transition-all ease-in-out duration-500'>Drop Down</li>
          <li className='font-semibold hover:text-yellow-500 transition-all ease-in-out duration-500'>Contact</li>
        </ul>
      </div>
 
  <div class="relative group">
    <button class="flex items-center justify-center px-4 py-2 text-white focus:outline-none focus:bg-blue-600">
      Dropdown
    </button>
   <div class="absolute hidden w-40 py-2 mt-2 bg-white shadow-lg group-hover:block">
    <a class="block px-4 py-2 text-gray-800  hover:bg-yellow-500 cursor-pointer">Option 1</a>
    <div  class="block px-4 py-2 text-gray-800 hover:bg-yellow-500 cursor-pointer">
      <a> Option 2</a>
      <div class="absolute hidden w-40 py-2 mt-2 bg-white shadow-lg group-hover:block">
        <a class="block px-4 py-2 text-gray-800  hover:bg-yellow-500 cursor-pointer">Option 1</a>
        <a class="block px-4 py-2 text-gray-800  hover:bg-yellow-500 cursor-pointer">Option 1</a>
        <a class="block px-4 py-2 text-gray-800  hover:bg-yellow-500 cursor-pointer">Option 1</a>

       <div  class="block px-4 py-2 text-gray-800 hover:bg-yellow-500 cursor-pointer">
      <a> Option 2</a>
      
    </div>
    </div>
        
    
    <a  class="block px-4 py-2 text-gray-800 hover:bg-yellow-500 cursor-pointer">Option 3</a>
    <a  class="block px-4 py-2 text-gray-800 hover:bg-yellow-500 cursor-pointer">Option 4</a>
    <a  class="block px-4 py-2 text-gray-800 hover:bg-yellow-500 cursor-pointer">Option 5</a>
  </div>
</div>

      <div>
        <button className='border-2 border-yellow-500 py-[6px] px-7 rounded-sm hover:bg-yellow-500 hover:text-black transition-all ease-in-out duration-500'>Get Started</button>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
