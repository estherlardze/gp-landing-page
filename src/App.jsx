import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CardDetails from './pages/CardDetail/CardDetails'
import Home from './pages/Home/Home'

function App() {

  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardDetails />} />
      </Routes>
   </Router>
  )
}

export default App
