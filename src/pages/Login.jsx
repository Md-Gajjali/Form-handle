import React, { useState } from 'react'
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa";


const Login = () => {

    const[email,setEmail]=useState("")
    const[emailErr,setEmailErr]=useState("")
    const[pass, setPass]=useState("")
    const[passErr,setPassErr]=useState("")
    const[cng,setCng]=useState(false)
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    
    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }

    const handlePass= (e)=> {
        setPass(e.target.value)
    }

    const handleClick = (e)=> {
        e.preventDefault()
        if (email == "" ) {
            setEmailErr("Please enter a valid email address.")
        } else if (!regexEmail.test(email)) {
            setEmailErr("Email verification failed. Enter a correct email.")
        }else if (pass == "") {
            setPassErr("Please enter a valid  password.")
        }else if (!regexPass.test(pass)) {
            setPassErr(" Password verification failed. Enter a correct Password.")
        }else{       
            setPassErr("good")   
        }
    }

    return (
        <div>
            <form className="max-w-sm mx-auto border-[#F2F4F7] rounded-2xl  px-10 py-10 mt-30 mb-20 shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                    <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" onChange={handleEmail} />
                    <p className='h-10 text-red-500 mt-2.5 mb-0'>{emailErr}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                    <>
                    {
                       cng ?<><input type="text"  
                                id="" 
                                className=" relative bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                                placeholder="••••••••" onChange={handlePass}   />
                              <FaEye onClick={()=> setCng(!cng)} className=' absolute top-[345px] left-[850px]' /></>
                        
                        :  <>
                             
                                <input type="password"  id="password"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                        placeholder="••••••••" onChange={handlePass}   />   <LuEyeClosed  onClick={()=> setCng(!cng)} className=' absolute top-[345px] left-[850px]' />
                        </>
                      
                    }

                    </>
                    <p className='h-10 text-red-500 mt-2.5 mb-0'>{passErr}</p>
                </div>
                <label htmlFor="remember" className="flex items-center mb-5">
                    <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>
                    <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
                </label>
                <button type="submit"  className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Login
