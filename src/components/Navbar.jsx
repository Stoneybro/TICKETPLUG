import React from 'react'

import {Link} from 'react-router-dom'
import { useAuth } from '../Context/Auth'
import { useState,useEffect } from 'react'


const Navbar = ({bg}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  const {auth}=useAuth()
  return (
    <nav className={`w-full fixed ${bg?bg:scrollPosition>0?'bg-black':'backdrop-blur-md'}  z-50 font-Gilroy `}>
      <div className='flex bg-inherit text-white items-center max-w-[1040.64px] mx-auto py-5 gap-x-8 leading-none   top-0 '>

      
      <Link to='/' className='mr-auto flex items-center gap-2 '>
      <img src="./images/ticket-logo.svg" alt="" className='w-32'  />
      </Link>
        
        <Link to='/help' className='hover:text-accent transition ease-in-out duration-300 '>Help</Link>
        <Link to='/about' className='hover:text-accent transition ease-in-out duration-300'>About</Link>
        <Link to='/merch' className='hover:text-accent transition ease-in-out duration-300'>Mesh</Link>
        <Link to='/events' className='hover:text-accent transition ease-in-out duration-300 '>Create Event</Link> 
        
       { auth?<div className='bg-accent text-white rounded-[50%] py-2 px-3'>{auth?.email.split('')[0]}</div>:<Link to='/login' ><button className='border border-[#FE4848] text-[#FE4848] py-[0.6rem] px-[1.85rem] rounded-3xl font-Gilroybold text-[0.875rem]  ml-[13px] hover:bg-accent hover:text-white transition-all duration-300 ease-in-out'>Login</button></Link>}
        </div>
    </nav>
  )
}

export default Navbar