import React from 'react'

const ReservationSidebar = () => {
  return (
    <aside className='p-6 rounded-xl col-span-2 border mt-6 border-gray-300 shadow-xl'>
        <h1 className='mb-5 text-2xl'>$200 per night</h1>
        <div className='mb-6 border border-gray-400 p-3 rounded-xl'>
            <label className='block pb-2 font-bold text-xs opacity-80'>Guests</label>
            <select className='w-full -ml-1 text-xm'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>

            </select>
        </div>
        <div className='w-full py-6 mb-6 cursor-pointer text-center text-white bg-[#ff385c] hover:bg-[#d50027] rounded-xl'>Book
        </div>
        <div className='mb-4 flex justify-between opacity-90 align-center'>
            <p>$200 * 4 nights</p>
            <p>$800</p>

        </div>
        <div className='mb-4 flex justify-between opacity-90 align-center'>
            <p>DjangoAirbnb Fee</p>
            <p>$40</p>

        </div>
        <hr className='text-gray-300'/>
        <div className='mt-4 flex justify-between opacity-90 align-center font-bold'>
            <p>Total</p>
            <p>$840</p>

        </div>
    </aside>
  )
}

export default ReservationSidebar
