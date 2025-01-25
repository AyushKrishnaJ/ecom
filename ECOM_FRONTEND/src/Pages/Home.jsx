import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigator = useNavigate();
  const productPage = ()=>{
    navigator("/products");
  }
  return (
    <div>
      <Navbar/>
      <div className="hero">
        <div className="left">
          <h1>Welcome to <br /> <span>TAAS</span> Store</h1>
          <p>"Quality Products, Exceptional Prices – Right Here, Right Now."</p>
          <button onClick={productPage}>Shop Now</button>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}

export default Home