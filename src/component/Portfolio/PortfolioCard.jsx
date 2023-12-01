import React, {useState} from 'react'
import {BsPlus} from 'react-icons/bs'
import {BiLink} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const PortfolioCard = ({item, setSelectedImageData, setShowImage}) => {

  const handleActiveClick = (item) => {
    setShowImage(true);
    setSelectedImageData(item);
  }


  return (
    <div className='relative group text-white' data-aos="fade-up" data-aos-duration="2000">
       <div className='overflow-hidden'>
        <img src={item.image} alt={item.title} className='transition-transform duration-300  object-cover group-hover:scale-125'/>
        <div className='absolute opacity-0 group-hover:opacity-100 w-full h-full left-0 top-0 bg-black/40 '>
          <div className='absolute left-[20px] bottom-[20px]'>
            <p className='font-semibold text-2xl'>{item.title}</p>
            <p className='uppercase text-gray-200'>{item.tagName}</p>
            <div className='flex gap-3'>
              <div onClick={()=> handleActiveClick(item)}>
              <BsPlus size={30} className='hover:text-yellow cursor-pointer'/>
              </div>
              <Link to="/card">
                <BiLink size={28} className='hover:text-yellow'/>
              </Link>
              
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default PortfolioCard