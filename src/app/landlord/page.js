import React from 'react'
import Image from 'next/image'
import Contact from '@/Components/Contact'
import PropertyList from '@/Components/PropertyList/PropertyList'

const page = () => {
  return (
     <main className='max-w-[1500px] mx-auto px-6 pb-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <aside className='col-span-1 mb-4'>
                <div className='flex flex-col p-6 rounded-xl items-center border border-gray-300 shadow-xl'>
                    <Image
                        src={'/damisaa.jfif'}
                        alt={'no photo'}
                        width={200}
                        height={200}
                        className='rounded-full'
                    />
                    <h1 className='mt-6 text-2xl'>Landlord name</h1>
                    <Contact/>

                </div>
            </aside>

            <div className='col-span-1 md:col-span-3 pl-0 md:pl-6'>
                <div className='mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                   <PropertyList/>
                </div>
            </div>
        </div>
       
      
    </main>
  )
}

export default page
