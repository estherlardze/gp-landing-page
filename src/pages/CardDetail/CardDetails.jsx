import React from 'react'
import { Navbar, Footer } from '../../component/index'
import PortfolioDetail from './PortfolioDetail'

const CardDetails = () => {
  return (
    <div className='text-white'>
      <Navbar/>
      <PortfolioDetail/> 
      <Footer/>
    </div>
  )
}

export default CardDetails
