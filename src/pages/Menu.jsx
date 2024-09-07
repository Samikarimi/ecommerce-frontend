import React, { useState, useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import "../styles/Menu.css"


const Menu = () => {
    let [foods,setFoods]=useState([])

    useEffect(()=>{
      getFoods()
    },[])

    let getFoods=async()=>{
      let res=await fetch(`http://127.0.0.1:8000/api/foods/`)
      let data=await res.json()
      setFoods(data)
      console.log(data)
    }

  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className="menuList">
       {foods.map((food)=>(
          <MenuItem key={food.id} name={food.name} img={food.picture} price={food.price} />
    ))}
      </div>
    </div>
  )
}

export default Menu
