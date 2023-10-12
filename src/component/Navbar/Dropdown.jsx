import React from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Deepdrop from './Deepdrop'

const listStyle = 'py-2 cursor-pointer hover:bg-yellow transition-all ease-in-out duration-500 pl-3'
const listContainer = 'w-[170px] absolute bg-white rounded-md text-black  py-2 mt-4 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 z-10'


const Dropdown = () => {
                        
                    

  return (
    <article className='group relative'>
      <div className='flex gap-1 items-start hover:text-yellow'>
        <p className='transition-all ease-in-out duration-500 font-semibold cursor-pointer'>
          Drop Down
        </p>
        <RiArrowDownSLine size={20} className='mt-1'/>
      </div>
      <ul className={listContainer}>
        <li className={listStyle}>Drop Down 1</li>
        <li className={`${listStyle} relative group`}>
            <span className='flex items-center justify-between gap-4'>
              Deep drop down
              <MdOutlineKeyboardArrowRight size={20}/>
            </span>
         <Deepdrop />  
        </li>
        <li className={listStyle}>Drop Down 2</li>
        <li className={listStyle}>Drop Down 3</li>
        <li className={listStyle}>Drop Down 4</li>
      </ul>
    </article>
  )
}

export default Dropdown
