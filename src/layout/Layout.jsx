import { Navbar } from './navbar/Navbar';
import React from 'react'
import './Layout.css';
import RoutesComponent from '../layout/Routes';
import { Footer } from './footer/Footer';

export default function Layout() {
  return (
    <div className='layout-container'>
      <Navbar />
      <RoutesComponent />
      <Footer />
    </div>
  )
}
