import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Fleet from '../pages/fleet-page/Fleet';
import About from '../pages/about-page/About';
import Contact from '../pages/contact-page/Contact';
import Account from '../pages/account-page/Account';
import Reservation from '../pages/reservation-page/Reservation';

const RoutesComponent = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/reserve" element={<Reservation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    </div>
  );
};

export default RoutesComponent;