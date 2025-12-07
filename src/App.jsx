import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Compoents/Navber'
import Cards from './Compoents/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/Slices/counterSlice'

function App() {

  const[recipes,setRecipes]=useState([]);
  const count = useSelector((state)=> state.counter.value )
  const dispatch = useDispatch()


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
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
