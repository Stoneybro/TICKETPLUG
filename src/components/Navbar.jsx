import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex text-white backdrop-blur-md items-center px-20 py-5 gap-x-10 leading-none  sticky top-0  z-50'>
      <Link to='/' className='mr-auto flex items-center gap-2 '>
      <img src="./images/ticket-logo.svg" alt=""  />
      </Link>
        
        <Link to='/help' className='hover:text-accent transition ease-in-out duration-300'>Help</Link>
        <Link to='/about' className='hover:text-accent transition ease-in-out duration-300'>About</Link>
        <Link to='/register' className='hover:text-accent transition ease-in-out duration-300'>Signup</Link>
        <Link to='/login' className='hover:text-accent transition ease-in-out duration-300'>Create Events</Link>   
        <button className='border border-[#FE4848] text-[#FE4848] pt-[0.6rem] pb-2 px-8 rounded-3xl flex  ml-[13px] hover:bg-accent hover:text-white transition-all duration-300 ease-in-out'><Link to='/events' >Login</Link></button>
    </nav>
  )
}

export default Navbar