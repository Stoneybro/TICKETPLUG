import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className="bg-[url('../../images/Heropage.png')] bg-cover z-10 ">
        <Navbar />
        <div className='flex flex-col items-center pt-[calc(193px-32px)]  '>
        <img src="./images/Header-main.svg" alt="" className='max-w-[52%]' />
        <div className='text-center relative mt-32 inline w-[49%] z-10 mb-40'>
            <input type="text" placeholder='Search for an event or a party' className='w-full px-8 py-4 outline-none rounded-[91px]  ' />
            <button className='absolute text-white bg-accent rounded-[41px] pb-[0.5rem] pt-[0.6rem] px-6 right-2 top-[0.45rem] flex font-bold gap-2 '><img src="./images/search-icon.svg" className='w-3' alt="" />Search</button>
        </div>
        </div>
    </div>
  )
}

export default Header