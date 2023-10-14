import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

 
  return (
    <form className='w-full ' data-aos="fade-left">
     <div className='grid grid-cols-10 gap-6 w-full'>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name'
        className='border border-black/30 outline-none p-2 focus:border-yellow rounded-sm col-span-10 sm:col-span-5'/>
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email'
         className='border border-black/30 outline-none p-2 focus:border-yellow rounded-sm col-span-10 sm:col-span-5'/>
     </div>
     <div>
       <input type="email" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject'
         className='border border-black/30 outline-none p-2 focus:border-yellow rounded-sm my-6 w-full'/>
    </div>
    <div>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Message"
        rows={4} cols={50} className='w-full border border-black/30 outline-none p-2 focus:border-yellow rounded-sm'
      />
    </div>

    <div className='flex flex-col items-center justify-center mt-4'>
      <button type="submit" className='bg-yellow py-2 px-4 hover:bg-yellow/80 transition-all ease-in-out duration-300'>
        Send Message
      </button>
    </div>
      </form>
  );
};

export default Form;