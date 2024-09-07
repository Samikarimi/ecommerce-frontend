import React from 'react'
import "../styles/Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Yummy Food</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere explicabo ad incidunt dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam perferendis rem incidunt. Laborum maxime consequatlorem</p>
            <Link to={"/menu"}>
            <button>View Menu</button>
            </Link>
        </div>
      
    </div>
  )
}

export default Header
