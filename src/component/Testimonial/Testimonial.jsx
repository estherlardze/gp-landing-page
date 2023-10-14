import React from 'react'
import {clients} from './TestimonialCard'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonial = () => {
  
  return (
    <section className='w-[94%] mx-[2%] md:w-[60%] md:mx-auto my-auto overflow-hidden pt-[7%]'>
    
       <Swiper 
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          type: "bullets"
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      
      >
       <div className='flex justify-center items-center'>
        {clients.map((client, index) => (
           <SwiperSlide key={index}>
             <div key={index} className="flex flex-col justify-center items-center 2xl:w-[70%] 2xl:mx-[15%]" data-aos="zoom-in">         
                <img src={client.image} alt="client" className='w-[110px] h-[110px] rounded-full border-8 border-black/20' />
                <h5 className='font-bold text-xl mt-3'>{client.name}</h5>
                <p className='text-gray-300 font-semibold'>{client.position}</p>
                <div className='flex text-gray-300 mt-4 mb-12'>
                  <ImQuotesLeft size={28}/>
                  <p className='text-center  text-lg italic'>{client.text}</p>
                  <ImQuotesRight size={28}/>
                </div>
              </div>
            </SwiperSlide>
      ))}
    </div>
  </Swiper>
</section>
  )
}

export default Testimonial
