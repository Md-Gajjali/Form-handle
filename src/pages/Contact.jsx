import React, { useEffect, useState } from 'react'
import Cards from '../Compoents/Cards'

const Contact = () => {
  const[product,setProduct]=useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=> setProduct(data.products));;
  },[])

  return (
    <div className='container m-auto flex flex-wrap justify-between gap-2 py-10 pb-20'>
      {
        product.map((items)=>{
          return(
            <Cards
            
            title={items.title}
            img={items.thumbnail}
            rating={items.rating}
            price={items.price}
            
            />

          )
        },[])
      }
    </div>
  )
}

export default Contact
