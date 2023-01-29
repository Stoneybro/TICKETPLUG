import React from 'react'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div className='w-60 rounded bg-[#F9F9F9]   overflow-hidden relative shadow-sm'>
        <img src="./images/LTF.png" alt="" />
        <div className='pl-4 pt-10 pb-6 flex flex-col gap-2 justify-start '>
            <div className=' text-[20px] font-bold'>Lagos Tech Fest</div>
            <div className='text-accent'>Friday october 8pm</div>
            <div className='flex gap-2'><img src="./images/ticket-icon.svg" alt="" />Landmark Center,Lagos.</div>
            <div className='flex  gap-2'><img src="./images/location-icon.svg" alt="" />Free</div>
            <Link to='ticket' className='flex justify-center'><button className='text-accent  border py-[10px] px-9 rounded-3xl border-accent'>Buy Ticket</button></Link>
        </div>
        </div>
  )
}

export default Card