import React from 'react'
import Card from './Card'

const Cardcontainer = () => {
  return (
    <div className='px-[134px] py-[120px]'>
        <div>
            <h1 className='font-bold mb-7 text-2xl'>Upcoming Events</h1>
            <div className='flex justify-between'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Cardcontainer