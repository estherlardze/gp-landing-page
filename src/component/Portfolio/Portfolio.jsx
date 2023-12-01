import React, {useState, useEffect} from 'react'
import PortfolioCard from './PortfolioCard'
import {images} from './data'
import Modal from './Modal'
import ImageSlider from './ImageSlider'

const cardStyle = 'text-black/60 hover:bg-yellow focus:bg-yellow py-1 px-3 rounded-sm transition-all ease-in-out duration-300 font-semibold uppercase'

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [active, setActive] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);


  useEffect(() => {
    setData(images)
    setCollection([... new Set(images.map((item) => item.tagName))])
  }, [])

  const galleryFilter = (itemData)=> {
    const filteredData = images.filter((item) => item.tagName === itemData)
    setData(filteredData)
  }


 //console.log(data)
  return (
    <section id='portfolio' className='mx-4 sm:mx-8 xl:mx-24 my-16  2xl:w-[70%] 2xl:mx-[15%]'>
     <div data-aos="fade-up" data-aos-duration="1500">
        <div className="flex items-end justify-start gap-3">
          <h3 className="text-black/50 font-semibold">PORTFOLIO</h3>
          <span className="w-[120px] h-[1px] mb-3 bg-yellow"></span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-2 mt-2">CHECK OUR PORTFOLIO</h1>
      </div>

      <div className='flex justify-center items-center gap-6 mt-8' 
        data-aos="fade-up"
        data-aos-duration="1500">
        <button className={cardStyle} onClick={()=> setData(images)} autoFocus>ALL</button>
        {
          collection.map((item) => (
            <button className={cardStyle} onClick={()=> galleryFilter(item)} key={item}>
              {item}
            </button>
          ))
        }
      </div>

      <div className='grid grid-cols-6 gap-8 mt-12'>
         {
          data.map((item, index) =>(
            <div key={index} 
              className='col-span-6 md:w-[375px] md:col-span-3 lg:col-span-2'>
               <PortfolioCard 
                 item={item} 
                 index={index} 
                 active={active} 
                 setActive={setActive} 
                 setShowImage={setShowImage}
                 setSelectedImageData = {setSelectedImageData}
                 />
            </div>
          ))
         }
     </div>
     <Modal showImage={showImage} setShowImage={setShowImage} selectedImageData={selectedImageData} data={images}/>
       
    </section>
  )
}


