import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <Link to='/'>
        <div className="logoDiv">
          <h1 className='logo text-[25px] text-greenColor'>
            <strong>Job</strong>
            Search
          </h1>
        </div>
      </Link>

      <div className="menu flex gap-8">
        <Link to='/jobs'> <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li></Link>
        <Link to='/companies'>  <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li></Link>
        <Link to='/about'><li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li></Link>
        <Link to='/Contact'> <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li></Link>
        <Link to='/blog'> <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li></Link>
        <Link to='/login'> <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li></Link>
        <Link to='/register'> <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li></Link>
      </div>
    </div >
  )
}

export default NavBar