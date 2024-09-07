import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="socialMedia">
         <FaInstagram />
         <FaXTwitter />
         <FaTelegramPlane />
      </div>
      <p>&copy: 2021 pizzashop.com</p>
    </div>
  )
}

export default Footer
