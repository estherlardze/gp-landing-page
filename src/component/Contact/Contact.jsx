import React from 'react'
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
    <div className='mx-4 sm:mx-8 xl:mx-24 mt-12 2xl:w-[70%] 2xl:mx-[15%]' id="contact">
      <div className="flex items-end justify-start gap-3 mb-2" data-aos="fade-up">
        <h3 className="text-black/50 font-semibold">CONTACT</h3>
        <span className="w-[120px] h-[1px] mb-3 bg-yellow"></span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-2 mt-2"  data-aos="fade-up">CONTACT US</h1>

    <div className='my-12'  data-aos="fade-up">
     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118046!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1697155060096!5m2!1sen!2sus" 
       height="300"
       allowFullScreen="" 
       className='w-[100%] overflow-hidden'
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"
       title="google map"
       ></iframe>

    </div>
  <div className='grid grid-cols-12 gap-6 mt-8' data-aos="fade-right">
     <div className='col-span-12 lg:col-span-4'>
       {address.map((add, index) => (
         <article key={index} className='flex gap-4 mb-4'>
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
