import React from 'react';
import { features } from '../../assets/index';
import {FaRegImages} from 'react-icons/fa';
import {BiCubeAlt} from 'react-icons/bi'

const Features = () => {
  return (
    <div className='mx-4 sm:mx-8 xl:mx-24 my-16 gap-8 flex flex-col lg:flex-row mt-20'>
      <div className='flex-1 '>
        <img src={features} alt="features image" className='lg:h-full'/>
      </div>

      <div className='flex-1 flex flex-col justify-start items-start'>
         <div className='flex gap-4 items-start justify-center mb-3'>
           <FaRegImages size={50} className='text-yellow'/>
           <div className='text-black/60'>
              <h1 className='font-bold text-2xl'>Est labore ad</h1>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
           </div>
         </div>
         <div className='flex gap-4 items-start justify-center my-6'>
           <BiCubeAlt size={55} className='text-yellow'/>
           <div className='text-black/60'>
              <h1 className='font-bold text-2xl'>Harum esse qui</h1>
              <p >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
           </div>
         </div>
         <div className='flex gap-4 items-start justify-center my-6'>
           <FaRegImages size={50} className='text-yellow'/>
           <div className='text-black/60'>
              <h1 className='font-bold text-2xl'>Aut occaecati</h1>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
           </div>
         </div>
         <div className='flex gap-4 items-start justify-center my-6'>
           <FaRegImages size={50} className='text-yellow'/>
           <div className='text-black/60'>
              <h1 className='font-bold text-2xl'>Beatae veritatis</h1>
              <p >Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
           </div>
         </div>

      </div>
    </div>
  )
}

export default Features
