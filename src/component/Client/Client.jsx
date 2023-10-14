import React from 'react'
import { client1, client2, client3, client4, client5, client6, client7, client8 } from '../../assets/index'
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const images = [
    client1, client2, client3, client4, client5, client6, client7, client8
]

const Client = () => {
  return (
    <section className=' w-[95%] mx-auto overflow-hidden 2xl:w-[70%] my-[30px] 2xl:mx-[20%]' data-aos="zoom-in"
    data-aos-duration="3000">
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      loop
      autoplay = {{ 
        delay: 4000,
        disableOnInteraction: false
      }}
      pagination={{ 
        clickable: true,
        type: "bullets"
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className='flex justify-center'>
         {images.map((item, index) => (
          <SwiperSlide key={index}>
             <img src={item} alt={index}  
             className='mb-12 grayscale hover:grayscale-0 w-[90px]'/>
          </SwiperSlide>
         ))}
      </div>
    </Swiper>
    </section>
  );
};

export default Client
