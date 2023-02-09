import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Images/lucent-logo.webp'
import { links} from '../data'
import LoginButton from './Buttons/LoginButton'
import { GoThreeBars } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import Button from './Buttons/Button'
import { useState } from 'react'

const Navbar = () => {
    const [isShowingNavbar, setIsShowingNavbar] = useState(false)

  return (
    <nav>
        <div className="container nav-container">
            <Link to="/" className='logo' onClick={() => (setIsShowingNavbar(false))}>
                <img src={Logo} alt="" />
            </Link>
            <ul className={`nav-links ${isShowingNavbar ? 'show-nav' : 'hide-nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index} onClick={() => (setIsShowingNavbar((prev) => !prev))}>
                                <NavLink 
                                    to={path} className={({isActive}) => isActive ? 'active-nav' : '' }>{name}
                                </NavLink>
                            </li>
                        )
                    })
                }
                    <li onClick={() => (setIsShowingNavbar((prev) => !prev))}><LoginButton/></li>
                    <li onClick={() => (setIsShowingNavbar((prev) => !prev))}><Button to='/createAccount' name='Create Account'/></li>
            </ul>
                
               
            <button className='nav-toggle-btn' 
                onClick={() => (setIsShowingNavbar((prev) => !prev))}>
                {isShowingNavbar ? <MdClose/> : <GoThreeBars/> }
            </button>
        </div>
    </nav>
  )
}

export default Navbar