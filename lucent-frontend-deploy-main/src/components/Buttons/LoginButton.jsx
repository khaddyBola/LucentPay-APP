import React from 'react'
import './loginButton.css'
import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <div className='login-button'>
        <Link to='/login' className='login-btn-link'>
            <button className="loginBtn">Login</button>
        </Link>
    </div>
  )
}

export default LoginButton