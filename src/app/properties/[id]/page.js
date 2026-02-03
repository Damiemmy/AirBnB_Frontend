import React from 'react'
import Image from 'next/image'
import ReservationSidebar from '@/Components/PropertyList/ReservationSidebar'

const page = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
      <div className='relative w-full h-[64vh] overflow-hidden rounded-xl'>
        <Image
            fill
            src={'/images/house1.avif'}
            alt='No ProperDetail Image'
            className='w-full h-full object-cover'
        />

      </div>
      <div className='pt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
        <div className='py-6 pr-6 col-span-3'>
            <h1 className='mb-4 text-4xl'>Property Name</h1>
            <span className='mb-6 block text-gray-600 text-lg'> 4 guest - 2 bedroom - 1 bathroom</span>
            <hr className='text-gray-300'/>
            <div className='py-6 flex items-center space-x-4'>
                <Image
                    src={'/damisaa.jfif'}
                    width={50}
                    height={50}
                    className='rounded-full'
                    alt='no image'
                />
                <p className='opacity-80'><strong>Felix Chijoke</strong> is your host</p>

                <hr/>
            </div>
            <div className='mt-6 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci, labore expedita deleniti illum voluptate rerum debitis a vero, perferendis necessitatibus rem consectetur atque magni neque! Voluptatum possimus, veniam, dolores quos voluptatem quisquam odit et nesciunt at dignissimos velit repudiandae? Sit, dolorum veritatis eius voluptas vero ullam iure corrupti nulla!
            </div>
        </div>
        <ReservationSidebar/>
        
      </div>
    </main>
  )
}

export default page
