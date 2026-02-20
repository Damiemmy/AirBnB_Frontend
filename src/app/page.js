import React from 'react'
import Categories from '@/Components/Categories'
import PropertyList from '@/Components/PropertyList/PropertyList'

const page = () => {
  return (
    <div className='max-w-[1500px] mx-auto px-6'>
      <Categories/>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        <PropertyList/>
      </div>
      
    </div>
  )
}

export default page
