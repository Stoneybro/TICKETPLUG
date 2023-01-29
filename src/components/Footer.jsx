import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary'>
    <div className=' flex px-28 py-20 text-white justify-between border-b-2 border-[#6B6E70]'>

      <div className='flex flex-col gap-6'>
        <div className='font-bold '>About us</div>
        <div>About</div>
        <div>Merchandise</div>
        <div>Our Outlets</div>
        <div>Blog</div>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='font-bold '>Top Categories</div>
        <div>Music events</div>
        <div>Comedy events</div>
        <div>Fashion events</div>
        <div>Lifestyle events</div>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='font-bold '>Connect</div>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Instagram</div>

      </div>

      <div className=' flex flex-col gap-6'>
        <div className='font-bold'>Mobile app</div>
        <img src="./images/Googleplay.png" alt="" />
        <img src="./images/Applestore.png" alt="" />

      </div>
      </div>
      <div className='text-white py-8 px-28 flex justify-between '><div > 2022 &#169; All Rights Reserved, TicketPlug</div>
Refund and Cancellation Policy |
Terms and Conditions</div>
    </div>
  )
}

export default Footer