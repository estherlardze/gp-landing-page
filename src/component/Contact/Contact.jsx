import React from 'react'
import { Map } from '@googlemaps/react-wrapper';
import {CiLocationOn} from 'react-icons/ci';
import {TfiEmail} from 'react-icons/tfi'
import {BsPhone} from 'react-icons/bs'
import Form from './Form';


const address = [
  {
    icon:  <CiLocationOn size={25}/>,
    title: 'Location:',
    location: 'A108 Adam Street, New York, NY 535022',
  },
  {
    icon:  <TfiEmail size={25}/>,
    title: 'Email:',
    location: 'info@example.com',
  },
  {
    icon:  <BsPhone size={25}/>,
    title: 'Call:',
    location: '+1 5589 55488 55s',
  }
]

const Contact = () => {

  return (
    <div className='mx-4 sm:mx-8 xl:mx-24 mt-12'>
      <div className="flex items-end justify-start gap-3 mb-2">
        <h3 className="text-black/50 font-semibold">CONTACT</h3>
        <span className="w-[120px] h-[1px] mb-3 bg-yellow"></span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-2 mt-2">CONTACT US</h1>

      {/*<div>
          <Map 
           apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
           zoom={14}
           center={{lat: 40.7128, lng: -74.0059}}
          />
  </div>*/}

  <div className='grid grid-cols-12 gap-6 mt-8'>
     <div className='col-span-12 lg:col-span-4'>
       {address.map((add, index) => (
         <article key={index} className='flex gap-4 mb-2 '>
           <p className='bg-yellow p-2 my-2 rounded-sm text-center'>{add.icon}</p>
           <div>
              <h3 className="text-black/90 font-semibold text-[1.6rem]">{add.title}</h3>
              <p>{add.location}</p>
           </div>
         </article>
       ))}
     </div>

   <div className='col-span-12 lg:col-span-8'>
    <Form />
   </div>
  
 </div>
 </div>
  )
}

export default Contact
