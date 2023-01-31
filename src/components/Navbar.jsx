import React from 'react'

import {Link} from 'react-router-dom'
const Navbar = () => {
  const [navScroll,setNavScroll]=React.useState('')
  window.onscroll=()=>{
    setNavScroll(window.scrollY)
  }
  
  return (
    <nav className={`flex text-white  ${navScroll>0?'bg-black':'backdrop-blur-md'} items-center px-[10%] py-5 gap-x-8 leading-none fixed w-full top-0  z-50`}>
      <Link to='/' className='mr-auto flex items-center gap-2 '>
      <img src="./images/ticket-logo.svg" alt="" className='w-32'  />
      </Link>
        
        <Link to='/help' className='hover:text-accent transition ease-in-out duration-300 '>Help</Link>
        <Link to='/about' className='hover:text-accent transition ease-in-out duration-300'>About</Link>
        <Link to='/register' className='hover:text-accent transition ease-in-out duration-300'>Mesh</Link>
        <Link to='/login' className='hover:text-accent transition ease-in-out duration-300 '>Create Event</Link>   
        <button className='border border-[#FE4848] text-[#FE4848] py-[0.6rem] px-[1.85rem] rounded-3xl font-Gilroybold text-[0.875rem]  ml-[13px] hover:bg-accent hover:text-white transition-all duration-300 ease-in-out'><Link to='/events' >Login</Link></button>
    </nav>
  )
}

export default Navbar