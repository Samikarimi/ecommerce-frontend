import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
import "../styles/Navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="leftside">
        <IoFastFoodOutline className='logo' />
      </div>
      <div className="rightside">
         <Link to={"/"}>Home</Link>
         <Link to={"/menu"}>Menu</Link>
         <Link to={"/about"}>About Us</Link>
         <Link to={"/contact"}>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
