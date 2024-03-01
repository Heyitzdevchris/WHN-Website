import { Navbar } from './navbar/Navbar';
import React from 'react'
import './Layout.css';
import RoutesComponent from './Routes';
import Home from '../pages/home/Home';
import { Footer } from '../pages/home/components/Footer';

export default function Layout() {
  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}
