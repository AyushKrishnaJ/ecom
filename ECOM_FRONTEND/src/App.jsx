import React, { useState } from 'react'
import Login from './Pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  const [isauth,setIsauth]=useState(false)
  
  return (
    
    <div>
      
      {isauth && <Navbar/>}
      <Routes>
        <Route path='/' element={isauth ? <Navigate to="/home" />:<Login isauth={setIsauth}/>}/>
        
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App