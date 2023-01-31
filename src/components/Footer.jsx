import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black font-Gilroy text-sm'>
    <div className=' flex px-28 pt-[4.5rem] pb-12 text-white items-start gap-36 '>
    <img src="./images/ticket-logo.svg" alt="" className='w-32'  />
      <div className='flex flex-col gap-3'>
        <div>Help</div>
        <div>About</div>
        <div>Merch</div>
        <div>Create Event</div>
      </div>

      <div className='flex flex-col gap-3'>
        <div>Instagram</div>
        <div>Facebook</div>
        <div>Twitter</div>
       
      </div>

    
      </div>
      <div className=' py-4 px-28 flex justify-center bg-accent font-Gilroybold '><div >&#169; 2023 TicketPlug. All Rights Reserved.</div></div>
    </div>
  )
}

export default Footer