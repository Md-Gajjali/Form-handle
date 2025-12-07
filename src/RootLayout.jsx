import React from 'react'
import { Outlet } from "react-router";
import Navber from './Compoents/Navber';
import Footer from './Compoents/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
