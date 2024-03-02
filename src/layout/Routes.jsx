import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Fleet from '../pages/fleet-page/Fleet';

const RoutesComponent = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/fleet' element={<Fleet />} />
        </Routes>
    </div>
  );
};

export default RoutesComponent;