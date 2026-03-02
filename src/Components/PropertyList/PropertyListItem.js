"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const PropertyListItem = ({property}) => {
    const router=useRouter()
  return (
    <div className='cursor-pointer' onClick={()=>router.push(`/properties/${property.id}`)}>
        <div className='relative overflow-hidden aspect-square rounded-xl'>
            <Image
                fill
                src={property.image_url|| '/images/house1.avif'}
                alt='home image'
                sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
                className='hover:scale-110 object-cover transition h-full w-full'
                
            />
            
        </div>
        <div className='mt-2'>
            <p className='font-bold text-lg'>{property.title}</p>
        </div>
        <div className='mt-2'>
            <p className='text-gray-500 text-sm'><strong>${property.price_per_night}</strong> per night</p>
        </div>
      
    </div>
  )
}

export default PropertyListItem
