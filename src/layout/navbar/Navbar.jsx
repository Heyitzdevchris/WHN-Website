import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container container">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <Logo className='navbar-icon'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <NavLink to='/' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/fleet' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Fleet
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/reservation' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Reservation
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Contact
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to='/account' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Account
                    </NavLink>
                </li> */}
            </ul>
        </div>
    </nav>
    </>
  );
};