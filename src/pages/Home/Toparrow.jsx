import React, {useState, useEffect} from 'react';
import {LuArrowUp} from 'react-icons/lu'

const Toparrow = () => {
const [showArrow, setShowArrow] = useState(false)

useEffect(() => {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
      setShowArrow(true)
    }else{
      setShowArrow(false)
    }
  })
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })
};

return(
       <div>
         {showArrow &&  (
             <div className='fixed bottom-4 right-4' onClick={() => scrollToTop()}>
              <LuArrowUp size={38} className='text-black p-2 rounded-sm hover:text-yellow bg-yellow hover:bg-black 
              transition-all ease-in-out duration-300 cursor-pointer z-10 hidden sm:block'/>
           </div>
         )
         
         }
       </div>

    )
}

export default Toparrow