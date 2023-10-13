import React, {useState} from 'react'
import {p1, p2, p3, p4, p5, p6, p7, p8, p9} from '../../assets/index'
import PortfolioCard from './PortfolioCard'

const cardStyle = 'text-black/60 hover:bg-yellow focus:bg-yellow py-1 px-3 rounded-sm transition-all ease-in-out duration-300 font-semibold'

const Portfolio = () => {

  return (
    <section id='portfolio' className='mx-4 sm:mx-8 xl:mx-24 mb-20 mt-12'>
     <div>
        <div className="flex items-end justify-start gap-3">
          <h3 className="text-black/50 font-semibold">PORTFOLIO</h3>
          <span className="w-[120px] h-[1px] mb-3 bg-yellow"></span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-2 mt-2">CHECK OUR PORTFOLIO</h1>
      </div>

      <div className='flex justify-center items-center gap-6 mt-8'>
        <button className={cardStyle}>ALL</button>
        <button className={cardStyle}>APP</button>
        <button className={cardStyle} >WEB</button>
        <button className={cardStyle}>CARD</button>
      </div>

      <div className='grid grid-cols-6 gap-8 mt-12'>
         <div className='flex flex-col gap-8 col-span-6 md:col-span-3 lg:col-span-2'>
            <article className='w-full lg:w-[375px'>
              <PortfolioCard image={p1} title="App 1" tagName="App"/>
            </article>
            <article className='w-full lg:w-[375px]'>
              <PortfolioCard image={p6} title="App 3" tagName="App"/>
            </article>
         </div>

         <div className='flex flex-col gap-8 col-span-6 md:col-span-3 lg:col-span-2'>
            <article className='w-full lg:w-[375px'>
              <PortfolioCard image={p2} title="Web 1" tagName="Web"/>
            </article>
            <article className='w-full lg:w-[375px'>
              <PortfolioCard image={p5} title="Web 2" tagName="Web"/>
            </article>
            <article className='w-full lg:w-[375px'>
              <PortfolioCard image={p9} title="Web 3" tagName="Web"/>
            </article>
         </div>
        
         <div className='flex flex-col gap-8 col-span-6 md:col-span-6 lg:col-span-2'>
            <div className='flex flex-col gap-8 md:flex-row lg:flex-col'>
              <article className='w-full lg:w-[375px]'>
                <PortfolioCard image={p3} title="App 2" tagName="App"/>
               </article>
              <article className='w-full lg:w-[375px]'>
                <PortfolioCard image={p4} title="Card 2" tagName="Card"/>
              </article>
            </div>

            <div className='flex flex-col gap-8 md:flex-row lg:flex-col'>
              <article className='w-full lg:w-[375px]'>
               <PortfolioCard image={p7} title="Card 1" tagName="Card"/>
              </article>
              <article className='w-full lg:w-[375px'>
                <PortfolioCard image={p8} title="Card 3" tagName="Card"/>
              </article>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Portfolio
