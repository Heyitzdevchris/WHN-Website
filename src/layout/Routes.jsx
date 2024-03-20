import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Fleet from '../pages/fleet-page/Fleet';
import About from '../pages/about-page/About';
import Contact from '../pages/contact-page/Contact';
import Account from '../pages/account-page/Account';
import Schedule from '../pages/schedule-page/Schedule';

const RoutesComponent = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    </div>
  );
};

export default RoutesComponent;