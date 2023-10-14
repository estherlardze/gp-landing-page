import React from 'react'

const CTA = () => {
  return (
    <div data-aos="zoom-in"
       data-aos-duration="2000"
       className='mx-4 sm:mx-8 xl:mx-24 flex flex-col justify-center items-center text-white py-8 2xl:w-[70%] 2xl:mx-[15%]'>
      <h3 className='font-bold text-3xl text-center'>Call To Action</h3>
      <p className='text-white text-center text-lg my-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button className='border-2 w-fit border-white hover:border-yellow py-[6px] px-7 rounded-sm hover:bg-yellow hover:text-black transition-all ease-in-out duration-500 font-semibold'>Call To Action</button>
    </div>
  )
}

export default CTA
