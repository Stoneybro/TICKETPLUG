import React from 'react'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div className='w-60 rounded bg-[#F9F9F9] border-[#E4E4E4]   overflow-hidden relative shadow-sm border-x-[1px] border-b-[1px]'>
        <img src="./images/LTF.png" alt="" />
        <div className='pl-4 pt-3 pb-6 flex flex-col gap-1 justify-start '>
            <div className=' text-lg font-Gilroybold'>Enchanted Party</div>
            <div className='text-accent text-sm font-Gilroymedium'>Friday october 8pm</div>
            <div className='flex gap-2 font-Gilroymedium text-[0.9rem]'><img src="./images/location-icon.svg" alt="" />Landmark Center,Lagos.</div>
            <div className='flex  gap-2 font-Gilroybold text-[0.9rem]'><img src="./images/ticket-icon.svg" alt="" />Free</div>
            <Link to='ticket' className='flex justify-center'><button className='text-accent hover:text-white hover:bg-accent  py-[0.4rem] px-7 mt-3 text-sm rounded-3xl border-accent border-[1.5px] font-Gilroybold'>Buy Ticket</button></Link>
        </div>
        </div>
  )
}

export default Card