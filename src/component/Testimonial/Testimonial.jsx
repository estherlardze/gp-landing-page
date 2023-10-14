import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import {clients} from './TestimonialCard'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'


const Testimonial = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(clients.length);

  useEffect(() => {
    const carousel = document.querySelector('.testimonial-slider');
    carousel.addEventListener('transitionend', () => {
      if (currentSlide === totalSlides - 1) {
        setCurrentSlide(0);
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);


  return (
    <div>
    <h1>slider</h1>
     <div className='flex testimonial-slider'>
      
      {clients.map((client, index) => (
        <div key={index} className={`flex flex-col justify-center items-center ${index === currentSlide ? 'active' : ''}`}>         
            <img src={client.image} alt="client" className='w-[110px] h-[110px] rounded-full border-8 border-black/20' />
           <h5 className='font-bold text-xl mt-3'>{client.name}</h5>
           <p className='text-gray-300 font-semibold'>{client.position}</p>
           <div className='flex text-gray-300 mt-6'>
            <ImQuotesLeft size={28}/>
            <p className='text-center  text-lg italic'>{client.text}</p>
            <ImQuotesRight size={28}/>
           </div>

        
        </div>
      ))}
  </div>
</div>
  )
}

export default Testimonial
