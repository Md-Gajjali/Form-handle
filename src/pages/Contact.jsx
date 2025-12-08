import React, { useEffect, useState } from 'react'
import Cards from '../Compoents/Cards'

const Contact = () => {

  const [product, setProduct] = useState([]);
  const[email,setEmail]=useState("")
  const[emailErr, setEmailErr]= useState("")
  const[pass,setPass]=useState("")
  let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmail = (e) => {
    setEmail(e.target.value);
    
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const handleClick = (e) => {
     e.preventDefault()

    if (email == "") {
      setEmailErr("Please enter a valid email address.")
    }else if (!EmailRegex.test(email)) {
      setEmailErr("Email verification failed. Enter a correct email.")
    } else {
      console.log("good");
      
    }
  }


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => setProduct(data.products));;
  }, [])

  return (
    <>
      <div className='container m-auto flex flex-wrap justify-between gap-2 py-10 pb-20 '>
        {
          product.map((items) => {
            return (
              <Cards

                title={items.title}
                img={items.thumbnail}
                rating={items.rating}
                price={items.price}

              />

            )
          }, [])
        }
      </div>

      <form className="max-w-sm mx-auto border-[#F2F4F7] rounded-2xl w-150 h-100 px-10 py-10 mb-10 shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
          <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" onChange={handleEmail}/>
          <p className='h-10 text-red-400'>{emailErr}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
          <input type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" onChange={handlePass}  />
        </div>
        <label htmlFor="remember" className="flex items-center mb-5">
          <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"  />
          <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
        </label>
        <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleClick}>Submit</button>
      </form>


    </>
  )
}

export default Contact
