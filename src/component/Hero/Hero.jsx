import React from 'react'
import HeroCard from '../HeroCard';
import {MdOutlineAnalytics} from 'react-icons/md'
import {HiOutlineDatabase} from 'react-icons/hi'

const Hero = () => {
  return (
    <div className='pt-[150px] flex flex-col justify-center items-center'>
      <div className='lg:max-w-[50%] text-center '>
        <h1 className='text-4xl md:text-6xl font-bold leading-14 lg:mb-4'>Powerful Digital Solutions With Gp <span className='text-yellow'>.</span></h1>
        <h3 className='mt-2 text-2xl'>We are team of talented digital marketers</h3>
      </div>
      <div className='mt-14 flex gap-6 flex-wrap mx-4 items-center justify-center'>
        <HeroCard icon={<MdOutlineAnalytics size={40}/>} title="Lorem Ipsum"/>
        <HeroCard icon={<MdOutlineAnalytics size={40}/>} title="Dolor Sitema"/>
        <HeroCard icon={<MdOutlineAnalytics size={40}/>} title="Sedare Perspiciatis"/>
        <HeroCard icon={<MdOutlineAnalytics size={40}/>} title="Magni Dolores"/>
        <HeroCard icon={<HiOutlineDatabase size={40}/>} title="Nemos Enimade"/>

      </div>
    </div>
  )
}

export default Hero
