import React from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const successful = () => {
  return (
    <div className='flex flex-col w-96 gap-8 mt-24 h-screen '>
        <div className='text-4xl text-center font-BebasNeuebold'>SIGNUP SUCCESSFUL</div>
        <img src="./images/Vector.svg" alt="" className=' w-16 self-center' />
        <div className=' font-Gilroysemibold text-center'>Please check your email to verify your account</div>
       <Link to='/' className='w-full'><button type="submit" className='bg-black text-white rounded py-2 w-full'>Home</button></Link> 
       <Navigate to='/login' />
     </div>)
}

export default successful