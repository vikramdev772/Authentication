import React from 'react'
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
   <form className="form-control" action>
  <p className="title">Login</p>
  <div className="input-field">
    <input required className="input" type="text" />
    <label className="label" htmlFor="input">Enter username</label>
  </div>
  <div className="input-field">
    <input required className="input" type="password" />
    <label className="label" htmlFor="input">Enter Password</label>
  </div>
  <a>Forgot your password?</a>
  <button className="submit-btn">Sign In</button>
 
  <div className="flex items-center justify-between mt-4">
    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
    <Link className="text-xs text-gray-500 uppercase dark:text-blue-400 hover:underline" to="/signup">have no account? Sign Up </Link>
    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
 </div>        
</form>
</div>


    </>
  )
}

export default Login