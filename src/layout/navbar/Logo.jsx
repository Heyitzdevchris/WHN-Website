import React from 'react';
import logoImg from '../../images/whn-logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div>
            <img src={logoImg} alt='WHN logo' className="whn__logo" />
        </div>
    )
}

export default Logo;

