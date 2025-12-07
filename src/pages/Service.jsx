import React, { useEffect, useState } from 'react'
import Cards from '../Compoents/Cards'

const Service = () => {

  const[recipes,setRecipes]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes/meal-type/snack')
    .then(res => res.json())
    .then(console.log);
  },[])

  return (
    <div>
      <Cards />
    </div>
  )
}

export default Service
