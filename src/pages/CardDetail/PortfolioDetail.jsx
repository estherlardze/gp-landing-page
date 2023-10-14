import React from 'react'
import { Link } from 'react-router-dom'
import { p1 } from '../../assets/index'

const Cards = [
      {
        title: "Category:",
        service: "Web design"
      },
      {
        title: "Client:",
        service: "ASU Company"
      },
      {
        title: "Project date:",
        service: "01 March, 2020"
      },
      {
        title: "Project URL:",
        service: "www.example.com"
      },
]

const PortfolioDetail = () => {
  return (
    <section>
      <div className='bg-gray-100 flex justify-between flex-col md:flex-row px-4 sm:px-8 xl:px-24 mt-[70px] py-4 text-black'>
        <h1 className='text-3xl text-gray-600'>Portfolio Details</h1>
        <div className='flex text-lg gap-2'>
          <Link to='/' className='text-yellow hover:text-yellow/80'>Home</Link>
          <span>/</span>
          <p>Portfolio Details</p>
        </div>
      </div>

      <div className='grid grid-cols-10 gap-8 text-black mt-12 mx-4 sm:mx-8 xl:mx-24 justify-center lg:justify-start'>
        <div className='col-span-10 lg:col-span-7'>
          <img src={p1} alt="card detail" />
        </div>

        <div className='col-span-10 lg:col-span-3'>
          <article className='border p-6 shadow-lg'>
             <h1 className='font-bold text-black/70 text-2xl'>Project information</h1>
             <hr className='my-6'/>
             {
                Cards.map((card, index) => (
                    <div className={`flex gap-2 mb-3 ${index === Cards.length - 1 ? 'text-yellow' : ''}`} key={index}>
                    <span className='font-bold text-black/70'>{card.title}</span>
                    <span>{card.service}</span>
                 </div>
                ) )
             }
         </article>

         <article>
            <h1 className='font-bold text-black/70 text-3xl my-4'>This is an example of portfolio detail</h1>
            <p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore 
               quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque 
               enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos.
                Sequi nulla at esse enim cum deserunt eius.</p>
         </article>
        </div>
      </div>
    </section>
  )
}

export default PortfolioDetail
