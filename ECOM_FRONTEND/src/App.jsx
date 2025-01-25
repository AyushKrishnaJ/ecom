import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import ProductComponent from './Pages/ProductListPage'
import CartComponent from './Pages/CartComponent';
import Product from './Pages/ProductDetails';
const App = () => {
  return (
    
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<ProductComponent/>}/>
      <Route path="product/:id" element={<Product />} />
      <Route path='/cart' element={<CartComponent/>}/>
      </Routes>
    
  )
}

export default App