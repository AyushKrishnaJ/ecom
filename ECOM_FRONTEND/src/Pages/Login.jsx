import React, { useState } from 'react'
import axios from "axios";
import './Login.css'
const Login = () => {
  const Handlelogin= async (e)=>{
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    
      
      try{
        const response = await axios.post("http://localhost:5173/api/auth/login",{email,password});
        console.log("Login successful:", response.data);
        alert("Login successful!");
        setEmail("");
        setPassword("");
    
    
      }
      catch(err){
        console.error("error during login",err)
        setTimeout(() => {
          setError("Invalid Credentials");
        }, 1000);
        
      }finally{
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        
      }

    
    

  };
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)
  return (
    <div className='login'>
      <form onSubmit={(e)=>{Handlelogin(e)}} >
        <h1>login</h1>
        <div className="input">
            <input required onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} placeholder='Email' />
            <input required onChange={(e)=>{setPassword(e.target.value)}} type="password" value={password} placeholder='Password' />
            <button>Sign In</button>
        </div>
        {loading && <p style={{ color: "green" }}>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}

export default Login