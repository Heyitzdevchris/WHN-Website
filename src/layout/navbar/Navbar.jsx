import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

export const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
    <header>
        <Link to="/">
            <Logo />
        </Link>
        <nav ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="/fleet">Fleet</Link>
            <Link to="/about">About</Link>
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
