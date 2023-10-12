import React from 'react'
import HeroCard from './HeroCard';
import {HiOutlineDatabase} from 'react-icons/hi'
import {RiPaintBrushLine, RiCalendarTodoLine, RiBarChartBoxLine,
       RiStoreLine
  } from 'react-icons/ri'


const Hero = () => {
  return (
    <div className='pt-[150px] flex flex-col justify-center items-center'>
      <div className='lg:max-w-[50%] text-center'>
        <h1 className='text-4xl md:text-6xl font-bold font-sans leading-14 lg:mb-4'>Powerful Digital Solutions With
         <span className='text-yellow'>.</span>
        </h1>
        <h3 className='mt-2 text-2xl'>We are team of talented digital marketers</h3>
      </div>
      <div className='mt-14 flex gap-6 flex-wrap mx-4 items-center justify-center'>
        <HeroCard icon={<RiStoreLine size={40}/>} title="Lorem Ipsum"/>
        <HeroCard icon={<RiBarChartBoxLine size={40}/>} title="Dolor Sitema"/>
        <HeroCard icon={<RiCalendarTodoLine size={40}/>} title="Sedare Perspiciatis"/>
        <HeroCard icon={<RiPaintBrushLine size={40}/>} title="Magni Dolores"/>
        <HeroCard icon={<HiOutlineDatabase size={40}/>} title="Nemos Enimade"/>

      </div>
    </div>
  )
}

export default Hero
