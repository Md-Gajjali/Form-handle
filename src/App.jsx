import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Compoents/Navber'
import Cards from './Compoents/Cards'

function App() {

  const[recipes,setRecipes]=useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((data)=> setRecipes(data.recipes));
  },[])

  return (
    <>
    <div className='container m-auto flex justify-between flex-wrap gap-2 mb-10 mt-10'>
      {
        recipes.map((items)=>{
          return(

            <Cards 
            title={items.name}
            img={items.image}
            rating={items.rating}
            price={items.userId}
            
            />
          )
        })
      }
    </div>
    </>
  )
}

export default App
