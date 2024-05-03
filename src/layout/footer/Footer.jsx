import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left__container">
        <h1 className='footer__heading'>
          The WHN Experience
        </h1>
        <p className='footer__left__text'>
          Excellence By Design
        </p>
      </div>
      <div className="footer__right__container">
        <p className='footer__right__text'>
          &copy; The WHN Experience 2024
        </p>
      </div>
    </footer>
  );
};
