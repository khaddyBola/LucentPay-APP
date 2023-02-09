import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Button = ({name, className, to, icon}) => {
  return (
    <div className='btn-container'>
        <Link to={to} className='btn-link'>
            <button className={`btn ${className}`}>{name}{icon}</button>
        </Link>
    </div>
  )
}

export default Button