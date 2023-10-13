import React from 'react'
import {BsPlus} from 'react-icons/bs'
import {BiLink} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const PortfolioCard = ({image, tagName, title}) => {
  return (
    <div className='relative group text-white'>
       <div className='overflow-hidden'>
        <img src={image} alt={title} className='transition-transform duration-300  object-cover group-hover:scale-125'/>
        <div className='absolute opacity-0 group-hover:opacity-100 w-full h-full left-0 top-0 bg-black/40 '>
          <div className='absolute left-[20px] bottom-[20px]'>
            <p className='font-semibold text-2xl'>{title}</p>
            <p className='uppercase text-gray-200'>{tagName}</p>
            <div className='flex gap-3'>
              <BsPlus size={30} className='hover:text-yellow'/>
              <Link to='/card'>
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