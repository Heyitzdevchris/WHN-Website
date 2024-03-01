import { Navbar } from './navbar/Navbar';
import React from 'react'
import './Layout.css';
import Home from '../pages/home/Home';

export default function Layout() {
  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}
