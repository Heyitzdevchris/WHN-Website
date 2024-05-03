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
        <div className="navbar__container container">
            <Link to='/' className='navbar__logo' onClick={closeMobileMenu}>
                <Logo />
            </Link>
            <div className='menu__icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav__menu active" : "nav__menu"}>
                <li className="nav__item">
                    <NavLink to='/' className={({ isActive }) => "nav__links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to='/fleet' className={({ isActive }) => "nav__links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Fleet
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to='/reservation' className={({ isActive }) => "nav__links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Reservation
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to='/about' className={({ isActive }) => "nav__links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        About
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to='/contact' className={({ isActive }) => "nav__links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
};