import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CardDetails from './pages/CardDetail/CardDetails'
import Home from './pages/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init({duration: 1500 });
  }, []);

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
