import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="jane@gmail.com" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState=="Login"?
        <p>Create a new account?<span onClick={()=>setCurrentState('Sign Up')}>Click Here</span></p>:
        <p>Already have a account?<span onClick={()=>setCurrentState('Login')}>Login Here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;
