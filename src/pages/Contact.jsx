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
    <div>
      {
        product.map((items)=>{
          return(
            <Cards
            
            title={items.title}
            img={items.}
            
            />

          )
        },[])
      }
    </div>
  )
}

export default Contact
