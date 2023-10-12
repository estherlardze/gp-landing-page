import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'


const TeamCard = ({image, name, position}) => {
  return (
   <div className="flex flex-col bg-white shadow-sm rounded-xl w-full sm:w-[265px] dark:shadow-slate-300 relative group ">
     <div>
       <img className="w-full sm:w-[280px] h-auto rounded-t-xl" src={image} alt="Team mate"/>
       <div className='flex gap-2 absolute bottom-[140px] left-[20%] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 transform translate-y-0 group-hover:translate-y-1/2'>
         <AiOutlineTwitter size={35} className='bg-white p-[5px] text-black/60 hover:text-black hover:bg-yellow cursor-pointer transition-all ease-in-out duration-500 rounded-sm'/>
         <BiLogoFacebookCircle size={35} className='bg-white p-[5px] text-black/60 hover:text-black hover:bg-yellow cursor-pointer transition-all ease-in-out duration-500 rounded-sm'/>
         <BsInstagram size={35} className='bg-white p-[5px] text-black/60 hover:text-black hover:bg-yellow cursor-pointer transition-all ease-in-out duration-500 rounded-sm'/>
         <BsLinkedin size={35} className='bg-white p-[5px] text-black/60 hover:text-black hover:bg-yellow cursor-pointer transition-all ease-in-out duration-500 rounded-sm'/>
       </div>
     </div>

    <div className="p-4 md:p-5">
      <h3 className="text-lg font-bold text-black"> {name}</h3>
      <p className="mt-1 text-gray-800 dark:text-gray-400">{position}</p>
    </div>
</div>
  )    
}

export default TeamCard
