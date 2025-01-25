import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Auth = ({ setIsauth }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state for Login/Register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [animationClass, setAnimationClass] = useState("visible"); // State for animation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        // Login API
        const response = await axios.post("http://localhost:8080/api/auth/login", {
          email,
          password,
        });
        console.log("Login successful:", response.data);
        setIsauth(true);
        setEmail("");
        setPassword("");
      } else {
        // Register API
        const response = await axios.post("http://localhost:8080/api/auth/register", {
          email,
          password,
        });
        console.log("Registration successful:", response.data);
        alert("Registration successful! Please login.");
        setIsLogin(true); // Switch to login mode
      }
    } catch (err) {
      console.error("Error:", err);
      setError(
        isLogin
          ? "Invalid login credentials. Please try again."
          : "Error during registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    // Trigger animation before switching state
    setAnimationClass("exiting");
    setTimeout(() => {
      setIsLogin(!isLogin);
      setAnimationClass("entering");
      setTimeout(() => setAnimationClass("visible"), 400); // Reset animation class
    }, 400);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className={animationClass}>
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <div className="input">
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>{isLogin ? "Sign In" : "Register"}</button>
        </div>
        {loading && <p style={{ color: "green" }}>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p
          style={{ cursor: "pointer", color: "#ffffff", marginTop: "20px" }}
          onClick={handleToggle}
        >
          {isLogin
            ? <p>Don't have an account? <span style={{color: "#08EE97"}}>Register here!</span></p>
            : <p>Already have an account? <span style={{color: "#08EE97"}}>Login here!</span></p>}
        </p>
      </form>
    </div>
  );
};

export default Auth;
