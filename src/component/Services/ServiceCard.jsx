import React from 'react'

const ServiceCard = ({icon, title, text}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" 
      className='w-full sm:w-[350px] h-[320px] p-4 shadow-md hover:shadow-2xl flex flex-col items-center justify-center transition-all ease-in-out duration-500'>
      <p className='bg-yellow p-5 rounded-md'>{icon}</p>
      <h3 className='font-semibold text-3xl my-3 hover:text-yellow cursor-pointer transition-all ease-in-out duration-500'>{title}</h3>
      <p className='text-black/50 text-center'>{text}</p>
    </div>
  )
}

export default ServiceCard
