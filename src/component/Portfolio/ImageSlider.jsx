import React from "react"


const ImageSlider = ({data ,active}) => {
     return (
    
     <div>
        <div className='flex flex-col items-center justify-center'>
           {images.map((item, index)=> (
             <div className={`w-full md:w-[375px] h-[100vh]`}>
                <img src={item.image} alt={index} className={`${index === active ? 'block': ''}`}/>
                <p className='bg-white text-center'>{data.tagName}</p>
             </div>
           ))}
        </div>
        <div>
        </div>
     </div>
   )
 }
 export default ImageSlider