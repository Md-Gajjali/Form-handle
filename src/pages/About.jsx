import React, { useEffect, useState } from 'react'
import Cards from '../Compoents/Cards'

const About = () => {

  const[recipes,setRecipes]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes?limit=10&skip=10&select=name,image')
    .then(res => res.json())
    .then((data)=> setRecipes(data.recipes));
  },[])

  return (
    <div className='container m-auto flex flex-wrap justify-between py-10 pb-20'>
      {
        recipes.map((items)=>{
          return(
            <Cards
              title={items.name}
              img={items.image} 
              rating={items.id}        
            />
          )
        })
      }
    </div>
  )
}

export default About
