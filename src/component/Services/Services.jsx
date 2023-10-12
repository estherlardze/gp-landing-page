import React from 'react';
import ServiceCard from './ServiceCard';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs'
import {AiOutlineDesktop} from 'react-icons/ai'
import {IoBasketballOutline} from 'react-icons/io5'

const Services = () => {
  return (
    <div className="mx-4 sm:mx-8 xl:mx-24 mb-12">
      <div>
        <div className="flex items-end justify-start gap-3">
          <h3 className="text-black/50 font-semibold">SERVICES</h3>
          <span className="w-[120px] h-[1px] mb-3 bg-yellow"></span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-2 mt-2">CHECK OUR SERVICES</h1>
      </div>

      <div className='flex gap-8 flex-wrap mt-12 justify-center'>
        <ServiceCard icon={<IoBasketballOutline size={30}/>} title="Lorem Ipsum" 
          text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>

        <ServiceCard icon={<BsFillFileEarmarkImageFill size={30}/>} title="Sed ut perspiciatis" 
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>

        <ServiceCard icon={<BsFillFileEarmarkImageFill size={30}/>} title="Magni Dolores" 
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"/>

         <ServiceCard icon={<BsFillFileEarmarkImageFill size={30}/>} title="Nemo Enim" 
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/>

        <ServiceCard icon={<AiOutlineDesktop size={30}/>} title="Dele cardo" 
          text="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"/>

        <ServiceCard icon={<BsFillFileEarmarkImageFill size={30}/>} title="Divera don" 
          text="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"/>
        
      </div>

    </div>
  )
}

export default Services
