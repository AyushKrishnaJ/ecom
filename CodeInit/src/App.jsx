import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import { ProductComponent } from './components/ProductComponent'
function App() {

  return (
    <>
      <Navbar/>
      <ProductComponent/>
    </>
  )
}

export default App
