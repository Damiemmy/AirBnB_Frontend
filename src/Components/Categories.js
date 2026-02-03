import React from 'react'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className='flex pt-3 pb-6 space-x-12 items-center cursor-pointer'>
        <div className='flex flex-col space-y-2 pb-4 items-center border-b-2 border-white opacity-60 hover:border-gray-300  hover:opacity-100'>
            <Image
                src={'/homes.png'}
                alt='no gkimg'
                width={20}
                height={20}
            />
            <span className='text-xs'>Gk homes</span>
        </div>
        <div className='flex flex-col space-y-2 pb-4 items-center border-b-2 border-white opacity-60 hover:border-gray-300  hover:opacity-100'>
            <Image
                src={'/homes.png'}
                alt='no gkimg'
                width={20}
                height={20}
            />
            <span className='text-xs'>Abuja homes</span>
        </div>
        <div className='flex flex-col space-y-2 pb-4 items-center border-b-2 border-white opacity-60 hover:border-gray-300  hover:opacity-100'>
            <Image
                src={'/homes.png'}
                alt='no gkimg'
                width={20}
                height={20}
            />
            <span className='text-xs'>Gk Homes</span>
        </div>
       
    </div>
  )
}

export default Categories
