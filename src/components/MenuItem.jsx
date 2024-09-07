import React from 'react'
import "../styles/MenuItem.css"

const MenuItem = ({img, name,price}) => {
  return (
    <div className='menuItem'>
      <div>
         <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <p> <span>$</span> {price} </p>
    </div>
  )
}

export default MenuItem
