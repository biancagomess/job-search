import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../FooterDiv/Footer'
import NavBar from '../NavBar/NavBar'
import Value from '../ValueDiv/Value'

const Layout = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Outlet />
      <Value />
      <Footer />
    </div>
  )
}

export default Layout