import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import './Navbar.css';

export const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
    <header>
        <Logo />
        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>Fleet</a>
            <a href='/#'>Schedule</a>
            <a href='/#'>About</a>
            <a href='/#'>Profile/Login</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  );
};
