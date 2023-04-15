import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/logo1.png"
import Write from "../pages/Write"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
              <h5>ART</h5>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h5>SCIENCE</h5>
          </Link>
          <Link className='link' to='/?cat=tech'>
            <h5>TECHNOLOGY</h5>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h5>FOOD</h5>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h5>CINEMA</h5>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h5>DESIGN</h5>
          </Link>
          <span>Piyush</span>
          <span>LogOut</span>
          <span className='write'>
            <Link className='link' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar