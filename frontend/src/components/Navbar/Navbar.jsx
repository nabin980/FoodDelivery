import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-app</li>
            <li>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon"></div>
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sigh in</button>
    </div>
  )
}

export default Navbar