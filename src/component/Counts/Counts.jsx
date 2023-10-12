import React, {useState} from 'react';
import {counts} from '../../assets/index';
import {HiOutlineEmojiHappy} from 'react-icons/hi';
import {AiOutlineProject} from 'react-icons/ai';
import {FaRegClock} from 'react-icons/fa';
import {BsAward} from 'react-icons/bs';
import  CountUp  from 'react-countup';

const Counts = () => {

  return (

    <section className='flex gap-10 flex-col lg:flex-row mx-4 sm:mx-8 xl:mx-24 mt-16'>
      <div >
        <img src={counts} alt="count image"/>
      </div>

      <div >
        <h1 className='font-bold text-2xl md:text-3xl lg:text-[38px]'>Voluptatem dignissimos provident quasi</h1>
        <p className='text-black/60 my-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

        <div className='flex flex-col sm:flex-row gap-8 justify-center'>
           <div className='flex gap-2'>
              <HiOutlineEmojiHappy size={85} className='text-yellow mr-3 lg:mr-0'/>
              <div>
              <CountUp start={0} end={65} duration={6.5} className='text-4xl font-bold'/>
                 <p><span className='font-semibold'>Happy Clients</span> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
              </div>
           </div>

           <div className='flex gap-2'>
            <AiOutlineProject size={85} className='text-yellow mr-3 lg:mr-0'/>
            <div>
            <CountUp start={0} end={85} duration={6.5} className='text-4xl font-bold'/>
                <p><span className='font-semibold'>Projects</span>  adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
            </div>
           </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center gap-8 mt-6'>
        <div className='flex gap-2'>
          <FaRegClock size={85} className='text-yellow mr-3 lg:mr-0'/>
            <div>
            <CountUp start={0} end={35} duration={6.5} className='text-4xl font-bold'/>
                <p><span className='font-semibold'>Years of experience</span>aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
            </div>
           </div>

           <div className='flex gap-2'>
            <BsAward size={85} className='text-yellow mr-3 lg:mr-0'/>
            <div>
            <CountUp start={0} end={20} duration={6.5} className='text-4xl font-bold'/>
                <p><span className='font-semibold'>Awards</span> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
            </div>
           </div>
        </div>
      </div>

    </section>
  )
}

export default Counts
