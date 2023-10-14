import React from 'react'
import {TbChecks} from 'react-icons/tb'
import { about } from '../../assets/index'

const About = () => {
  return (
    <div className='mx-4 sm:mx-8 xl:mx-24 my-16 flex flex-col-reverse lg:flex-row gap-4 text-black/70 2xl:w-[70%] 2xl:mx-[15%]' id='about'>
      <div className='flex-1' data-aos="fade-right">
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-[34px]'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
        <p className='my-4'><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.</em></p>
        <div>
          <div className='flex gap-2'>
            <TbChecks className='text-yellow' size={20}/> 
            <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>

          <div className='flex gap-2 my-2'>
            <TbChecks className='text-yellow' size={20}/>           
            <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
           </div>

          <div className='flex gap-2'>
            <TbChecks className='text-yellow' size={45}/>
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
           </span>   
          </div>

        </div>
        <p className='mt-6'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptat velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident</p>
      </div>

      <div className='flex-1 lg:w-[70%] xl:w-full' data-aos="fade-left">
        <img src={about} alt="about" />
      </div>
    </div>
  )
}

export default About
