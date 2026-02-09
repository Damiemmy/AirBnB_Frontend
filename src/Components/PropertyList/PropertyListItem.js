import React from 'react'
import Image from 'next/image'

const PropertyListItem = ({image}) => {
  return (
    <div className='cursor-pointer'>
        <div className='relative overflow-hidden aspect-square rounded-xl'>
            <Image
                fill
                src={image || '/images/house1.avif'}
                alt='home image'
                sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
                className='hover:scale-110 object-cover transition h-full w-full'
                
            />
            
        </div>
        <div className='mt-2'>
            <p className='font-bold text-lg'>PropertyListItem</p>
        </div>
        <div className='mt-2'>
            <p className='text-gray-500 text-sm'><strong>$200</strong> per night</p>
        </div>
      
    </div>
  )
}

export default PropertyListItem
