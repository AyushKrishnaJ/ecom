import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const Handlelogin=(e)=>{
    e.preventDefault()

  }
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
  return (
    <div className='login'>
      <form onSubmit={(e)=>{Handlelogin(e)}} >
        <h1>Login Page</h1>
        <div className="input">
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} placeholder='Enter your email' />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" value={password} placeholder='Password' />
            <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login