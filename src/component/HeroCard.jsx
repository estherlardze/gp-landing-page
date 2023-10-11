import React from 'react'

const HeroCard = ({icon, title}) => {
  return (
    <div className='border border-gray-400 hover:border-yellow-500 transition-all ease-in-out duration-500 flex flex-col p-6 justify-center items-center w-full sm:w-[170px] h-[100]'>
      <p className='text-yellow-500'>{icon}</p>
      <h5 className='hover:text-yellow-500 transition-all ease-in-out duration-500 font-bold text-2xl cursor-pointer text-center'>{title}</h5>
    </div>
  )
}

export default HeroCard
