import React from 'react'
import Image from 'next/image';

const Categories = ({setCategory,dataCategory}) => {
  return (
    <div className=' cursor-pointer pt-3 pb-6 flex space-x-12 item-center'>
        <div className='flex pt-3 pb-6 space-x-12 items-center cursor-pointer'>
                <div className='flex flex-col space-y-2 pb-4 items-center border-b-2 border-white opacity-60 hover:border-gray-300  hover:opacity-100'>
                    <Image
                        src={'/images/icon4.webp'}
                        alt='no gkimg'
                        width={30}
                        height={30}
                    />
                    <span className='text-xs'>Gk homes</span>
                </div>
                <div className='flex flex-col space-y-2 pb-4 items-center border-b-2 border-white opacity-60 hover:border-gray-300  hover:opacity-100'>
                    <Image
                        src={'/images/icon1.png'}
                        alt='no gkimg'
                        width={30}
                        height={30}
                    />
                    <span className='text-xs'>Abuja homes</span>
                </div>
                <div className='flex flex-col space-y-2 pb-4 items-center border-b-2 border-white opacity-60 hover:border-gray-300  hover:opacity-100'>
                    <Image
                        src={'/images/icon5.png'}
                        alt='no gkimg'
                        width={30}
                        height={30}
                    />
                    <span className='text-xs'>Lagos Homes</span>
                </div>
               
            </div>
      
    </div>
  )
}

export default Categories;
