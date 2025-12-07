import React, { useEffect, useState } from 'react'
import Cards from '../Compoents/Cards'

const Service = () => {

  const[recipes,setRecipes]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes/meal-type/snack')
    .then(res => res.json())
    .then((data)=> setRecipes(data.recipes));
  },[])

  return (
    <div className='container m-auto flex flex-wrap justify-between gap-2 py-10 pb-20 '>
      {
        recipes.map((items)=>{
          return(
            <Cards 
            title={items.name}
            price={items.userId}
            img={items.image}
            rating={items.rating}
            />
          )
        })
      }
    </div>
  )
}

export default Service
