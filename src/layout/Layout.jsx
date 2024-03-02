import { Navbar } from './navbar/Navbar';
import React from 'react'
import './Layout.css';
import RoutesComponent from '../layout/Routes';

export default function Layout() {
  return (
    <>
    <Navbar />
    <RoutesComponent />
    </>
  )
}
