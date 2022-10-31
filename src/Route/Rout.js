import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Policy from '../Screens/Policy'
import LandingPage from '../Screens/landingPage'
import Main from '../Screens/main'
import Privacy from '../Screens/Privacy'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Screens/Login';
import Register from '../Screens/Register'

function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/landing" element={<LandingPage />} />
      
          <Route path="/policy" element={<Policy />} />
         
          <Route path="/privacy" element={<Privacy />} /> 
         
          <Route path="/login" element={<Login />} />    
           
          <Route path='/register' element={<Register />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rout