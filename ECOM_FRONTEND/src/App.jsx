import React, { useState } from 'react'
import Login from './Pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import ProductComponent from './Pages/ProductListPage'
import Product from './Pages/ProductDetails'

const App = () => {
  const [isauth,setIsauth]=useState(false)
  
  return (
    
    <div>
      
      {isauth }
      <Routes>
        <Route path='/' element={isauth ? <Navigate to="/home" />:<Login setIsauth={setIsauth}/>}/>
          <Route path='/products' element={<ProductComponent/>}/>
          <Route path='/product/:id' element ={<Product/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App