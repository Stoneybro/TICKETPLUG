import React from 'react'

import {Link} from 'react-router-dom'
const Navbar = ({bg}) => {
  const [navScroll,setNavScroll]=React.useState('')
  window.onscroll=()=>{
    setNavScroll(window.scrollY)
  }
  
  return (
    <nav className={`w-full fixed ${bg?bg:navScroll>0?'bg-black':'backdrop-blur-md'}  z-50 `}>
      <div className='flex bg-inherit text-white items-center max-w-[1040.64px] mx-auto py-5 gap-x-8 leading-none   top-0 '>

      
      <Link to='/' className='mr-auto flex items-center gap-2 '>
      <img src="./images/ticket-logo.svg" alt="" className='w-32'  />
      </Link>
        
        <Link to='/help' className='hover:text-accent transition ease-in-out duration-300 '>Help</Link>
        <Link to='/about' className='hover:text-accent transition ease-in-out duration-300'>About</Link>
        <Link to='/register' className='hover:text-accent transition ease-in-out duration-300'>Mesh</Link>
        <Link to='/login' className='hover:text-accent transition ease-in-out duration-300 '>Create Event</Link>   
        <Link to='/events' ><button className='border border-[#FE4848] text-[#FE4848] py-[0.6rem] px-[1.85rem] rounded-3xl font-Gilroybold text-[0.875rem]  ml-[13px] hover:bg-accent hover:text-white transition-all duration-300 ease-in-out'>Login</button></Link>
        </div>
    </nav>
  )
}

export default Navbar