import React from 'react'
import { client1, client2, client3, client4, client5, client6, client7, client8 } from '../../assets/index'

const Client = () => {
  return (
    <div className='flex gap-28'>
     <div className='w-[300px]'>
       <img src={client1} alt="client 1" />
     </div>
     <div className='w-[200px]'>
       <img src={client2} alt="client 2" />
     </div>
     <div className='w-[200px]'>
       <img src={client3} alt="client 3" />
     </div>
     <div className='w-[200px]'>
       <img src={client4} alt="client 4" />
     </div>
     <div className='w-[200px]'>
       <img src={client5} alt="client 5" />
     </div>
     <div className='w-[200px]'>
       <img src={client6} alt="client 6" />
     </div>
     <div className='w-[200px]'>
       <img src={client7} alt="client 7" />
     </div>
     <div className='w-[200px]'>
       <img src={client8} alt="client 8" />
     </div>
    
    </div>
  )
}

export default Client
