import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const Handlelogin=(e)=>{
    const fetchlogin= async ()=>{
      
      try{
        const response = await axios.post("http://localhost:5173/api/auth/login",{email,password});
        console.log("Login successful:", response.data);
        alert("Login successful!");
      }
      catch(err){
        console.error("error during login",err)
        setError("Invalid Credentials")
      }finally{
        setLoading(false)
      }

    }
    fetchlogin();
    setLoading(true)
    e.preventDefault();
    setEmail("");
    setPassword("");

  }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)
  return (
    <div className='login'>
      <form onSubmit={(e)=>{Handlelogin(e)}} >
        <h1>Login Page</h1>
        <div className="input">
            <input required onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} placeholder='Email' />
            <input required onChange={(e)=>{setPassword(e.target.value)}} type="password" value={password} placeholder='Password' />
            <button>Login</button>
        </div>
        {loading && <p style={{ color: "green" }}>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}

export default Login